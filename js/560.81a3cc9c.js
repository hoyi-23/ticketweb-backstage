"use strict";(self["webpackChunkticketweb_backstage"]=self["webpackChunkticketweb_backstage"]||[]).push([[560],{3560:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(6252);const o={class:"dashboard container"},r={class:"main"};function s(e,t,n,s,l,i){const c=(0,a.up)("Navbar"),u=(0,a.up)("Sidebar"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(c),(0,a._)("div",r,[(0,a.Wm)(u),(0,a.Wm)(d)])])}var l=n(9963);const i={class:"navbar"},c=(0,a._)("span",{class:"material-icons-outlined"},"menu_open",-1),u=[c],d=(0,a._)("h1",{class:"fs-2"},"後台系統",-1),g=(0,a._)("span",{class:"material-icons-outlined"},"manage_accounts",-1),_=[g];function b(e,t,n,o,r,s){const c=(0,a.up)("Togglebtn");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("a",{href:"#",onClick:t[0]||(t[0]=(0,l.iM)(((...e)=>o.toggleSidebar&&o.toggleSidebar(...e)),["prevent"])),class:"sidebarToggleIcon"},u),d,(0,a._)("a",{href:"#",onClick:t[1]||(t[1]=(0,l.iM)(((...e)=>o.toggleBtnGroup&&o.toggleBtnGroup(...e)),["prevent"])),class:"toggleBtnIcon"},_),(0,a.Wm)(c)])}const m={class:"toggleBtn"},p={class:"toggleBtn__Group"},k={class:"toggleBtn__Item"},f=(0,a._)("span",{class:"material-icons-outlined"},"light_mode",-1),v=[f],h={class:"toggleBtn__Item"},M=(0,a._)("span",{class:"material-icons-outlined"},"dark_mode",-1),w=[M],B={class:"toggleBtn__Item"};function S(e,t,n,o,r,s){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("ul",p,[(0,a._)("li",k,[(0,a._)("a",{href:"#",onClick:t[0]||(t[0]=(0,l.iM)(((...e)=>o.lightMode&&o.lightMode(...e)),["prevent"]))},v)]),(0,a._)("li",h,[(0,a._)("a",{href:"#",onClick:t[1]||(t[1]=(0,l.iM)(((...e)=>o.darkMode&&o.darkMode(...e)),["prevent"]))},w)]),(0,a._)("li",B,[(0,a._)("a",{href:"#",class:"btn btn-primary",onClick:t[2]||(t[2]=(0,l.iM)(((...e)=>o.logout&&o.logout(...e)),["prevent"]))},"登出")])])])}var C=n(4709),W={name:"Togglebtn",setup(){const e=(0,C.oR)();function t(){e.dispatch("logout")}function n(){e.dispatch("lightMode",{isDarkMode:!1})}function a(){e.dispatch("darkMode",{isDarkMode:!0})}return{logout:t,lightMode:n,darkMode:a}}};W.render=S;var y=W,D={name:"Navbar",components:{Togglebtn:y},setup(){function e(){document.querySelector(".sidebar").classList.toggle("show")}function t(){document.querySelector(".toggleBtn").classList.toggle("slide")}return{toggleSidebar:e,toggleBtnGroup:t}}};D.render=b;var N=D,I=n(3577);const L={class:"sidebar"},G=(0,a.Uk)("商品管理"),T=(0,a.Uk)("訂單紀錄"),U=(0,a.Uk)("優惠券管理");function q(e,t,n,o,r,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("p",null,"Hello! "+(0,I.zw)(o.userName),1),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(l,{class:"btn btn-primary sidebar__Link",to:"/dashboard"},{default:(0,a.w5)((()=>[G])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{class:"btn btn-primary sidebar__Link",to:{name:"orders"}},{default:(0,a.w5)((()=>[T])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{class:"btn btn-primary sidebar__Link",to:{name:"coupons"}},{default:(0,a.w5)((()=>[U])),_:1})])])])}var R=n(2262),z={name:"Sidebar",setup(){const e=(0,C.oR)(),t=(0,R.Fl)((()=>e.getters.userName));return{userName:t}}};z.render=q;var F=z,H={name:"dashboard",components:{Navbar:N,Sidebar:F}};H.render=s;var j=H}}]);
//# sourceMappingURL=560.81a3cc9c.js.map