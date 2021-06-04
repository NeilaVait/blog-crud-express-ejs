const express = require('express');
const router = express.Router();

const blogsControllers = require('../controllers/blogsControllers');

// blog page
router.get('/', blogsControllers.blogs_index);

// create blog page /blog/create
router.get('/create', blogsControllers.blog_create);

// singlePage
router.get('/single/:id', blogsControllers.blog_single);

//singlePageEdit
router.get('/single/edit/:id', blogsControllers.blog_single_edit);

module.exports = router;
