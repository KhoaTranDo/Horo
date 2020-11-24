const Role = require('../models/Role')
class SiteControllers{
    
    // get news
    index(req,res,next)
    {
        Role.find({})
        .then(roles => res.render('home'))
        .catch(next)
        // res.render('home');
    }
    //get /news/:slug
    
}
module.exports = new SiteControllers;