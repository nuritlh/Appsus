import emailApp from './pages/email-app-cmp.js';
import kepperApp from './pages/kepper-app-cmp.js';
import homePage from './pages/home-page-cmps.js';
import emailDetails from './cmps/email/details-email.js';

export default [
  { path: '/', component: homePage },
  { path: '/emailApp', component: emailApp },
  { path: '/kepperApp', component: kepperApp },
  { path: '/email/:emailId', component: emailDetails }
];
