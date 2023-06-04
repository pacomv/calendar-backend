const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    throw new Error("Database initialization error");
  }
};

module.exports = {
  dbConnection,
};
