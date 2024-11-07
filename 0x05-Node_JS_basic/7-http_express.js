const express = require('express');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(400).send('Cannot load the database');
  }
  try {
    const data = await countStudents(databasePath);
    res.type('text/plain');
    return res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(1245, () => {
  console.log('listing on port 1245');
});

module.exports = app;
