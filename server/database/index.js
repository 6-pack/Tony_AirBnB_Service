const { Client } = require('pg');

const client = new Client();

client.connect((err) => {
  if (err) {
    console.log('Error from connecting to postgreSQL db :', err);
  } else {
    console.log('Connected to PostGreSQL ');
  }
});

client.query('SELECT $1::text as message', ['Hello world from PostgreSQL!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
});


module.exports.client = client;
