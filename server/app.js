const express = require('express');
const listRouter = require('./routes/listRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', listRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
