const { Schema, model } = require("mongoose");

const linkSchema = new Schema({
  originalLink: { type: String, required: true },
  shortLink: { type: String, required: true },
});

module.exports = model("Link", linkSchema);
