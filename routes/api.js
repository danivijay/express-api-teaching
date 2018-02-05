const express = require('express')
const Ninja = require('../models/ninja')

const router = express.Router();

router.get('/ninjas', (req, res, next) => {
  res.send({type: 'GET'})
})

router.post('/ninjas', (req, res, next) => {
  console.log(req.body)
  Ninja.create(req.body).then(ninja => {
    res.send(ninja)
  }).catch(next)
})

router.put('/ninjas/:id', (req, res, next) => {
  res.send({type: 'PUT'})
})

router.delete('/ninjas/:id', (req, res, next) => {
  res.send({type: 'DELETE'})
})

module.exports = router
