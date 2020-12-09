var mongoose = require("mongoose");

var SearchControllers = new mongoose.Schema({
    location: { type: String, maxLength: 200 },
    address: { type: String, maxLength: 200 },
    room: { type: String, maxLength: 200 },
    image: { type: String, maxLength: 200 },
    price: { type: String, maxLength: 200 },
    slug: { type: String, maxLength: 200 },

});

module.exports = mongoose.model("SearchControllers", SearchControllers);
var newrole = mongoose.model("Role", SearchControllers);

const allusers = newrole.findOne({ room: { $regex: "h", $options: "i" } }, "room slug", function (err, roles) {
    if (err) console.log(err);
    console.log(roles);
});