const ItemDB = require("../model/item");
const FolderDB = require("../model/folder");

exports.addItem = async (req, res) => {
  const file = req.file;
  const { name, folderId, path } = req.body;

  if (!name || !folderId || !path) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  const checkFolder = await FolderDB.findOne({ _id: folderId });

  if (!checkFolder) {
    return res.status(400).json({
      success: false,
      message: "no such folder",
      data: {},
    });
  }

  const itemData = await ItemDB.create({ name, folderId, path: file.path });

  if (!itemData) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  res.status(201).json({
    success: true,
    message: "item created successfully",
    data: itemData,
  });
};

exports.getAllItems = async (req, res) => {
  const { folderId } = req.query;

  if (!folderId) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  const itemData = await ItemDB.find({ folderId }).populate("folderId");

  if (!itemData.length) {
    return res.status(404).json({
      success: false,
      message: "no data found",
      data: [],
    });
  }

  res.status(201).json({
    success: true,
    message: "items fetched successfully",
    data: itemData,
  });
};
