const { NotFoundError } = require("../../shared/errors");
const List = require("./List");

const removeList = async ({ id, user }) => {
    const existing = await List.findOne({ _id: id, user });

    if (!existing) {
        throw new NotFoundError("List topilmadi.");
    }

    return List.findByIdAndRemove(id);
};

module.exports = removeList;
