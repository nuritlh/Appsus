import { eventBus, OPEN_NOTE } from '../../service/eventbus-service.js';
import kepperService from '../../service/kepper-service.js';
import emailService from '../../service/email-service.js';

export default {
  props: ['data', 'id', 'isPin'],
  template: `
    <section class="preview-note-img item">
        <div class="dynamic-cmp-item" @click="openTxtCmp" :style="{backgroundColor:defulteColor}">
        <div class="flex space-between">
                <div>
               <button class="btn-pin fas fa-thumbtack" :class="{pinActive:isNotePin}" @click.stop="pinNote"></button>
               </div>      
                <i class="fas fa-pencil-alt"></i>
           </div>
            <img :src="data.url">
            <h1>{{data.titelNote}}</h1>
            <div class="flex ">
            <button class="btn-color" @click.stop="changeColor">
            <i class="fas fa-palette"></i>
            </button>
            <button class="fas fa-trash-alt span-btn" @click.stop="deleteNote"></button>

            <button title="send to your mail" @click.stop="sendAsEmail" class="span-btn" >
            <i class="fas fa-envelope"></i>
              </button>
            </div>
        </div>
    </section>
    
    `,
  data() {
    return {
      defulteColor: 'whitesmoke'
    };
  },
  created() {
    console.log('data from pre', this.data);
  },
  computed: {
    isNotePin() {
      return this.isPin;
    }
  },
  methods: {
    openTxtCmp() {
      var urlTo = `/kepperApp/imgNote/${this.id}`;
      this.$router.push(urlTo);
      eventBus.$emit(OPEN_NOTE, urlTo);
    },
    deleteNote(ev) {
      kepperService.deleteNote(this.id).then(() => {
        swal('your note deleted from the list');
      });
    },
    changeColor() {
      kepperService.setColor().then(value => {
        if (value) {
          this.defulteColor = value;
        } else {
          this.defulteColor = this.defulteColor;
        }
      });
    },
    pinNote() {
      this.$emit('notePin', this.id);
    },
    sendAsEmail() {
      emailService.createEmailFromNote(this.data);
      swal('Note sent');
    }
  }
};
