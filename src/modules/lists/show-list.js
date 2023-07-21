const { NotFoundError } = require("../../shared/errors");
const List = require("./List");

const showList = async ({ id, user }) => {
    const list = await List.findOne({ _id: id, user });

    if (!list) {
        throw new NotFoundError("List topilmadi.");
    }

    return list;
};

module.exports = showList;
