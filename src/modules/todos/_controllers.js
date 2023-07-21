const express = require("express");
const httpValidator = require("../../shared/http-validator");
const { postTodoSchema, getTodoSchema, patchTodoSchema, deleteTodoSchema, getTodosSchema } = require("./_schemas");
const addTodo = require("./add-todo");
const listTodos = require("./list-todos");
const showTodo = require("./show-todo");
const editTodo = require("./edit-todo");
const removeTodo = require("./remove-todo");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const postTodo = async (req, res, next) => {
    try {
        httpValidator({ body: req.body }, postTodoSchema);

        const result = await addTodo({ ...req.body, user: req.user.id });

        res.status(201).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getTodos = async (req, res, next) => {
    try {
        httpValidator({ query: req.query }, getTodosSchema);

        const result = await listTodos({ user: req.user.id, ...req.query });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params }, getTodoSchema);

        const result = await showTodo({ ...req.params, user: req.user.id });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const patchTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params, body: req.body }, patchTodoSchema);

        const result = await editTodo({ id: req.params.id, user: req.user.id, ...req.body });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteTodo = async (req, res, next) => {
    try {
        httpValidator({ params: req.params }, deleteTodoSchema);

        const result = await removeTodo({ id: req.params.id, user: req.user.id });

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    postTodo,
    getTodos,
    getTodo,
    patchTodo,
    deleteTodo,
};
