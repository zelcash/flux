(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a2abad"],{"0ad5":function(t,e,n){"use strict";var r=n("b4c0");e["a"]={start:function(t){return Object(r["a"])().get("/benchmark/start",{headers:{zelidauth:t}})},restart:function(t){return Object(r["a"])().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus:function(){return Object(r["a"])().get("/benchmark/getstatus")},restartNodeBenchmarks:function(t){return Object(r["a"])().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction:function(t,e){return Object(r["a"])().get("/benchmark/signzelnodetransaction/".concat(e),{headers:{zelidauth:t}})},helpSpecific:function(t){return Object(r["a"])().get("/benchmark/help/".concat(t))},help:function(){return Object(r["a"])().get("/benchmark/help")},stop:function(t){return Object(r["a"])().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks:function(){return Object(r["a"])().get("/benchmark/getbenchmarks")},getInfo:function(){return Object(r["a"])().get("/benchmark/getinfo")},tailBenchmarkDebug:function(t){return Object(r["a"])().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(r["a"])()},cancelToken:function(){return r["b"]}}},"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("9b76"),s=n("8690"),u=n("365c"),l=n("d82f"),b=n("cf75"),d=n("d580"),f=n("6197"),p=n("b885");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(b["d"])(Object(l["m"])(g(g({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(c["t"]),footerClass:Object(b["c"])(c["e"]),footerHtml:Object(b["c"])(c["t"])})),o["l"]),j=r["default"].extend({name:o["l"],functional:!0,props:O,render:function(t,e){var n,r=e.props,o=e.data,c=e.children,i=r.footerBgVariant,u=r.footerBorderVariant,l=r.footerTextVariant;return t(r.footerTag,Object(a["a"])(o,{staticClass:"card-footer",class:[r.footerClass,(n={},m(n,"bg-".concat(i),i),m(n,"border-".concat(u),u),m(n,"text-".concat(l),l),n)],domProps:c?{}:Object(s["a"])(r.footerHtml,r.footer)}),c)}}),v=n("4918");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=Object(b["d"])(Object(l["m"])(y(y({},Object(l["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(c["g"],!1),end:Object(b["c"])(c["g"],!1),start:Object(b["c"])(c["g"],!1),top:Object(b["c"])(c["g"],!1)})),o["n"]),P=r["default"].extend({name:o["n"],functional:!0,props:x,render:function(t,e){var n=e.props,r=e.data,o=n.src,c=n.alt,i=n.width,s=n.height,u="card-img";return n.top?u+="-top":n.right||n.end?u+="-right":n.bottom?u+="-bottom":(n.left||n.start)&&(u+="-left"),t("img",Object(a["a"])(r,{class:u,attrs:{src:o,alt:c,width:i,height:s}}))}});function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=Object(b["a"])(x,b["f"].bind(null,"img"));S.imgSrc.required=!1;var D=Object(b["d"])(Object(l["m"])(C(C(C(C(C(C({},f["b"]),p["b"]),O),S),d["a"]),{},{align:Object(b["c"])(c["t"]),noBody:Object(b["c"])(c["g"],!1)})),o["j"]),$=r["default"].extend({name:o["j"],functional:!0,props:D,render:function(t,e){var n,r=e.props,o=e.data,c=e.slots,l=e.scopedSlots,d=r.imgSrc,h=r.imgLeft,g=r.imgRight,m=r.imgStart,v=r.imgEnd,w=r.imgBottom,y=r.header,k=r.headerHtml,x=r.footer,T=r.footerHtml,C=r.align,D=r.textVariant,$=r.bgVariant,_=r.borderVariant,z=l||{},E=c(),I={},V=t(),R=t();if(d){var H=t(P,{props:Object(b["e"])(S,r,b["h"].bind(null,"img"))});w?R=H:V=H}var N=t(),F=Object(u["a"])(i["p"],z,E);(F||y||k)&&(N=t(p["a"],{props:Object(b["e"])(p["b"],r),domProps:F?{}:Object(s["a"])(k,y)},Object(u["b"])(i["p"],I,z,E)));var q=Object(u["b"])(i["h"],I,z,E);r.noBody||(q=t(f["a"],{props:Object(b["e"])(f["b"],r)},q),r.overlay&&d&&(q=t("div",{staticClass:"position-relative"},[V,q,R]),V=t(),R=t()));var A=t(),U=Object(u["a"])(i["o"],z,E);return(U||x||T)&&(A=t(j,{props:Object(b["e"])(O,r),domProps:F?{}:Object(s["a"])(T,x)},Object(u["b"])(i["o"],I,z,E))),t(r.tag,Object(a["a"])(o,{staticClass:"card",class:(n={"flex-row":h||m,"flex-row-reverse":(g||v)&&!(h||m)},B(n,"text-".concat(C),C),B(n,"bg-".concat($),$),B(n,"border-".concat(_),_),B(n,"text-".concat(D),D),n)}),[V,N,q,A,R])}})},"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,a=n("cb2d"),o=n("825a"),c=n("577e"),i=n("d039"),s=n("90d8"),u="toString",l=RegExp.prototype,b=l[u],d=i((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),f=r&&b.name!=u;(d||f)&&a(RegExp.prototype,u,(function(){var t=o(this),e=c(t.source),n=c(s(t));return"/"+e+"/"+n}),{unsafe:!0})},"327f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-popover",{ref:"popover",attrs:{target:""+t.target,triggers:"click blur",show:t.show,placement:"auto",container:"my-container","custom-class":"confirm-dialog-"+t.width},on:{"update:show":function(e){t.show=e}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[t._v(t._s(t.title))]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])],1)]},proxy:!0}])},[n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.show=!1}}},[t._v(" "+t._s(t.cancelButton)+" ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.confirm()}}},[t._v(" "+t._s(t.confirmButton)+" ")])],1)])},a=[],o=(n("a9e3"),n("1947")),c=n("3828"),i=n("e009"),s={components:{BButton:o["a"],BPopover:c["a"]},directives:{Ripple:i["a"]},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data:function(){return{show:!1}},methods:{confirm:function(){this.show=!1,this.$emit("confirm")}}},u=s,l=(n("f88e"),n("2877")),b=Object(l["a"])(u,r,a,!1,null,null,null);e["a"]=b.exports},3828:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("2b0e"),a=n("c637"),o=n("0056"),c=n("a723"),i=n("9b76"),s=n("cf75"),u=n("b4ae"),l=n("8df8"),b=n("7b1e"),d=n("df44"),f=r["default"].extend({name:a["kb"],extends:d["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,n=this.content,r=Object(b["e"])(e)?e({}):e,a=Object(b["e"])(n)?n({}):n,o=this.html&&!Object(b["e"])(e)?{innerHTML:e}:{},c=this.html&&!Object(b["e"])(n)?{innerHTML:n}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(b["o"])(r)||""===r?t():t("h3",{staticClass:"popover-header",domProps:o},[r]),Object(b["o"])(a)||""===a?t():t("div",{staticClass:"popover-body",domProps:c},[a])])}}}),p=r["default"].extend({name:a["jb"],extends:l["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return f}}}),h=n("d82f");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=Object(s["d"])(Object(h["m"])(m(m({},u["b"]),{},{content:Object(s["c"])(c["t"]),placement:Object(s["c"])(c["t"],"right"),triggers:Object(s["c"])(c["f"],o["f"])})),a["ib"]),v=r["default"].extend({name:a["ib"],extends:u["a"],inheritAttrs:!1,props:j,methods:{getComponent:function(){return p},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(i["N"])||this.title)}}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return m}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("2326"),s=n("6c06"),u=n("7b1e"),l=n("3a58"),b=n("cf75"),d=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},g=Object(b["d"])({alt:Object(b["c"])(c["t"]),blank:Object(b["c"])(c["g"],!1),blankColor:Object(b["c"])(c["t"],"transparent"),block:Object(b["c"])(c["g"],!1),center:Object(b["c"])(c["g"],!1),fluid:Object(b["c"])(c["g"],!1),fluidGrow:Object(b["c"])(c["g"],!1),height:Object(b["c"])(c["o"]),left:Object(b["c"])(c["g"],!1),right:Object(b["c"])(c["g"],!1),rounded:Object(b["c"])(c["j"],!1),sizes:Object(b["c"])(c["f"]),src:Object(b["c"])(c["t"]),srcset:Object(b["c"])(c["f"]),thumbnail:Object(b["c"])(c["g"],!1),width:Object(b["c"])(c["o"])},o["O"]),m=r["default"].extend({name:o["O"],functional:!0,props:g,render:function(t,e){var n,r=e.props,o=e.data,c=r.alt,b=r.src,p=r.block,g=r.fluidGrow,m=r.rounded,O=Object(l["c"])(r.width)||null,j=Object(l["c"])(r.height)||null,v=null,w=Object(i["b"])(r.srcset).filter(s["a"]).join(","),y=Object(i["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!j&&O?j=O:!O&&j&&(O=j),O||j||(O=1,j=1),b=h(O,j,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(o,{attrs:{src:b,alt:c,width:O?Object(d["g"])(O):null,height:j?Object(d["g"])(j):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||g,"w-100":g,rounded:""===m||!0===m},f(n,"rounded-".concat(m),Object(u["m"])(m)&&""!==m),f(n,v,v),f(n,"d-block",p),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("cf75"),s=n("fa73"),u=Object(i["d"])({title:Object(i["c"])(c["t"]),titleTag:Object(i["c"])(c["t"],"h4")},o["q"]),l=r["default"].extend({name:o["q"],functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.titleTag,Object(a["a"])(r,{staticClass:"card-title"}),o||Object(s["g"])(n.title))}})},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("d82f"),s=n("cf75"),u=n("d580"),l=n("4968"),b=n("ba06");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(s["d"])(Object(i["m"])(f(f(f(f({},l["b"]),b["b"]),Object(s["a"])(u["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(c["e"]),overlay:Object(s["c"])(c["g"],!1)})),o["k"]),g=r["default"].extend({name:o["k"],functional:!0,props:h,render:function(t,e){var n,r=e.props,o=e.data,c=e.children,i=r.bodyBgVariant,u=r.bodyBorderVariant,d=r.bodyTextVariant,f=t();r.title&&(f=t(l["a"],{props:Object(s["e"])(l["b"],r)}));var h=t();return r.subTitle&&(h=t(b["a"],{props:Object(s["e"])(b["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(a["a"])(o,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},p(n,"bg-".concat(i),i),p(n,"border-".concat(u),u),p(n,"text-".concat(d),d),n),r.bodyClass]}),[f,h,c])}})},"867f":function(t,e,n){"use strict";n("e9c4"),n("99af");var r=n("b4c0");e["a"]={softUpdateFlux:function(t){return Object(r["a"])().get("/flux/softupdateflux",{headers:{zelidauth:t}})},softUpdateInstallFlux:function(t){return Object(r["a"])().get("/flux/softupdatefluxinstall",{headers:{zelidauth:t}})},updateFlux:function(t){return Object(r["a"])().get("/flux/updateflux",{headers:{zelidauth:t}})},hardUpdateFlux:function(t){return Object(r["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:t}})},rebuildHome:function(t){return Object(r["a"])().get("/flux/rebuildhome",{headers:{zelidauth:t}})},updateDaemon:function(t){return Object(r["a"])().get("/flux/updatedaemon",{headers:{zelidauth:t}})},reindexDaemon:function(t){return Object(r["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:t}})},updateBenchmark:function(t){return Object(r["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:t}})},getFluxVersion:function(){return Object(r["a"])().get("/flux/version")},broadcastMessage:function(t,e){var n=e,a={headers:{zelidauth:t}};return Object(r["a"])().post("/flux/broadcastmessage",JSON.stringify(n),a)},connectedPeers:function(){return Object(r["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(r["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(r["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(r["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(t,e){return Object(r["a"])().get("/flux/addpeer/".concat(e),{headers:{zelidauth:t}})},removePeer:function(t,e){return Object(r["a"])().get("/flux/removepeer/".concat(e),{headers:{zelidauth:t}})},removeIncomingPeer:function(t,e){return Object(r["a"])().get("/flux/removeincomingpeer/".concat(e),{headers:{zelidauth:t}})},adjustCruxID:function(t,e){return Object(r["a"])().get("/flux/adjustcruxid/".concat(e),{headers:{zelidauth:t}})},adjustKadena:function(t,e,n){return Object(r["a"])().get("/flux/adjustkadena/".concat(e,"/").concat(n),{headers:{zelidauth:t}})},getCruxID:function(){return Object(r["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(r["a"])().get("/flux/kadena")},getZelid:function(){return Object(r["a"])().get("/flux/zelid")},tailFluxLog:function(t,e){return Object(r["a"])().get("/flux/tail".concat(t,"log"),{headers:{zelidauth:e}})},justAPI:function(){return Object(r["a"])()},cancelToken:function(){return r["b"]}}},"8e4c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{sm:"12",lg:"6",xl:"4"}},[n("b-card",{attrs:{title:"Benchmark"}},[n("b-card-text",{staticClass:"mb-3"},[t._v(" An easy way to update your Benchmark daemon to the latest version. Benchmark will be automatically started once update is done. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"update-benchmark",variant:"success","aria-label":"Update Benchmark"}},[t._v(" Update Benchmark ")]),n("confirm-dialog",{attrs:{target:"update-benchmark","confirm-button":"Update Benchmark"},on:{confirm:function(e){return t.updateBenchmark()}}})],1)],1)],1),n("b-col",{attrs:{sm:"12",lg:"6",xl:"4"}},[n("b-card",{attrs:{title:"Manage Process"}},[n("b-card-text",{staticClass:"mb-3"},[t._v(" Here you can manage your Benchmark daemon process. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"start-benchmark",variant:"success","aria-label":"Start Benchmark"}},[t._v(" Start Benchmark ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"stop-benchmark",variant:"success","aria-label":"Stop Benchmark"}},[t._v(" Stop Benchmark ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"restart-benchmark",variant:"success","aria-label":"Restart Benchmakr"}},[t._v(" Restart Benchmark ")]),n("confirm-dialog",{attrs:{target:"start-benchmark","confirm-button":"Start Benchmark"},on:{confirm:function(e){return t.startBenchmark()}}}),n("confirm-dialog",{attrs:{target:"stop-benchmark","confirm-button":"Stop Benchmark"},on:{confirm:function(e){return t.stopBenchmark()}}}),n("confirm-dialog",{attrs:{target:"restart-benchmark","confirm-button":"Restart Benchmark"},on:{confirm:function(e){return t.restartBenchmark()}}})],1)],1)],1),n("b-col",{attrs:{sm:"12",xl:"4"}},[n("b-card",{attrs:{title:"Restart"}},[n("b-card-text",{staticClass:"mb-2"},[t._v(" Option to trigger a complete new run of node benchmarking. Useful when your node falls down in category or fails benchmarking tests. ")]),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"restart-benchmarks",variant:"success","aria-label":"Restart Benchmarks"}},[t._v(" Restart Benchmarks ")]),n("confirm-dialog",{attrs:{target:"restart-benchmarks","confirm-button":"Restart Benchmarks"},on:{confirm:function(e){return t.restartBenchmarks()}}})],1)],1)],1)],1)],1)},a=[],o=(n("d3b7"),n("25f0"),n("205f")),c=n("a15b"),i=n("b28b"),s=n("d6e4"),u=n("1947"),l=n("b307"),b=n("e009"),d=n("bc3a"),f=n.n(d),p=n("327f"),h=n("867f"),g=n("0ad5"),m=n("4328"),O={components:{BCard:o["a"],BRow:c["a"],BCol:i["a"],BCardText:s["a"],BButton:u["a"],ConfirmDialog:p["a"],ToastificationContent:l["a"]},directives:{Ripple:b["a"]},mounted:function(){this.checkBenchmarkVersion()},methods:{checkBenchmarkVersion:function(){var t=this;g["a"].getInfo().then((function(e){console.log(e);var n=e.data.data.version;f.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/benchmarkinfo.json").then((function(e){console.log(e),e.data.version!==n?t.showToast("warning","Benchmark requires an update!"):t.showToast("success","Benchmark is up to date")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to benchmark")}))},updateBenchmark:function(){var t=this;g["a"].getInfo().then((function(e){console.log(e);var n=e.data.data.version;f.a.get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/benchmarkinfo.json").then((function(e){if(console.log(e),e.data.version!==n){var r=localStorage.getItem("zelidauth"),a=m.parse(r);console.log(a),t.showToast("success","Benchmark is now updating in the background"),h["a"].updateBenchmark(r).then((function(e){console.log(e),"error"===e.data.status&&t.showToast("danger",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),console.log(e.code),t.showToast("danger",e.toString())}))}else t.showToast("success","Benchmark is already up to date")})).catch((function(e){console.log(e),t.showToast("danger","Error verifying recent version")}))})).catch((function(e){console.log(e),t.showToast("danger","Error connecting to benchmark")}))},startBenchmark:function(){var t=this;this.showToast("warning","Benchmark will start");var e=localStorage.getItem("zelidauth");g["a"].start(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to start benchmark")}))},stopBenchmark:function(){var t=this;this.showToast("warning","Benchmark will be stopped");var e=localStorage.getItem("zelidauth");g["a"].stop(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to stop benchmark")}))},restartBenchmark:function(){var t=this;this.showToast("warning","Benchmark will now restart");var e=localStorage.getItem("zelidauth");g["a"].restart(e).then((function(e){"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to restart benchmark")}))},restartBenchmarks:function(){var t=this;this.showToast("warning","Initiating new benchmarks");var e=localStorage.getItem("zelidauth");g["a"].restartNodeBenchmarks(e).then((function(e){console.log(e),"error"===e.data.status?t.showToast("danger",e.data.data.message||e.data.data):t.showToast("success",e.data.data.message||e.data.data)})).catch((function(e){console.log(e),t.showToast("danger","Error while trying to run new benchmarks")}))},showToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"InfoIcon";this.$toast({component:l["a"],props:{title:e,icon:n,variant:t}})}}},j=O,v=n("2877"),w=Object(v["a"])(j,r,a,!1,null,null,null);e["default"]=w.exports},"90d8":function(t,e,n){var r=n("c65b"),a=n("1a2d"),o=n("3a9b"),c=n("ad6d"),i=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in i||a(t,"flags")||!o(i,t)?e:r(c,t)}},b4ae:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return x}));var r,a,o=n("2b0e"),c=n("c637"),i=n("0056"),s=n("a723"),u=n("ca88"),l=n("be29"),b=n("7b1e"),d=n("d82f"),f=n("cf75"),p=n("8c18"),h=n("8df8");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j="disabled",v=i["W"]+j,w="show",y=i["W"]+w,k=Object(f["d"])((r={boundary:Object(f["c"])([u["c"],s["p"],s["t"]],"scrollParent"),boundaryPadding:Object(f["c"])(s["o"],50),container:Object(f["c"])([u["c"],s["p"],s["t"]]),customClass:Object(f["c"])(s["t"]),delay:Object(f["c"])(s["n"],50)},O(r,j,Object(f["c"])(s["g"],!1)),O(r,"fallbackPlacement",Object(f["c"])(s["f"],"flip")),O(r,"id",Object(f["c"])(s["t"])),O(r,"noFade",Object(f["c"])(s["g"],!1)),O(r,"noninteractive",Object(f["c"])(s["g"],!1)),O(r,"offset",Object(f["c"])(s["o"],0)),O(r,"placement",Object(f["c"])(s["t"],"top")),O(r,w,Object(f["c"])(s["g"],!1)),O(r,"target",Object(f["c"])([u["c"],u["d"],s["k"],s["p"],s["t"]],void 0,!0)),O(r,"title",Object(f["c"])(s["t"])),O(r,"triggers",Object(f["c"])(s["f"],"hover focus")),O(r,"variant",Object(f["c"])(s["t"])),r),c["Cb"]),x=o["default"].extend({name:c["Cb"],mixins:[p["a"]],inheritAttrs:!1,props:k,data:function(){return{localShow:this[w],localTitle:"",localContent:""}},computed:{templateData:function(){return m({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},Object(d["k"])(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",j]))},templateTitleContent:function(){var t=this.title,e=this.content;return{title:t,content:e}}},watch:(a={},O(a,w,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),O(a,j,(function(t){t?this.doDisable():this.doEnable()})),O(a,"localShow",(function(t){this.$emit(y,t)})),O(a,"templateData",(function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))})),O(a,"templateTitleContent",(function(){this.$nextTick(this.updateContent)})),a),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(i["B"],this.doOpen),this.$off(i["g"],this.doClose),this.$off(i["j"],this.doDisable),this.$off(i["l"],this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var n=Object(l["a"])(t)||Object(l["a"])(t.$parent),r=t.$_toolpop=new e({parent:t,_scopeId:n||void 0});r.updateData(t.templateData),r.$on(i["N"],t.onShow),r.$on(i["O"],t.onShown),r.$on(i["t"],t.onHide),r.$on(i["s"],t.onHidden),r.$on(i["k"],t.onDisabled),r.$on(i["m"],t.onEnabled),t[j]&&t.doDisable(),t.$on(i["B"],t.doOpen),t.$on(i["g"],t.doClose),t.$on(i["j"],t.doDisable),t.$on(i["l"],t.doEnable),t.localShow&&r.show()}))},methods:{getComponent:function(){return h["a"]},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=Object(b["o"])(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Object(b["o"])(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(i["N"],t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(i["O"],t)},onHide:function(t){this.$emit(i["t"],t)},onHidden:function(t){this.$emit(i["s"],t),this.localShow=!1},onDisabled:function(t){t&&t.type===i["k"]&&(this.$emit(v,!0),this.$emit(i["k"],t))},onEnabled:function(t){t&&t.type===i["m"]&&(this.$emit(v,!1),this.$emit(i["m"],t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}})},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("8690"),s=n("d82f"),u=n("cf75"),l=n("d580");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(u["d"])(Object(s["m"])(d(d({},Object(u["a"])(l["a"],u["f"].bind(null,"header"))),{},{header:Object(u["c"])(c["t"]),headerClass:Object(u["c"])(c["e"]),headerHtml:Object(u["c"])(c["t"])})),o["m"]),h=r["default"].extend({name:o["m"],functional:!0,props:p,render:function(t,e){var n,r=e.props,o=e.data,c=e.children,s=r.headerBgVariant,u=r.headerBorderVariant,l=r.headerTextVariant;return t(r.headerTag,Object(a["a"])(o,{staticClass:"card-header",class:[r.headerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(u),u),f(n,"text-".concat(l),l),n)],domProps:c?{}:Object(i["a"])(r.headerHtml,r.header)}),c)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("cf75"),s=n("fa73"),u=Object(i["d"])({subTitle:Object(i["c"])(c["t"]),subTitleTag:Object(i["c"])(c["t"],"h6"),subTitleTextVariant:Object(i["c"])(c["t"],"muted")},o["o"]),l=r["default"].extend({name:o["o"],functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.subTitleTag,Object(a["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),o||Object(s["g"])(n.subTitle))}})},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("2b0e"),a=n("c637"),o=n("a723"),c=n("cf75"),i=Object(c["d"])({bgVariant:Object(c["c"])(o["t"]),borderVariant:Object(c["c"])(o["t"]),tag:Object(c["c"])(o["t"],"div"),textVariant:Object(c["c"])(o["t"])},a["j"]);r["default"].extend({props:i})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2b0e"),a=n("b42e"),o=n("c637"),c=n("a723"),i=n("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(c["t"],"p")},o["p"]),u=r["default"].extend({name:o["p"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.textTag,Object(a["a"])(r,{staticClass:"card-text"}),o)}})},f76f:function(t,e,n){},f88e:function(t,e,n){"use strict";n("f76f")}}]);