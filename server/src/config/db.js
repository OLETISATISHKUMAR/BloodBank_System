require("dotenv").config();
const mongoose = require("mongoose");
const dbUrl = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = connectDB;
