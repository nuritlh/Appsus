import kepperService from '../../service/kepper-service.js';
import { eventBus, OPEN_NOTE } from '../../service/eventbus-service.js';
import emailService from '../../service/email-service.js';

export default {
  props: ['data', 'id', 'isPin'],
  template: `
    <section class="item">
        <div class="dynamic-cmp-item flex-col" @click="openTodosCmp" 
        :style="{backgroundColor:defulteColor}">
        <div class="flex space-between">
        <div>
               <button  :class="{pinActive:isNotePin}" class="btn-pin fas fa-thumbtack" @click.stop="pinNote"></button>
               </div>
              
            <i class="fas fa-pencil-alt"></i>
           </div>
        <h1>{{data.titelNote}}</h1>
        <ul class="clean-list todos-preview">
            <li v-for="todo in data.todosItem">
            <div class="flex space-between">
               <p>{{todo.todoTitle}}</p>
               <div :class="{hidden:!todo.isChecked}" class="demo-checkbox">
               <i class="fas fa-check-circle"></i>
               </div>
            </div>
          </li>
        </ul>
        <div class="flex space-between">
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
    console.log('tooss prev', this.data);
  },
  computed: {
    isNotePin() {
      return this.isPin;
    }
  },
  methods: {
    openTodosCmp() {
      var urlTo = `/kepperApp/todos/${this.id}`;
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
