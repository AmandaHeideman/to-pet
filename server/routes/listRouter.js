const express = require("express");
const router = express.Router();
const {
  addNewList,
  getAllLists,
  getDetailList,
  addListItem,
  deleteListItem,
  deleteList,
  editList,
} = require("../controllers/listContoller");

router.post("/delete", deleteList);
router.get("/:id", getDetailList);
router.post("/:id", addListItem);
router.post("/:id/delete", deleteListItem);
router.post("/:id/edit", editList);
router.post("/", addNewList);
router.get("/", getAllLists);

module.exports = router;
