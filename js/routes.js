

import emailApp from './pages/email-app-cmp.js'
import kepperApp from './pages/kepper-app-cmp.js'
import homePage from './pages/home-page-cmps.js'

 
export default [
            {path: '/',component:homePage},
            {path: '/emailApp', component: emailApp},
            {path: '/kepperApp', component: kepperApp}
         
        ]
