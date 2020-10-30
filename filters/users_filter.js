const filterUsers = (query) => {
    const res = {};
    if (!!query.keywords) {
        res.title = new RegExp(query.keywords, "ig");
    }
    return res;
};

module.exports = filterUsers;