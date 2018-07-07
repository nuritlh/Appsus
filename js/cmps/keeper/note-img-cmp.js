import utils from '../../service/utils.js'
import kepperService from '../../service/kepper-service.js'

const txtTypt = 'note-prev-img';

export default {
  template: `
    <section class="flex justify-center">
        <div class="note-img flex-col align-center">
        <img class="note-img-item" :src="data.url">
        <input class="note-img-item"  name="titel" type="text" v-model="data.titelNote" placeholder="Title"/>
        <button  :class="[isEdit?'far fa-save':'fas fa-plus-circle']" 
        class="note-img-item" @click="addImgNote"></button>
        </div>
    </section>
    
    `,
    data() {
        return {
            data: {
                titelNote: '',
                url: ''
            },
            isEdit:false,
        }
    },
    mounted(){
        var randomNum = utils.getRandomInteger(100,1000)
        this.data.url = `https://picsum.photos/200/300/?image=${randomNum}`
        var noteId  = this.$route.params.textNoteId

        if(noteId) {
            kepperService.findNoteById(noteId)
           .then(note=>{
             this.isEdit = !this.isEdit
               this.data.titelNote = note.data.titelNote 
               this.data.url = note.data.url 
           })
         }
    },
    methods: {
    
        addImgNote() {
            var note = this.data;
            if (this.data.titelNote !== '' || this.data.url !== '') {
                kepperService.addNote(txtTypt, note)
                    .then(() => {
                        swal("your note added to the list");
                    })
            }
        }
    
  }
};
