const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const db = require('../models/User')

module.exports.index = function (req, res, next) {
    
    db.find({})
            .then(users => {

                res.render('profile', {
                    users: multipleMongooseToObject(users)
                })
            })
            .catch(next)
            
    // const email = req.body.email
    // const password = req.body.password

    // const user = db.get('users').find({ email: email }).value()
    // if (!user) {
    //     res.rener('login', {
    //         errors: ['User does not exist']
    //     })
    //     return;
    // }
    // if (user.password !== password) {
    //     res.render('login', {
    //         error: ['Wrong password']
    //     })
    //     return
    // }
    // res.redirect('home')
}