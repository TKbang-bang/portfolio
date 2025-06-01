require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

// creating express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(router);

// start server
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running on port " + process.env.SERVER_PORT);
});
