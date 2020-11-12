export const refSelector = (currentDataArr, allData) => {
    // debugger
    if (Object.keys(allData).length !== 0 && currentDataArr) {
        return currentDataArr.map(id => allData[id]).filter(el => el);
    }
    else return [];
}
export const bookclubShowSelector = (bookclubs, allData, type) => {
    if(bookclubs){
        switch(type){
            case "books":
                return refSelector(bookclubs.books, allData);
            case "users":
                return refSelector(bookclubs.users, allData);
            case "forums":
                return refSelector(bookclubs.forums, allData);
            default:
                return [];
        }
    }
    return [];
}

