export default {
    props:['data','id'],
    template:`
    <section class="preview-note-img">
        <div class="dynamic-cmp-item">
            <img :src="data.url">
            <h1>{{data.titelNote}}</h1>
        </div>
    </section>
    
    `,
    created() {
        console.log('data from pre',this.data)
    },

}