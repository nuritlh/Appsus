import previewEmail from './preview-email.js';

export default {
  props: ['mails'],

  template: `
      <section class="dynamic-cmp-item">
          <div>
              <preview-email v-for="(mail, idx) in mails" v-on:selected="selectedEmail" v-on:deleteEmail="deleteEmail" :mail="mail" ></preview-email>
          </div>
      </section>
      `,
  components: { previewEmail },

  methods: {
    selectedEmail(email) {
      this.$emit('selected', email);
    },
    deleteEmail(email) {
      this.$emit('deleteEmail', email);
    }
  }
};
