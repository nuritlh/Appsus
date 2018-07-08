import kepperService from '../../service/kepper-service.js';

export default {
  props: ['todo'],
  template: `
    <section class="flex">
    <div class="flex note-todo">
          <button  :disabled="!isTodoEmpty" 
          class="add-btn fas fa-plus" :class="{hidden: isTodoSave}" @click="saveTodoInService"></button>
        <div class="flex">
          <button :disabled="!todo.id" class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></button>
        <input   name="text" type="text" class="input-text"  v-model="todo.todoTitle" placeholder="Todo"/>
        <input v-model="todo.isChecked" class="input-checkBox"  type="checkbox" />
        </div>

    </div>
    </section>
    `,
  data() {
    return {
      isSave: false,
      isEdit: false
    };
  },
  computed:{
    isTodoEmpty(){
      if(this.todo.todoTitle === ''){
        return false
      } else return true
    },
    isTodoSave(){
      return this.isSave
    }

  },

  methods: {
    deleteTodo(id) {
      kepperService.deleteTodo(id);
    },
    saveTodoInService() {
      this.isSave = true
      kepperService.saveTodo(this.todo);
    }
  }
};
