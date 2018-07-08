import emailService from '../../service/email-service.js';
import {
  eventBus,
  EVENT_DISPLAY_FILTER_ICONS
} from '../../service/eventbus-service.js';
import kepperService from '../../service/kepper-service.js';

export default {
  props: ['mail'],
  template: `
      <section :class="{'unread':!mail.isRead}">
            <div class="pre-email flex" @click="openEmail">
              <div class="pre-checkbox">
                <label class="checkbox-pre" ><input @click.stop="markEmail" type="checkbox" :checked="checkedValue" ></label>
                <h4>{{mail.from}}</h4>
              </div>
              <p>{{title}}<span> {{txt}}</span></p>
                <div class="pre-right flex">
                  <span class="pre-email-date">{{mail.dateSent}}</span>
                  <span class="pre-email-icon" @click.stop="deleteEmail"><i class="fas fa-trash-alt"></i></span>
                  <span class="pre-email-icon" @click.stop="careteNote"><i class="far fa-clock"></i></span>
                </div>
            </div>
      </section>
      `,
  computed: {
    title: function() {
      return this.mail.title.substring(0, 50);
    },
    txt: function() {
      return this.mail.bodtMsg.txt.substring(0, 50);
    },
    checkedValue: function() {
      return this.mail.isMarked;
    }
  },
  methods: {
    openEmail() {
      this.$emit('selected', this.mail);
      eventBus.$emit(EVENT_DISPLAY_FILTER_ICONS);
    },
    deleteEmail() {
      this.$emit('deleteEmail', this.mail);
    },
    markEmail($event) {
      emailService.updateMark(this.mail.id);
    },
    careteNote() {
      kepperService.careteNotefromEmail(this.mail);
      swal('Email sent!');
    }
  }
};
