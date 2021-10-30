const express = require('express');
const router = express.Router();

const message = ["hello world!!"];

router.get('/', (req, res) => {
  res.json(message);
});

module.exports = router;
