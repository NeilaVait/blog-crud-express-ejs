const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  //            koks kelias
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
  });
});

router.get('/new', (req, res) => {
  // sukurti tris naujus ownerius
  const o1 = { name: 'bob1', email: 'bob1@email.com' };
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
