import kepperService from '../../service/kepper-service.js';
import eventBus, { OPEN_NOTE } from '../../service/event-bus.service.js'



export default {
    props: ['data', 'id'],
    template: `
    <section>
        <div class="preview-txt dynamic-cmp-item flex-col" @click="openTodosCmp">
        <div class="flex space-between">
           <button class="fas fa-trash-alt" @click.stop="deleteNote"></button>
            <i class="fas fa-pencil-alt"></i>
           </div>
        <h1>{{data.titelNote}}</h1>
        <ul class="clean-list todos-preview">
            <li v-for="todo in data.todosItem">
            <div class="flex">
                <p>{{todo.todoData.todoTitle}}</p>
            <input :disabled="true" :value="todo.todoData.isChecked"  type="checkbox" />
            </div>
          </li>
        </ul>
        </div>
  
    </section>
    `,
    created() {
        console.log('tooss prev', this.data)
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
        }
    }
}