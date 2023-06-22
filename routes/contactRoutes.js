const express = require('express');
const router = express.Router();

// to get all the contacts
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'get all contacts' });
});

// add contact
router.route('/').post((req, res) => {
  res.status(200).json({ message: 'add contact' });
});

// get single contact
router.route('/:id').get((req, res) => {
  res.status(200).json({ message: `get the contact of ${req.params.id}` });
});

// update contact
router.route('/:id').put((req, res) => {
  res.status(200).json({ message: `Update the contact of ${req.params.id}` });
});

// delete contact
router.route('/').delete((req, res) => {
  res.status(200).json({ message: `delete the contact of ${req.params.id}` });
});

// router.route('/').get((req, res) => {
// res.status(200).json({ message: 'get all contacts' });
// });

module.exports = router;
