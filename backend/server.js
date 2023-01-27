const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors');

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

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
  )
);

/* app.use(
  cors({
    origin: ['http://localhost:3000',],
    credentials: true,
  }),
); */

//first lets try with this
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'))
app.use('/product', require('./routes/product'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})