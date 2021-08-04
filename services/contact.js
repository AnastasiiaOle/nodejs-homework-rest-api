
const { model } = require("mongoose");

const { contactSchema } = require('./schemas');

const Contact = model("contacts", contactSchema);

module.exports = Contact;