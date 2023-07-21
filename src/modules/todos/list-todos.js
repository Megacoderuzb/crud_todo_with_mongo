const Todo = require("./Todo");

const listTodos = async ({ user, q, page = { limit: 2, offset: 0 } }) => {
  const filter = {};

  if (q) {
    filter.name = { $regex: new RegExp(q, "i") };
    filter.description = { $regex: new RegExp(q, "i") };
  }

  const result = await Todo.find({ user, ...filter })
    .populate([
      {
        path: "user",
        select: "first_name username",
      },
    ])
    .skip(page.offset)
    .limit(page.limit);

  return { todos: result, pageInfo: { ...page } };
};

module.exports = listTodos;
