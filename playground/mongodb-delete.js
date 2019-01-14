const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	// deleteMany
	// db.collection("todos").deleteMany({text: "Eat Lunch"}).then((result) => {
	// 	console.log(result);
	// })

	// deleteOne
	// db.collection("todos").deleteOne({text: "Eat Lunch"}).then((result) => {
	// 	console.log(result);
	// })

	// findOneAndDelete
	// db.collection("todos").findOneAndDelete({complete: false}).then((result) => {
	// 	console.log(result);
	// })

	db.collection("Users2").deleteOne({name: "Roma"});

	// db.collection("Users2").findOneAndDelete({
	// 		_id: new ObjectID("5c3706b829d3101508a6e57c")
	// 	}).then((results) => {
	// 		console.log(JSON.stringify(results, undefined, 2));
	// 	});

	// db.close();
});
