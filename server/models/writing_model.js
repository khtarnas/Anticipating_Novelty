const { Schema, model } = require('mongoose');

const WritingSchema = new Schema({
  title: { type: String, required: true },
  desc: String,
  text: String,
  lang: String,
  comments: [{ body: String, date: Date }],
  date_created: { type: Date, default: Date.now },
});

// WritingSchema.virtual("url").get(function () {
//   // We don't use an arrow function as we'll need the this object
//   return `/catalog/book/${this._title}`;
// });

module.exports = model('Writing', WritingSchema);