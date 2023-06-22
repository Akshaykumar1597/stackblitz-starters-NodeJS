const express = require('express');
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require('../controllers/contactController');
const router = express.Router();

// to get all the contacts
router.route('/').get(getContacts);

// add contact
router.route('/').post(createContact);

// get single contact
router.route('/:id').get(getContact);

// update contact
router.route('/:id').put(updateContact);

// delete contact
router.route('/').delete(deleteContact);

module.exports = router;
