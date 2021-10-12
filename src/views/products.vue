<template>
    <div class="products">
        <div class="addProduct__wrap">
            <button 
            class="btn btn-primary fw-bold addProductBtn" 
            id="show-modal" 
            @click="showingModal">
                + 建立新活動
            </button>
            <!--離開建立活動Modal前的確認-->
            <div v-if="showExitCheckModal">
                <ExitCheck></ExitCheck>
            </div>
            <!--建立新活動按鈕/開啟modal-->
            <div v-if="showModal">
                <ProductModal></ProductModal>
            </div>
        </div>
        <!---活動管理table-->
        <div class="table-container">
            <table v-if="checkProductLoaded">
                <thead>
                    <tr>
                        <th>活動名稱</th>
                        <th>
                            分類
                            <div class="sortProducts">
                                <input v-model="sortProducts" value="sortByType" type="radio" id="sortByType" name="sortProducts">
                                <label for="sortByType">
                                    <span class="material-icons-outlined">keyboard_arrow_down</span>
                                </label>
                            </div>
                        </th>
                        <th>開始日期
                            <div class="sortProducts">
                                <input v-model="sortProducts" type="radio" value="sortByStartDate" id="sortByStartDate" name="sortProducts">
                                <label for="sortByStartDate">
                                    <span class="material-icons-outlined">keyboard_arrow_down</span>
                                </label>
                            </div>
                        </th>
                        <th>結束日期
                            <div class="sortProducts">
                                <input v-model="sortProducts" type="radio" value="sortByEndDate" id="sortByEndDate" name="sortProducts">
                                <label for="sortByEndDate">
                                    <span class="material-icons-outlined">keyboard_arrow_down</span>
                                </label>
                            </div>
                        </th>
                        <th>狀態
                            <div class="sortProducts">
                                 <input v-model="sortProducts" type="radio" value="sortByStatus" id="sortByStatus" name="sortProducts">
                                <label for="sortByStatus">
                                    <span class="material-icons-outlined">keyboard_arrow_down</span>
                                </label>
                            </div>
                        </th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-if="productData.length > 0">
                    <ProductTable v-for="(product,index) in productData" :key="index" :product="product"></ProductTable>
                </tbody>
                <tbody v-else>
                    <p class="text-center">尚未建立任何活動</p>
                </tbody>
            </table>
            <div v-else>
                <OnLoad></OnLoad>
            </div>
            
        </div>
    </div>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import ExitCheck from '@/components/ExitCheck.vue'
import ProductTable from '../components/ProductTable.vue'
import OnLoad from '../components/OnLoad.vue'
import {computed,onBeforeMount,ref,watch} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'products',
    components:{
        ProductModal,
        ExitCheck,
        ProductTable,
        OnLoad
    },
    setup(){
        const store = useStore();
        //跳出建立活動Modal的確認
        const showExitCheckModal = computed(()=>store.getters.showExitCheckModal)
        
        //建立活動Modal
        const showModal = computed(()=>store.getters.showModal)
        function showingModal(){
            store.dispatch('showingModal',true)
            store.dispatch('editProduct',false)
        }
        //拿取後端資料
        onBeforeMount(()=>{
            store.dispatch('getProduct')
            
        })
        const checkProductLoaded = computed(()=>store.getters.productLoaded)
        const productData = computed(()=>store.getters.productData)

        //排序
        const sortProducts = ref(null)

        watch(sortProducts,()=>{
            //console.log(sortProducts.value)
            switch(sortProducts.value){
                case 'sortByType': productData.value.sort((a,b)=>{
                    return a.eventCategory > b.eventCategory ? 1:-1
                });
                break;
                case 'sortByStartDate': productData.value.sort((a,b)=>{
                    return a.eventStartDate > b.eventStartDate ? 1:-1
                });
                break;
                case 'sortByEndDate': productData.value.sort((a,b)=>{
                    return a.eventEndDate > b.eventEndDate ? 1:-1
                });
                break;
                case 'sortByStatus': productData.value.sort((a,b)=>{
                    return a.eventActive > b.eventActive ? 1:-1
                }) 
            }
        })
        
        return{
            showExitCheckModal,
            showModal,
            showingModal,
            checkProductLoaded,
            productData,
            sortProducts

        }
    },
    
        
    
}
</script>

<style lang="scss" scoped>
    .sortProducts{
        position: relative;
        
        input{
            position: absolute;
            display: none;
        }
    }
</style>