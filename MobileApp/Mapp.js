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

/** Create */
app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/addPhone', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    if (err) throw err;
    const b = JSON.parse(data) || '[]';
    const id = b[b.length - 1].id + 1;
    const obj = { id, name: req.body.name, price: req.body.price };

    b.push(obj);

    fs.writeFile(
      `${__dirname}/data.json`,
      JSON.stringify(b),
      'utf8',
      (writeErr) => {
        if (writeErr) throw writeErr;
        res.send('{message: success post}');
      },
    );
  });
});

/** Read */
app.get('/getAll', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, data) => {
    if (err) throw err;
    // data = JSON.stringify(data);
    res.send(data);
  });
});

app.get('/getPrice', (req, res) => {
  res.render('getPrice.html');
});

app.get('/price', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, dataFile) => {
    if (err) throw err;
    const data = JSON.parse(dataFile);
    const id = +req.query.id;
    let onePhone = [];

    onePhone = data.filter(el => id === +el.id);

    if (onePhone.length) {
      res.render('price.html', { price: onePhone[0].price });
    } else {
      res.send('<html><head></head><body><h2>Do not have this phone!</h2></body></html>');
    }
  });
});

/** Update */
app.get('/update', (req, res) => {
  res.render('update.html');
});

app.put('/update/id=:id', (req, res) => {
  const id = +req.params.id;
  const newItem = req.body;

  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, dataFile) => {
    if (err) throw err;
    const data = JSON.parse(dataFile) || [];

    const item = data.filter(el => id === +el.id);

    if (item.length) {
      ({ name: item[0].name, price: item[0].price } = newItem);

      fs.writeFile(
        `${__dirname}/data.json`,
        JSON.stringify(data),
        'utf8',
        (writeErr) => {
          if (writeErr) throw writeErr;
          res.send('{update: successed}');
        },
      );
    } else {
      res.send('{update: failed, id not found}');
    }
  });
});

/** Delete */
app.get('/delete', (req, res) => {
  res.render('delete.html');
});

app.delete('/delete/id=:id', (req, res) => {
  const id = +req.params.id;

  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, dataFile) => {
    if (err) throw err;
    const data = JSON.parse(dataFile) || [];

    const toBeSaved = data.filter(el => id !== +el.id);

    fs.writeFile(
      `${__dirname}/data.json`,
      JSON.stringify(toBeSaved),
      'utf8',
      (writeErr) => {
        if (writeErr) throw writeErr;
        res.send('{delete: successed}');
      },
    );
  });
});

app.listen(8080);
