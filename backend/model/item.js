const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please input name"],
      trim: true,
      lowercase: true,
    },
    folderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "folder",
    },
    path: {
      type: String,
      default: "/",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("item", itemSchema);
