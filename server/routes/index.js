const accountRouter = require('./users');
const mainRouter = require('./Homepage');
const Manager = require('./Manager')
const Room = require('./Room')
function route(app) {


  app.use('/Manager',Manager);
  app.use('/account',accountRouter);
  app.use('/room',Room);
  app.use('/', mainRouter);
}

module.exports = route;
