<template>
    <div @click="checkClick" ref="productModal" class="productModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
        <!--新增/編輯 產品表單-->
                    <form @submit.prevent="submitForm" class="productForm">
        <!--Loading元件-->
                        <OnLoad v-show="loading"/>
        <!--活動名稱-->
                        <div class="grid formInput">
                            <label for="eventTitle">活動名稱</label>
                            <input type="text" id="eventTitle" v-model="eventTitle" required/>
                        </div>
        <!--活動類型/分類/場地-->
                        <div class="grid">
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventType">類型</label>
                                <select name="eventType" id="eventType" v-model="eventType" required>
                                    <option value="" selected disabled>請選擇</option>
                                    <option value="temp">短期</option>
                                    <option value="regular">常設</option>
                                </select>
                            </div>
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventCategory">分類</label>
                                <select name="eventCategory" id="eventCategory" v-model="eventCategory" required>
                                    <option value="" selected disabled>請選擇</option>
                                    <option value="music">音樂</option>
                                    <option value="drama">戲劇</option>
                                    <option value="dance">舞蹈</option>
                                    <option value="design">設計</option>
                                    <option value="art">藝術</option>
                                    <option value="food">美食</option>
                                    <option value="travel">旅遊</option>
                                    <option value="family">親子</option>
                                    <option value="movie">電影</option>
                                </select>
                            </div>
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventLocation">場地</label>
                                <select name="eventLocation" id="eventLocation" v-model="eventLocation" required>
                                    <option value="" selected disabled>請選擇</option>
                                    <option value="Aroom">圓形劇場</option>
                                    <option value="Broom">室外舞台</option>
                                </select>
                            </div>
                        </div>
        <!--活動票價-->
                        <div class="grid">
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventPriceFull">一般售價</label>
                                <input type="number" id="eventPriceFull" v-model="eventFullPrice" required/>
                            </div>
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventPriceStudent">學生售價</label>
                                <input type="number" id="eventPriceStudent" v-model="eventStudentPrice" required/>
                            </div>
                            <div class="formInput grid__item--md-span-4">
                                <label for="eventPriceDiscount">優惠售價</label>
                                <input type="number" id="eventPriceDiscount" v-model="eventDiscountPrice" required/>
                            </div>
                        </div>
        <!--活動日期-->
                        <div class="grid">
                            <div class="formInput grid__item--md-span-6">
                                <label for="eventDateStart">開始日期</label>
                                <input type="date" id="eventDateStart" @change="checkEndDate(eventEndDate,eventStartDate)" v-model="eventStartDate" required/>
                            </div>
                            <div class="formInput grid__item--md-span-6">
                                <label for="eventDateEnd">結束日期</label>
                                <input type="date" id="eventDateEnd"  @change="checkEndDate(eventEndDate,eventStartDate)" v-model="eventEndDate" required/>
                            </div>
                        </div>
        <!--活動內容-->
                        <div class="grid formInput">
                            <label for="eventDescription">活動內容</label>
                            <textarea name="eventDescription" id="eventDescription" v-model="eventDescription" cols="30" rows="5" required></textarea>
                        </div>
        <!--活動照片-->
                        <div class="grid">
                            <div class="formInput grid__item--md-span-6">
                                <label for="eventPhotos">活動照片<span style="color: red; font-size: 10px;">請勿上傳超過1MB</span></label>
                                <input type="file" id="eventPhotos" accept="image/gif,image/jpeg,image/jpg,image/png" @change="uploadPhoto" multiple="multiple"/>
                            </div>
                            <div class="foremInput grid__item--md-span-6">
                                <img :src="eventPhotos" class="preview">
                            </div>
                        </div>
        <!--表單狀態按鈕-->
                        <div class="grid justify-content-between">
                            <div class="grid__item--md-span-6">
                                <button type="button" class="btn fw-bold btn-cancel" @click="closingModal">取消編輯</button>
                                <button type="submit" class="btn fw-bold btn-danger" v-if="productEdit" >儲存修改</button>
                            </div>
                            <div class="grid grid__item--md-span-6 justify-content-md-end">
                                <button type="submit" class="btn fw-bold btn-cancel" @click="saveDraft">設為草稿</button>
                                <button type="submit" class="btn fw-bold btn-danger" @click="publishEvent">建立活動</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref,computed,onBeforeMount} from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-storage'
