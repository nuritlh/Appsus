export default {
    template: `
        <section  >
            <div class="note-serch  justify-center align-center">
            <input type="search"  v-model="inputSearch.byTitle" 
        placeholder="Search your note" title="Search note" @input="onSearch"  >

     
            <input list="type" type="search" placeholder="Search by type" multipal=true
             v-model="inputSearch.byType" @input="onSearch">
            <datalist id="type">
                    <option>Txt</option>
                    <option >Img</option>
                    <option>list</option>
            </datalist>
            <button class="btn-pin fas fa-thumbtack"
            @click="SearchByPin(isNotePin)"
             :class="{pinActive:isNotePin}" ></button>

            </div> 
        </section>
  `,
    data() {

        var search = {
            byTitle: '',
            byType: '',
            byPin:false
        }
        
        return {
            inputSearch: search,
        }

    },
    computed:{
        isNotePin(){
            return this.inputSearch.byPin
        }
    },
    methods: {
        onSearch() {
           
            let search = this.inputSearch;
            if (search.byTitle === '' && search.byType === '' && !search.byPin  ) {
                search = null
            }
            this.$emit('search', search);

        },
        SearchByPin(isPin){
            this.inputSearch.byPin = !this.inputSearch.byPin
            this.onSearch()
      
        }
    }
}