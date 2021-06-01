const express = require('express');
const router = express.Router();

const blogDb = require('../data/blogDb');

// home page
router.get('/', function (req, res) {
  // paimti index.ejs faila is views direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

// about page
router.get('/about', function (req, res) {
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});

// blog page
router.get('/blog', function (req, res) {
  res.render('blog', {
    title: 'Our blog',
    page: 'blog',
    blogDb,
  });
});

// contact page
router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact',
  });
});

// create blog page /blog/create
// contact page
router.get('/blog/create', function (req, res) {
  res.render('createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
});

module.exports = router;
