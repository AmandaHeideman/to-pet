const express = require('express');
const router = express.Router();
const { getAllLists } = require('../controllers/lists');

//message kommer vara array med objekt, med id och titel på listorna, hämtas från databas
const message = getAllLists();
console.log(message);

router.get('/', (req, res) => {
  res.json(message);
});

module.exports = router;

