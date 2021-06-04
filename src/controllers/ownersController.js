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

module.exports = {
  owners_index,
  owners_single,
};
