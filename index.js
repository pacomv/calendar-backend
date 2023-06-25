const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

// create the express server
const app = express();

// db
dbConnection();

// CORS
app.use(cors());

// public directory
app.use(express.static("public"));

// read and parse body
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// listen to requests
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`);
});
