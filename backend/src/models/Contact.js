
const pool = require('../config/db');

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

  module.exports = Contact;
