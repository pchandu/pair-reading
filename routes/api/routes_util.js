const convert2POJO = (res,data) => {
    let pojo = {};
    data.forEach(el => Object.assign(pojo, pojo, { [el._id]: el }))
    return res.json(pojo)
}
const nestedIndex = (Model, nestedData, query, res, limit) => {
    // console.log(limit)
    return nestedIndexBase(Model, nestedData, query, limit)
        .then(el => convert2POJO(res, el));
}
const nestedIndexBase = (Model, nestedData, query, limit) => {
    // console.log(limit)
    return Model.find(Object.assign({}, { '_id': { $in: nestedData } }, query)).limit(parseInt(limit))
}

const userMatches = (Model, data, res) => {
    const params = [
    ]
    const { books: dataBooks } = data;
    const {preferred_meeting_time:p} = data;
    if (p.M) params.push({ 'preferred_meeting_time.M': p.M });
    if (p.A) params.push({ 'preferred_meeting_time.A': p.A });
    if (p.E) params.push({ 'preferred_meeting_time.E': p.E });
    if(params.length === 0) return res.json({});
    Model.find({$or: params})
        .find({ books: { $in: dataBooks } })
        .then(el => {
            return convert2POJO(res, el)
        })
}
const userTimesMatches = (Model, data, res) => {
    const params = [
    ]
    const {preferred_meeting_time:p} = data;
    if (p.M) params.push({ 'preferred_meeting_time.M': p.M });
    if (p.A) params.push({ 'preferred_meeting_time.A': p.A });
    if (p.E) params.push({ 'preferred_meeting_time.E': p.E });
    if(params.length === 0) return res.json({});
    Model.find({$or: params})
        .then(el => {
            return convert2POJO(res, el)
        })
}
const userBookMatches = (Model,data,res) => {
    const {books:dataBooks} = data;
    // console.log(dataBooks)
    Model.find({ books: {$in: dataBooks} })
        .then(el => {
            return convert2POJO(res, el)
        })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const uniqueIdx = (nestedModel, model2) => {
    let idx = getRandomInt(model2.length);
    while (nestedModel.includes(model2[idx]._id)) {
        idx = getRandomInt(model2.length);
    }
    return idx;
}

module.exports = {
    convert2POJO,
    nestedIndex,
    uniqueIdx,
    getRandomInt,
    userTimesMatches,
    userBookMatches,
    userMatches
}
