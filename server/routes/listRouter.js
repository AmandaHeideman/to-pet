const express = require('express');
const router = express.Router();
const { getAllLists, getDetailList, updateList } = require('../controllers/listContoller');
const mongoose = require('mongoose')
const List = require('../models/ListModel')


router.get("/", getAllLists);
router.get("/:id", getDetailList);
router.post("/:id", updateList);

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

/* router.route("/:id").post((req, res) => {
  const id = req.params._id;
  const { listItem } = req.body;
  console.log("update item")
  try {
    List.findByIdAndUpdate(
      id,
      {
        $push: { listItem: listItem }
      }
    )
      .catch((err) => res.status(500).json({ msg: err.message }));
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}) */


module.exports = router;

