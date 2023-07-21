const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description: {
      type: mongoose.SchemaTypes.String,
    //   required: true,
    },
    isFinished: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
