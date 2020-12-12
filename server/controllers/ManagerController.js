const User = require('../models/User')


class ManagerController {

    // url
    async storesPost(req, res, next) {
        User.find({},(err,result)=>{
            if(err) console.log(err)
            console.log(result)
        })
        .catch(next)
        
    }

    async Delete(req, res, next) {
        User.find({'id':'asda'},(err,result)=>{
            if(err) console.log(err)
            console.log(result)
        })
        .catch(next)
        
    }
    async Update(req, res, next) {
        User.find({'id':'asda'},(err,result)=>{
            if(err) console.log(err)
            console.log(result)
        })
        .catch(next)
        
    }

}
//get /news/:slug


module.exports = new ManagerController;