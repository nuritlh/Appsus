import kepperService from '../service/kepper-service.js';
import notePrevTxt from '../cmps/keeper/note-preview-cmp.js';
import notePrevImg from '../cmps/keeper/note-img-preview-cmp.js';
import noteTodos from '../cmps/keeper/todos-list-cmp.js';
import todosPrevList from '../cmps/keeper/note-todos-preview-cmp.js';
import searchNote from '../cmps/keeper/search-note-cmp.js';

import {
  eventBus,
  EVENT_SHRINK_NAV,
  OPEN_NOTE,
  CLOSE_NOTE
} from '../service/eventbus-service.js';

export default {
  template: `
    <section class="kepper-app">
        <search-note @search="searchNote">
        </search-note>
     
       <ul class="clean-list flex justify-center kepper-haeader">
       <li><button v-if="newNoteShow" class="fas fa-times-circle btn-close"  @click="closeCmp"></button></li>
           <li><button class="far fa-file-alt btn-keep" ref="textNote" @click="goTo('textNote')"></button></li>
           <li><button class="fas fa-image btn-keep" @click="goTo('imgNote')"></button></li>
           <li><button class="fas fa-list-ul btn-keep" @click="goTo('todos')"></button></li>
       </ul>
       <router-view v-if="newNoteShow">
        </router-view>
    <div v-else  class="dynamic-cmp flex">
    <component v-if="cmps" v-for="(cmp, idx) in cmps" :is="cmp.type" :key="idx" 
       :id="cmp.id"
       :isPin = "cmp.pinNote"
       @notePin="sortByPin"
       :data="cmp.data">
        </component> 
    </div>

    </section>
    `,
  data() {
    return {
      newNoteShow: false,
      btnclass: '',
      cmps: null,
      load: true
    };
  },
  created() {
    eventBus.$emit(EVENT_SHRINK_NAV, 'close');
    console.log('close from kepper');
    kepperService.init();

    kepperService.query().then(notes => {
      if (notes) {
        this.cmps = notes;
        this.load = false;
      }
    });
    eventBus.$on(OPEN_NOTE, url => {
      this.newNoteShow = true;
      this.$router.push(url);
    });

    eventBus.$on(CLOSE_NOTE, noteClose => {
      if (noteClose) {
        this.closeCmp();
      }
    });
  },
  computed: {},
  methods: {
    goTo(url) {
      console.log(this.$refs);
      this.btnclass = url;
      this.newNoteShow = true;
      var urlTo = `/kepperApp/${url}`;
      this.$router.push(urlTo);
    },
    closeCmp() {
      this.newNoteShow = false;
    },
    searchNote(searchInput) {
      kepperService.searchNote(searchInput).then(res => {
        this.cmps = res;
      });
    },
    sortByPin(noteId) {
      kepperService.addPinToNote(noteId);

      kepperService.sortByPinNote().then(res => {
        this.cmps = res;
      });
    }
  },

  components: {
    notePrevTxt,
    notePrevImg,
    noteTodos,
    todosPrevList,
    searchNote
  }
};
