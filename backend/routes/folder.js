const Router = require("express").Router();

const {
  createFolder,
  renameFolder,
  deleteFolder,
} = require("../controller/folder");

Router.route("/add-folder").post(createFolder);
Router.route("/rename-folder").put(renameFolder);
Router.route("/delete-folder").delete(deleteFolder);

module.exports = Router;
