const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const UserModel = require('../models/User')


class LoginrControllers {
    login(req, res, next) {
        UserModel.findOne({})
            .then(users => res.render('login', { users: mongooseToObject(users) }))
    }
    access(req, res, next) {
            const email = req.body.email
            const password = req.body.password
            UserModel.findOne({
                email:email,
                password:password
            })
            .then(data => {
                if ( data ) {
                    res.redirect('/lessor')
                } else {
                    res.send('Account wrong')
                }
            })
            .catch(err => {
                res.json('Server denined')
            })
    }

}
module.exports = new LoginrControllers