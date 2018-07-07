import utils from './utils.js'

var NOTES_KEY = 'notesApp'
var notes = []
var todo = []

function init() {
    notes = utils.loadFromStorage(NOTES_KEY)
    if (!notes || notes.length === 0) {
        notes = []
        return
    }
    saveToStorage(NOTES_KEY, notes)
}


function query() {
    return Promise.resolve(notes);
}

function addNote(type, noteInput, noteEdit) {
    let note = {}
    if (!noteEdit) {
        note = {
            id: utils.makeid(),
            type: type,
            data: noteInput
        }
        notes.push(note)
    } else {
        var currIdx = notes.findIndex(note => { return note.id === noteEdit.id })
        notes[currIdx] = noteEdit;
    }

    saveToStorage(NOTES_KEY, notes)
    return Promise.resolve()
}

function deleteNote(noteId) {
    var currIdx = notes.findIndex(note => { return note.id === noteId })
    notes.splice(currIdx, 1)
    saveToStorage(NOTES_KEY, notes)
    return Promise.resolve()
}




function findNoteById(id) {
    var currNote = notes.find(note => { return note.id === +id })
    return Promise.resolve(currNote);
}

function searchNote(searchInput) {
    let result = []
    if (searchInput) {
        result = notes.filter(note => {
            return (note.data.titelNote.includes(searchInput.byTitle.toLowerCase()))
        })
    } else result = notes

    return Promise.resolve(result)
}


function saveToStorage(key, value) {
    utils.saveToStorage(key, value)
}

function loadFromStorage(key) {
    return utils.loadFromStorage(key)
}

function setColor() {
    var bodyStyles = window.getComputedStyle(document.body);
    var currVal = bodyStyles.getPropertyValue('--note-bg-color');

    swal("Choose color", {
        content: {
            element: "input",
            attributes: {
                className: "input-color",
                placeholder: "Change theme color",
                value: currVal,
                type: "color",
            },
        },
        buttons: {
            cancel: true,
            confirm: true,
            Reset: {
                value: 'whitesmoke'
            }
        },

    })
        .then((value) => {
            if (value) {
                renderColor(value)
            } else {
                renderColor(currVal)
            }

        });
}

function renderColor(colorInput) {
    var html = document.getElementsByTagName('html')[0];
    html.style.setProperty("--note-bg-color", colorInput);
    var elInput = document.querySelector('.input-color');
}


export default {
    init,
    addNote,
    query, findNoteById,
    deleteNote,
    searchNote,
    setColor


}