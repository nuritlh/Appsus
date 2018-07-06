import utils from './utils.js';

var NOTES_KEY = 'notesApp';
var notes = [];

function init() {
  notes = utils.loadFromStorage(NOTES_KEY);

  if (!notes || notes.length === 0) {
    notes = [];
    return;
  }
  saveToStorage(NOTES_KEY, notes);
}

function addNote(type, note) {
  var note = {
    id: utils.makeid(),
    type: type,
    data: note
  };
  notes.push(note);
  saveToStorage(NOTES_KEY, notes);
  return Promise.resolve();
}

function query() {
  // debugger
  return Promise.resolve(notes);
}

function saveToStorage(key, value) {
  utils.saveToStorage(key, value);
}

function loadFromStorage(key) {
  return utils.loadFromStorage(key);
}

export default {
  init,
  addNote,
  query
};
