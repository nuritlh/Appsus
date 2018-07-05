import myRoutes from './routes.js'


Vue.use(VueRouter);

const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    router: myRouter,
    el: '#app',
 
});
