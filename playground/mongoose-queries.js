const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5c3eeff26c5f95342c1d9ccb11";

// if (!ObjectID.isValid(id)) {
// 	console.log("ID not valid");
// }

// returns an arr or empty arr
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log("Todos", todos);
// });

// return obj or null
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log("Id  not found");
// 	}
// 	console.log("Todo By Id", todo);
// }).catch((e) => console.log(e));

var id = "5c3d59ca205241d01d61c1cb";

User.findById(id).then((user) => {
	if(!user) {
		return console.log("Unable to find user");
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});