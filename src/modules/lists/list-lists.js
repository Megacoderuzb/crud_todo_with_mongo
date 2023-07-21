const List = require("./List");

const listLists = async ({ user, q, page = { limit: 2, offset: 0 } }) => {
    const filter = {};

    if (q) {
        filter.name = { $regex: new RegExp(q, "i") };
    }

    const result = await List.find({ user, ...filter })
        .populate([
            {
                path: "user",
                select: "first_name username",
            },
        ])
        .skip(page.offset)
        .limit(page.limit);

    return { list: result, pageInfo: { ...page } };
};

module.exports = listLists;
