const List = require("./List");
const User = require("../users/User");

const addList = async (data) => {
    const result = await List.create(data);

    await User.findByIdAndUpdate(data.user, { $push: { lists: result._id } });

    return result;
};

module.exports = addList;
