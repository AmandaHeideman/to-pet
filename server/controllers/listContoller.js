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

const addListItem = async (req, res) => {
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

const deleteListItem = async (req, res) => {
  const index = req.body.index;
  List.findOne({ _id: req.params.id }, (err, list) => {
    if (err) {
      return console.log(err);
    } else {
      list.listItem.splice(index);
      list.save(error => {
        if (error) return console.log(error)
        return res.status(200).json({
          title: 'success'
        });
      });
    }
  })
}

const editList = async (req, res) => {
  const items = req.body.listItems;
  const id = req.params.id;
  try {
    List.findByIdAndUpdate(
      id, { listItem: items }
    )
      .catch((err) => res.status(500).json({ msg: err.message }));
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const deleteList = async (req, res) => {
  const id = req.body.id;
  List.findOneAndDelete({ _id: id }, (err, list) => {
    if (err) {
      return console.log(err);
    } else {
      return res.status(200).json({
        title: 'success'
      });
    }
  })
}


module.exports = {
  getAllLists,
  getDetailList,
  addListItem,
  deleteListItem,
  deleteList,
  editList
};