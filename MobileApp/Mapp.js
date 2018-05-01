/** Import modules */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

/** Set up view */
app.set('views', './views');
app.set('view engine', 'ejs');

/** Set port to listen */
const port = process.env.PORT || 3000;

/** Config bodyParser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Call passport middleware */
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 5,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

/** Create */
app.get('/', (req, res) => {
  res.render('homepage');
});

app
  .route('/login')
  .get((req, res) => {
    res.render('login', { infor: '' });
  })
  .post(passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/loginOK',
  }));

app.get('/private', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to the private page!');
  } else {
    res.render('login', { infor: 'Login Required to Access Private Content' });
  }
});

app.get('/loginOK', (req, res) => {
  res.send('Login succeeded!');
});

passport.use(new LocalStrategy((username, password, done) => {
  fs.readFile('./userDB.json', (err, data) => {
    const db = JSON.parse(data);
    const userRecord = db.find(user => user.usr === username);
    if (userRecord && userRecord.pwd === password) {
      return done(null, userRecord);
    }
    return done(null, false);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.usr);
});

passport.deserializeUser((name, done) => {
  fs.readFile('./userDB.json', (err, data) => {
    const db = JSON.parse(data);
    const userRecord = db.find(user => user.usr === name);

    if (userRecord) {
      return done(null, userRecord);
    }
    return done(null, false);
  });
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
  res.render('getPrice');
});

app.get('/price', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, dataFile) => {
    if (err) throw err;
    const data = JSON.parse(dataFile);
    const id = +req.query.id;
    let onePhone = [];

    onePhone = data.filter(el => id === +el.id);

    if (onePhone.length) {
      res.render('price', { price: onePhone[0].price });
    } else {
      res.send('<html><head></head><body><h2>Do not have this phone!</h2></body></html>');
    }
  });
});

/** Update */
app.get('/update', (req, res) => {
  res.render('update');
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
  res.render('delete');
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

app.listen(port);
