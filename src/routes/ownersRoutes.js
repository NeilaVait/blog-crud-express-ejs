const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //            koks kelias
  res.render('owners/index', {
    title: 'Owners',
    page: 'owners',
  });
});

router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

module.exports = router;
