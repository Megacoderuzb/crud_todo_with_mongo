const Joi = require("joi");

exports.postListSchema = {
    body: Joi.object({
        name: Joi.string().required(),
    }),
};

// ?q=a&page[offset]=0&page[limit]=10
exports.getListsSchema = {
    query: Joi.object({
        q: Joi.string(),
        page: Joi.object({
            offset: Joi.number().integer(),
            limit: Joi.number().integer().when("offset", { is: Joi.exist(), then: Joi.required(), otherwise: Joi.forbidden() }),
        }),
        // sort: Joi.object({
        //     by: Joi.string().valid("updated_at", "created_at"),
        //     order: Joi.string().valid("asc", "desc"),
        // }),
        // filters: Joi.object({

        // })
    }),
};

exports.patchListSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
    body: Joi.object({
        name: Joi.string(),
    }),
};

exports.getListSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
};

exports.deleteListSchema = {
    params: Joi.object({
        id: Joi.string(),
    }),
};
