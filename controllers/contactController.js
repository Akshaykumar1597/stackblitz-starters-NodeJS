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
  res.status(201).json({ message: 'contact created' });
};

// @description get one contact
// @route GET /api/contacts
// @access public at present and later as privste

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @description update contact
// @route PUT /api/contacts
// @access public at present and later as privste

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// @description delete contact
// @route Delete /api/contacts
// @access public at present and later as privste

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
