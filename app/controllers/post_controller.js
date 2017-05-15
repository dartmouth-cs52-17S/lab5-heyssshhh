import Post from '../models/post_model';

const cleanPosts = (posts) => {
  return posts.map((post) => {
    return { author: post.author, id: post._id, title: post.title, tags: post.tags.toString(), cover_url: post.cover_url };
  });
};

export const createPost = (req, res) => {
  const post = new Post();
  post.author = req.user._id;
  post.title = req.body.title;
  post.tags = req.body.tags.split(' ');
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;
  post.comments = [];
  post.save()
  .then((result) => {
    res.json({ message: 'Post created!' });
  })
  .catch((error) => {
    res.status(500).json({ error });
  });
};

export const getPosts = (req, res) => {
  Post.find()
  .then((posts) => {
    res.json(cleanPosts(posts));
  })
  .catch((error) => {
    res.json({ error });
  });
};

export const getPost = (req, res) => {
  Post.findById(req.params.id)
  .populate('author')
  .exec((err, post) => {
    res.json({ authorID: post.author._id, author: post.author.username, title: post.title, tags: post.tags.join(' '), content: post.content, cover_url: post.cover_url, comments: post.comments });
  });
};

export const deletePost = (req, res) => {
  Post.findById(req.params.id)
  .then((post) => {
    post.remove()
    .then(() => {
      res.json({ message: 'Post deleted' });
    })
    .catch((error) => {
      res.json({ error });
    });
  })
  .catch((error) => {
    res.json({ error });
  });
};
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id,
    { title: req.body.title,
      tags: req.body.tags.split(' '),
      content: req.body.content,
      cover_url: req.body.cover_url,
      comments: req.body.comments,
    })
    .then((result) => {
      res.json({ message: 'Post updates!' });
    })
    .catch((error) => {
      res.json({ error });
    });
};
