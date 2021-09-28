<template>
    <div class="orders">
        <div class="searchOrder__wrap">
            <div class="searchOrder">
                <label for="searchById">訂單號碼查詢</label>
                <input type="text" v-model="searchById" id="searchById" placeholder="輸入訂單號碼">
            </div>
            <div class="searchOrder">
                <label for="searchByName">會員姓名查詢</label>
                <input type="text" v-model="searchByName" id="searchByName" placeholder="輸入會員姓名">
            </div>
        </div>
        <div v-if="checkOrderLoaded" class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>訂單號碼</th>
                        <th>付款狀態</th>
                        <th>會員資料</th>
                        <th>合計</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody v-for="item in orderListResult" :key="item.docId">
                    <tr>
                        <td>{{item.docId}}</td>
                        <td>
                            <p v-if="item.buyerInfo.isPaid"> 已付款 </p>
                            <p v-if="!item.buyerInfo.isPaid">尚未付款</p>
                        </td>
                        <td>
                            <ul>
                                <li>姓名: {{item.buyerInfo.name}}</li>
                                <li>電話: {{item.buyerInfo.tele}}</li>
                            </ul>
                        </td>
                        <td>{{item.total}}元</td>
                        <td>
                            <button type="button" @click="deleteOrder(item.docId)">刪除訂單</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <OnLoad></OnLoad>
        </div>
    </div>
</template>

<script>
import OnLoad from '../components/OnLoad.vue'
import {computed,ref,onBeforeMount,watch} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'orders',
    component:{
        OnLoad
    },
    setup(){
        const store = useStore();
        onBeforeMount(() => {
            store.dispatch('getOrders')
        })
        const checkOrderLoaded = computed(()=>store.getters.orderLoaded)
        const orderList = computed(()=>store.getters.orderList)
        
        function deleteOrder(docId){
            store.dispatch('deleteOrder',docId)
        }

        const searchById = ref(null)
        const searchByName = ref(null)
        
        const orderSearchById = computed(()=>{
            if(searchById.value){
                const IdToMatch = searchById.value;
                const reg = new RegExp(IdToMatch, 'gi');
                return orderList.value.filter(item => item.docId.match(reg))
            }else{
                return orderList.value
            }
        })
        const orderListResult = computed(()=>{
            if(searchByName.value){
                const NameToMatch = searchByName.value;
                return orderSearchById.value.filter(item => item.buyerInfo.name.match(new RegExp(NameToMatch,'gi')))
            }else{
                return orderSearchById.value
            }
        })

        return{
            checkOrderLoaded,
            orderList,
            deleteOrder,
            searchById,
            searchByName,
            orderSearchById,
            orderListResult
        }
    }
}
</script>