const express = require('express');
const router = express.Router();
const { getAllLists, getDetailList } = require('../controllers/lists');
//let List = require("../models/ListModel");

/* 
router.route('/').get((req, res) => {   //vår route, endpoint som tar emot get på /user. 
  List.find()    //kommer hämta alla users från vår databas, find returnerar ett promise 
    .then(lists => res.json(lists))   //returnerar users 
    .catch(err => res.status(400).json('Error: ' + err));
}); */

router.get("/", getAllLists);
router.get("/:id", getDetailList);

module.exports = router;

