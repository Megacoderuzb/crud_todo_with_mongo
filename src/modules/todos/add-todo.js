const Todo = require("./Todo");
const User = require("../users/User");

const addTodo = async (data) => {
  const result = await Todo.create(data);

  await User.findByIdAndUpdate(data.user, { $push: { todos: result._id } });

  return result;
};

module.exports = addTodo;
