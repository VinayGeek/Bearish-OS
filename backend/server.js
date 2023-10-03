const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const { PORT } = process.env;

const connectDB = require("./config/database");
const app = require("./app");

connectDB();

app.listen(PORT, () => {
  console.log("✅ Server Running");
});
