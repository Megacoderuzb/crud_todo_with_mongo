const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.SchemaTypes.String,
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

const List = mongoose.model("List", listSchema);

module.exports = List;
