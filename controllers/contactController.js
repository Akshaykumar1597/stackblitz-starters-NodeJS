// @description Get all contacts
// @route GET /api/contacts
// @access public at present and later as privste

const getContacts = (req, res) => {
  res.status(200).json({ message: 'get all contacts' });
};

// @description create contact
// @route POST /api/contacts
// @access public at present and later as privste

const createContact = (req, res) => {
  res.status(200).json({ message: 'contact created' });
};

module.exports = { getContacts };
