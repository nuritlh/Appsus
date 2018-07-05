import kepperService from '../service/kepper-service.js'
// import noteTxt from '../cmps/keeper/note-txt-cmp.js'
// import imgNote from '../cmps/keeper/note-img-cmp.js'
import notePrevTxt from '../cmps/keeper/note-preview-cmp.js'
import notePrevImg from '../cmps/keeper/note-img-preview-cmp.js'
import noteTodos from '../cmps/keeper/todos-list-cmp.js'




export default {

    template:`
    <section class="kepper-app">
       <ul class="clean-list flex">
       <li><button v-if="newNoteShow" class="fas fa-times-circle btn-close"  @click="closeCmp"></button></li>
           <li><button :class="[btnclass === 'textNote' ? 'fas fa-times-circle' : 'far fa-file-alt','btn-keep']" ref="textNote" @click="goTo('textNote')">txt</button></li>
           <li><button :class="[btnclass === 'imgNote' ? 'fas fa-times-circle' : 'fas fa-image','btn-keep']" @click="goTo('imgNote')">img</button></li>
           <li><button>todos</button></li>
           <li></li>
       </ul>
       <router-view v-if="newNoteShow">
        </router-view>
    <div v-else  class="dynamic-cmp flex">
    <component v-if="cmps" v-for="(cmp, idx) in cmps" :is="cmp.type" :key="idx" 
       :id="cmp.id"
       :data="cmp.data">
         
        </component> 
        <note-todos></note-todos>

    </div>

       

    
    </section>
    `,
       data() {
        return {
            newNoteShow : false,
            btnclass:'',
            cmps: null
        }
    },
    created(){
        kepperService.init();

        kepperService.query()
        .then(notes =>{
            debugger
            if(notes){
                this.cmps = notes;
                debugger
                console.log('cmps',this.cmps)
            }
         
        })
    },
    methods:{
        goTo(url) {
            console.log(this.$refs)
            this.btnclass = url
            this.newNoteShow = true
            var urlTo = `/kepperApp/${url}`
            this.$router.push(urlTo)
        },
        closeCmp(){
            this.newNoteShow = false
        }

    },
  
    components:{
    //    noteTxt,
        notePrevTxt,
        notePrevImg,
        noteTodos
        // imgNote
    }
}