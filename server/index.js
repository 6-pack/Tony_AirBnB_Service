const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  console.log(`${req.method} comes from ${req.originalUrl}`);
  console.log(req.body);
  next();
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err connecting to server: ', err);
  } else {
    console.log(`Server is listening at http://localhost:${PORT}`);
  }
});
