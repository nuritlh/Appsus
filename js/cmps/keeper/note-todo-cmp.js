
export default {
    props:['id','todoTxt'],
    template:`
    <section class="flex">
    <div class="flex note-todo">
       
        <div class="flex">
        <button :disabled="!isSave" class="fas fa-trash-alt" @click="emitDeleteTodo"></button>
        <input   name="text" type="text" v-model="todoData.todoTitle" placeholder="Todo" @focusout="emitData"/>
        <input v-model="todoData.isChecked"  type="checkbox" />
        </div>
        <!--  -->
{{todoData.id}}
    </div>
    </section>
    `,
    data() {
            return {
                todoData:{
                    todoTitle:'',
                    id:null,
                    isChecked:null
                },
                isSave:false,
                isEdit:false

               
            }
    },
    created(){
            this.todoData.id = this.id
    },
    mounted(){
        if(this.todoTxt){
            this.todoData.todoTitle =this.todoTxt;
            this.isEdit = true
            this.isSave = true
        }
        
    },
    computed:{
        todoId(){
            return this.todoData.id = this.id
        }
    },
    methods:{
        emitDeleteTodo(){
            this.toSave = false
            this.$emit('deleteTodo',this.todoData.id)
        },
        emitData(){
                if(this.todoData.todoTitle !== ''){
                    this.isSave = true
                    this.$emit('saveTodo',this.todoData)
                }
            
            
        }
       
    }


}