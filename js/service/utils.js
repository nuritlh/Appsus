function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}
 
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function makeid(){
  return Date.now().valueOf();
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export default {
    loadFromStorage,
    saveToStorage,
    makeid,
    getRandomInteger

}