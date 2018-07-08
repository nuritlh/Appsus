import emailsService from '../../service/email-service.js';
export default {
  props: ['unreadEmailsNum', 'totalMailsNum'],
  template: `
          <section class="email-status"><span>Read mails</span>
            <div class="all-emails-bar">
              <div class="unread-bar" :style="'width:'+percentToShow+'px'">{{unreadPercent}}%</div>
            </div>
          </section>
          `,
  computed: {
    unreadPercent: function() {
      return Math.round((1 - this.unreadEmailsNum / this.totalMailsNum) * 100);
    },
    unreadPercentWidth: function() {
      return (
        Math.round((1 - this.unreadEmailsNum / this.totalMailsNum) * 100) - 2
      );
    }
  },
  data() {
    return {
      percentToShow: 0,
      widthInterval: null
    };
  },
  created() {},
  watch: {
    unreadPercentWidth() {
      this.setWhidth();
    }
  },
  methods: {
    setWhidth() {
      this.percentToShow = 0;
      var frame = () => {
        if (this.percentToShow >= this.unreadPercentWidth) {
          clearInterval(this.widthInterval);
        } else {
          this.percentToShow++;
        }
      };
      clearInterval(this.widthInterval);
      this.widthInterval = setInterval(frame, 10);
    }
  }
};
