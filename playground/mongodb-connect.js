// Next 2 lines are the same (obj desructuring):
// const MongoClient = require("mongodb").MongoClient;
// const {MongoClient} = require("mongodb");

const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);


// ES6 feature object destructuring. Lets pull out proprties from an obj creating vars
// var user = {name: "Marina", age: 32};
// var {name} = user;
// console.log(name);

// Connect to db TodoApp. Mongo does not create db untill data is inserted into it

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// db.collection("todos").insertOne({
	// 	text: "Something to do",
	// 	complete: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log("Unable to insert todo, err");
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	// Insert document into collection
	db.collection("Users2").insertOne({
		name: "Anton",
		age: "30",
		location: "Taraz"
	}, (err, result) => {
		if (err) {
			return console.log("Unable to insert todo, err");
		}

		//ops atribute stores all the docs that were inserted
		// console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp());

	})

	db.close();
});
