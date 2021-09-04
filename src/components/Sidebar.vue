<template>
  <div class="sidebar">
    <p>Hello! {{userName}}</p>
    <ul>
      <li>
        <router-link class="btn btn-primary sidebar__Link" to="/dashboard">商品管理</router-link>
      </li>
      <li>
        <router-link class="btn btn-primary sidebar__Link" :to="{name: 'orders'}">訂單紀錄</router-link>
      </li>
      <li>
        <router-link class="btn btn-primary sidebar__Link" :to="{name: 'coupons'}">優惠券管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Sidebar',

  setup(){
    const store = useStore()
    const userName = computed(()=>{return store.getters.userName})


    return{
      userName
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>