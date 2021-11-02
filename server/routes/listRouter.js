const express = require('express');
const router = express.Router();
//const { getAllLists } = require('../controllers/lists');
let List = require("../models/ListModel");

//message kommer vara array med objekt, med id och titel på listorna, hämtas från databas
//const message = getAllLists();
//console.log(message);
/* 
router.get('/', (req, res) => {
  res.json(message);
});
 */




router.route('/').get((req, res) => {   //vår route, endpoint som tar emot get på /user. 
  List.find()    //kommer hämta alla users från vår databas, find returnerar ett promise 
    .then(lists => res.json(lists))   //returnerar users 
    .catch(err => res.status(400).json('Error: ' + err));
});

/* 
const getAllLists = async (req, res) => {
  try {
    const allLists = await lists.find();
    res.status(200).json(allLists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
 */
/* module.exports = {
  getAllLists
};
 */



module.exports = router;

