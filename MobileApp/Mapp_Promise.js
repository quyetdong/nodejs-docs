/* eslint no-undef: 0, prefer-promise-reject-errors: 0, no-throw-literal: 0
*/

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
  res.render('index.html');
});

app.post('/addPhone', (req, res) => {
  readPromise('/data.json')
    .then((dataFile) => {
      const data = JSON.parse(dataFile) || [];
      const id = data[data.length - 1].id + 1 || 1;
      const obj = { id, name: req.body.name, price: req.body.price };

      data.push(obj);

      return data;
    })
    .then((data) => {
      writePromise('/data.json', data);
      res.send('{message: post succeeded}');
    })
    .catch((err) => {
      console.log(err);
      res.send(`{message: ${err}}`);
    });

  // fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
  //   if(err) throw err;
  //   let b = JSON.parse(data) || "[]";
  //   let id = b[b.length - 1].id + 1;
  //   let obj = {id: id, name: req.body.name, price: req.body.price};

  //   b.push(obj);

  //   fs.writeFile(__dirname + '/data.json', JSON.stringify(b), 'utf8', (err) => {
  //     if(err) throw err;
  //     res.send("{message: success post}");
  //   })
  // })
});

/** Read */
app.get('/getAll', (req, res) => {
  readPromise('/data.json')
    .then(data => res.send(data))
    .catch((err) => {
      res.send(`{message: ${err}}`);
    });

  // fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
  //   if(err) throw err;
  //   // data = JSON.stringify(data);
  //   res.send(data);
  // });
});

app.get('/getPrice', (req, res) => {
  res.render('getPrice.html');
});

app.get('/price', (req, res) => {
  readPromise('/data.json')
    .then((dataFile) => {
      const data = JSON.parse(dataFile);
      const id = +req.query.id;
      let onePhone = [];

      onePhone = data.filter(el => id === +el.id);

      if (onePhone.length) {
        res.render('price.html', { price: onePhone[0].price });
      } else {
        throw { message: 'id not found' };
      }
    })
    .catch((err) => {
      res.send(`{message: ${err}}`);
    });

  // fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
  //   if(err) throw err;
  //   data = JSON.parse(data);
  //   let id = +req.query.id;
  //   let onePhone = [];

  //   onePhone = data.filter(el => (id === +el.id) );

  //   if(onePhone.length) {
  //     res.render('price.html', { price: onePhone[0].price });
  //   } else {
  //     res.send("<html><head></head><body><h2>Do not have this phone!</h2></body></html>");
  //   }
  // });
});

/** Update */
app.get('/update', (req, res) => {
  res.render('update.html');
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

  // fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
  //   if(err) throw err;
  //   data = JSON.parse(data) || [];

  //   let item = data.filter(el => (id === +el.id) );

  //   if(item.length) {
  //     ( { name: item[0].name, price: item[0].price }  = newItem );

  //     fs.writeFile(__dirname + '/data.json', JSON.stringify(data), 'utf8', (err) => {
  //       if(err) throw err;
  //       res.send('{update: successed}');
  //     })
  //   } else {
  //     res.send('{update: failed, id not found}');
  //   }
  // })
});

/** Delete */
app.get('/delete', (req, res) => {
  res.render('delete.html');
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

  // fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
  //   if(err) throw err;
  //   data = JSON.parse(data) || [];

  //   const toBeSaved = data.filter(el => (id !== +el.id) );

  //   fs.writeFile(__dirname + '/data.json', JSON.stringify(toBeSaved), 'utf8', (err) => {
  //     if(err) throw err;
  //     res.send('{delete: successed}');
  //   })
  // })
});

app.listen(8080);
