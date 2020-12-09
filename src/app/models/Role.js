
var mongoose = require("mongoose");

var Role = new mongoose.Schema({
    location: { type: String, maxLength: 200 },
    address: { type: String, maxLength: 200 },
    room: { type: String, maxLength: 200 },
    image: { type: String, maxLength: 200 },
    price: { type: String, maxLength: 200 },
    slug: { type: String, maxLength: 200 },

});


const newrole = mongoose.model("roles", Role);




// newRole.findOne({ room: { $regex: "u", $options: "" }, }, function (err, users) {
//     console.log("Partial Search Begins");
//     console.log(users);
// });

module.exports = newrole