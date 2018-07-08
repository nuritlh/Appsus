import kepperService from '../../service/kepper-service.js';
import eventBus, { OPEN_NOTE } from '../../service/event-bus.service.js'



export default {
    props: ['data', 'id'],
    template: `
    <section>
        <div class="preview-txt dynamic-cmp-item flex-col" @click="openTodosCmp" 
        :style="{backgroundColor:defulteColor}">
        <div class="flex space-between">
                <div>
               <button class="fas fa-trash-alt" @click.stop="deleteNote"></button>
               <button class="btn-pin fas fa-thumbtack" :class="{pinActive:isNotePin}" @click.stop="pinNote"></button>
               </div>
            <i class="fas fa-pencil-alt"></i>
           </div>
        <h1>{{data.titelNote}}</h1>
        <ul class="clean-list todos-preview">
            <li v-for="todo in data.todosItem">
            <div class="flex space-between">
               <p>{{todo.todoTitle}}</p>
             <input :disabled="true" :value="todo.isChecked"  type="checkbox" />
            </div>
          </li>
        </ul>
        <button class="btn-color" @click.stop="changeColor">
       <i class="fas fa-palette"></i>
       </button>
        </div>
    </section>
    `,
        data(){
            return {
              defulteColor:'whitesmoke',
              
            }
       },
    created() {
        console.log('tooss prev', this.data)
    },
    computed:{
        isNotePin(){
            return this.isPin
        }
    },
    methods: {
        openTodosCmp() {
            var urlTo = `/kepperApp/todos/${this.id}`
            this.$router.push(urlTo)
            eventBus.$emit(OPEN_NOTE, urlTo)
        },
        deleteNote(ev) {
            kepperService.deleteNote(this.id)
            .then(()=>{
                swal("your note deleted from the list");
            })
        },
        changeColor(){
            kepperService.setColor()
            .then((value) => {
                if (value) {
                    this.defulteColor = value
                } else {
                    this.defulteColor = this.defulteColor
                }
            });
        },
        pinNote(){
            this.$emit('notePin',this.id)
        }
    }
}