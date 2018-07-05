export default {
  template: `
        <section>
            <span @click="goBack"><i class="fas fa-arrow-left" ></i></span>
            <input class="input-search" v-model="searchMail" type="search" @input="getSearchedMails">
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
