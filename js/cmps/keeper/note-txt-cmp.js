import { eventBus, CLOSE_NOTE } from '../../service/eventbus-service.js';

import kepperService from '../../service/kepper-service.js'
const txtTypt = 'note-prev-txt';

export default {
    props: ['dataNote'],
    template: `
    <section class="flex justify-center animated fadeIn" @click.native="openTxtCmp">
        <div class="flex-col note-txt-container">
        <input class="note-txt-item" autoFocus  name="titel" type="text" v-model="data.titelNote" placeholder="Title"/>
       
        <input class="note-txt-item" type="text" v-model="data.noteTxt" placeholder="Your note">
</input>
        <button class="far fa-save" @click="addTxtNote">
        </button>
        
        </div>
    </section>
    `
    ,
    data() {
        return {
            data: {
                titelNote: '',
                noteTxt: '',
                id: null

            },
            noteEdit: null,
            isEdit: false,
            noteId: this.$route.params.textNoteId

        }
    },
    craeted() {
        console.log('idd', this.$route.params.textNoteId)

    },
    mounted() {
        var noteId = this.$route.params.textNoteId
        if (noteId) {
            kepperService.findNoteById(noteId)
                .then(note => {
                    this.noteEdit = note
                    this.isEdit = !this.isEdit
                    this.data.titelNote = note.data.titelNote
                    this.data.noteTxt = note.data.noteTxt
                })
        }

    },
    methods: {
        addTxtNote() {
            if (this.noteEdit) {
                this.noteEdit.data = this.data;
            }

            if (this.data.titelNote !== '' || this.data.noteTxt !== '') {

                kepperService.addNote(txtTypt, this.data, this.noteEdit)
                    .then(() => {
                        swal("your note added to the list");
                        setTimeout(function (){eventBus.$emit(CLOSE_NOTE,true)},800)
                    })
        
                }
        }
    }
}