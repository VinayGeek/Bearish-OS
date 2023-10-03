const Router = require("express").Router();

const { addItem, getAllItems } = require("../controller/item");
const { uploadFile } = require("../middleware/multerUpload");

Router.route("/add-folder").post(uploadFile.single("attachment"), addItem);
Router.route("/rename-folder").get(getAllItems);

module.exports = Router;
