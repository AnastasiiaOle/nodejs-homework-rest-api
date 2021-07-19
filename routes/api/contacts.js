const express = require('express')

const contacts= require('../../controllers')
const router = express.Router()

router.get('/', contacts.listContact)

router.get('/:contactId', contacts.getContactById)

router.post('/', express.json(), contacts.addContact)

router.delete('/:contactId', contacts.removeContact)

router.put('/:contactId', express.json(), contacts.updateContact)

module.exports = router
