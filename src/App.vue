<template>
  <div>
    <router-view/>
  </div>
  
</template>

<script>
import {useStore} from 'vuex'
import {ref,computed,watch} from 'vue'
export default {
  name: 'App',
  setup(){
    const store = useStore()
    const isDarkMode = computed(()=>store.state.isDarkMode)

    

    watch(isDarkMode,(val) => {
      if(val === true){
        document.body.classList.add('dark')
      }else{
         document.body.classList.remove('dark')
      }
      

    })


    return{
      isDarkMode
    }
  }
}
</script>

<style lang="scss" src="./assets/style/all.scss">
</style>
