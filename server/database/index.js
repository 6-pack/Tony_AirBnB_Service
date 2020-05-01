const { Client } = require('pg');

const client = new Client({
  user: 'whisly',
  port: 5432,
  database: 'reviews'
});

client.connect((err) => {
  if (err) {
    console.log('Error from connecting to postgreSQL db :', err);
  } else {
    console.log('Connected to PostGreSQL ');
  }
});

let fetchReviews = (param, res) => {
  sql = `SELECT * FROM reviews where roomId = ${param} ORDER BY datePublished desc`;
  client.query(sql, (err, result) => {
    if (err) {
      console.log('Error fetching data from pgsl : ', err);
    } else {
      res.status(200).send(result.rows);
    }
  });
}


module.exports.client = client;
module.exports.fetchReviews = fetchReviews;
