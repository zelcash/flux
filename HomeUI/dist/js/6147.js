<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6147],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const l={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,"22d964ca",null);const u=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const u=d.exports},96147:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=function(){var t=this,e=t._self._c;return""!==t.callResponse.data?e("b-card",[t.callResponse.data.status?e("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.benchmarking?e("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}):t._e(),t.callResponse.data.zelback||t.callResponse.data.flux?e("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}):t._e(),t.callResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},r=[],s=a(23215),l=a(34547),o=a(51748),i=a(27616);const d=a(63005),u={components:{ListEntry:o.Z,BCard:s._,ToastificationContent:l.Z},data(){return{timeoptions:d,callResponse:{status:"",data:""}}},mounted(){this.daemonGetBenchStatus()},methods:{async daemonGetBenchStatus(){const t=await i.Z.getBenchStatus();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=JSON.parse(t.data.data),console.log(this.callResponse))}}},c=u;var m=a(1001),g=(0,m.Z)(c,n,r,!1,null,null,null);const h=g.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"},s={shortDate:n,date:r}},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockCount(){return(0,n.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);
=======
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6147],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const l={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,"22d964ca",null);const u=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const u=d.exports},96147:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=function(){var t=this,e=t._self._c;return""!==t.callResponse.data?e("b-card",[t.callResponse.data.status?e("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.benchmarking?e("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}):t._e(),t.callResponse.data.zelback||t.callResponse.data.flux?e("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}):t._e(),t.callResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},r=[],s=a(23215),l=a(34547),o=a(51748),i=a(27616);const d=a(63005),u={components:{ListEntry:o.Z,BCard:s._,ToastificationContent:l.Z},data(){return{timeoptions:d,callResponse:{status:"",data:""}}},mounted(){this.daemonGetBenchStatus()},methods:{async daemonGetBenchStatus(){const t=await i.Z.getBenchStatus();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=JSON.parse(t.data.data),console.log(this.callResponse))}}},c=u;var m=a(1001),g=(0,m.Z)(c,n,r,!1,null,null,null);const h=g.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"},s={shortDate:n,date:r}},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);
>>>>>>> 67c1c785 (Build UI)
=======
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6147],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const l={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,"22d964ca",null);const u=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const u=d.exports},96147:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=function(){var t=this,e=t._self._c;return""!==t.callResponse.data?e("b-card",[t.callResponse.data.status?e("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.benchmarking?e("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}):t._e(),t.callResponse.data.zelback||t.callResponse.data.flux?e("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}):t._e(),t.callResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},r=[],s=a(86855),l=a(34547),o=a(51748),i=a(27616);const d=a(63005),u={components:{ListEntry:o.Z,BCard:s._,ToastificationContent:l.Z},data(){return{timeoptions:d,callResponse:{status:"",data:""}}},mounted(){this.daemonGetBenchStatus()},methods:{async daemonGetBenchStatus(){const t=await i.Z.getBenchStatus();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=JSON.parse(t.data.data),console.log(this.callResponse))}}},c=u;var m=a(1001),g=(0,m.Z)(c,n,r,!1,null,null,null);const h=g.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"},s={shortDate:n,date:r}},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);
>>>>>>> 9ac9687f (Build UI)
=======
"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6147],{34547:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],s=a(47389);const l={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,"22d964ca",null);const u=d.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>u});var n=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=a(67347);const l={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=l;var i=a(1001),d=(0,i.Z)(o,n,r,!1,null,null,null);const u=d.exports},96147:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=function(){var t=this,e=t._self._c;return""!==t.callResponse.data?e("b-card",[t.callResponse.data.status?e("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.benchmarking?e("list-entry",{attrs:{title:"Benchmarking",data:t.callResponse.data.benchmarking}}):t._e(),t.callResponse.data.zelback||t.callResponse.data.flux?e("list-entry",{attrs:{title:"Flux",data:t.callResponse.data.zelback||t.callResponse.data.flux}}):t._e(),t.callResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.callResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},r=[],s=a(86855),l=a(34547),o=a(51748),i=a(27616);const d=a(63005),u={components:{ListEntry:o.Z,BCard:s._,ToastificationContent:l.Z},data(){return{timeoptions:d,callResponse:{status:"",data:""}}},mounted(){this.daemonGetBenchStatus()},methods:{async daemonGetBenchStatus(){const t=await i.Z.getBenchStatus();"error"===t.data.status?this.$toast({component:l.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=t.data.status,this.callResponse.data=JSON.parse(t.data.data),console.log(this.callResponse))}}},c=u;var m=a(1001),g=(0,m.Z)(c,n,r,!1,null,null,null);const h=g.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},r={year:"numeric",month:"short",day:"numeric"},s={shortDate:n,date:r}},27616:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(t){return(0,n.Z)().get(`/daemon/help/${t}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(t,e){return(0,n.Z)().get(`/daemon/getrawtransaction/${t}/${e}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(t){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark(t){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(t,e){return(0,n.Z)().get(`/daemon/validateaddress/${e}`,{headers:{zelidauth:t}})},getWalletInfo(t){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listFluxNodeConf(t){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start(t){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:t}})},restart(t){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon(t){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon(t,e){return(0,n.Z)().get(`/daemon/rescanblockchain/${e}`,{headers:{zelidauth:t}})},getBlock(t,e){return(0,n.Z)().get(`/daemon/getblock/${t}/${e}`)},tailDaemonDebug(t){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);
>>>>>>> 3be89f3c08d541f418a17ac2b3c1fec1d7d8856f
