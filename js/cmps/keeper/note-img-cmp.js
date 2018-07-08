import { eventBus, CLOSE_NOTE } from '../../service/eventbus-service.js';
import kepperService from '../../service/kepper-service.js'

const txtTypt = 'note-prev-img';

export default {
    template: `
    <section class="flex justify-center animated fadeIn" >
        <div class="note-img flex-col align-center">
        <div class="input-file-container">
            <input  type="file" name="image" class="import-img input-file"
            @input="hendleFileSelected" multiple="false" accept="image/*" />
            <label tabindex="0" for="my-file" class="input-file-trigger">Select a file...</label>
                    </div>
        <img class="note-img-item" ref="imgToUpload" :src="data.url">
        <input autoFocus class="note-img-item"  name="titel"
         type="text" v-model="data.titelNote" placeholder="Title"/>
        <button  
        class="far fa-save note-img-item" @click="addImgNote"></button>
        </div>
    </section>
    
    `,
    data() {
        return {
            data: {
                titelNote: '',
                url: ''
            },
            noteEdit:null,
            isEdit:false,
            noteId:this.$route.params.textNoteId
        }
    },
    mounted(){
        var noteId  = this.$route.params.textNoteId

        if(noteId) {
            kepperService.findNoteById(noteId)
           .then(note=>{
            this.noteEdit = note
             this.isEdit = !this.isEdit
               this.data.titelNote = note.data.titelNote 
               this.data.url = note.data.url 
           })
         }
    },
    methods: {
    
        addImgNote() {
            if(this.noteEdit) {
                this.noteEdit.data = this.data;
            }
            if(this.data.titelNote !== '' || this.data.url !== '' ){
                
                kepperService.addNote(txtTypt,this.data,this.noteEdit)
                .then(()=>{
                    swal("your note added to the list");
                    setTimeout(function (){eventBus.$emit(CLOSE_NOTE,true)},800)
                })
            }
        },
        hendleFileSelected(ev){
            console.log('jojoj')
            var files = ev.target.files;
            var reader = new FileReader();
            var urlUpload = ''
            reader.onload = ( (file)=>{
                return ((e)=>{
                    urlUpload = e.target.result
                    this.data.url = urlUpload
                })

            }) (files[0])
            reader.readAsDataURL(files[0])
            console.log(urlUpload)
            
        }
        
    }

}