import emailsService from '../../service/email-service.js';
export default {
  template: `
          <section class="email-status">
            <span>{{unreadEmailsNum}}/{{totalMailsNum}} Unread Emails</span>
          </section>
          `,
  data() {
    return {
      unreadEmails: null,
      unreadEmailsNum: null,
      totalMailsNum: null
    };
  },
  watch: {
    unreadEmailsNum() {
      console.log('unreadEmailsNum Changed!');
    },
    quest(newVal, oldVal) {
      console.log('Quest changed from', oldVal, newVal);
    }
  },
  created() {
    emailsService.getUnreadEmails().then(res => {
      this.unreadEmails = res;
      this.unreadEmailsNum = res.length;
      //   console.log(this.unreadEmailsNum, this.unreadEmails);
    });
    emailsService.getTotalMailsNum().then(res => {
      this.totalMailsNum = res;
      //   console.log(this.totalMailsNum);
    });
  },
  methods: {}
};
