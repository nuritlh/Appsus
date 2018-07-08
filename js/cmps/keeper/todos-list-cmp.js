import toDo from '../keeper/note-todo-cmp.js'
import utilsService from '../../service/utils.js';
import kepperService from '../../service/kepper-service.js';
import eventBus, { ADD_TODO } from '../../service/event-bus.service.js'




const todosTypt = 'todos-prev-list';


export default {
    props: ['dataNote'],
    template: `
    <section class="todos-list todos-list flex-col align-center">
        <div class="flex todos-header">
            <input  name="titel" autoFocus type="text" v-model="data.titelNote" 
            placeholder="Todos"/>
            <button :disabled="(!data.todosItem.length > 0)" class="far fa-save" @click="addTodosNote">
            </button>
        </div>
     <div class="flex-col todos-main">
         <div >
            <to-do v-for="todo in data.todosItem" :todo="todo">
            </to-do>
             
  </div>

  </div>
    </section>
    `,
    data() {
        return {
            data: {
                titelNote: '',
                todosItem: []
            },
            noteEdit: null,
            isEdit: false,
            noteId: this.$route.params.textNoteId
        }
    },
    created() {
        this.getData()
    },
    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            var noteId = this.$route.params.todosId
            if (noteId) {
                kepperService.findNoteById(noteId)
                    .then(note => {
                        var note = JSON.parse(JSON.stringify(note))
                        console.log(note)
                        this.noteId = noteId
                        this.noteEdit = note
                        this.isEdit = !this.isEdit
                        this.data.titelNote = note.data.titelNote;
                        this.data.todosItem = note.data.todosItem;
                        kepperService.saveTodo(null,this.data.todosItem)
                     
                    })
            } else {
                debugger
                this.data.todosItem = kepperService.getTodos()
             
            }
        },
        saveItem(data) {
            if (data.id !== null) {
                if (data.id) {
                    this.data.todosItem.push({
                        id: data.id,
                        data: {
                            todoTitle: data.todoTitle,
                            isChecked: data.isChecked
                        }
                    })
                }

            }
        },
        addTodosNote() {
            kepperService.addNote(todosTypt, this.data, this.noteEdit)
                .then(() => {
                    swal("your todos added to the list");
                    kepperService.createTodos()
                })
        },
        todoTxtChange(todo) {
            let currTodoIdx = this.data.todosItem.findIndex(item => {
                return item.id === todo.id
            })
            if (currTodoIdx !== -1) {
                this.data.todosItem[currTodoIdx] = todo;
            }
            console.log('todooo', todo)
        }

    },
    components: {
        toDo
    }
}

