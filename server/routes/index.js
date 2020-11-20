const accountRouter = require('./users');
const mainRouter = require('./Main');
const router = require('./Detail');
const Lessor = require('./Lessor')
function route(app) {
  //c1
  // app.get('/search', (req, res) => {
  //   res.render('search');
  // })
  //c2
  app.use('/lessor',Lessor);
  app.use('/account',accountRouter);
  app.use('/', mainRouter);
}

module.exports = route;
