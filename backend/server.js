const express = require('express')
const app = express()

const port = 5000

app.get('/', require('./routes/index'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})