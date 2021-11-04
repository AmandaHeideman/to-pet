const Lists = require("../models/ListModel");

const getAllLists = async (req, res) => {
  try {
    const allLists = await Lists.find();
    res.status(200).json(allLists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getDetailList = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await Lists.findById(id);
    res.status(200).json(list);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateList = async (req, res) => {
  const id = req.params.id;

}

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

/* const addList = async (req, res) => {
  try{
    const allLists = await Lists.find();
    res.send("post");
  } catch (err) {
    res.status(404).json({message: err.message});
  }
}
 */
module.exports = {
  getAllLists,
  getDetailList
};