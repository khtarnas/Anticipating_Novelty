const { Schema, model } = require('mongoose');

const WritingSchema = new Schema({
  // _id: Number,
  title: { type: String, required: true },
  // created: { type: Date, required: true },
  desc: String,
  text: String
});

WritingSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._title}`;
});

module.exports = model('Writing', WritingSchema);