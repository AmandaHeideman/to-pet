const express = require('express');
const router = express.Router();
const { getAllLists, getDetailList, addListItem, editList } = require('../controllers/listContoller');
const mongoose = require('mongoose')
const List = require('../models/ListModel')


router.get("/", getAllLists);
router.get("/:id", getDetailList);
router.post("/:id", addListItem);
router.post("/:id/edit", editList);


//router.post("/", addList);

router.route("/").post((req, res) => {
  const newList = new List({
    listTitle: req.body.title,
    listItem: req.body.listItem

  })
  console.log(newList);
  newList.save(err => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'Email already in use'
      })
    }
    return res.status(200).json({
      title: 'list successfully added'
    })
  })
});


module.exports = router;

