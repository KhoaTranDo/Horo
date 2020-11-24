const express = require('express');
const path = require('path');
const methodOveride = require('method-override')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')

const route = require('./routes');
const db = require('./confiq/db')

//connect to db
db.connect()


const app = express();
const port = 3000;

var users = [
  {name: "User1", email: "user1@gmail.com"}, 
  {name: "User2", email: "user2@gmail.com"}
];
// Use method-override
app.use(methodOveride('_method'))

//template engine

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'resources', 'views'));

app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());

route(app);

//upload files

//127.0.0.1 -localhost:
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
