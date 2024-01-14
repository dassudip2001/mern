const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/todo");

if (!connect) {
  console.log("Error connecting db");
  return;
} else {
  console.log("Db connected successfully");
}

const todo = new mongoose.Schema({
  name: String,
  description: String,
  isCompleat: Boolean,
});

const Todo = mongoose.model("Todo", todo);

module.exports = Todo;
