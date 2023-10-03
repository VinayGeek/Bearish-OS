const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((res) => console.log("✅ DB CONNECTED"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
