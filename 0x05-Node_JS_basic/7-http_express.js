const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    return res.status(400).send('Cannot find Database');
  }
  try {
    const data = await countStudents(databasePath);
    res.type('text/plain');
    return res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    return res.status(500).send(`This is the list of our students\nCannot load Database`);
  }
});

app.listen(1245, () => {
  console.log('listing on port 1245');
});

module.exports = app;
