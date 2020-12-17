
var mongoose = require("mongoose");
var mongooseDelete = require('mongoose-delete')
var slug = require('mongoose-slug-generator')
var Role = new mongoose.Schema({
    location: { type: String, maxLength: 2, required: true },
    address: { type: String, maxLength: 200, required: true, unique: true },
    room: { type: String, maxLength: 200, required: true },
    image: { type: String, maxLength: 200, required: true },
    price: { type: Number, maxLength: 200, required: true },
    slug: { type: String, minlength: 2, maxLength: 8, required: true, unique: true },
    feedback: { type: Array }

});
//validate
mongoose.plugin(slug)
Role.plugin(mongooseDelete,
    {
        deletedAt:true,
        overrideMethods:'all'
    })

const newrole = mongoose.model("roles", Role);




// newRole.findOne({ room: { $regex: "u", $options: "" }, }, function (err, users) {
//     console.log("Partial Search Begins");
//     console.log(users);
// });

module.exports = newrole