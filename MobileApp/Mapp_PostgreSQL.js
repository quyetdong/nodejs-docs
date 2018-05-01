/* eslint no-undef: 0, prefer-promise-reject-errors: 0, no-throw-literal: 0
*/
const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

/** Set port to listen */
const port = process.env.PORT || 3000;

/** Config PostgresSQL */
const { Pool } = require('pg'); // {Pool, Client} = require('pg')
// const DATABASE_URL = 'postgresql-contoured-20679';
// const newpool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// })

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mobiles',
  password: 'studysql',
  port: 5432,
});

/** Set bodyparser middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Config ejs */
app.set('view engine', 'ejs');

/** Create */
app.post('/addPhone', (req, res) => {
  const newPhone = req.body;
  let id;

  pool
    .query('SELECT MAX(phoneid) AS max FROM phone_details')
    .then((data) => {
      id = data.rows[0].max + 1;
      return pool.query(`INSERT INTO phone_details(phoneid, phonename, phoneprice) VALUES(${id}, '${
        newPhone.phonename
      }', ${newPhone.phoneprice})`);
    })
    .then((added) => {
      res.send(added);
    })
    .catch((err) => {
      res.send(err);
    });
});

/** Read */
app.get('/', (req, res) => {
  pool
    .query('SELECT * from phone_details')
    .then((alldata) => {
      res.send(alldata.rows);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/getPrice', (req, res) => {
  const { phoneid } = req.query;
  pool
    .query(`SELECT * FROM phone_details WHERE phoneid = ${phoneid}`)
    .then((getdata) => {
      res.send(getdata.rows);
    })
    .catch((err) => {
      res.send(err);
    });
});

/** Update */
app.put('/update/id=:id', (req, res) => {
  const phoneid = +req.params.id;
  const newItem = req.body;

  pool
    .query(`UPDATE phone_details SET phonename = '${
      newItem.phonename
    }', phoneprice = '${newItem.phoneprice}'
  WHERE phoneid = ${phoneid}`)
    .then((updated) => {
      res.send(updated);
    })
    .catch((err) => {
      res.send(err);
    });
});

/** Delete */
app.get('/delete', (req, res) => {
  res.render('delete');
});

app.delete('/delete/id=:id', (req, res) => {
  const phoneid = +req.params.id;

  pool
    .query(`DELETE FROM phone_details WHERE phoneid = ${phoneid}`)
    .then((deleted) => {
      res.send(deleted);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port);
