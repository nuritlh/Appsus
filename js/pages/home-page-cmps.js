import  eventBus,{
  
  EVENT_SHRINK_NAV,
  EVENT_OPEN_NAV
} from '../service/event-bus-service.js';

export default {
  template: `
    <section class="home-page">
        <div class="flex align-center space-around">
            <div  class="route-box email-route flex align-center" >
                <router-link exact to="/emailApp">email</router-link>
            </div>
            <div class="route-box kepper-route flex align-center" >
                <router-link exact to="/kepperApp">kepper</router-link>
            </div>
        </div>
    </section>
    `,
  created() {
    eventBus.$emit(EVENT_OPEN_NAV, 'open');
  }
};
