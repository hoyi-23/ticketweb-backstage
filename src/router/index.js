import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from 'firebase/app';
import 'firebase/auth';
const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('../views/index.vue'),
    children:[
      {
        path: '/',
        name: 'login',
        alias: 'login',
        component: ()=>import('../views/login.vue'),
        meta: { requiresAuth: false },
        //防止已經是user還到login頁面
        beforeEnter: (to, from) => {
          const user = firebase.auth().currentUser;
          if(user){
            return{
              path: '/dashboard'
            }
          }
        }
      },
      {
        path: '/register',
        name: 'register',
        component: ()=>import('../views/register.vue'),
        meta: { requiresAuth: false },
        //防止已經是user還到register頁面
        beforeEnter: (to, from) => {
          const user = firebase.auth().currentUser;
          if(user){
            return{
              path: '/dashboard'
            }
          }
        }
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ()=>import('../views/dashboard.vue'),
    children:[
      {
        path: '',
        name: 'products',
        component: () => import('../views/products.vue'),
        alias: 'products'
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/orders.vue'),
        alias: 'orders'
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/coupons.vue'),
        alias: 'coupons'
      }

    ],
    meta: { requiresAuth: true },
    //防止不是user還到dashboard頁面
    beforeEnter: (to, from) => {
      const user = firebase.auth().currentUser;
      if(!user){
        return{
          path: '/'
        }
      }
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
