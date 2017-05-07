import Post from '../models/post_model';

const cleanPosts = (posts) => {
  return posts.map((post) => {
    return { id: post._id, title: post.title, tags: post.tags, cover_url: post.cover_url };
  });
};

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags;
  post.content = req.body.content;
  post.cover_url = req.body.cover_url;
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
  .then((post) => {
    res.json({ title: post.title, tags: post.tags, content: post.content, cover_url: req.body.cover_url });
  })
  .catch((error) => {
    res.json({ error });
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
  res.send('update a post here');
};
