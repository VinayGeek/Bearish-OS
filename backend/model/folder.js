const mongoose = require("mongoose");

const folderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please input name"],
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("folder", folderSchema);
