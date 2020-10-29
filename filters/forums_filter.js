const filterForums = (query) => {
    const res = {};
    if (!!query.keywords) {
        res.title = new RegExp(query.keywords, "ig");
    }
    // console.log(res
    return res;
};

module.exports = filterForums;