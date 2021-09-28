import firebase from 'firebase/app';
import 'firebase/firestore'

export default({
    state:{
        orderList: [],
        orderLoaded: null,
    },
    actions:{
        async getOrders({commit,state}){
            var orderCollection = firebase.firestore(firebase.apps[1]).collection('order');
            const orderData = await orderCollection.get();
            orderData.forEach( doc => {
                if(!state.orderList.some(order => order.docId === doc.id)){
                    const data = {
                        docId: doc.id,
                        buyerInfo: doc.data().buyerInfo,
                        purchaseItems: doc.data().purchaseItems,
                        total: doc.data().total,
                        userId: doc.data().userId
                    };
                    commit('SET_ORDERS',data)
                }
            });
            commit('ORDER_LOADED',true)
        },
        async deleteOrder({commit},docId){
            const getOrderId = await firebase.firestore(firebase.apps[1]).collection('order').doc(docId)
            await getOrderId.delete();
            commit('DELETE_CURRENT_ORDER',docId)
        }
    },
    mutations:{
        SET_ORDERS(state,payload){
            state.orderList.push(payload)
        },
        ORDER_LOADED(state,payload){
            state.orderLoaded = payload
        },
        DELETE_CURRENT_ORDER(state,payload){
            state.orderList = state.orderList.filter( order => order.docId !== payload)
        }
    },
    getters:{
        orderList(state){
            return state.orderList
        },
        orderLoaded(state){
            return state.orderLoaded
        }
    }
})