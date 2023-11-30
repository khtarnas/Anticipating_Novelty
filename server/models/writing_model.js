const { Schema, model } = require('mongoose');

const writingSchema = new Schema({
  _id: Number,
  title: { type: String, required: true },
  created: { type: Date, required: true },
  desc: String,
  text: String
});

module.exports = model('Writing', writingSchema);