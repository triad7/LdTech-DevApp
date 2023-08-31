const db = require('../config/db');
const bcrypt = require("bcrypt");

class User {
  static createUser(username, email, password, callback) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], callback);
  }

  static findByUsername(username, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
  }
}

module.exports = User;
