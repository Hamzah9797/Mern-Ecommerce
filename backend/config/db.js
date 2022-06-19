require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo db connection successfull");
  } catch (err) {
    console.log(err);
    console.log("mogo db connection fail");
    process.exit(1);
  }
};

module.exports = connectDB;
