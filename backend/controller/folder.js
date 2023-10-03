const FolderDB = require("../model/folder");

exports.createFolder = async (req, res) => {
  const { name } = req.body;

  const folderData = await FolderDB.create({ name });

  if (!folderData) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  res.status(201).json({
    success: true,
    message: "folder created successfully",
    data: folderData,
  });
};

exports.renameFolder = async (req, res) => {
  const { _id, name } = req.body;

  if (!_id || !name) {
    return res.status(400).json({
      success: false,
      message: "please send values",
      data: {},
    });
  }

  const folderData = await FolderDB.findByIdAndUpdate(
    _id,
    { name },
    { new: true }
  );

  if (!folderData) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  res.status(200).json({
    success: true,
    message: "folder created successfully",
    data: folderData,
  });
};

exports.deleteFolder = async (req, res) => {
  const { _id } = req.query;

  if (!_id) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  const folderData = await FolderDB.findByIdAndDelete(_id);

  if (!folderData) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      data: {},
    });
  }

  res.status(200).json({
    success: true,
    message: "folder deleted successfully",
    data: {},
  });
};
