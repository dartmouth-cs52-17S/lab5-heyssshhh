import { Router } from 'express';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';
import * as Posts from './controllers/post_controller';


const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

// /your routes will go here
router.post('/signin', requireSignin, UserController.signin);

router.post('/signup', UserController.signup);

router.get('/profile', requireAuth, UserController.getUser);

router.route('/posts')
  .post(requireAuth, (req, res) => { Posts.createPost(req, res); })
  .get((req, res) => { Posts.getPosts(req, res); });

router.route('/posts/:id')
  .get((req, res) => { Posts.getPost(req, res); })
  .put(requireAuth, (req, res) => { Posts.updatePost(req, res); })
  .delete(requireAuth, (req, res) => { Posts.deletePost(req, res); });

export default router;
