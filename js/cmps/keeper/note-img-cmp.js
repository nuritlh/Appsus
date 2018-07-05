import uploadService from '../../service/upload-service.js'
import kepperService from '../../service/kepper-service.js'

const txtTypt = 'note-prev-img';

export default {
    template: `
    <section class="flex justify-center">
        <div class="note-img flex-col align-center">
        <img class="note-img-item" :src="data.url">
    <!-- <form class="form-upload" action="#">
      <div class="input-file-container">
        
         <input class="input-file" type="file" name="image" @change="onFileInputChange($event)" />
         <label tabindex="0" for="my-file" class="input-file-trigger">Select a file...</label>
        </div>
        </form> -->

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
                url: 'img/kepper/Buttercup_pic.jpg'
            },
            isEdit:false,
        }
    },
    mounted(){
        var noteId  = this.$route.params.textNoteId
        if(noteId) {
            kepperService.findNoteById(noteId)
           .then(note=>{
            // this.noteEdit = note
             this.isEdit = !this.isEdit
               this.data.titelNote = note.data.titelNote 
               this.data.url = note.data.url 
           })
         }
    },
    methods: {
        onFileInputChange(ev) {
            uploadService.handleImageFromInput(ev)
        },
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

}