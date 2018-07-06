import utils from './utils.js';

var NOTES_KEY = 'notesApp';
var notes = [];
var todo = [];

function init() {
  notes = utils.loadFromStorage(NOTES_KEY);
  if (!notes || notes.length === 0) {
    notes = [];
    return;
  }
  saveToStorage(NOTES_KEY, notes);
}

function query() {
  return Promise.resolve(notes);
}

function addNote(type, noteInput, noteEdit) {
  let note = {};
  if (!noteEdit) {
    note = {
      id: utils.makeid(),
      type: type,
      data: noteInput
    };
    notes.push(note);
  } else {
    var currIdx = notes.findIndex(note => {
      return note.id === noteEdit.id;
    });
    notes[currIdx] = noteEdit;
  }

  saveToStorage(NOTES_KEY, notes);
  return Promise.resolve();
}

function deleteNote(noteId) {
  var currIdx = notes.findIndex(note => {
    return note.id === noteId;
  });
  notes.splice(currIdx, 1);
  saveToStorage(NOTES_KEY, notes);
  return Promise.resolve();
}

function findNoteById(id) {
  var currNote = notes.find(note => {
    return note.id === +id;
  });
  return Promise.resolve(currNote);
}

// function saveTodo(data){
//     todo.push(data)
// }

function saveToStorage(key, value) {
  utils.saveToStorage(key, value);
}

function loadFromStorage(key) {
  return utils.loadFromStorage(key);
}

export default {
  init,
  addNote,
  query,
  findNoteById,
  deleteNote
};
