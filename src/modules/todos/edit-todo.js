const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const editTodo = async ({ id, user, ...changes }) => {
  const existing = await Todo.findOne({ _id: id, user });

  if (!existing) {
    throw new NotFoundError("todo topilmadi.");
  }

  return Todo.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editTodo;
