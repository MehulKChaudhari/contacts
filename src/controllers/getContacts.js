const Contact = require('../models/Contact')

const getContacts = async (req, res) => {
  try {
    const data = await Contact.find()
    res.status(200).json(data)
  } catch (error) {
    res.json({ error_message: error.message })
  }
}

module.exports = { getContacts }
