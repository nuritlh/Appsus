

export default {
    template:`
    <section>
    <div class="flex note-todo">
        <button class="fas fa-trash-alt"></button>
        <input class=""  name="text" type="text" v-model="todoTxt" placeholder="Title" @focusout="emitData"/>
        <input class=""   type="checkbox" />
        {{todoTxt}}
    </div>
    </section>
    `,
    data() {
            return {
                todoTxt:''
            }
    },
    methods:{
        emitData(){
            debugger
            // $emit('saveTodo',this.todoTxt)
        }
    }


}