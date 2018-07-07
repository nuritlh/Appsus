import emailService from '../service/email-service.js';
import filterEmail from '../cmps/email/filter-email-cmp.js';
import listEmail from '../cmps/email/list-email-cmp.js';
import detailsEmail from '../cmps/email/details-email.js';
import { eventBus, EVENT_SHRINK_NAV } from '../service/eventbus-service.js';

export default {
  template: `
    <section class="email-app">
            <filter-email v-on:back="back" v-on:search="GetSearchedMails"></filter-email>
            <list-email v-if="!selectedemail" v-on:selected="selectedEmail"  v-on:deleteEmail="deleteEmail" :mails="mails"></list-email>
            <details-email v-if="selectedemail" :email="selectedemail" v-on:deleteEmail="deleteEmail" v-on:back="back"></details-email>    
    </section>
    `,
  components: { filterEmail, listEmail, detailsEmail },
  data() {
    return {
      mails: [],
      selectedemail: null
    };
  },
  created() {
    return emailService.query(this.selectedemail).then(mails => {
      this.mails = mails;
      eventBus.$emit(EVENT_SHRINK_NAV, 'close');
    });
  },
  methods: {
    selectedEmail(email) {
      this.selectedemail = email;
    },
    deleteEmail(email) {
      emailService.deleteEmail(email.id).then(res => {
        console.log(res);
      });
    },
    back() {
      this.selectedemail = null;
    },
    GetSearchedMails(searchMail) {
      return emailService.query(searchMail).then(res => {
        if (res.length > 0) this.mails = res;
        else {
          alert('no results');
        }
      });
    }
  }
};