import OnLoad from '../components/OnLoad.vue'
export default {
    name: 'ProductModal',
    components:{ OnLoad },
    setup(){
        const loading = ref(null)
        //表單資料
        const docId = ref(null);
        const eventId = ref(null);
        const eventTitle = ref(null);
        const eventType = ref(null);
        const eventCategory = ref(null);
        const eventLocation = ref(null);
        const eventFullPrice = ref(null)
        const eventStudentPrice = ref(null)
        const eventDiscountPrice = ref(null)
        const eventStartDate = ref(null)
        const eventEndDate = ref(null)
        const eventDescription = ref(null);
        const eventPhotos = ref(null);
        const eventActive = ref(null); //boolean是否為啟動中
        const eventDraft = ref(null); //boolean是否為草稿
        //store
        const db = firebase.firestore();
        //建立活動publishEvent(啟用中)
        function publishEvent(){
            eventActive.value = true;
            eventDraft.value = false;
        }
        //存為草稿
        function saveDraft(){
            eventDraft.value = true;
            eventActive.value = false;
        }
        //submitForm上傳到firebase
        function submitForm(){
            if(productEdit.value){
                 eventUpdate();
                 return
            }else{
                eventUpload();
            }
        }
        //檢查結束日期
        function checkEndDate(e,a){
            let timeInMs = Date.now();
            if(Date.parse(e) <= Date.parse(a)){
                alert('結束日期不得在開始日期前')
                eventEndDate.value = null
                eventStartDate.value = null
            }else if(Date.parse(e)<=timeInMs || Date.parse(a)< timeInMs){
                alert('日期設置有誤')
                eventEndDate.value = null
                eventStartDate.value = null
            }else{
                return
            }
        }

        //壓縮上傳圖片
        function uploadPhoto(e){
            const length = e.target.files.length
            const file = e.target.files
            const img = new Image()
            for(var i = 0; i < length ; i ++){
                const reader = new FileReader()
                reader.readAsDataURL(file[i])
                 reader.onload = function() {
                    //console.log(reader.result)
                    img.src = reader.result
                    //eventPhotos.value = reader.result
                }
                img.onload = function(){
                    //若圖片超過1800px就會壓縮成1800。高度按比例計算
                    const w = Math.min(1800, img.width)
                    const h = img.height*(w/img.width)
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext('2d')
                    canvas.width = w
                    canvas.height = h
                    ctx.drawImage(img,0,0,w,h)
                    //console.log(canvas.toDataURL('image/jpeg').length)
                    if(canvas.toDataURL('image/jpeg').length>=1016907){
                        alert('圖檔過大，請勿上船超過1MB')
                        document.getElementById("eventPhotos").value=null; 
                        return
                    }else{
                        eventPhotos.value = canvas.toDataURL('image/jpeg')
                    }
                    
                }
            }
           
        }
               
        //eventUpload 填寫後Upload
        async function eventUpload(){
            if(eventPhotos.value){
                loading.value = true
                const productsCollection = db.collection('products').doc(); //create a collection with a new document
                await productsCollection.set({
                    eventId: eventId.value,
                    eventTitle: eventTitle.value, 
                    eventType: eventType.value,
                    eventCategory: eventCategory.value,
                    eventLocation: eventLocation.value,
                    eventFullPrice: eventFullPrice.value,
                    eventStudentPrice: eventStudentPrice.value,
                    eventDiscountPrice: eventDiscountPrice.value,
                    eventStartDate: eventStartDate.value,
                    eventEndDate: eventEndDate.value,
                    eventDescription: eventDescription.value,
                    eventActive: eventActive.value,
                    eventDraft: eventDraft.value
                })
                //圖片上傳到storage
                const imageRef = await firebase.storage().ref('Images/'+eventId.value+'.jpeg')
                await imageRef.putString(eventPhotos.value, 'data_url').then((snapshot) => {
                    console.log('Uploaded a data_url string!');
                });
                loading.value = false

                //close modal
                closingModal()

                store.dispatch('getProduct')
            }else{
                alert('沒有上傳照片喔!')
            }
            
        }

       

        

        //關閉modal
        const store = useStore()
        function closingModal(){
            store.dispatch('closingModal',false)
        }
        
        //checkClick 點擊表單外圍時將彈跳確認視窗
        function checkClick(e){
            if(e.target.className === 'modal-wrapper'){
                showingExitCheck();
            }
        }
        function showingExitCheck(){
            store.dispatch('showExitCheck',true)
        }

        
        //編輯活動Modal的顯示
        const productEdit = computed(()=>store.getters.editProduct)
        //編輯時帶入點選項目的資料
        const currentProductArray = computed(()=>store.getters.currentProductArray)
        onBeforeMount(() => {
            if(!productEdit.value){
                let timeInMs = Math.floor(Date.now() / 1000);
                eventId.value = timeInMs;
            }
            if(productEdit.value){
                console.log(currentProductArray.value.photoUrl)
                docId.value = currentProductArray.value.docId
                eventId.value = currentProductArray.value.data.eventId
                eventTitle.value = currentProductArray.value.data.eventTitle
                eventType.value = currentProductArray.value.data.eventType
                eventCategory.value = currentProductArray.value.data.eventCategory
                eventLocation.value = currentProductArray.value.data.eventLocation
                eventFullPrice.value = currentProductArray.value.data.eventFullPrice
                eventStudentPrice.value = currentProductArray.value.data.eventStudentPrice
                eventDiscountPrice.value = currentProductArray.value.data.eventDiscountPrice
                eventStartDate.value = currentProductArray.value.data.eventStartDate
                eventEndDate.value = currentProductArray.value.data.eventEndDate
                eventDescription.value = currentProductArray.value.data.eventDescription
                eventPhotos.value = currentProductArray.value.photoUrl
                eventActive.value = currentProductArray.value.data.eventActive
                eventDraft.value = currentProductArray.value.data.eventDraft
            }
           
        })

        //eventUpdate 修改後Update
        async function eventUpdate(){
            loading.value = true
            const id = docId.value;
            await db.collection('products').doc(id).update({
                eventTitle: eventTitle.value, 
                eventType: eventType.value,
                eventCategory: eventCategory.value,
                eventLocation: eventLocation.value,
                eventFullPrice: eventFullPrice.value,
                eventStudentPrice: eventStudentPrice.value,
                eventDiscountPrice: eventDiscountPrice.value,
                eventStartDate: eventStartDate.value,
                eventEndDate: eventEndDate.value,
                eventDescription: eventDescription.value,
                eventActive: eventActive.value,
                eventDraft: eventDraft.value
            })
            //圖片更新到storage，相同ref會直接蓋過
            firebase.storage().ref('Images/'+eventId.value+'.jpeg').putString(eventPhotos.value, 'data_url').then((snapshot) => {
                console.log('Uploaded a data_url string!');
            });
            const data = {
                docId: docId.value,
                eventId: eventId.value
            }
            await store.dispatch('updateProduct',data)

            
            loading.value = false

            //close modal
            closingModal()
        }

        return{
            loading,
            //Form data
            docId,
            eventId,
            eventTitle,
            eventType,
            eventCategory,
            eventLocation,
            eventFullPrice,
            eventStudentPrice,
            eventDiscountPrice,
            eventStartDate,
            eventEndDate,
            eventDescription,
            eventActive,
            eventDraft,
            eventPhotos,
            //function
            uploadPhoto,
            saveDraft,
            publishEvent,
            submitForm,
            closingModal,
            checkClick,
            showingExitCheck,
            eventUpload,
            productEdit,
            eventUpdate,
            checkEndDate
        }
    }
}
</script>

<style scoped>
img.preview {
    padding: 0rem .5rem;
    width: 200px;
}
.btn{
    margin: 0rem .3rem;
}

</style>