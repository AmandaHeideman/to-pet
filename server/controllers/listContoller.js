const List = require("../models/ListModel");

const getAllLists = async (req, res) => {
  try {
    const allLists = await List.find();
    res.status(200).json(allLists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getDetailList = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await List.findById(id);
    res.status(200).json(list);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateList = async (req, res) => {
  const newListItem = req.body.listItem;
  List.findOne({ _id: req.params.id }, (err, list) => {
    if (err) {
      return console.log(err);
    } else {
      list.listItem.push(newListItem);
      list.save(error => {
        if (error) return console.log(error)
        //saved
        return res.status(200).json({
          title: 'success'
        });
      });
    }
  })
}


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
  getDetailList,
  updateList
};