const express = require('express'),
  path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`New http request to '/' from ip ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;