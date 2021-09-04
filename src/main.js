import { createApp} from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')


const firebaseConfig = {
    apiKey: "AIzaSyCyAGLOhmnY6PJOoynOkdhFmdPWXTWOHrw",
    authDomain: "ticketweb-backstage.firebaseapp.com",
    projectId: "ticketweb-backstage",
    storageBucket: "ticketweb-backstage.appspot.com",
    messagingSenderId: "1006538887131",
    appId: "1:1006538887131:web:0b5be84e0e5495e7ca61fe"
  };

firebase.initializeApp(firebaseConfig)

//當authState改變，判斷是否為user，來移動路徑
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    router.replace('/dashboard')
  }else{
    router.replace('/')
  }
})


