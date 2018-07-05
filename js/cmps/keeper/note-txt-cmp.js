
import kepperService from '../../service/kepper-service.js'
 const txtTypt = 'note-prev-txt';

export default {
   props:['dataNote'],
    template:`
    <section @click.native="openTxtCmp">
        <div class="flex-col">
        <input class="note-txt-item"  name="titel" type="text" v-model="data.titelNote" placeholder="Title"/>
       
        <input class="note-txt-item" type="text" v-model="data.noteTxt" placeholder="Your note">
</input>
        <button :class="[isEdit?'far fa-save':'fas fa-plus-circle']" @click="addTxtNote">
        </button>
        
        </div>
    </section>
    `
    ,
    data() {
        return {
            data:{
                titelNote:'',
                noteTxt:'',
                id:null
                
            },
            noteEdit:null,
            isEdit:false,
            noteId:this.$route.params.textNoteId
           
        }
    },
    craeted() {
            console.log('idd',this.$route.params.textNoteId)
            
    },
    mounted(){
        var noteId  = this.$route.params.textNoteId
        if(noteId) {
           kepperService.findNoteById(noteId)
          .then(note=>{
              this.noteEdit = note
            this.isEdit = !this.isEdit
              this.data.titelNote = note.data.titelNote 
              this.data.noteTxt = note.data.noteTxt 
          })
        }
       
        console.log('idd',this.$route.params.textNoteId)
        
    },
    methods :{
        addTxtNote(){
            if(this.noteEdit) {
                this.noteEdit.data = this.data;
            }

            if(this.data.titelNote !== '' || this.data.noteTxt !== '' ){
                
                kepperService.addNote(txtTypt,this.data,this.noteEdit)
                .then(()=>{
                    swal("your note added to the list");
                })
            }
        }
    }
}