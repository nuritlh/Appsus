
import emailApp from './pages/email-app-cmp.js'
import kepperApp from './pages/kepper-app-cmp.js'
import homePage from './pages/home-page-cmps.js'
import noteTxt from './cmps/keeper/note-txt-cmp.js'
import noteImg from './cmps/keeper/note-img-cmp.js'
import todos from './cmps/keeper/todos-list-cmp.js'


 
export default [
            {path: '/',component:homePage},
            {path: '/emailApp', component: emailApp},
            {path: '/kepperApp', component: kepperApp, 
            children: [
                {
                  // UserProfile will be rendered inside User's <router-view>
                  // when /user/:id/profile is matched
                  path: 'textNote/:textNoteId?',
                  component: noteTxt,
                },
               
                {
                  path: 'imgNote/:textNoteId?',
                  component: noteImg,
                },
                {
                  path: 'todos/:todosId?',
                  component: todos,
                },
               
              ]}
         
        ]
