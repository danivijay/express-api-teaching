const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes/api')

const app = express()

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', routes)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(422).send({
    err: err._message
  })
})

app.listen(process.env.port || '4000', () => {
  console.log('listening in 4000')
})
