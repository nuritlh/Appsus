import utils from './utils.js'

var NOTES_KEY = 'notesApp'
var notes = []
var todos = []

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
            data: noteInput,
            pinNote: false
        }
        notes.push(note)
    } else {
        var currIdx = notes.findIndex(note => {
            return note.id === +noteEdit.id
        })
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
        if (searchInput.byPin) {
            result = notes.filter(note => {
                return (note.pinNote === searchInput.byPin)
            })
        }
        else if (searchInput.byType === '') {
            result = notes.filter(note => {
                return (note.data.titelNote.includes(searchInput.byTitle.toLowerCase()))
            })
        } else {
            result = notes.filter(note => {
                return (note.type.includes(searchInput.byType.toLowerCase()))
            })
        }

    } else result = notes

    return Promise.resolve(result)
}

function saveTodo(todo, prviewList) {
    if (!prviewList) {
        var currIdx = todos.findIndex(item => {
            return item.id === todo.id
        })
        todos[currIdx] = todo;
        var newTodo = {
            id: utils.makeid(),
            todoTitle: '',
            isChecked: false
        }
        todos.push(newTodo)
    }
    else {
        debugger
        todos = prviewList
    }
}

function createTodos() {
    var todos = [{
        id: utils.makeid(),
        todoTitle: '',
        isChecked: false
    }]
    return todos
}

function getTodos() {
    todos = createTodos()
    return Promise.resolve(todos)
}

function deleteTodo(id) {
    var currIdx = todos.findIndex(item => { return item.id === +id })
    todos.splice(currIdx, 1)
    return currIdx
    console.log('todos after delet', todos)
}


function setColor() {
    var bodyStyles = window.getComputedStyle(document.body);
    var currVal = bodyStyles.getPropertyValue('--note-bg-color');

    return swal("Choose color", {
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

}

function addPinToNote(noteId) {
    let currId = notes.findIndex(note => { return note.id === noteId });
    notes[currId].pinNote = !notes[currId].pinNote
}

function sortByPinNote() {
    notes.sort(function (itemA, itemB) {
        return (itemA.pinNote === itemB.pinNote) ? 0 : itemA.pinNote ? -1 : 1;
    });
    return Promise.resolve(notes);
}

function saveToStorage(key, value) {
    utils.saveToStorage(key, value)
}

function loadFromStorage(key) {
    return utils.loadFromStorage(key)
}


export default {
    init,
    addNote,
    query, findNoteById,
    deleteNote,
    searchNote,
    setColor,
    sortByPinNote,
    addPinToNote,
    saveTodo,
    getTodos,
    deleteTodo,
    createTodos



}