const filterBookclubs = (query) => {
    const res = {};
    if (!!query.keywords) {
        res.title = new RegExp(query.keywords, "ig");
    }
    if (!!query.bookCnt) {
        res.$where =`this.books.length > ${query.bookCnt}`
    }
    // console.log(res)
    return res;
};

module.exports = filterBookclubs;