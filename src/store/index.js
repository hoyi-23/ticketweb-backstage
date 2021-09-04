import { createStore } from 'vuex'
import authUser from './auth/auth-user'
import productsManage from './products/products-manage'
import modalManage from './products/modal-manage'

export default createStore({
  state:{
    isDarkMode: false,
  },
  actions:{
    lightMode({commit},payload){
      const isDarkMode = payload.isDarkMode
      commit('setMode',isDarkMode)
    },
    darkMode({commit},payload){
      const isDarkMode = payload.isDarkMode
      commit('setMode',isDarkMode)
    },
  },
  mutations:{
    setMode(state,payload){
      state.isDarkMode = payload
      console.log(payload)
    }
  },
  modules: {
     authUser,
     modalManage,
     productsManage
  }
})
