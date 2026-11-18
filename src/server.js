import http from 'node:http';
import { add } from './math.js';

const port = process.env.PORT || 8080;
const version = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end('ok');
  }
  if (req.url === '/api/version') {
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify({ version, slot: process.env.SLOT_LABEL || 'n/a' }));
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end(`Hello from az400-sample ${version} (2+2=${add(2, 2)})\n`);
});

server.listen(port, () => console.log(`listening on ${port}`));
