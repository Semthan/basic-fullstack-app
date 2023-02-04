const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path')

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

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

/* app.use(
  cors({
    origin: ['https://basic-mern-app-vbzv.onrender.com'],
    credentials: true,
  }),
); */

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'))
app.use('/api', require('./routes/product'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})