var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });


// var otherTodo = new Todo({
// 	text: "Call Anton", 
// 	completed: true,
// 	completedAt: 123
// });

// var otherTodo = new Todo({
// 	text: "Somth to do"
// });

// otherTodo.save().then((doc) => {
// 	console.log("Saved other todo", doc);
// }, (e) => {
// 	console.log("Unable to save other todo", e)
// });