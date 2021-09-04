<template>
  <div class="register">
    <h1 class="fs-1 text-center fw-bold">註冊</h1>
    <!--建立一個login function--->
    <form @submit.prevent="register" class="form">
        <div class="formInput">
            <label class="fs-3" for="email">Email</label>
            <input class="fs-2" type="email" id="email" placeholder="輸入信箱" v-model="email" required/>
        </div>
        <div class="formInput">
            <label class="fs-3" for="password">Password</label>
            <input class="fs-2" type="password" id="password" placeholder="輸入密碼" v-model="password" required/>
        </div>
        <div class="formInput">
            <label class="fs-3" for="confirmPassword">Confirm Passwords <span>{{comparePassword}}</span></label>
            <input class="fs-2" type="Password" id="confirmPassword" placeholder="再次輸入密碼" v-model="confirmPassword" required/>
        </div>
        <div class="formInput">
            <input class="btn btn-primary fs-2" type="submit" value="register">
        </div>
        <div class="formRedirect">
            Have an account ? 
            <router-link :to="{name: 'login'}">Login Here</router-link>
        </div>
    </form>
  </div>
</template>

<script>
import{ref,computed}from'vue';
import {useStore} from 'vuex'

export default {
  name: 'register',
  setup(){
    const store = useStore()
    //與email輸入綁定
    const email = ref("");
    //與password輸入綁定
    const password = ref("");
    //與confirmPassword輸入綁定
    const confirmPassword = ref("")

    //確認輸入密碼判斷
    const comparePassword = computed(()=>{return password.value !== confirmPassword.value ? '密碼不相符' : ''})

    function register(){
        store.dispatch('registerUser',{email: email.value, password: password.value})
    }


    return{
        email,
        password,
        confirmPassword,
        comparePassword,
        register

    }
    }
}
</script>

<style lang="scss">

</style>