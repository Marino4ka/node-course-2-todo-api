var mongoose = require("mongoose");

var User = mongoose.model("User", {
	email: {
		required: true,
		trim: true,
		type: String,
		minlength: 1
	}
});

module.exports = {User};

// var user = new User({
// 	email: "anton.iovbak@mail.ru"
// });

// user.save().then((doc) => {
// 	console.log("User saved", doc);
// }, (e) => {
// 	console.log("Unable to save user", e)
// });