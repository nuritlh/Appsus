import eventBus, { ADD_TODO } from '../../service/event-bus.service.js'
import kepperService from '../../service/kepper-service.js';

export default {
    props:['todo'],
    template:`
    <section class="flex">
    <div class="flex note-todo">
       
        <div class="flex">
        <button  class="add-btn fas fa-plus" @click="saveTodoInService"></button>
        <button :disabled="!todo.id" class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></button>
        <input   name="text" type="text" v-model="todo.todoTitle" placeholder="Todo"/>
        <input v-model="todo.isChecked"  type="checkbox" />
        </div>

    </div>
    </section>
    `,
    data() {
            return {
                isSave:false,
                isEdit:false
            }
    },
  
    methods:{
        deleteTodo(id){
         
       kepperService.deleteTodo(id)
        
        },
        saveTodoInService(){
            kepperService.saveTodo(this.todo)
        }
       
    }


}