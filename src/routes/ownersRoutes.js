const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  // get all owners from db
  // pass owners to view
  // generate list items with owners name and email

  Owner.find()
    .then((owners) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners,
      });
    })
    .catch((err) => console.error(err.message));
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
  // sukurti tris naujus ownerius
  const o1 = { name: 'jane', email: 'jane@email.com' };
  const newOwner = new Owner({
    name: o1.name,
    email: o1.email,
  });
  newOwner
    .save()
    .then((result) => {
      res.render('owners/new', {
        title: 'Add owner',
        page: 'owners_new',
        result,
      });
    })
    .catch((err) => res.send('oops did not save', err));
});

module.exports = router;
