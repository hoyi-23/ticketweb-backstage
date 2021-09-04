import firebase from 'firebase/app';
import 'firebase/auth';


export default({
    state: {
      //資料狀態
      user: null,
      userName: '',
    },
    actions: {
      //註冊
      registerUser({commit},payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email , payload.password)
        //建立後
        .then(
          userCredential => {
            var user = userCredential.user;
            console.log(user.email)
            alert('註冊成功'),
            commit('setUser',user)
          },
        )
        .catch(err => alert(err.message));
      },
      //登入
      loginUser({commit},payload){
        firebase.auth().signInWithEmailAndPassword(payload.email , payload.password)
        .then(
          userCredential => {
            var user = userCredential.user;
            console.log(user.email)
            alert('登入成功'),
            commit('setUser',user)
          },
          
        )
        .catch(err => alert(err.message));
      },
      logout({commit}){
        firebase.auth().signOut()
        alert('登出成功'),
        commit('setUser',null)
      }

    },
    mutations: {
      setUser(state,payload){
        if(payload){
          state.user = payload;
          state.userName = payload.email
        }else{
          state.user = null;
          state.userName = '';
        }
      }
    },
    getters: {
      user(state){
        return state.user
      },
      userName(state){
        return state.userName.split('@')[0]
      }
    },
  })
