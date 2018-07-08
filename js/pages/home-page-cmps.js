import {
  eventBus,
  EVENT_SHRINK_NAV,
  EVENT_OPEN_NAV
} from '../service/eventbus-service.js';
export default {
  template: `
    <section class="home-page">
        <div class="flex align-center space-around">

        <router-link class="route-box-link" exact to="/emailApp">
        <div  class="route-box email-route flex align-center">
        email
            </div>
      </router-link>
          
          
                <router-link class="route-box-link" exact to="/kepperApp">
                <div class="route-box kepper-route flex align-center">
                keeper
                </div>
              </router-link>
          
        </div>
    </section>
    `,
  created() {
    eventBus.$emit(EVENT_OPEN_NAV, 'open');
  }
};
