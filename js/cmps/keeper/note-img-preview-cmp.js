import { eventBus, OPEN_NOTE } from '../../service/eventbus-service.js';
import kepperService from '../../service/kepper-service.js';


export default {
  props: ['data', 'id'],
  template: `
    <section class="preview-note-img">
        <div class="dynamic-cmp-item" @click="openTxtCmp">
        <div class="flex space-between">
           <button class="fas fa-trash-alt" @click.stop="deleteNote"></button>
       <i class="fas fa-pencil-alt"></i>
           </div>
            <img :src="data.url">
            <h1>{{data.titelNote}}</h1>
        </div>
    </section>
    
    `,
  created() {
    console.log('data from pre', this.data);
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
    }
  }
};
