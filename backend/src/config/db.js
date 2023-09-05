/* const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sambit@12345',
  database: 'ldtech'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db; */


const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sambit@12345',
  database: 'ldtech',
  waitForConnections: true,
});


pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL');
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.error('Error while connecting to MySQL:', err);
  });

module.exports = pool;
