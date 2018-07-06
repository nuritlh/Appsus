import toDo from '../keeper/note-todo-cmp.js'

const todosTypt = 'todos-prev-txt';

export default {
    template: `
    <section class="todos-list">
    <input class="note-txt-item"  name="titel" type="text" v-model="data.titelNote" 
            placeholder="Title"/>
            <button class="fas fa-plus" @click="addTodo"></button>
            <button class="far fa-save" @click="addTodosNote">
            add
        </button>
           
            <!-- <ul v-for="(cmp, idx) in cmps">
                <li v-for="(cmp, idx) in cmps">
                <div class="flex note-todo">
        <button class="fas fa-trash-alt"></button>
        <input class=""  name="text" type="text" v-model="data.todoTxt" placeholder="Title" />
        <input class=""   type="checkbox" />
        {{data.todoTxt}}
    </div>
                </li>
                </ul> -->
            <component v-if="cmps" v-for="(cmp, idx) in cmps" :is="cmp.cmpType" :key="idx" >
            </component>
           
    </section>
   
    `,
    data() {
        return {
            data: {
                titelNote: '',
                // todoTxt:''
            },
            cmps:null,
            txt:''
        }

    },
    created() {
        this.cmps = [{ cmpType: 'to-do' }]
    },
    methods: {
        addTodo() {
            this.cmps.push({ cmpType: 'to-do' })

        },
        addTodosNote(){
           
            this.cmps.forEach(todo => {
                debugger
                console.log(todo)
                
            });
                // if(this.data.titelNote !== '' || this.data.noteTxt !== '' ){
                //     kepperService.addNote(todosTypt,note)
                //     .then(()=>{
                //         console.log('note list added')
                //     })
                
            
        },
       
    },
   

    components: {
        toDo
    }
}

