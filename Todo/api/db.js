const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos"
);

const todo = mongoose.Schema({
  name: String,
  description: String,
  isCompleat: Boolean,
});

module.exports = {
  todo,
};
