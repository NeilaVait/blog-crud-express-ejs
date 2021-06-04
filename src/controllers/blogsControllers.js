const Post = require('../models/post');

const blogs_index = (req, res) => {
  Post.find()
    .then((posts) => {
      res.render('blog/blog', {
        title: 'Our blog',
        page: 'blog',
        posts,
      });
    })
    .catch((err) => console.error(err.message));
};

const blog_create = (req, res) => {
  res.render('blog/createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
};

const blog_single = (req, res) => {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((post) => {
      res.render('blog/singlePage', {
        title: post.title,
        page: 'single',
        post,
      });
    })
    // redirect if not found
    .catch((err) => res.redirect('/blog'));
};

const blog_single_edit = (req, res) => {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((post) => {
      res.render('blog/singlePageEdit', {
        title: post.title,
        page: 'single_edit',
        post,
      });
    })
    .catch((err) => console.error(err));
};

module.exports = {
  blogs_index,
  blog_create,
  blog_single,
  blog_single_edit,
};
