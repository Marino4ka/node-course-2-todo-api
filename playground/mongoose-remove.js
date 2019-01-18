const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.OneAndRemove({_id: "5c417610e07ffacc249ba649"}).then((todo) => {
	
// });

Todo.findByIdAndRemove("5c417610e07ffacc249ba649").then((todo) => {
	console.log(todo);
});