
const bcrypt = require('bcrypt');
const pool = require('../config/db');

class User {
  static async createUser(username, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [results] = await pool.execute(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
      );
      return results.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      const [results] = await pool.execute('SELECT * FROM users WHERE username = ?', [
        username,
      ]);
      return results.length > 0 ? results[0] : null;
    } catch (error) {
      throw error;
    }
  }
}

class Contact{
  static async insertContactData(name, email, message) {
    try {
      const [results] = await pool.execute(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
      );
      return results.insertId;
    } catch (error) {
      console.log("Error while insert contact details", error);
      throw error;
    }
  }
}


module.exports = User;
module.exports = Contact;
