// owners_index owners_single ...

const Owner = require('../models/owner');

const owners_index = (req, res) => {
  const feedback = req.query;

  // get all owners from db
  Owner.find()
    .sort({ createdAt: -1 })
    .then((owners) => {
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners,
        feedback,
      });
    })
    .catch((err) => console.error(err));
};

const owners_single = (req, res) => {
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
};

const owners_create = (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
};

const owners_create_post = (req, res) => {
  console.log('req.body', req.body);

  const newOwner = new Owner(req.body);
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=created&name=' + result.name);
    })
    .catch((err) => res.send('oops did not save', err));
};

const owners_delete = (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted&name=' + result.name))
    .catch((err) => res.send(`delete failed ${err}`));
};

const owners_edit = (req, res) => {
  const ownerId = req.params.id;

  Owner.findById(ownerId)
    .then((owner) => {
      res.render('owners/edit', {
        title: 'Edit',
        page: 'single_owner_edit',
        owner,
      });
    })
    // redirect if not found
    .catch((err) => console.error(err));
};

const owners_edit_post = (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedOwner) => res.redirect('/owners?msg=updated&name=' + updatedOwner.name))
    .catch((err) => res.status(400).json(err.message));
};

module.exports = {
  owners_index,
  owners_single,
  owners_create_post,
  owners_delete,
  owners_edit,
  owners_edit_post,
  owners_create,
};
