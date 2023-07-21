const Joi = require("joi");

exports.postTodoSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    isFinished: Joi.boolean(),
  }),
};

// ?q=a&page[offset]=0&page[limit]=10
exports.getTodosSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }),
    sort: Joi.object({
      by: Joi.string().valid("updated_at", "created_at"),
      order: Joi.string().valid("asc", "desc"),
    }),
    // filters: Joi.object({

    // })
  }),
};

exports.patchTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    isFinished: Joi.boolean(),
  }),
};

exports.getTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.deleteTodoSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
