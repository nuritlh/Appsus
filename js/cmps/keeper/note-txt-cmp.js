
import kepperService from '../../service/kepper-service.js'
 const txtTypt = 'note-prev-txt';

export default {
   props:['dataNote'],
    template:`
    <section @click.native="openTxtCmp">
        <div class="flex-col">
        <input class="note-txt-item"  name="titel" type="text" v-model="data.titelNote" placeholder="Title"/>
       
        <textArea class="note-txt-item" v-model="data.noteTxt" placeholder="Your note">
        </textArea>
        <button @click="addTxtNote">
            add
        </button>
        </div>
    </section>
    `
    ,
    data() {
        return {
            data:{
                titelNote:'',
                noteTxt:''
            }
           
        }
    },
    craeted() {
            if(this.dataNote.titelNote !=='' || this.dataNote.noteTxt !== ''){
                this.data.noteTxt = this.dataNote.noteTxt
                this.data.titelNote = this.dataNote.titelNote
            }
    },
    methods :{
        addTxtNote(){
            var note = this.data;
            console.log(note)
            if(this.data.titelNote !== '' || this.data.noteTxt !== '' ){
                kepperService.addNote(txtTypt,note)
                .then(()=>{
                    console.log('note txt added')
                })
            }
        }
    }
}