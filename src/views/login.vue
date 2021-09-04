<template>
  <div class="login">
    <h1 class="fs-1 text-center fw-bold">登入後台</h1>
    <!--建立一個login function--->
    <form @submit.prevent="Login" class="form">
        <div class="formInput">
            <label class="fs-3" for="email">Email</label>
            <input class="fs-2" type="email" id="email" placeholder="輸入信箱" v-model="email" required/>
        </div>
        <div class="formInput">
            <label class="fs-3" for="password">Password</label>
            <input class="fs-2" type="password" placeholder="輸入密碼" v-model="password" required/>
        </div>
        <div class="formInput">
            <input class="btn btn-primary fs-2" type="submit" value="Login">
        </div>
        <div class="text-center"> 
            Need an account ? 
            <router-link :to="{name: 'register'}">Register Here</router-link>
        </div>
    </form>
  </div>
</template>

<script>

import{ref}from'vue';
import {useStore} from 'vuex'


export default {
    name: 'login',
    setup(){
        const store = useStore()
    //登入
        //與email輸入綁定
        const email = ref("");
        //與password輸入綁定
        const password = ref("");
    
        function Login(){
            store.dispatch('loginUser',{email: email.value, password: password.value})
        }



        return{
            email,
            password,
            Login
        }
    },
}
</script>

<style lang="scss">

</style>