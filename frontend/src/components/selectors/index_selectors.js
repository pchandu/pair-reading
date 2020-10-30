export const refSelector = (currentUserArr, allData) => {
    // debugger
    if (Object.keys(allData).length !== 0) {
        return currentUserArr.map(id => allData[id]).filter(el => el);
    }
    else return [];
}
