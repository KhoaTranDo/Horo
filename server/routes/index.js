const accountRouter = require('./users');
const mainRouter = require('./Main');
const router = require('./Detail');

function route(app) {
  //c1
  // app.get('/search', (req, res) => {
  //   res.render('search');
  // })
  //c2
  app.use('/account',accountRouter);
  app.use('/', mainRouter);
}

module.exports = route;
