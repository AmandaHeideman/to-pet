const express = require("express");
const listRouter = require("./routes/listRouter");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 'https://to-pet-server.herokuapp.com/'
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", listRouter);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to database"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
