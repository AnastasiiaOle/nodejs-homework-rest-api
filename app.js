const express = require('express')
// const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()

require('./configs/passport-configs');

const { DB_HOST } = process.env;
console.log(DB_HOST)

const contactsRouter = require('./routes/api/contacts')
const auth = require('./routes/api/auth')
const users = require('./routes/api/users')

const app = express()

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

// app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/auth', auth)
app.use('/api/users', users)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})


mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    app.listen(PORT)
    console.log('Database connection successful')
  })
  .catch((error) => console.log(error))

module.exports = app
