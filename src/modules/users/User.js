const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        last_name: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        username: {
            type: mongoose.SchemaTypes.String,
            required: true,
            unique: true,
        },
        password: {
            type: mongoose.SchemaTypes.String,
            required: true,
        },
        lists: {
            type: [mongoose.SchemaTypes.ObjectId],
            default: [],
            ref: "List",
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

const User = mongoose.model("User", userSchema);

module.exports = User;
