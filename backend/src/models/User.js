<<<<<<< HEAD
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
=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:{type: String, required:true},
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d

module.exports = User;
