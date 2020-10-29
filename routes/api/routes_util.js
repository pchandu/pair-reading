const convert2POJO = (res,data) => {
    let pojo = {};
    data.forEach(el => Object.assign(pojo, pojo, { [el._id]: el }))
    return res.json(pojo)
}
const nestedIndex = (Model, nestedData, query, res) => (
    Model.find(Object.assign({},{ '_id': { $in: nestedData } },query))
        .then(el => convert2POJO(res, el))
)
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
    getRandomInt
}
