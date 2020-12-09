// var mongoose = require("mongoose");
// var Role = new mongoose.Schema({
//     room: { type: String, maxLength: 200 },
//     slug: { type: String, maxLength: 200 },
// });

// module.exports = mongoose.model("Role", Role);
// var newRole = mongoose.model("Role", Role);

// const allusers = newRole.findOne({ room: { $regex: "1", $options: "2" }}, "room slug", function(err, roles) {
// if (err) console.log(err);
// console.log(roles);
// });


// // newRole.findOne({ room: { $regex: "u", $options: "" }, }, function (err, users) {
// //     console.log("Partial Search Begins");
// //     console.log(users);
// // });