import emailService from '../../service/email-service.js';
import emailStatus from './email-status-cmp.js';
import  eventBus,{
 
  EVENT_DISPLAY_FILTER_ICONS,
  EVENT_DISPLAY_FILTER_ICONS_FALSE
} from '../../service/event-bus-service.js';

export default {
  template: `
        <section>
          <div class="filter-email">
              <span class="logo">Mailush</span><span class="back-icon" @click="goBack"><i class="fas fa-arrow-left"></i></span>
              <input class="input-search" v-model="searchMail" type="search" @input="getSearchedMails" placeholder="Search mail"></div>
              <div class="tools-emails-bar" :class="{'deplay-none':mailOpen}" >
            <div>  
              <span class="pre-email-icon" @click.stop="composeEmail" title="Add new Email"><i class="fas fa-plus-circle"></i></span>
              <span class="pre-email-icon" @click.stop="markUnread"  title="mark as read/unread"><i class="fas fa-envelope"></i></span>
              <span class="pre-email-icon" @click.stop="deleteEmail" title="Delete"><i class="fas fa-trash-alt"></i></span>
              </div>

              <email-status ></email-status>

              <div>Filter By: 
              
                <label title="filter all emails" @change="filterby">
                <input type="radio" value="all" v-model="picked">
                <span >all</span>
                </label>

                <label title="filter reder emails" @change="filterby">
                <input type="radio"  value="read" v-model="picked">
                <span ><i class="fab fa-readme"></i></span>
                </label>

                <label title="filter unreder emails" @change="filterby">
                <input type="radio"  value="unread" v-model="picked">
                <span ><i class="fas fa-book"></i></span>
                </label>

              </div>

              <div >Sort By:

                <label title="sort emails by date" @change="sortBy">
                <input type="radio"  value="date" v-model="pickedsort">
                <span ><i class="fas fa-calendar-alt"></i></span>
                </label>

                <label title="sort emails by subject" @change="sortBy">
                <input type="radio"  value="subject" v-model="pickedsort">
                <span ><i class="fas fa-text-height"></i></span>
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
      pickedsort: 'date'
    };
  },
  created() {
    this.mailOpen = false;
    console.log(this.selectedSort);
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
    },
    composeEmail() {
      console.log('compose');
      this.$emit('new-email');
    },
    markUnread() {
      this.$emit('unread');
      console.log('fromlist read');
    },
    filterby() {
      console.log(this.picked);
      this.$emit('fliter-by', this.picked);
    },
    sortBy() {
      console.log(this.pickedsort);
      this.$emit('sort-by', this.pickedsort);
    }
  }
};
