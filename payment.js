function payment() {
    window.location.href = './verification.html';
}
function getObjectFromLocalStorage(key) {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}

function checkLocalStorageItem(key) {
    return (!!localStorage.getItem(key))
}

document.addEventListener('DOMContentLoaded', () => {
    let exchangeData;

    if(checkLocalStorageItem("exchangeData")) {
        exchangeData = getObjectFromLocalStorage("exchangeData")
    } else {
        throw new Error('No exchange data provided')
    }





})