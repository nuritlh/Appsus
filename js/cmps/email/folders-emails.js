export default {
  template: `
          <section class="folders">
             <header><label class="pre-email-icon" @click="closeNavBar"><i class="fas fa-times-circle"></i></label>Folders</header>
             
             <div @click="inbox"><i class="fas fa-inbox"></i> Inbox</div>
             <div @click="sent"><i class="fas fa-share-square"></i> Sent</div>
             <div @click="drafts"><i class="fab fa-firstdraft"></i> Drafts</div>
             <div><i class="far fa-star"></i> Starred</div>
             <div><i class="fas fa-clock"></i> Snoozed</div>
             <div><i class="fas fa-exclamation"></i> Important</div>
             <div><i class="fas fa-exclamation-triangle"></i> Spam</div>
             <div><i class="fas fa-comments"></i> Chats</div>
          </section>
          `,
  methods: {
    closeNavBar() {
      this.$emit('close-nav');
    },
    inbox() {
      this.$emit('inbox-folder');
      this.$emit('close-nav');
    },
    sent() {
      this.$emit('sent-folder');
      this.$emit('close-nav');
    },
    drafts() {
      this.$emit('drafts-folder');
      this.$emit('close-nav');
    }
  }
};
