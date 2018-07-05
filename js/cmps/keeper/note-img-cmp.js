import uploadService from '../../service/upload-service.js'
import kepperService from '../../service/kepper-service.js'

const txtTypt = 'note-prev-img';

export default {
    template:`
    <section>
        <div>
            sfdsfs
        </div>
 <form class="form-upload" action="#">
      <div class="input-file-container">
   
         <input class="input-file" type="file" name="image" @change="onFileInputChange($event)" />
         <label tabindex="0" for="my-file" class="input-file-trigger">Select a file...</label>
        </div>
</form>

        <input  name="titel" type="text" v-model="data.titelNote" placeholder="Title"/>
        <button @click="addImgNote">add</button>
        </div>
    </section>
    
    `,
    data() {
        return {
            data:{
                titelNote:'',
                url:'img/kepper/Buttercup_pic.jpg'
            }
        }
    },
    methods:{
        onFileInputChange(ev){
            debugger
            uploadService.handleImageFromInput(ev)
        },
        addImgNote(){
            var note = this.data;
            
            if(this.data.titelNote !== '' || this.data.url !== '' ){
                kepperService.addNote(txtTypt,note)
                .then(()=>{
                    console.log('note txt added')
                })
            }
        }
    }

}