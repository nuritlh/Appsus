import emailService from '../service/email-service.js';
import filterEmail from '../cmps/email/filter-email-cmp.js';
import listEmail from '../cmps/email/list-email-cmp.js';
import detailsEmail from '../cmps/email/details-email.js';
export default {
  template: `
    <section class="email-app">
            <filter-email v-on:back="back"></filter-email>
            <list-email v-if="!selectedemail" v-on:selected="selectedEmail"  v-on:deleteEmail="deleteEmail" :mails="mails"></list-email>
            <details-email v-if="selectedemail" :email="selectedemail"></details-email>    
    </section>
    `,
  components: { filterEmail, listEmail, detailsEmail },
  data() {
    return {
      mails: [],
      filter: null,
      selectedemail: null
    };
  },
  created() {
    return emailService.query(this.filterbooks).then(mails => {
      this.mails = mails;
    });
  },
  methods: {
    selectedEmail(email) {
      this.selectedemail = email;
    },
    deleteEmail(email) {
      console.log('deleting', email);
    },
    back() {
      this.selectedemail = null;
      console.log('back');
    }
  }
};
