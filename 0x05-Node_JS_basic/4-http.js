import http, { IncomingMessage, ServerResponse } from 'http';


const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245);
});

module.export = app;
