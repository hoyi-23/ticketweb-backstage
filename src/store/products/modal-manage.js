export default({
    state: {
      //建立、修改Modal(show)
      showModal: false,

      //ExitCheck Modal
      showExitCheckModal: false
    },
    actions: {
      showingModal({commit},payload){
        commit('SHOWMODAL',payload)
      },
      closingModal({commit},payload){
        commit('CLOSEMODAL',payload)
      },
      showExitCheck({commit},payload){
        commit('SHOWEXITCHECK',payload)
      },
      closeExitCheck({commit},payload){
        commit('CLOSEEXITCHECK',payload)
      }
    },
    mutations: {
      SHOWMODAL(state,payload){
        state.showModal = payload
      },
      CLOSEMODAL(state,payload){
        state.showModal = payload
      },
      SHOWEXITCHECK(state,payload){
        state.showExitCheckModal = payload
      },
      CLOSEEXITCHECK(state,payload){
        state.showExitCheckModal = payload
      }
    },
    getters: {
      showModal(state){
        return state.showModal
      },
      showExitCheckModal(state){
        return state.showExitCheckModal
      }
    },
  })
