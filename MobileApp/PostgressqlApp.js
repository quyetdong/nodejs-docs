/** Import required modules */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/** Set port to listen */
const port = process.env.PORT || 3000;

/** Require Postgres */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'northwin',
  password: 'studysql',
  port: 5432,
});

/** Config bodyParser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Create Promise for queries */
const poolPromise = sqlquery =>
  new Promise((resolve, reject) => {
    pool.query(sqlquery, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

/** Create */
app.get('/', (req, res) => {
  poolPromise('SELECT * FROM categories')
    .then((alldata) => {
      res.send(alldata.rows);
    })
    .catch(err => res.send(err));
});

app.post('/insertCategory/', (req, res) => {
  const category = req.query;
  let id;

  poolPromise('SELECT MAX(categoryid) AS max FROM categories')
    .then((caterdata) => {
      id = caterdata.rows[0].max + 1;
      return poolPromise(`INSERT INTO categories(categoryid, categoryname, description) VALUES(${id}, '${
        category.categoryname
      }', '${category.description}')`);
    })
    .then((insertdata) => {
      res.send(insertdata);
    })
    .catch((err) => {
      res.send(err);
    });
});

/** Read */
app.get('/getAll/categories', (req, res) => {
  pool.query(
    'SELECT categoryid, categoryname, description FROM categories',
    (err, data) => {
      res.send(data.rows);
    },
  );
});

app.get('/getCustomer/', (req, res) => {
  const { id } = req.query;

  pool.query(
    `SELECT customerid, companyname, contactname FROM customers WHERE customerid = '${id}'`,
    (err, data) => {
      if (err) throw err;
      res.send(data.rows);
    },
  );
});

app.get('/totalSpent/', (req, res) => {
  const orderid = +req.query.orderid;

  pool.query(
    `SELECT ROUND(SUM(unitprice * quantity)) AS totalSpent FROM order_details WHERE orderid = ${orderid}`,
    (err, data) => {
      if (err) throw err;
      res.send(data.rows);
    },
  );
});

/** Update */
app.put('/updateCategory/', (req, res) => {
  // const updateInfor = req.query;
  const updateInfor = req.body;

  poolPromise(`UPDATE categories SET description = '${
    updateInfor.description
  }', categoryname = '${updateInfor.categoryname}'
  WHERE categoryid = ${updateInfor.categoryid}`)
    .then((updatedata) => {
      res.send(updatedata);
    })
    .catch((err) => {
      res.send(err);
    });
});

/** Delete */
app.get('/delete', (req, res) => {
  res.render('delete.html');
});

app.delete('/deleteCategory/id=:id', (req, res) => {
  const categoryid = +req.params.id;

  poolPromise(`DELETE FROM categories WHERE categoryid = ${categoryid}`)
    .then((deletedata) => {
      res.send(deletedata);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port);
