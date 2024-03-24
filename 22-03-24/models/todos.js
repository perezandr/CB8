const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Empty Todo",
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
  complete: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
