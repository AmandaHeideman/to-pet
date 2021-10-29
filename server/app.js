const express = require('express');
const listRouter = require('./routes/listRouter');

const app = express();

app.use('/', listRouter);

module.exports = app;
