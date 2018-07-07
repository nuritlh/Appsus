export default {
    template: `
        <section class="book-filter flex"  >
        <input type="search"  v-model="inputSearch.byTitle" 
        placeholder="Search your note" title="Search note" @input="onSearch"  >
        </section>
  `,
    data() {

        var search = {byTitle: ''}
        return {
            inputSearch: search,
        }
        
    },
    methods: {
        onSearch() {
            let search = this.inputSearch;
            if(search.byTitle === ''){
                search = null
            }  
            this.$emit('search', search);
            
        }
    }
}