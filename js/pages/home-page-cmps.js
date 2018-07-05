


export default {

    template:`
    <section class="home-page">
        <h1>welcome to apsus</h1>
        <div class="flex align-center space-around">
            <div  class="route-box email-route flex align-center">
                <router-link exact to="/emailApp">email</router-link>
            </div>
            <div class="route-box kepper-route flex align-center">
                <router-link exact to="/kepperApp">kepper</router-link>
            </div>
        </div>
    </section>
    `
}