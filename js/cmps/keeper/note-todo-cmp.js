

export default {
    template:`
    <section>
    <div class="flex">
        <button>x</button>
        <input class=""  name="text" type="text" v-model="todoTxt" placeholder="Title"/>
        <input class=""   type="checkbox" />
        {{todoTxt}}
    </div>
    </section>
    `,
    data() {
            return {
                todoTxt:''
            }
    }

}