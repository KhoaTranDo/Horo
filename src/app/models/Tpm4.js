var mongoose = require('mongoose')
var Tpm4 = new mongoose.Schema({

    Name: String ,
    Image:  String ,
    
    //image : type:file
    // price: { type: String, maxLength: 200 },

})

module.exports = mongoose.model('Tpm4', Tpm4)