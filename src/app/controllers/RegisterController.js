
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const UserModel = require('../models/User')

class RegisterControllers {

    // get news
    index(req, res, next) {
        res.render('register')

    }
    create(req, res, next) {
        UserModel.findOne({ email: req.params.email })
            .then(users => res.redirect('/login', { users: mongooseToObject(users) }))
            .catch(next)
    }



    store(req, res, err) {
        const user = new UserModel(req.body)
        user.save()
            .then(() => res.redirect('/login'))
            .catch(err => res.redirect('back'))

    }

}
module.exports = new RegisterControllers;