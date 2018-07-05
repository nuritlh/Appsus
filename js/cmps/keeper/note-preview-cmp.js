export default {
    props:['data','id'],
     template:`
     <section class="preview-note-txt">
       <div class="preview-txt dynamic-cmp-item" @click="openTxtCmp">
           <h1>{{data.titelNote}}</h1>
           <hr>
           <p>{{data.noteTxt}}</p>
       </div>
         
     </section>
     
     `,
    created() {
        console.log('data from pre',this.data)
    },
    methods:{
        openTxtCmp(){
            debugger
            var urlTo = `/kepperApp/textNote/${this.id}`
            this.$router.push(urlTo)
        }  
    }
}