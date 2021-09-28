import firebase from 'firebase/app';
import 'firebase/firestore'

export default({
    state: {
      //資料狀態
      productData: [],
      productLoaded: null,
      productEdit: false,
      currentProductArray: [],
    },
    actions:{
      //後端取資料
      async getProduct({commit,state}){
        var getData = firebase.firestore().collection('products');
        const results = await getData.get();
        results.forEach( doc => {
          //確保不重複拿取資料
          if(!state.productData.some( product => product.docId === doc.id)){
            const data = {
              docId: doc.id,
              eventId: doc.data().eventId,
              eventTitle: doc.data().eventTitle, 
              eventType: doc.data().eventType,
              eventCategory: doc.data().eventCategory,
              eventLocation: doc.data().eventLocation,
              eventFullPrice: doc.data().eventFullPrice,
              eventStudentPrice: doc.data().eventStudentPrice,
              eventDiscountPrice: doc.data().eventDiscountPrice,
              eventStartDate: doc.data().eventStartDate,
              eventEndDate: doc.data().eventEndDate,
              eventDescription: doc.data().eventDescription,
              eventPhotos: doc.data().eventPhotos,
              eventActive: doc.data().eventActive,
              eventDraft: doc.data().eventDraft
            };
            commit('SET_PRODUCT_DATA',data);
          }
        });
        //確保資料完成拿取
        commit('PRODUCT_LOADED',true)
      },
      //控制編輯的模板
      editProduct({commit},payload){
        commit('EDIT_PRODUCT',payload)
      },
      //取得目前點選(刪除/編輯)資料
      async getCurrentProduct(context,payload){
        const query = await firebase.firestore().collection('products').where("eventId", "==", payload);
        await query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => { 
            //console.log(doc.id, " => ", doc.data());
            const currentProductData = {docId: doc.id, data: doc.data()};
            context.commit('SET_CURRENT_PRODUCT',currentProductData)
          })})
          context.dispatch('showingModal',true)
      },
      //updateProduct (已經將資料傳到後端後，要將後端的資料再重新取回來。)
        //由於getProduct的拿取方式，不會拿取已經有存在的docId。
        //所以我們需要先將更改的data，從productData內刪除，再重新拿取
        //再將editProduct重設為false
      async updateProduct(context,{docId,eventId}){
        context.commit('DELETE_CURRENT_PRODUCT',docId);
        await context.dispatch('getProduct');
        context.dispatch('editProduct',false);
        context.dispatch('getCurrentProduct',eventId)
      },
      //刪除所選
        //
      async deleteProduct({commit},docId){
        const getProduct = firebase.firestore().collection('products').doc(docId)
        await getProduct.delete();
        commit('DELETE_CURRENT_PRODUCT',docId)
      }
      
    },
    mutations:{
      SET_PRODUCT_DATA(state,payload){
        state.productData.push(payload)
      },
      PRODUCT_LOADED(state,payload){
        state.productLoaded = payload
      },
      EDIT_PRODUCT(state,payload){
        state.productEdit = payload
      },
      SET_CURRENT_PRODUCT(state,payload){
        state.currentProductArray=payload
      },
      DELETE_CURRENT_PRODUCT(state,payload){
        state.productData = state.productData.filter( product => product.docId !== payload)
        //filter會將要刪除的data排除
      }
    },
    getters:{
      productData(state){
        return state.productData
      },
      productLoaded(state){
        return state.productLoaded
      },
      editProduct(state){
        return state.productEdit
      },
      currentProductArray(state){
        return state.currentProductArray
      }
    }
      
  })
