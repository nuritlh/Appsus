import emailService from '../../service/email-service.js';
import {
  eventBus,
  EVENT_DISPLAY_FILTER_ICONS,
  EVENT_DISPLAY_FILTER_ICONS_FALSE
} from '../../service/eventbus-service.js';

export default {
  template: `
        <section>
          <div class="filter-email">
            <span class="logo">Mailish</span><span class="back-icon" @click="goBack"><i class="fas fa-arrow-left"></i></span>
            <input class="input-search" v-model="searchMail" type="search" @input="getSearchedMails" placeholder="Search mail"></div>
            <div class="add-email" :class="{'deplay-none':mailOpen}" >
              <span class="pre-email-icon" @click.stop=""><i class="fas fa-plus-circle"></i></span>
              <span class="pre-email-icon" @click.stop="deleteEmail"><i class="fas fa-trash-alt"></i></span>
            </div>
        </section>
        `,
  data() {
    return {
      searchMail: '',
      mailOpen: false
    };
  },
  created() {
    this.mailOpen = false;
  },
  mounted() {
    eventBus.$on(EVENT_DISPLAY_FILTER_ICONS, msg => {
      this.mailOpen = true;
    });
    eventBus.$on(EVENT_DISPLAY_FILTER_ICONS_FALSE, msg => {
      this.mailOpen = false;
    });
  },
  methods: {
    getSearchedMails() {
      this.$emit('search', this.searchMail);
    },
    goBack() {
      this.$emit('back');
      this.mailOpen = false;
    },
    deleteEmail() {
      emailService.deleteMarkedEmails();
    }
  }
};
