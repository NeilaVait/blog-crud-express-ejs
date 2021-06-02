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
  const newPost = new Post(req.body);

  newPost
    .save()
    .then((result) => res.json({ msg: 'success', redirect: '/blog' }))
    .catch((err) => res.status(400).json(err.message));
});

router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((result) => res.json({ msg: 'success', redirect: '/blog' }))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
