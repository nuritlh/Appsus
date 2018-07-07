import toDo from '../keeper/note-todo-cmp.js'
import utilsService from '../../service/utils.js';
import kepperService from '../../service/kepper-service.js';



const todosTypt = 'todos-prev-list';


export default {
    props: ['dataNote'],
    template: `
    <section class="todos-list todos-list flex-col">
        <div class="flex todos-header">
            <input  name="titel" type="text" v-model="data.titelNote" 
            placeholder="Title"/>
            <button class="far fa-save" @click="addTodosNote">
            add
            </button>
        </div>
  <div class="flex-col">
  <button class="add-btn fas fa-plus" @click="addTodo"></button>
  <component v-if="cmps" v-for="(cmp, idx) in cmps" :is="cmp.cmpType" :id="cmp.id" 
            :key="idx"
            :todoTxt="cmp.todoTxt"
            @deleteTodo="deleteItem"
            @saveTodo="saveItem">
                {{cmp}}
            </component>
  </div>
                      cmps: {{cmps}}
          todos item: {{data.todosItem}}
    </section>
   
    `,
    data() {
        return {
            data: {
                titelNote: '',
                todosItem: []
            },
            currIdx: 0,
            cmps: null,
            noteEdit:null,
            isEdit: false,
            noteId: null
        }

    },
    created() {
        this.getData()
    },
  
    methods: {
        getData(){
            var noteId = this.$route.params.todosId
            if (noteId) {
                kepperService.findNoteById(noteId)
                    .then(note => {
                        console.log(note)
                        this.noteEdit = note
                        this.isEdit = !this.isEdit
                        this.data.titelNote = note.data.titelNote;
                        this.data.todosItem = note.data.todosItem;
                        note.data.todosItem.forEach(item => {
                            debugger
                            this.cmps = [
                                { cmpType: 'to-do', id: item.id, todoTxt: item.todoData.todoTitle }
                            ]
                        });
                    })
            } else{
                this.cmps = [{ cmpType: 'to-do', id: utilsService.makeid() , todoTxt: null,}]
            }
        },
        saveItem(todoData) {
            if (todoData.id !== null) {
                if (todoData.id) {
                    this.data.todosItem.push({
                        id: todoData.id,
                        todoData: {
                            todoTitle: todoData.todoTitle,
                            isChecked: todoData.isChecked
                        }
                    })
                }

            }
        },
        addTodo() {
            if (this.cmps.length === this.data.todosItem.length) {
                this.cmps.push({ cmpType: 'to-do', id: utilsService.makeid() })
                this.currIdx++
            }

        },
        addTodosNote() {
            if(this.noteEdit) {
                this.noteEdit.data = this.data;
            }
            console.log(this.data)
            kepperService.addNote(todosTypt, this.data,this.noteEdit)
                .then(() => {
                    swal("your todos added to the list");
                })

        },
        deleteItem(todoId) {
            var currItem = this.cmps.findIndex(todo => { return todo.id === todoId })
            this.data.todosItem.splice(currItem, 1);
            this.cmps.splice(currItem, 1);
        }

    },


    components: {
        toDo
    }
}

