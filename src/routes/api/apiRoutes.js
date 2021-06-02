const express = require('express');
const router = express.Router();

const blogDb = require('../../data/blogDb');
const Post = require('../../models/post');
// blog api
// /api/blog gauti visu postus json pavidalu /////////////////
// get all posts
router.get('/', (req, res) => {
  res.json(blogDb);
});

// create new post
router.post('/', (req, res) => {
  console.log(req.body);
  const { title, body, author } = req.body;
  const newPost = new Post({
    title,
    author,
    body,
  });
  newPost
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.error(err));
  // paimam req.body duomenis ir su jais sukuriam nauja posta ir ikeliam i blogDb
  // res.json({ msg: 'success', redirect: '/blog' });
});

// // gauti viena posta
// router.get('/api/blog/:id', (req, res) => {
//   res.json(blogDb);
// });

module.exports = router;
