const express = require('express')
const app = express()

const port = 5000

app.use('/', require('./routes/index'))
app.use('/product', require('./routes/product'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})