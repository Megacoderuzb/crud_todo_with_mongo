const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const removeTodo = async ({ id, user }) => {
  const existing = await Todo.findOne({ _id: id, user });

  if (!existing) {
    throw new NotFoundError("Todo topilmadi.");
  }

  return Todo.findByIdAndRemove(id);
};

module.exports = removeTodo;
