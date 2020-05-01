const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const route = require('./controller/route.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', route.consoleLog);

app.get('/rooms/:roomID/reviews', route.getReviews)

app.listen(PORT, (err) => {
  if (err) {
    console.log('err connecting to server: ', err);
  } else {
    console.log(`Server is listening at http://localhost:${PORT}`);
  }
});
