(function(){"use strict";var e={9287:function(e,t,r){var o=r(9963),n=r(9669),a=r.n(n),i=r(5382),c=r.n(i),s=r(5503),d=(r(7397),r(9433),r(144),r(6252));function u(e,t,r,o,n,a){const i=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.Wm)(i)])}var l=r(4709),p=r(2262),f={name:"App",setup(){const e=(0,l.oR)(),t=(0,p.Fl)((()=>e.state.isDarkMode));return(0,d.YP)(t,(e=>{!0===e?document.body.classList.add("dark"):document.body.classList.remove("dark")})),{isDarkMode:t}}};f.render=u;var m=f,h=r(2119);const g=[{path:"/",name:"index",component:()=>r.e(212).then(r.bind(r,6212)),children:[{path:"/",name:"login",alias:"login",component:()=>r.e(443).then(r.bind(r,6443)),meta:{requiresAuth:!1},beforeEnter:(e,t)=>{const r=s.Z.auth().currentUser;if(r)return{path:"/dashboard"}}},{path:"/register",name:"register",component:()=>r.e(668).then(r.bind(r,7668)),meta:{requiresAuth:!1},beforeEnter:(e,t)=>{const r=s.Z.auth().currentUser;if(r)return{path:"/dashboard"}}}]},{path:"/dashboard",name:"dashboard",component:()=>r.e(560).then(r.bind(r,3560)),children:[{path:"",name:"products",component:()=>r.e(763).then(r.bind(r,8763)),alias:"products"},{path:"orders",name:"orders",component:()=>r.e(909).then(r.bind(r,4056)),alias:"orders"},{path:"coupons",name:"coupons",component:()=>r.e(985).then(r.bind(r,2985)),alias:"coupons"}],meta:{requiresAuth:!0},beforeEnter:(e,t)=>{const r=s.Z.auth().currentUser;if(!r)return{path:"/"}}}],v=(0,h.p7)({history:(0,h.r5)(),routes:g});var E=v,b={state:{user:null,userName:""},actions:{registerUser({commit:e},t){s.Z.auth().createUserWithEmailAndPassword(t.email,t.password).then((t=>{var r=t.user;console.log(r.email),alert("註冊成功"),e("setUser",r)})).catch((e=>alert(e.message)))},loginUser({commit:e},t){s.Z.auth().signInWithEmailAndPassword(t.email,t.password).then((t=>{var r=t.user;console.log(r.email),alert("登入成功"),e("setUser",r)})).catch((e=>alert(e.message)))},logout({commit:e}){s.Z.auth().signOut(),alert("登出成功"),e("setUser",null)},currentUser({commit:e},t){e("setUser",t)}},mutations:{setUser(e,t){t?(e.user=t,e.userName=t.email,localStorage.setItem("user",JSON.stringify(t))):(e.user=null,e.userName="",localStorage.removeItem("user"))}},getters:{user(e){return e.user},userName(e){return e.userName.split("@")[0]}}},D={state:{productData:[],productLoaded:null,productEdit:!1,currentProductArray:[]},actions:{async getProduct({commit:e,state:t}){var r=s.Z.storage().ref("Images/"),o=s.Z.firestore().collection("products");const n=await o.get();n.forEach((o=>{t.productData.some((e=>e.docId===o.id))||r.child(o.data().eventId+".jpeg").getDownloadURL().then((t=>{const r={docId:o.id,eventId:o.data().eventId,eventTitle:o.data().eventTitle,eventType:o.data().eventType,eventCategory:o.data().eventCategory,eventLocation:o.data().eventLocation,eventFullPrice:o.data().eventFullPrice,eventStudentPrice:o.data().eventStudentPrice,eventDiscountPrice:o.data().eventDiscountPrice,eventStartDate:o.data().eventStartDate,eventEndDate:o.data().eventEndDate,eventDescription:o.data().eventDescription,eventPhotos:t,eventActive:o.data().eventActive,eventDraft:o.data().eventDraft};e("SET_PRODUCT_DATA",r)})).catch((e=>{console.log(e)}))})),e("PRODUCT_LOADED",!0)},editProduct({commit:e},t){e("EDIT_PRODUCT",t)},async getCurrentProduct(e,t){var r=await s.Z.storage().ref("Images/");const o=await s.Z.firestore().collection("products").where("eventId","==",t);var n={};await o.get().then((e=>{e.forEach((e=>{n.docId=e.id,n.data=e.data()}))})),await r.child(t+".jpeg").getDownloadURL().then((e=>{n.photoUrl=e})),e.commit("SET_CURRENT_PRODUCT",n),e.dispatch("showingModal",!0)},async updateProduct(e,{docId:t,eventId:r}){e.commit("DELETE_CURRENT_PRODUCT",t),await e.dispatch("getProduct"),e.dispatch("editProduct",!1)},async deleteProduct({commit:e},{docId:t,eventId:r}){const o=s.Z.firestore().collection("products").doc(t);await o.delete(),await s.Z.storage().ref("Images/").child(r+".jpeg").delete(),e("DELETE_CURRENT_PRODUCT",t)}},mutations:{SET_PRODUCT_DATA(e,t){e.productData.push(t)},PRODUCT_LOADED(e,t){e.productLoaded=t},EDIT_PRODUCT(e,t){e.productEdit=t},SET_CURRENT_PRODUCT(e,t){e.currentProductArray=t},DELETE_CURRENT_PRODUCT(e,t){e.productData=e.productData.filter((e=>e.docId!==t))}},getters:{productData(e){return e.productData},productLoaded(e){return e.productLoaded},editProduct(e){return e.productEdit},currentProductArray(e){return e.currentProductArray}}},w={state:{showModal:!1,showExitCheckModal:!1},actions:{showingModal({commit:e},t){e("SHOWMODAL",t)},closingModal({commit:e},t){e("CLOSEMODAL",t)},showExitCheck({commit:e},t){e("SHOWEXITCHECK",t)},closeExitCheck({commit:e},t){e("CLOSEEXITCHECK",t)}},mutations:{SHOWMODAL(e,t){e.showModal=t},CLOSEMODAL(e,t){e.showModal=t},SHOWEXITCHECK(e,t){e.showExitCheckModal=t},CLOSEEXITCHECK(e,t){e.showExitCheckModal=t}},getters:{showModal(e){return e.showModal},showExitCheckModal(e){return e.showExitCheckModal}}},O={state:{orderList:[],orderLoaded:null},actions:{async getOrders({commit:e,state:t}){var r=s.Z.firestore(s.Z.apps[1]).collection("order");const o=await r.get();o.forEach((r=>{if(!t.orderList.some((e=>e.docId===r.id))){const t={docId:r.id,buyerInfo:r.data().buyerInfo,purchaseItems:r.data().purchaseItems,total:r.data().total,userId:r.data().userId};e("SET_ORDERS",t)}})),e("ORDER_LOADED",!0)},async deleteOrder({commit:e},t){const r=await s.Z.firestore(s.Z.apps[1]).collection("order").doc(t);await r.delete(),e("DELETE_CURRENT_ORDER",t)}},mutations:{SET_ORDERS(e,t){e.orderList.push(t)},ORDER_LOADED(e,t){e.orderLoaded=t},DELETE_CURRENT_ORDER(e,t){e.orderList=e.orderList.filter((e=>e.docId!==t))}},getters:{orderList(e){return e.orderList},orderLoaded(e){return e.orderLoaded}}},y=(0,l.MT)({state:{isDarkMode:!1},actions:{lightMode({commit:e},t){const r=t.isDarkMode;e("setMode",r)},darkMode({commit:e},t){const r=t.isDarkMode;e("setMode",r)}},mutations:{setMode(e,t){e.isDarkMode=t,console.log(t)}},modules:{authUser:b,modalManage:w,productsManage:D,order:O}});const C={apiKey:"AIzaSyCyAGLOhmnY6PJOoynOkdhFmdPWXTWOHrw",authDomain:"ticketweb-backstage.firebaseapp.com",projectId:"ticketweb-backstage",storageBucket:"ticketweb-backstage.appspot.com",messagingSenderId:"1006538887131",appId:"1:1006538887131:web:0b5be84e0e5495e7ca61fe"},T={apiKey:"AIzaSyB7929OrasCPgrMr8illHb7y8OWp0MaLiE",authDomain:"ticketweb-frontstage.firebaseapp.com",projectId:"ticketweb-frontstage",storageBucket:"ticketweb-frontstage.appspot.com",messagingSenderId:"620354483124",appId:"1:620354483124:web:5eaef9ab0417343c4938e1"};s.Z.initializeApp(C),s.Z.initializeApp(T,"secondary"),s.Z.firestore().settings({experimentalForceLongPolling:!0,merge:!0}),s.Z.auth().onAuthStateChanged((function(e){e?(E.replace("/dashboard"),y.dispatch("currentUser",JSON.parse(localStorage.getItem("user")))):E.replace("/")})),(0,o.ri)(m).use(y).use(E).use(c(),a()).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{212:"8d0340d4",443:"0924f648",560:"a0a926ad",668:"80583bf7",763:"848dcf35",909:"7f511d43",985:"a87603ce"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{763:"fdd20026",909:"9c839932"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ticketweb-backstage:";r.l=function(o,n,a,i){if(e[o])e[o].push(n);else{var c,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[n];var p=function(t,r){c.onerror=c.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/ticketweb-backstage/"}(),function(){var e=function(e,t,r,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=function(o){return new Promise((function(n,a){var i=r.miniCssF(o),c=r.p+i;if(t(i,c))return n();e(o,c,n,a)}))},n={143:0};r.f.miniCss=function(e,t){var r={763:1,909:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=a);var i=r.p+r.u(t),c=new Error,s=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,i=o[0],c=o[1],s=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return r.O(u)},o=self["webpackChunkticketweb_backstage"]=self["webpackChunkticketweb_backstage"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(9287)}));o=r.O(o)})();
//# sourceMappingURL=app.9d52055d.js.map