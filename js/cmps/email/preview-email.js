export default {
  props: ['mail'],
  template: `
      <section>
            <div class="pre-email flex" @click="openEmail">
                <h4>{{mail.from}}</h4><p>{{title}}<span> {{txt}}</span></p>
                <span class="pre-email-icon" @click.stop="deleteEmail"><i class="fas fa-trash-alt"></i></span>
                <span class="pre-email-icon"><i class="far fa-clock"></i></span>
            </div>
      </section>
      `,
  computed: {
    title: function() {
      return this.mail.title.substring(0, 50);
    },
    txt: function() {
      return this.mail.bodtMsg.txt.substring(0, 50);
    }
  },
  methods: {
    openEmail() {
      console.log('premail', this.mail);
      //   this.$router.push(`/email/${this.mail.id}`);
      this.$emit('selected', this.mail);
      console.log('prebook', this.mail);
    },
    deleteEmail() {
      this.$emit('deleteEmail', this.mail);
    }
  }
};
