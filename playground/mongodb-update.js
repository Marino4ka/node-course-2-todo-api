const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");


// db.collection("Todos").findOneAndUpdate({
// 	_id: new ObjectID("5c38284a32cc0a420f2548c3")
// }, {
// 	$set: {
// 		completed: false
// 	}
// }, {
// 	returnOriginal: false
// }).then((result) => {
// 	console.log(result);
// });

db.collection("Users2").findOneAndUpdate({
	_id: new ObjectID("5c3715c7c58f73017c01f7fa")
}, {
	$set: {
		name: "Marina"
	},
	$inc: {
		age: 10
	}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});



	// db.close();
});
