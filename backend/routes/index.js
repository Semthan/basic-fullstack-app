const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome, please visit /api to see all products')
})

module.exports = router