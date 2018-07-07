import eventBus, { OPEN_NOTE } from '../../service/event-bus.service.js'
import kepperService from '../../service/kepper-service.js';

export default {
    props: ['data', 'id'],
    template: `
     <section class="preview-note-txt">
       <div class="preview-txt dynamic-cmp-item flex-col" @click="openTxtCmp">
           <div class="flex space-between">
           <button class="fas fa-trash-alt" @click.stop="deleteNote"></button>
       <i class="fas fa-pencil-alt"></i>
    
           </div>
    <div>
        <h1>{{data.titelNote}}</h1>
        <hr>
        <p>{{data.noteTxt}}</p>
    </div>
    <button class="btn-color" @click.stop="changeColor">
       <i class="fas fa-palette"></i>
       </button>
       </div>
         
     </section>
     
     `,
    created() {
        console.log('data from pre', this.data)
    },
    methods: {
        openTxtCmp() {
            var urlTo = `/kepperApp/textNote/${this.id}`
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
        }
    }
}