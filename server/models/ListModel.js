const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({
  listTitle: { type: String, required: true },
  listItem: { type: Array, required: true }
}, {
  timestamps: true,  //ska den här ligga här?? 
});
const List = mongoose.model('List', listSchema);
module.exports = List;