const express = require('express');
const router = express.Router();

// load controllers
const ownersControllers = require('../controllers/ownersController');

router.get('/', ownersControllers.owners_index);

// formos parodymo route
router.get('/new', ownersControllers.owners_create);

// formos apdorojimo route
router.post('/new', ownersControllers.owners_create_post);

// single owner route
router.get('/single/:id', ownersControllers.owners_single);

// delete form
router.post('/delete/:id', ownersControllers.owners_delete);

// single edit owner route
router.get('/edit/:id', ownersControllers.owners_edit);

// single edit owner post
router.post('/edit/:id', ownersControllers.owners_edit_post);

router.get('/search', ownersControllers.owners_search);

module.exports = router;
