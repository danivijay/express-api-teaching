const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('get req')
  res.send({ name: 'Dani'})
})

app.listen(process.env.port || '4000', () => {
  console.log('listening in 4000')
})
