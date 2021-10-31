const express = require('express');
const listRouter = require('./routes/listRouter');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

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
