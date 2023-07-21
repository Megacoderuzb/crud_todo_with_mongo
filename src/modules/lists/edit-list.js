const { NotFoundError } = require("../../shared/errors");
const List = require("./List");

const editList = async ({ id, user, ...changes }) => {
    const existing = await List.findOne({ _id: id, user });

    if (!existing) {
        throw new NotFoundError("List topilmadi.");
    }

    return List.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editList;
