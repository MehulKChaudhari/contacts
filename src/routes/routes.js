const express = require('express')
const { getContacts } = require('../controllers/getContacts')
const { addContacts } = require('../controllers/addContact')
const router = express.Router()

router.route('/contacts').get(getContacts)
router.route('/add-contact').post(addContacts)


module.exports = router