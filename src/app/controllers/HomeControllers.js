const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const Role = require('../models/Role')

class HomeControllers {

    // get news
    index(req, res, next) {
        
        
        Role.find({})
            .then(roles => {

                res.render('home', {
                    roles: multipleMongooseToObject(roles)
                })
            })
            .catch(next)
    }


}


module.exports = new HomeControllers;