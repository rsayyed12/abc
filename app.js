const express = require('express');
const app = express();
const port = 3000;

const db = require('./db'); // Import MySQL connection

app.use(express.json());

// Get all users from MySQL
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

// Create a new user in MySQL
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   const sql = 'INSERT INTO users (name, emailid) VALUES (?, ?)';
//   db.query(sql, [name, emailid], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error creating user');
//     }
//     res.status(201).json({ message: 'User created', userId: result.insertId });
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});