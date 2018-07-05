import toDo from '../keeper/note-todo-cmp.js'
export default {
    template: `
    <section class="todos-list">
    <input class="note-txt-item"  name="titel" type="text" v-model="data.titelNote" 
            placeholder="Title"/>
            <button @click="addTodo">+</button>
            <ul class="clean-list">
                <li><to-do></to-do> </li>
            </ul>

            <component v-if="cmps" v-for="(cmp, idx) in cmps" :is="cmp.cmpType" :key="idx" >
            </component>
            {{cmps}}
    </section>
   
    `,
data() {
    return {
        data:{
            titelNote:'',
        },
        cmps:[ {cmpType: 'to-do'},{cmpType: 'to-do'}]
    }

},
methods:{
    addTodo(){
       this.cmps.push({cmpType: 'to-do'})
       
    }
},

components: {
        toDo
    }
}

