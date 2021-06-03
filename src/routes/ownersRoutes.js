const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  // was there a delete
  const deleteMsg = req.query.delete;

  // get all owners from db
  Owner.find()
    .sort({ createdAt: -1 })
    .then((owners) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners,
        msg: deleteMsg,
      });
    })
    .catch((err) => console.error(err));
});

// formos parodymo route
router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

// formos apdorojimo route
router.post('/new', (req, res) => {
  console.log('req.body', req.body);

  const newOwner = new Owner(req.body);
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=Success');
    })
    .catch((err) => res.send('oops did not save', err));
});

// single owner route
router.get('/single/:id', function (req, res) {
  const ownerId = req.params.id;

  Owner.findById(ownerId)
    .then((owner) => {
      res.render('owners/single', {
        title: 'Single',
        page: 'single_owner',
        owner,
      });
    })
    // redirect if not found
    .catch((err) => console.error(err));
});

// delete form
router.post('/delete/:id', (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?delete=true'))
    .catch((err) => res.send(`delete failed ${err}`));
});

module.exports = router;
