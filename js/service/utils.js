function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function makeid() {
  return Date.now().valueOf();
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCurrDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  ('2014-02-09');
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

export default {
  loadFromStorage,
  saveToStorage,
  makeid,
  getRandomInteger,
  getCurrDate
};
