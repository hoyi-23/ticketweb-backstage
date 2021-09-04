<template>
  <div class="dashboard container">
    <Navbar></Navbar>
    <div class="main">
      <Sidebar></Sidebar>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'dashboard',
  components:{
    Navbar,
    Sidebar
  },

}
</script>

