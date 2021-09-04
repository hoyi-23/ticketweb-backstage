<template>
  <div class="navbar">
    <a href="#" @click.prevent="toggleSidebar" class="sidebarToggleIcon">
      <span class="material-icons-outlined">menu_open</span>
    </a>
    <h1 class="fs-2">後台系統</h1>
    <a href="#"  @click.prevent="toggleBtnGroup" class="toggleBtnIcon">
      <span class="material-icons-outlined">manage_accounts</span>
    </a>
    <Togglebtn></Togglebtn>

    
  </div>
</template>

<script>

import Togglebtn from '@/components/Togglebtn.vue'

export default {
  name: 'Navbar',
  components:{Togglebtn},
  setup(){
    function toggleSidebar(){
      document.querySelector('.sidebar').classList.toggle('show')
    }
    function toggleBtnGroup(){
      document.querySelector('.toggleBtn').classList.toggle('slide')
    }
    return{
      toggleSidebar,
      toggleBtnGroup
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
