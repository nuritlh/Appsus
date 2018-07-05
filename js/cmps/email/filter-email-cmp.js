export default {
  template: `
        <section>
          <div class="filter-email">
            <span class="logo">Mailish </span><span class="back-icon" @click="goBack"><i class="fas fa-undo-alt"></i></span>
            <input class="input-search" v-model="searchMail" type="search" @input="getSearchedMails"></div>
        </section>
        `,
  data() {
    return { searchMail: '' };
  },
  methods: {
    getSearchedMails() {
      console.log('search');
    },
    goBack() {
      this.$emit('back');
    }
  }
};
