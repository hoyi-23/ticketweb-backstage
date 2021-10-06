<template>
    <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
                <p>確定要退出嗎? 您的變更不會儲存喔!</p>
                <div class="text-center btn-group">
                    <button type="button" class="btn fw-bold btn-danger" @click="closeExitCheck">繼續編輯</button>
                    <button type="button" class="btn fw-bold btn-cancel" @click="closingBothModal">放棄編輯</button>
                </div>
            </div>
            
          </div>
        </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name: "ExitCheck",
  setup(){
      const store = useStore()
      function closingBothModal(){
          store.dispatch('closingModal',false)
          closeExitCheck()
      }
      function closeExitCheck(){
          store.dispatch('closeExitCheck',false)
      }


      return{
          closingBothModal,
          closeExitCheck,
      }
  }
}
</script>

<style lang="scss" scoped>
    p {
      text-align: center;
    }
    .btn-group{
        margin-top: 1rem;
    }
    .btn{
        margin-left: .5rem;
    }
    .modal-mask{
        z-index: 9999;
    }
</style>