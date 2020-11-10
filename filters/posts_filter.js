const filterPosts = (query) => {
    const res = {};
    if (!!query.keywords) {
        res.body = new RegExp(query.keywords, "ig");
    }
    // console.log(res
    return res;
};

module.exports = {
    filterPosts
};