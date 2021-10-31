const Products = require("../models/ListModel");

const getAllLists = async (req, res) => {
  try {
    const allLists = await lists.find();
    res.status(200).json(allLists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAllLists
};