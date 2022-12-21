const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
r
app.use('/', require('./routes/index'))
app.use('/product', require('./routes/product'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})