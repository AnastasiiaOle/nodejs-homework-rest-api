const contacts = require('../model/contacts.json')

const updateContact = async (req, res) => {
  const { contactId } = req.params
  // const { name, email, phone } = req.body
  const index = contacts.findIndex(({ id }) => id.toString() === contactId.toString())
  if (index === -1) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found'
    })
    return
  }
  contacts[index] = { id: contactId, ...req.body }
  await res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts[index]
    }
  })

}

module.exports = updateContact
