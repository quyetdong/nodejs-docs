const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // res.writeHead(200, {'Content-type': 'text/html'});
    // let html = fs.createReadStream(__dirname + '/hello.html');
    // let message = 'Hello Friend!';
    // html = html.replace('{Message}', message);

    if (req.url === '/') {
      res.writeHead(200, { 'Content-type': 'text/html' });
      fs.createReadStream(`${__dirname}/hello.html`).pipe(res);
    } else if (req.url === '/api') {
      res.writeHead(200, { 'Content-type': 'application/json' });

      const obj = {
        name: 'Dong Quyet',
        profession: 'Developer',
      };

      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }

    // html.pipe(res);
    // res.end(html);
    // res.end('Hello World!\n');
  })
  .listen(1337, '127.0.0.1');
