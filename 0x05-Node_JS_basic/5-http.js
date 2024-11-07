const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.setHeader('Content-Type', 'text/plain');

  if (parsedUrl.pathname === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200);
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];

    try {
      await countStudents(databasePath);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const logStream = fs.createWriteStream('server_logs.txt', {flags: 'a' });
app.on('request', (req, res) => {
  const logMessage = `${req.method} ${req.url}\n`;
  logStream.write(logMessage);
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245');
});

module.exports = app;
