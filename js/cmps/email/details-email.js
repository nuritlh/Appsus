import emailService from '../../service/email-service.js';

export default {
  props: ['email'],

  template: `
        <section v-if=email class="email-details">
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
  methods: {}
};
