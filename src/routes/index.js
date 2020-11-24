const lessorRouter = require('./lessor')
const homeRouter = require('./home')
const rolesRouter = require('./role')
const registerRouter = require('./register')
const profileRouter = require('./profile')
const loginRouter = require('./login')
const newRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
    //app.use('/home', homeRouter)
    app.use('/lessor', lessorRouter)
    app.use('/lessor', rolesRouter)
    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/news', newRouter)
    app.use('/', profileRouter)
}
module.exports = route;