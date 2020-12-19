const mongoose = require('mongoose')

let TransactionSchema = mongoose.Schema({
   
    idRenter:{
        type: String,
    },
    idRoom:{
        type: String,
    },
    timeBegin:{
        type:Date,
        default:Date.now 
    },
    timeEnd:{
        type:Date
    }
});

module.exports = TransactionSchema = mongoose.model('transaction',TransactionSchema)