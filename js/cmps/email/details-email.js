import {
  eventBus,
  EVENT_DISPLAY_FILTER_ICONS_FALSE
} from '../../service/eventbus-service.js';

export default {
  props: ['email'],

  template: `
        <section v-if=email class="email-details dynamic-cmp-item">
        <span class="pre-email-icon" @click="deleteEmail"><i class="fas fa-trash-alt"></i></span>
            <h3>{{email.title}}</h3>
            <p>{{email.from}}<span> {{email.email}}</span><span class="dateSent">{{email.dateSent}}</span></p>
            <div>{{email.bodtMsg.txt}}</div>
            <img :src="email.bodtMsg.imgURL">
        </section>
        `,
  data() {
    return {};
  },
  created() {},
  methods: {
    deleteEmail() {
      this.$emit('deleteEmail', this.email);
      this.$emit('back');
      eventBus.$emit(EVENT_DISPLAY_FILTER_ICONS_FALSE);
    }
  }
};
