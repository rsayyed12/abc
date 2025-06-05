const express = require('express');
const app = express();
const port = 3000;

const db = require('./db'); // Import MySQL connection

app.use(express.json());

// To Get all users from MySQL
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});



// To Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});