const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const Role = require('../models/Role')


class LessorControllers {

    // url
    storesPost(req, res, next) {
        Role.find({})
        .then(roles => res.render('lessor/list',{
            roles : multipleMongooseToObject(roles)
        }) )
        .catch(next)
        
    }


}
//get /news/:slug


module.exports = new LessorControllers;