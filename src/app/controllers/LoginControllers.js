var { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
var UserModel = require('../models/User')
var mongoose = require('mongoose')

class LoginrControllers {
    login(req, res, next) {
        res.render('login')
    }
    async access(req, res, next) {
        var email = req.body.email ? req.body.email : res.redirect('/login') // ?(if) have condition -> run
        var password = req.body.password? req.body.password : res.redirect('/login')

        await UserModel.findOne({ email: email }, (err, value) => {
            try{
                
                if (value.password != null) {
                    
                    if (password === value.password && !err) {

                        res.redirect("/lessor");

                    }
                    else{
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

        // if (users.email) {
        //     return res.render('lessor')
        // }


        // if (users.password !== password) {
        //     return res.render('login')

        // }
        //res.redirect('/lessor')

    }
}

module.exports = new LoginrControllers