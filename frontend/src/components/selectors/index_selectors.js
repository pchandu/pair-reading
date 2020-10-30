export const refSelector = (currentDataArr, allData) => {
    debugger
    if (Object.keys(allData).length !== 0) {
        return currentDataArr.map(id => allData[id]).filter(el => el);
    }
    else return [];
}
