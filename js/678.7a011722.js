"use strict";(self["webpackChunkticketweb_backstage"]=self["webpackChunkticketweb_backstage"]||[]).push([[678],{678:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ve}});var n=a(252);const o={class:"products"},l={class:"addProduct__wrap"},i={key:0},d={key:1},u={class:"productList__wrap"},c={key:0},r=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"活動名稱"),(0,n._)("th",null,"分類"),(0,n._)("th",null,"開始日期"),(0,n._)("th",null,"結束日期"),(0,n._)("th",null,"狀態"),(0,n._)("th",null,"操作")])],-1),v={key:0},s={key:1},p=(0,n._)("p",{class:"text-center"},"尚未建立任何活動",-1),_=[p],m={key:1};function g(e,t,a,p,g,f){const b=(0,n.up)("ExitCheck"),h=(0,n.up)("ProductModal"),w=(0,n.up)("ProductTable"),D=(0,n.up)("OnLoad");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",l,[(0,n._)("button",{class:"btn btn-primary fw-bold addProductBtn",id:"show-modal",onClick:t[0]||(t[0]=(...e)=>p.showingModal&&p.showingModal(...e))}," + 建立新活動 "),p.showExitCheckModal?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(b)])):(0,n.kq)("",!0),p.showModal?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(h)])):(0,n.kq)("",!0)]),(0,n._)("div",u,[p.checkProductLoaded?((0,n.wg)(),(0,n.iD)("table",c,[r,p.productData.length>0?((0,n.wg)(),(0,n.iD)("tbody",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.productData,((e,t)=>((0,n.wg)(),(0,n.j4)(w,{key:t,product:e},null,8,["product"])))),128))])):((0,n.wg)(),(0,n.iD)("tbody",s,_))])):((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(D)]))])])}var f=a(963);(0,n.dD)("data-v-763ae9fa");const b={class:"modal-mask"},h={class:"modal-wrapper"},w={class:"modal-container"},D={class:"grid formInput"},y=(0,n._)("label",{for:"eventTitle"},"活動名稱",-1),k={class:"grid"},P={class:"formInput grid__item--md-span-4"},C=(0,n._)("label",{for:"eventType"},"類型",-1),E=(0,n._)("option",{value:"",selected:"",disabled:""},"請選擇",-1),M=(0,n._)("option",{value:"temp"},"短期",-1),I=(0,n._)("option",{value:"regular"},"常設",-1),F=[E,M,I],T={class:"formInput grid__item--md-span-4"},L=(0,n._)("label",{for:"eventCategory"},"分類",-1),S=(0,n.uE)('<option value="" selected disabled data-v-763ae9fa>請選擇</option><option value="music" data-v-763ae9fa>音樂</option><option value="drama" data-v-763ae9fa>戲劇</option><option value="dance" data-v-763ae9fa>舞蹈</option><option value="design" data-v-763ae9fa>設計</option><option value="art" data-v-763ae9fa>藝術</option><option value="food" data-v-763ae9fa>美食</option><option value="travel" data-v-763ae9fa>旅遊</option><option value="family" data-v-763ae9fa>親子</option><option value="movie" data-v-763ae9fa>電影</option>',10),x=[S],H={class:"formInput grid__item--md-span-4"},q=(0,n._)("label",{for:"eventLocation"},"場地",-1),U=(0,n._)("option",{value:"",selected:"",disabled:""},"請選擇",-1),V=(0,n._)("option",{value:"Aroom"},"圓形劇場",-1),R=(0,n._)("option",{value:"Broom"},"室外舞台",-1),j=[U,V,R],A={class:"grid"},B={class:"formInput grid__item--md-span-4"},O=(0,n._)("label",{for:"eventPriceFull"},"一般售價",-1),z={class:"formInput grid__item--md-span-4"},W=(0,n._)("label",{for:"eventPriceStudent"},"學生售價",-1),K={class:"formInput grid__item--md-span-4"},N=(0,n._)("label",{for:"eventPriceDiscount"},"優惠售價",-1),Y={class:"grid"},Z={class:"formInput grid__item--md-span-6"},G=(0,n._)("label",{for:"eventDateStart"},"開始日期",-1),J={class:"formInput grid__item--md-span-6"},Q=(0,n._)("label",{for:"eventDateEnd"},"結束日期",-1),X={class:"grid formInput"},$=(0,n._)("label",{for:"eventDescription"},"活動內容",-1),ee={class:"grid"},te={class:"formInput grid__item--md-span-6"},ae=(0,n._)("label",{for:"eventPhotos"},"活動照片",-1),ne={class:"foremInput grid__item--md-span-6"},oe=["src"],le={class:"grid justify-content-between"},ie={class:"grid__item--md-span-6"},de={key:0,type:"submit",class:"btn fw-bold btn-danger"},ue={class:"grid grid__item--md-span-6 justify-content-md-end"};function ce(e,t,a,o,l,i){const d=(0,n.up)("OnLoad");return(0,n.wg)(),(0,n.iD)("div",{onClick:t[15]||(t[15]=(...e)=>o.checkClick&&o.checkClick(...e)),ref:"productModal",class:"productModal"},[(0,n._)("div",b,[(0,n._)("div",h,[(0,n._)("div",w,[(0,n._)("form",{onSubmit:t[14]||(t[14]=(0,f.iM)(((...e)=>o.submitForm&&o.submitForm(...e)),["prevent"])),class:"productForm"},[(0,n.wy)((0,n.Wm)(d,null,null,512),[[f.F8,o.loading]]),(0,n._)("div",D,[y,(0,n.wy)((0,n._)("input",{type:"text",id:"eventTitle","onUpdate:modelValue":t[0]||(t[0]=e=>o.eventTitle=e),required:""},null,512),[[f.nr,o.eventTitle]])]),(0,n._)("div",k,[(0,n._)("div",P,[C,(0,n.wy)((0,n._)("select",{name:"eventType",id:"eventType","onUpdate:modelValue":t[1]||(t[1]=e=>o.eventType=e),required:""},F,512),[[f.bM,o.eventType]])]),(0,n._)("div",T,[L,(0,n.wy)((0,n._)("select",{name:"eventCategory",id:"eventCategory","onUpdate:modelValue":t[2]||(t[2]=e=>o.eventCategory=e),required:""},x,512),[[f.bM,o.eventCategory]])]),(0,n._)("div",H,[q,(0,n.wy)((0,n._)("select",{name:"eventLocation",id:"eventLocation","onUpdate:modelValue":t[3]||(t[3]=e=>o.eventLocation=e),required:""},j,512),[[f.bM,o.eventLocation]])])]),(0,n._)("div",A,[(0,n._)("div",B,[O,(0,n.wy)((0,n._)("input",{type:"number",id:"eventPriceFull","onUpdate:modelValue":t[4]||(t[4]=e=>o.eventFullPrice=e),required:""},null,512),[[f.nr,o.eventFullPrice]])]),(0,n._)("div",z,[W,(0,n.wy)((0,n._)("input",{type:"number",id:"eventPriceStudent","onUpdate:modelValue":t[5]||(t[5]=e=>o.eventStudentPrice=e),required:""},null,512),[[f.nr,o.eventStudentPrice]])]),(0,n._)("div",K,[N,(0,n.wy)((0,n._)("input",{type:"number",id:"eventPriceDiscount","onUpdate:modelValue":t[6]||(t[6]=e=>o.eventDiscountPrice=e),required:""},null,512),[[f.nr,o.eventDiscountPrice]])])]),(0,n._)("div",Y,[(0,n._)("div",Z,[G,(0,n.wy)((0,n._)("input",{type:"date",id:"eventDateStart","onUpdate:modelValue":t[7]||(t[7]=e=>o.eventStartDate=e),required:""},null,512),[[f.nr,o.eventStartDate]])]),(0,n._)("div",J,[Q,(0,n.wy)((0,n._)("input",{type:"date",id:"eventDateEnd","onUpdate:modelValue":t[8]||(t[8]=e=>o.eventEndDate=e),required:""},null,512),[[f.nr,o.eventEndDate]])])]),(0,n._)("div",X,[$,(0,n.wy)((0,n._)("textarea",{name:"eventDescription",id:"eventDescription","onUpdate:modelValue":t[9]||(t[9]=e=>o.eventDescription=e),cols:"30",rows:"5",required:""},null,512),[[f.nr,o.eventDescription]])]),(0,n._)("div",ee,[(0,n._)("div",te,[ae,(0,n._)("input",{type:"file",id:"eventPhotos",accept:"image/gif,image/jpeg,image/jpg,image/png",onChange:t[10]||(t[10]=(...e)=>o.uploadPhoto&&o.uploadPhoto(...e)),multiple:"multiple",required:""},null,32)]),(0,n._)("div",ne,[(0,n._)("img",{src:o.eventPhotos,class:"preview"},null,8,oe)])]),(0,n._)("div",le,[(0,n._)("div",ie,[(0,n._)("button",{type:"button",class:"btn fw-bold btn-cancel",onClick:t[11]||(t[11]=(...e)=>o.closingModal&&o.closingModal(...e))},"取消編輯"),o.productEdit?((0,n.wg)(),(0,n.iD)("button",de,"儲存修改")):(0,n.kq)("",!0)]),(0,n._)("div",ue,[(0,n._)("button",{type:"submit",class:"btn fw-bold btn-cancel",onClick:t[12]||(t[12]=(...e)=>o.saveDraft&&o.saveDraft(...e))},"設為草稿"),(0,n._)("button",{type:"submit",class:"btn fw-bold btn-danger",onClick:t[13]||(t[13]=(...e)=>o.publishEvent&&o.publishEvent(...e))},"建立活動")])])],32)])])])],512)}(0,n.Cn)();var re=a(709),ve=a(262),se=a(503);a(433);(0,n.dD)("data-v-e77f9db0");const pe={class:"loading"},_e=(0,n._)("span",null,null,-1),me=[_e];function ge(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)("div",pe,me)}(0,n.Cn)();var fe={name:"OnLoad"};fe.render=ge,fe.__scopeId="data-v-e77f9db0";var be=fe,he={name:"ProductModal",components:{OnLoad:be},setup(){const e=(0,ve.iH)(null),t=(0,ve.iH)(null),a=(0,ve.iH)(null),o=(0,ve.iH)(null),l=(0,ve.iH)(null),i=(0,ve.iH)(null),d=(0,ve.iH)(null),u=(0,ve.iH)(null),c=(0,ve.iH)(null),r=(0,ve.iH)(null),v=(0,ve.iH)(null),s=(0,ve.iH)(null),p=(0,ve.iH)(null),_=(0,ve.iH)(null),m=(0,ve.iH)(null),g=(0,ve.iH)(null);function f(e){const t=e.target.files.length,a=e.target.files,n=new Image;for(var o=0;o<t;o++){const e=new FileReader;e.readAsDataURL(a[o]),e.onload=function(){n.src=e.result},n.onload=function(){const e=Math.min(1800,n.width),t=n.height*(e/n.width),a=document.createElement("canvas"),o=a.getContext("2d");a.width=e,a.height=t,o.drawImage(n,0,0,e,t),console.log(a.toDataURL("image/jpeg")),_.value=a.toDataURL("image/jpeg")}}}function b(){m.value=!0}function h(){g.value=!0}const w=se.Z.firestore();async function D(){e.value=!0;const t=w.collection("products").doc();await t.set({eventId:a.value,eventTitle:o.value,eventType:l.value,eventCategory:i.value,eventLocation:d.value,eventFullPrice:u.value,eventStudentPrice:c.value,eventDiscountPrice:r.value,eventStartDate:v.value,eventEndDate:s.value,eventDescription:p.value,eventPhotos:_.value,eventActive:m.value,eventDraft:g.value}),e.value=!1,P(),k.dispatch("getProduct")}function y(){M.value?F():D()}const k=(0,re.oR)();function P(){k.dispatch("closingModal",!1)}function C(e){"modal-wrapper"===e.target.className&&E()}function E(){k.dispatch("showExitCheck",!0)}const M=(0,ve.Fl)((()=>k.getters.editProduct)),I=(0,ve.Fl)((()=>k.getters.currentProductArray));async function F(){e.value=!0;const n=t.value;await w.collection("products").doc(n).update({eventTitle:o.value,eventType:l.value,eventCategory:i.value,eventLocation:d.value,eventFullPrice:u.value,eventStudentPrice:c.value,eventDiscountPrice:r.value,eventStartDate:v.value,eventEndDate:s.value,eventDescription:p.value,eventPhotos:_.value});const m={docId:t.value,eventId:a.value};await k.dispatch("updateProduct",m),e.value=!1,P()}return(0,n.wF)((()=>{if(!M.value){let e=Math.floor(Date.now()/1e3);a.value=e}M.value&&(t.value=I.value.docId,a.value=I.value.data.eventId,o.value=I.value.data.eventTitle,l.value=I.value.data.eventType,i.value=I.value.data.eventCategory,d.value=I.value.data.eventLocation,u.value=I.value.data.eventFullPrice,c.value=I.value.data.eventStudentPrice,r.value=I.value.data.eventDiscountPrice,v.value=I.value.data.eventStartDate,s.value=I.value.data.eventEndDate,p.value=I.value.data.eventDescription,_.value=I.value.data.eventPhotos,m.value=I.value.data.eventActive,g.value=I.value.data.eventDraft,console.log(I))})),{loading:e,docId:t,eventId:a,eventTitle:o,eventType:l,eventCategory:i,eventLocation:d,eventFullPrice:u,eventStudentPrice:c,eventDiscountPrice:r,eventStartDate:v,eventEndDate:s,eventDescription:p,eventActive:m,eventDraft:g,eventPhotos:_,uploadPhoto:f,saveDraft:h,publishEvent:b,submitForm:y,closingModal:P,checkClick:C,showingExitCheck:E,eventUpload:D,productEdit:M,eventUpdate:F}}};he.render=ce,he.__scopeId="data-v-763ae9fa";var we=he;(0,n.dD)("data-v-6b4c7d0e");const De={class:"modal-mask"},ye={class:"modal-wrapper"},ke={class:"modal-container"},Pe=(0,n._)("p",null,"確定要退出嗎? 您的變更不會儲存喔!",-1),Ce={class:"text-center btn-group"};function Ee(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)("div",De,[(0,n._)("div",ye,[(0,n._)("div",ke,[Pe,(0,n._)("div",Ce,[(0,n._)("button",{type:"button",class:"btn fw-bold btn-danger",onClick:t[0]||(t[0]=(...e)=>o.closeExitCheck&&o.closeExitCheck(...e))},"繼續編輯"),(0,n._)("button",{type:"button",class:"btn fw-bold btn-cancel",onClick:t[1]||(t[1]=(...e)=>o.closingBothModal&&o.closingBothModal(...e))},"放棄編輯")])])])])}(0,n.Cn)();var Me={name:"ExitCheck",setup(){const e=(0,re.oR)();function t(){e.dispatch("closingModal",!1),a()}function a(){e.dispatch("closeExitCheck",!1)}return{closingBothModal:t,closeExitCheck:a}}};Me.render=Ee,Me.__scopeId="data-v-6b4c7d0e";var Ie=Me,Fe=a(577);const Te={class:"productTable"},Le={key:0},Se={key:1};function xe(e,t,a,o,l,i){return(0,n.wg)(),(0,n.iD)("tr",Te,[(0,n._)("td",null,(0,Fe.zw)(a.product.eventTitle),1),(0,n._)("td",null,(0,Fe.zw)(a.product.eventCategory),1),(0,n._)("td",null,(0,Fe.zw)(a.product.eventStartDate),1),(0,n._)("td",null,(0,Fe.zw)(a.product.eventEndDate),1),(0,n._)("td",null,[a.product.eventActive?((0,n.wg)(),(0,n.iD)("p",Le,"已啟用")):(0,n.kq)("",!0),a.product.eventDraft?((0,n.wg)(),(0,n.iD)("p",Se,"尚未啟用")):(0,n.kq)("",!0)]),(0,n._)("td",null,[(0,n._)("button",{class:"btn-danger fw-bold",type:"button",onClick:t[0]||(t[0]=e=>o.deleteEvent(a.product.docId))},"刪除"),(0,n._)("button",{class:"btn-cancel fw-bold",type:"button",onClick:t[1]||(t[1]=e=>o.editEvent(a.product.eventId))},"編輯")])])}var He={name:"ProductTable",props:["product"],setup(){const e=(0,re.oR)();function t(t){e.dispatch("editProduct",!0),e.dispatch("getCurrentProduct",t)}async function a(t){await e.dispatch("deleteProduct",t),e.dispatch("getProduct")}return{editEvent:t,deleteEvent:a}}};He.render=xe;var qe=He,Ue={name:"products",components:{ProductModal:we,ExitCheck:Ie,ProductTable:qe,OnLoad:be},setup(){const e=(0,re.oR)(),t=(0,ve.Fl)((()=>e.getters.showExitCheckModal)),a=(0,ve.Fl)((()=>e.getters.showModal));function o(){e.dispatch("showingModal",!0),e.dispatch("editProduct",!1)}(0,n.wF)((()=>{e.dispatch("getProduct")}));const l=(0,ve.Fl)((()=>e.getters.productLoaded)),i=(0,ve.Fl)((()=>e.getters.productData));return{showExitCheckModal:t,showModal:a,showingModal:o,checkProductLoaded:l,productData:i}}};Ue.render=g;var Ve=Ue}}]);
//# sourceMappingURL=678.7a011722.js.map