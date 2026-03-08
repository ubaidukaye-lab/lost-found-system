const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lostfound'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


// ----------------------
// GET ALL ITEMS
// ----------------------
app.get('/items', (req, res) => {
  const sql = 'SELECT * FROM items';

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});


// ----------------------
// GET LOST ITEMS
// ----------------------
app.get('/items/lost', (req, res) => {
  const sql = "SELECT * FROM items WHERE category='Lost'";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});


// ----------------------
// GET FOUND ITEMS
// ----------------------
app.get('/items/found', (req, res) => {
  const sql = "SELECT * FROM items WHERE category='Found'";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});


// ----------------------
// ADD NEW ITEM
// ----------------------
app.post('/items', (req, res) => {

  const { title, description, category, location, contact } = req.body;

  const sql = `
    INSERT INTO items (title, description, category, location, contact, status)
    VALUES (?, ?, ?, ?, ?, 'Active')
  `;

  db.query(sql, [title, description, category, location, contact], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Item reported successfully" });
    }
  });

});


// ----------------------
// DELETE ITEM
// ----------------------
app.delete('/items/:id', (req, res) => {

  const id = req.params.id;

  const sql = "DELETE FROM items WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Item deleted successfully" });
    }
  });

});


// ----------------------
// UPDATE ITEM STATUS
// ----------------------
app.put('/items/:id', (req, res) => {

  const id = req.params.id;
  const { status } = req.body;

  const sql = "UPDATE items SET status=? WHERE id=?";

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: "Status updated successfully" });
    }
  });

});


// ----------------------
// START SERVER
// ----------------------
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});