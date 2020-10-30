const convert2POJO = (res,data) => {
    let pojo = {};
    data.forEach(el => Object.assign(pojo, pojo, { [el._id]: el }))
    return res.json(pojo)
}
const nestedIndex = (Model, nestedData, query, res) => (
    Model.find(Object.assign({},{ '_id': { $in: nestedData } },query))
        .then(el => convert2POJO(res, el))
)

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
    Model.find({ 'books': {$in: dataBooks} })
        .then(el => {
            return convert2POJO(res, el)
        })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const uniqueIdx = (nestedModel, model2) => {
    let idx = 0;
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
    userBookMatches
}
