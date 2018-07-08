import emailService from '../service/email-service.js';
import filterEmail from '../cmps/email/filter-email-cmp.js';
import listEmail from '../cmps/email/list-email-cmp.js';
import detailsEmail from '../cmps/email/details-email.js';
import newEmail from '../cmps/email/new-email-cmp.js';
import folders from '../cmps/email/folders-emails.js';
import {
  eventBus,
  EVENT_SHRINK_NAV,
  EDIT_DRAFT
} from '../service/eventbus-service.js';

export default {
  template: `
    <section class="email-app">
            <filter-email v-on:back="back" v-on:removeme="removeme"  v-on:search="GetSearchedMails" :unreadEmailsNum="unreadEmailsNum" :totalMailsNum="totalMailsNum" v-on:new-email="createNewEmail" v-on:unread="updateMarkedUnread" v-on:read="updateMarkedRead"  v-on:fliter-by="filterBy" v-on:sort-by="sortBy" v-on:open-nav="openCloseNav"></filter-email>
            <list-email v-if="!selectedemail" v-on:selected="selectedEmail"  v-on:deleteEmail="deleteEmail" :mails="mails"></list-email>
            <details-email v-if="selectedemail" :email="selectedemail" v-on:deleteEmail="deleteEmail" v-on:back="back" :onEnditMode="onEnditMode" ></details-email>    
            <new-email v-if="newEmail" v-on:remove-edit="removeEdit" v-on:close-email="closeEmail" :editEmail="editEmail"></new-email>
            <folders v-if="isOpenBar" v-on:close-nav="openCloseNav" v-on:inbox-folder="openInboxEmails" v-on:sent-folder="openSentEmails" v-on:drafts-folder="openDraftsEmails"></folders>
    </section>
    `,
  components: { filterEmail, listEmail, detailsEmail, newEmail, folders },
  data() {
    return {
      mails: [],
      selectedemail: null,
      newEmail: false,
      unreadEmailsNum: 0,
      totalMailsNum: 0,
      onFilter: false,
      isOpenBar: false,
      onEnditMode: false,
      editEmail: null
    };
  },
  created() {
    emailService.query().then(mails => {
      this.mails = mails;
      eventBus.$emit(EVENT_SHRINK_NAV, 'close');
      console.log('close from email');
    });
    eventBus.$on(EDIT_DRAFT, editEmail => {
      console.log('from app new edit mail', editEmail);
      this.editEmail = editEmail;
      this.newEmail = true;
    });
    this.getUnreadAndTotalEmails();
  },
  methods: {
    selectedEmail(email) {
      if (!email.isRead) this.updateMarkedUnread(email.id);
      this.selectedemail = email;
    },
    getUnreadAndTotalEmails() {
      emailService.getUnreadEmails().then(res => {
        this.unreadEmailsNum = res.length;
      });
      emailService.getTotalMailsNum().then(res => {
        this.totalMailsNum = res;
      });
    },
    updateMarkedUnread(emailId) {
      emailService.updateUnreadEmail(emailId).then(res => {});
      this.getUnreadAndTotalEmails();
    },
    updateMarkedRead() {
      emailService.updatedReadEmail().then(res => {});
      this.getUnreadAndTotalEmails();
    },
    deleteEmail(email) {
      emailService.deleteEmail(email.id).then(res => {});
      emailService.query().then(mails => {
        this.mails = mails;
      });
      this.getUnreadAndTotalEmails();
    },
    removeme() {
      emailService.deleteMarkedEmails();
      emailService.query().then(mails => {
        this.mails = mails;
      });
      this.getUnreadAndTotalEmails();
    },
    back() {
      this.selectedemail = null;
      this.getUnreadAndTotalEmails();
    },
    GetSearchedMails(searchMail) {
      return emailService.query(searchMail).then(res => {
        this.mails = res;
        if (searchMail !== '') this.onFilter = true;
        else this.onFilter = false;
        console.log(this.onFilter);
        if (res.length > 0) this.mails = res;
        else {
          // alert('no results');
        }
      });
    },
    filterBy(filter) {
      if (filter === 'all') this.onFilter = false;
      else this.onFilter = true;
      return emailService.filterBy(filter).then(res => {
        this.mails = res;
      });
    },
    sortBy(sort) {
      return emailService.sortBy(sort).then(res => {
        this.mails = res;
      });
    },
    createNewEmail() {
      this.newEmail = true;
    },
    closeEmail() {
      this.newEmail = false;
    },
    openCloseNav() {
      this.isOpenBar = !this.isOpenBar;
    },
    openInboxEmails() {
      emailService.query().then(mails => {
        this.mails = mails;
        this.onEnditMode = false;
      });
      emailService.removeChecked();
    },
    openSentEmails() {
      emailService.gatSentEmails().then(mails => {
        this.mails = mails;
        this.onEnditMode = false;
      });
      emailService.removeChecked();
    },
    openDraftsEmails() {
      emailService.gatDraftsEmails().then(mails => {
        this.mails = mails;
        this.onEnditMode = true;
      });
      emailService.removeChecked();
    },
    removeEdit() {
      this.editEmail = null;
    }
  }
};
