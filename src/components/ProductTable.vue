<template>
    <tr class="productTable">
        <td>
            {{product.eventTitle}}
        </td>
        <td>
            {{product.eventCategory}}
        </td>
        <td>
            {{product.eventStartDate}}
        </td>
        <td>
            {{product.eventEndDate}}
        </td>
        <td>
            <p v-if="product.eventActive">已啟用</p>
            <p v-if="product.eventDraft">尚未啟用</p>
        </td>
        <td>
            <button class="btn-danger fw-bold" type="button" @click="deleteEvent(product.docId,product.eventId)">刪除</button>
            <button class="btn-cancel fw-bold" type="button" @click="editEvent(product.eventId)">編輯</button>
        </td>
    </tr>
    
</template>

<script>
import {onBeforeMount} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'ProductTable',
    props: ['product'],
    setup(){
        const store = useStore();
        function editEvent(eventId){
            store.dispatch('editProduct',true)
            store.dispatch('getCurrentProduct',eventId)
        }
        
        async function deleteEvent(docId,eventId){
            const confirmDelete = await confirm("確定要刪除嗎? 一去不復返喔!")
            if(confirmDelete){
                store.dispatch('deleteProduct',{docId,eventId})
                store.dispatch('getProduct')
            }else{
                return
            }
            
        }

    

        
        return{
            editEvent,
            deleteEvent,
        }
    }
}
</script>