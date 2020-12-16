var { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
var UserModel = require('../models/User')
var mongoose = require('mongoose')

class LoginrControllers {
    login(req, res, next) {
        //console.log(req.cookies)
        res.render('login')
    }
    async access(req, res, next) {
        var username = req.body.username ? req.body.username : res.redirect('/login') // ?(if) have condition -> run
        var password = req.body.password ? req.body.password : res.redirect('/login')

        await UserModel.findOne({ username: username }, (err, value) => {
            try {

                if (value.password != null) {

                    if (password === value.password && !err) {

                        res.redirect("/admin/userlist");

                    }
                    else {
                        res.redirect('/login')
                    }
                }
                return;
            }
            catch {

                res.redirect('/login');
            }

        }).exec((err) => {
            if (err) {
                res.redirect('/login');
            }
        });
        res.locals.username = username


    }
}

module.exports = new LoginrControllers