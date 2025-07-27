const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const result = await pool.query(
    'INSERT INTO tasks (title, completed) VALUES ($1, $2) RETURNING *',
    [title, false]
  );
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query(
    'UPDATE tasks SET completed = NOT completed WHERE id = $1 RETURNING *',
    [id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
