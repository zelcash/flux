(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b700b06"],{6076:function(t,e,n){"use strict";n("99af");var a=n("b4c0");e["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(t){return Object(a["a"])().get("/daemon/help/".concat(t))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(t,e){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(t,"/").concat(e))},listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(t){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:t}})},stopBenchmark:function(t){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:t}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(t,e){return Object(a["a"])().get("/daemon/validateaddress/".concat(e),{headers:{zelidauth:t}})},getWalletInfo:function(t){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:t}})},listZelNodeConf:function(t){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:t}})},start:function(t){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:t}})},restart:function(t){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:t}})},stopDaemon:function(t){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:t}})},rescanDaemon:function(t,e){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(e),{headers:{zelidauth:t}})},getBlock:function(t,e){return Object(a["a"])().get("/daemon/getblock/".concat(t,"/").concat(e))},tailDaemonDebug:function(t){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"91e4":function(t,e,n){"use strict";n("a21b")},"9e7b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"row",class:t.classes},[n("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?n("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[n("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):n("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},r=[],s=(n("a9e3"),n("aa59")),c={components:{BLink:s["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=c,i=n("2877"),l=Object(i["a"])(o,a,r,!1,null,null,null);e["a"]=l.exports},a21b:function(t,e,n){},fbc0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{title:"Current FluxNode winners that will be paid in the next Flux block"}},[n("app-collapse",t._l(t.callResponse.data,(function(e,a){return n("app-collapse-item",{key:a,attrs:{title:t.toPascalCase(a)}},[n("list-entry",{attrs:{title:"Address",data:t.callResponse.data[a].payment_address}}),n("list-entry",{attrs:{title:"IP Address",data:t.callResponse.data[a].ip}}),n("list-entry",{attrs:{title:"Added Height",number:t.callResponse.data[a].added_height}}),n("list-entry",{attrs:{title:"Collateral",data:t.callResponse.data[a].collateral}}),n("list-entry",{attrs:{title:"Last Paid Height",number:t.callResponse.data[a].last_paid_height}}),n("list-entry",{attrs:{title:"Confirmed Height",number:t.callResponse.data[a].confirmed_height}}),n("list-entry",{attrs:{title:"Last Confirmed Height",number:t.callResponse.data[a].last_confirmed_height}})],1)})),1)],1)},r=[],s=n("c7eb"),c=n("1da1"),o=(n("ac1f"),n("1276"),n("fb6a"),n("a15b9"),n("205f")),i=n("b307"),l=n("4b0e"),u=n("746e"),d=n("9e7b"),f=n("6076"),b={components:{BCard:o["a"],ListEntry:d["a"],AppCollapse:l["a"],AppCollapseItem:u["a"],ToastificationContent:i["a"]},data:function(){return{callResponse:{status:"",data:""}}},mounted:function(){this.daemonFluxCurrentWinner()},methods:{daemonFluxCurrentWinner:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].fluxCurrentWinner();case 2:n=e.sent,"error"===n.data.status?t.$toast({component:i["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=n.data.status,t.callResponse.data=n.data.data,console.log(n));case 4:case"end":return e.stop()}}),e)})))()},toPascalCase:function(t){var e,n,a=t.split(/\s|_/);for(e=0,n=a.length;e<n;e+=1)a[e]=a[e].slice(0,1).toUpperCase()+(a[e].length>1?a[e].slice(1).toLowerCase():"");return a.join(" ")}}},m=b,g=(n("91e4"),n("2877")),h=Object(g["a"])(m,a,r,!1,null,null,null);e["default"]=h.exports}}]);