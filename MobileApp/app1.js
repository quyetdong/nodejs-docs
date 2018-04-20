const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Config nunjucks */
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// app.use('/', (req, res, next) => {
//   console.log("Request URL: " + req.url);
//   next();
// })
// app.get('/price', (req, res) => {
//   fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
//     if(err) throw err;
//     res.send('<html><head></head><body><h1>Welcome</h1></body></html>');
//   });
// });

/** Read */
app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/price', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    if (err) throw err;
    const a = JSON.parse(data);
    res.send(a[0]);
  });
});

// app.post('/addPhone', (req, res) => {
//   console.log(req.body);

//   fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
//     if(err) throw err;
//     let b = JSON.parse(data);

//     b.push(req);

//     fs.writeFile(__dirname + '/data.json', 'utf8', (err, b) => {

//     })
//   })
// });

app.listen(8080);
