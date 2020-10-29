const filterBooks = (query) => {
    const res = {};
    if(!!query.keywords){
        res.title = new RegExp(query.keywords, "ig");
    }
    if(!!query.author){
        res.author = new RegExp(query.author, "ig");
    }
    if(!!query.description){
        res.description = new RegExp(query.description, "ig");
    }
    // console.log(res
    return res;
};

module.exports = filterBooks;