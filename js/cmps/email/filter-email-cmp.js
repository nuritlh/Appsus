import emailService from '../../service/email-service.js';
import emailStatus from './email-status-cmp.js';
import {
  eventBus,
  EVENT_DISPLAY_FILTER_ICONS,
  EVENT_DISPLAY_FILTER_ICONS_FALSE
} from '../../service/eventbus-service.js';

export default {
  props: ['unreadEmailsNum', 'totalMailsNum'],
  template: `
        <section>
          <div class="filter-email">
              <div class="header-filter flex">
                <span class="back-icon" :class="{'deplay-none':mailOpen}" @click="openNav" title="Open folders"><i class="fas fa-bars"></i></span>
                <span class="back-icon" :class="{'deplay-none':!mailOpen}" @click="goBack" title="Back"><i class="fas fa-arrow-left"></i></span>
                <input class="input-search" v-model="searchMail" type="search" @input="getSearchedMails" placeholder="Search mail"></div>
              </div>
              
              <div v-if="isChecked" class="tools-emails-bar" :class="{'deplay-none':mailOpen}" >
            
                <div class="settings-to-mails">  
                <span class="pre-email-icon" @click.stop="composeEmail" title="Add new Email"><i class="fas fa-plus-circle"></i></span>
                <span class="pre-email-icon" @click.stop="markUnread"  title="mark as unread"><i class="fas fa-envelope"></i></span>
                <span class="pre-email-icon" @click.stop="markRead"  title="mark as read"><i class="fas fa-envelope-open"></i></span>
                <span class="pre-email-icon" @click.stop="deleteEmail" title="Delete"><i class="fas fa-trash-alt"></i></span>
                </div>

                <email-status :unreadEmailsNum="unreadEmailsNum" :totalMailsNum="totalMailsNum"></email-status>

                <div class="filter-by">Filter By: 
                
                  <label title="filter all emails" @change="filterby">
                  <input type="radio" value="all" v-model="picked">
                  <span >all</span>
                  </label>

                  <label title="filter read emails" @change="filterby">
                  <input type="radio"  value="read" v-model="picked">
                  <span class="pre-email-icon"><i class="fas fa-envelope-open"></i></span>
                  </label>

                  <label title="filter unread emails" @change="filterby">
                  <input type="radio"  value="unread" v-model="picked">
                  <span class="pre-email-icon"><i class="fas fa-envelope"></i></span>
                  </label>

                </div>

                <div class="sort-by">Sort By:

                  <label title="sort emails by date" @change="sortBy">
                  <input type="radio"  value="date" v-model="pickedsort">
                  <span class="pre-email-icon"><i class="fas fa-calendar-alt"></i></span>
                  </label>

                  <label title="sort emails by subject" @change="sortBy">
                  <input type="radio"  value="subject" v-model="pickedsort">
                  <span class="pre-email-icon"><i class="fas fa-text-height"></i></span>
                  </label>
                </div>
              </div> 


        </section>
        `,
  components: { emailStatus },
  data() {
    return {
      searchMail: '',
      mailOpen: false,
      picked: 'all',
      pickedsort: 'date',
      isChecked: true
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
      emailService.removeChecked();
      this.$emit('search', this.searchMail);
    },
    goBack() {
      this.$emit('back');
      this.mailOpen = false;
    },
    deleteEmail() {
      this.$emit('removeme');
      this.searchMail = '';
      this.picked = 'all';
      this.pickedsort = 'date';
    },
    composeEmail() {
      console.log('compose');
      this.$emit('new-email');
    },
    markUnread() {
      this.$emit('unread');
    },
    markRead() {
      this.$emit('read');
    },
    filterby() {
      emailService.removeChecked();
      console.log(this.picked);
      this.$emit('fliter-by', this.picked);
    },
    sortBy() {
      console.log(this.pickedsort);
      this.$emit('sort-by', this.pickedsort);
    },
    openNav() {
      this.$emit('open-nav');
    }
  }
};
