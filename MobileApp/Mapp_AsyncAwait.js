/* eslint no-undef: 0, prefer-promise-reject-errors: 0, no-throw-literal: 0
*/
/** Import required modules */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

/** Set port to listen */
const port = process.env.PORT || 3000;

/** Set bodyparser middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Config ejs */
app.set('view engine', 'ejs');

/** Promise */
const readPromise = filename =>
  new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}${filename}`, 'utf8', (err, data) => {
      if (err) {
        reject(`cannot read from file!! ${err}`);
      } else {
        resolve(data);
      }
    });
  });

const writePromise = (filename, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      `${__dirname}${filename}`,
      JSON.stringify(data),
      'utf8',
      (err) => {
        if (err) {
          reject(`cannot write to file! ${err}`);
        } else {
          resolve(data);
        }
      },
    );
  });

/** Create */
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/addPhone', async (req, res) => {
  let dataFile;

  try {
    dataFile = await readPromise('/data.json');
    const data = JSON.parse(dataFile) || [];
    const id = data[data.length - 1].id + 1 || 1;
    const obj = { id, name: req.body.name, price: req.body.price };

    data.push(obj);

    await writePromise('/data.json', data);

    res.send('{message: post succeeded}');
  } catch (e) {
    res.send(`{message: ${err}}`);
  }
});

/** Read */
app.get('/getAll', (req, res) => {
  readPromise('/data.json')
    .then(data => res.send(data))
    .catch((err) => {
      res.send(`{message: ${err}}`);
    });
});

app.get('/getPrice', (req, res) => {
  res.render('getPrice');
});

app.get('/price', (req, res) => {
  readPromise('/data.json')
    .then((dataFile) => {
      const data = JSON.parse(dataFile);
      const id = +req.query.id;
      let onePhone = [];

      onePhone = data.filter(el => id === +el.id);

      if (onePhone.length) {
        res.render('price', { price: onePhone[0].price });
      } else {
        throw "{ 'message': 'id not found' }";
      }
    })
    .catch((err) => {
      res.send(`{message: ${err}}`);
    });
});

/** Update */
app.get('/update', (req, res) => {
  res.render('update');
});

app.put('/update/id=:id', (req, res) => {
  const id = +req.params.id;
  const newItem = req.body;

  readPromise('/dat.json')
    .then((dataFile) => {
      const data = JSON.parse(dataFile) || [];
      const item = data.filter(el => id === +el.id);

      if (item.length) {
        ({ name: item[0].name, price: item[0].price } = newItem);
        return data;
      }
      res.send('{update: failed, id not found}');
      throw { message: 'id not found' };
    })
    .then((data) => {
      writePromise('/data.json', data);
      res.send('{update: succeeded}');
    })
    .catch((err) => {
      console.log(err);
      res.send(`{message: ${err}}`);
    });
});

/** Delete */
app.get('/delete', (req, res) => {
  res.render('delete');
});

app.delete('/delete/id=:id', (req, res) => {
  const id = +req.params.id;

  readPromise('/data.json')
    .then((dataFile) => {
      const data = JSON.parse(dataFile) || [];
      const toBeSaved = data.filter(el => id !== +el.id);

      if (toBeSaved.length === data.length) {
        throw { 'delete failed': 'id not found' };
      } else {
        return toBeSaved;
      }
    })
    .then((data) => {
      writePromise('/data.json', data);
      res.send('{message: delete succeeded}');
    })
    .catch((err) => {
      res.send(`{message: ${err}}`);
    });
});

app.listen(port);
