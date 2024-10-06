"use strict";(self["webpackChunkflux"]=self["webpackChunkflux"]||[]).push([[1403],{57796:(t,e,a)=>{a.d(e,{Z:()=>c});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collapse-icon",class:t.collapseClasses,attrs:{role:"tablist"}},[t._t("default")],2)},r=[],s=(a(70560),a(57632));const l={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data(){return{collapseID:""}},computed:{collapseClasses(){const t=[],e={default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"};return t.push(e[this.type]),t}},created(){this.collapseID=(0,s.Z)()}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const c=d.exports},22049:(t,e,a)=>{a.d(e,{Z:()=>h});var n=function(){var t=this,e=t._self._c;return e("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose,focus:t.collapseOpen,blur:t.collapseClose}},[e("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",(function(){return[e("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])]}))],2),e("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("b-card-body",[t._t("default")],2)],1)],1)},r=[],s=a(86855),l=a(87047),o=a(19279),i=a(11688),d=a(57632);const c={components:{BCard:s._,BCardHeader:l.p,BCardBody:o.O,BCollapse:i.k},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion(){return this.$parent.accordion?`accordion-${this.$parent.collapseID}`:null}},created(){this.collapseItemID=(0,d.Z)(),this.visible=this.isVisible},methods:{updateVisible(t=!0){this.visible=t,this.$emit("visible",t)},collapseOpen(){this.openOnHover&&this.updateVisible(!0)},collapseClose(){this.openOnHover&&this.updateVisible(!1)}}},u=c;var p=a(1001),m=(0,p.Z)(u,n,r,!1,null,null,null);const h=m.exports},34547:(t,e,a)=>{a.d(e,{Z:()=>c});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const l={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,"22d964ca",null);const c=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>c});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const c=d.exports},81403:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var n=function(){var t=this,e=t._self._c;return e("b-card",{attrs:{title:"Current FluxNode winners that will be paid in the next Flux block"}},[e("app-collapse",t._l(t.callResponse.data,(function(a,n){return e("app-collapse-item",{key:n,attrs:{title:t.toPascalCase(n)}},[e("list-entry",{attrs:{title:"Address",data:t.callResponse.data[n].payment_address}}),e("list-entry",{attrs:{title:"IP Address",data:t.callResponse.data[n].ip}}),e("list-entry",{attrs:{title:"Added Height",number:t.callResponse.data[n].added_height}}),e("list-entry",{attrs:{title:"Collateral",data:t.callResponse.data[n].collateral}}),e("list-entry",{attrs:{title:"Last Paid Height",number:t.callResponse.data[n].last_paid_height}}),e("list-entry",{attrs:{title:"Confirmed Height",number:t.callResponse.data[n].confirmed_height}}),e("list-entry",{attrs:{title:"Last Confirmed Height",number:t.callResponse.data[n].last_confirmed_height}})],1)})),1)],1)},r=[],s=a(86855),l=a(34547),o=a(57796),i=a(22049),d=a(51748),c=a(27616);const u={components:{BCard:s._,ListEntry:d.Z,AppCollapse:o.Z,AppCollapseItem:i.Z,ToastificationContent:l.Z},data(){return{callResponse:{status:"",data:""}}},mounted(){this.daemonFluxCurrentWinner()},methods:{async daemonFluxCurrentWinner(){const t=await c.Z.fluxCurrentWinner();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=t.data.data,console.log(t))},toPascalCase(t){const e=t.split(/\s|_/);let a,n;for(a=0,n=e.length;a<n;a+=1)e[a]=e[a].slice(0,1).toUpperCase()+(e[a].length>1?e[a].slice(1).toLowerCase():"");return e.join(" ")}}},p=u;var m=a(1001),h=(0,m.Z)(p,n,r,!1,null,null,null);const g=h.exports},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,n.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},57632:(t,e,a)=>{a.d(e,{Z:()=>u});const n="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),r={randomUUID:n};let s;const l=new Uint8Array(16);function o(){if(!s&&(s="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(l)}const i=[];for(let p=0;p<256;++p)i.push((p+256).toString(16).slice(1));function d(t,e=0){return i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]}function c(t,e,a){if(r.randomUUID&&!e&&!t)return r.randomUUID();t=t||{};const n=t.random||(t.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(let t=0;t<16;++t)e[a+t]=n[t];return e}return d(n)}const u=c}}]);