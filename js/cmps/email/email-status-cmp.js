import emailsService from '../../service/email-service.js';
export default {
  props: ['unreadEmailsNum', 'totalMailsNum'],
  template: `
          <section class="email-status">
            <span>{{unreadEmailsNum}}/{{totalMailsNum}} Unread Emails</span>
          </section>
          `,
  created() {}
};
