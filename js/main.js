import homePage from './pages/home-page-cmps.js';
import myRoutes from './routes.js';
import {
  eventBus,
  EVENT_SHRINK_NAV,
  EVENT_OPEN_NAV
} from './service/eventbus-service.js';

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes });

new Vue({
  router: myRouter,
  el: '#app',
  components: {
    homePage
  },
  data() {
    return {
      isInPage: false
    };
  },
  mounted() {
    eventBus.$on(EVENT_SHRINK_NAV, msg => {
      console.log('here');
      this.isInPage = true;
    });
    eventBus.$on(EVENT_OPEN_NAV, msg => {
      this.isInPage = false;
    });
  }
});
