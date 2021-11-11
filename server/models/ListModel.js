const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({
  listTitle: { type: String, required: true },
  listItem: { type: Array, }
}, {
  timestamps: true,
});
const List = mongoose.model('List', listSchema);
module.exports = List;