const chatRouter = require('./roomchat')
const lessorRouter = require('./lessor')
const homeRouter = require('./home')
const rolesRouter = require('./role')
const registerRouter = require('./register')
const loginRouter = require('./login')
const siteRouter = require('./site')

function route(app) {
    app.use('/chat', chatRouter)
    app.use('/lessor', lessorRouter)
    app.use('/lessor', rolesRouter)
    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/', siteRouter)
}
module.exports = route;