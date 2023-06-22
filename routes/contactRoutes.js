const express = require('express');
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
} = require('../controllers/contactController');
const router = express.Router();

// deStructuring of routers where with similar end points

// to get all the contacts , create contact
router.route('/').get(getContacts).post(createContact);

// get single contact, update contact, delete contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
