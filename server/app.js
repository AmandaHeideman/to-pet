const express = require('express');
const listRouter = require('./routes/listRouter');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

app.use(cors());
//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

mongoose
  .connect(uri, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to database"))

app.use('/', listRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
