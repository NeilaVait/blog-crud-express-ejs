const express = require('express');
const router = express.Router();

const Post = require('../models/post');

const blogsControllers = require('../controllers/blogsControllers');

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
router.get('/blog', blogsControllers.blogs_index);

// contact page
router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact',
  });
});

// create blog page /blog/create
router.get('/blog/create', blogsControllers.blog_create);

// singlePage
router.get('/single/:id', blogsControllers.blog_single);

//singlePageEdit
router.get('/single/edit/:id', blogsControllers.blog_single_edit);

module.exports = router;
