import emailService from '../service/email-service.js';
import filterEmail from '../cmps/email/filter-email-cmp.js';
import listEmail from '../cmps/email/list-email-cmp.js';
import detailsEmail from '../cmps/email/details-email.js';
import newEmail from '../cmps/email/new-email-cmp.js';
import  eventBus, { EVENT_SHRINK_NAV } from '../service/event-bus-service.js';

export default {
  template: `
    <section class="email-app">
            <filter-email v-on:back="back" v-on:search="GetSearchedMails" v-on:new-email="createNewEmail" v-on:unread="updateMarkedRead" v-on:fliter-by="filterBy" v-on:sort-by="sortBy"></filter-email>
            <list-email v-if="!selectedemail" v-on:selected="selectedEmail"  v-on:deleteEmail="deleteEmail" :mails="mails"></list-email>
            <details-email v-if="selectedemail" :email="selectedemail" v-on:deleteEmail="deleteEmail" v-on:back="back"></details-email>    
            <new-email v-if="newEmail" v-on:close-email="closeEmail"></new-email>
    </section>
    `,
  components: { filterEmail, listEmail, detailsEmail, newEmail },
  data() {
    return {
      mails: [],
      selectedemail: null,
      newEmail: false
    };
  },
  created() {
    return emailService.query(this.selectedemail).then(mails => {
      this.mails = mails;
      eventBus.$emit(EVENT_SHRINK_NAV, 'close');
      this.sortBy('date');
    });
  },
  methods: {
    selectedEmail(email) {
      if (!email.isRead) this.updateMarkedRead(email.id);
      this.selectedemail = email;
    },
    updateMarkedRead(emailId) {
      emailService.updateUnreadEmail(emailId).then(res => {});
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
    },
    filterBy(filter) {
      return emailService.filterBy(filter).then(res => {
        if (res.length > 0) this.mails = res;
        else {
          alert('no results');
        }
      });
    },
    sortBy(sort) {
      return emailService.sortBy(sort).then(res => {
        if (res.length > 0) this.mails = res;
        else {
          alert('no results');
        }
      });
    },
    createNewEmail() {
      this.newEmail = true;
    },
    closeEmail() {
      this.newEmail = false;
    }
  }
};
