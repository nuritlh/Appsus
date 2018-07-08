import emailService from '../../service/email-service.js';
import { eventBus, EDIT_DRAFT } from '../../service/eventbus-service.js';
export default {
  template: `
          <section class="new-email">
                <header>
                  <label class="pre-email-icon" @click="closeNewEmail"><i class="fas fa-times-circle"></i></label>
                  <span>New Message</span>
                  <label class="pre-email-icon" @click="saveDrafts"><i class="fas fa-save"></i></label>
                </header>
                <div class="email-body">
                  <span v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                      <span v-for="error in errors">{{ error }}</span>
                  </span>
                  <div><input type="email" name="email" id="email" v-model="newMail.email" placeholder="To"></div>
                  <div><input type="text" name="name" id="name" v-model="newMail.title" placeholder="Subject"></div>
                  <div class="textarea"><textarea v-model="newMail.bodtMsg.txt"></textarea></div>
                  <button type="submit" class="btn-send-email" @click="checkForm">Send</button>
                </div>
          </section>
          `,
  data() {
    return {
      errors: [],
      newMail: {
        title: null,
        email: null,
        bodtMsg: {
          txt: null,
          imgURL: ''
        }
      }
    };
  },
  created() {},
  mounted() {
    eventBus.$on(EDIT_DRAFT, editEmail => {
      console.log(editEmail);
      this.newMail = editEmail;
    });
  },
  methods: {
    closeNewEmail() {
      this.$emit('close-email');
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.newMail.title) {
        this.errors.push('Subject required.');
      }
      if (!this.newMail.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.newMail.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        emailService
          .saveSentEmails(this.newMail)
          .then(res => {
            swal('email was sent!');
          })
          .catch(() => {
            swal('err');
          });
        this.$emit('close-email');
        return false;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    saveDrafts() {
      emailService.saveToDrafts(this.newMail).then(res => {
        swal('email saved!');
      });
      this.$emit('close-email');
    }
  }
};
