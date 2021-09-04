<template>
  <div class="toggleBtn">
    <ul class="toggleBtn__Group">
      <li class="toggleBtn__Item">
        <a href="#" @click.prevent="lightMode">
          <span class="material-icons-outlined">light_mode</span>
        </a>
      </li>
      <li class="toggleBtn__Item">
        <a href="#"  @click.prevent="darkMode">
          <span class="material-icons-outlined">dark_mode</span>
        </a>
      </li>
      <li class="toggleBtn__Item">
        <a href="#" class="btn btn-primary" @click.prevent="logout">登出</a>
      </li>
    </ul>
    
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name: 'Togglebtn',
  setup(){
    const store = useStore()
    function logout(){
      store.dispatch('logout')
    }

    function lightMode(){
      store.dispatch('lightMode',{isDarkMode: false})
    }

    function darkMode(){
      store.dispatch('darkMode',{isDarkMode: true})
    }

    return{
      logout,
      lightMode,
      darkMode
    }
  }
  
}
</script>
