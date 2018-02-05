const express = require('express')
const Ninja = require('../models/ninja')

const router = express.Router();

router.get('/ninjas', (req, res, next) => {
  
  if(!req.query.lng || !req.query.lat) {
    console.log('1')
    Ninja.find({})
      .then(ninjas => res.send(ninjas))
      .catch(next)
  } else {
    console.log('2')
    Ninja.aggregate().near({
      near: { 
        type: "Point", coordinates: [parseFloat(req.query.lng) , parseFloat(req.query.lat)] 
      },
      distanceField: "dist.calculated",
      maxDistance: 100000,
      spherical: true
      }).then(function(ninjas){
          res.send(ninjas);
      }).catch(next)
  } 

})

router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body).then(ninja => {
    res.send(ninja)
  }).catch(next)
})

router.patch('/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndUpdate(_id = req.params.id, req.body, {new: true})
    .then(ninja => res.send(ninja))
    .catch(next)
})

router.delete('/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndRemove(_id = req.params.id)
    .then(ninja => res.send(ninja))
    .catch(next)
})

module.exports = router
