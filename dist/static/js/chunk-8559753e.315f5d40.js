(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8559753e"],{"02f4":function(e,t,n){var a=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var i,c,o=String(r(t)),s=a(n),l=o.length;return s<0||s>=l?e?"":void 0:(i=o.charCodeAt(s),i<55296||i>56319||s+1===l||(c=o.charCodeAt(s+1))<56320||c>57343?e?o.charAt(s):i:e?o.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var a=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"0a26":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ad06"),r=n("78eb"),i=n("9884"),c=n("ea8e"),o=function(e){var t=e.parent,n=e.bem,o=e.role;return{mixins:[Object(i["a"])(t),r["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===o&&!this.checked?-1:0}},methods:{onClick:function(e){var t=this,n=e.target,a=this.$refs.icon,r=a===n||(null==a?void 0:a.contains(n));this.isDisabled||!r&&this.labelDisabled?this.$emit("click",e):(this.toggle(),setTimeout((function(){t.$emit("click",e)})))},genIcon:function(){var e=this.$createElement,t=this.checked,r=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(c["a"])(r)}},[this.slots("icon",{checked:t})||e(a["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:o,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[t])}}}},"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var a=n("2aba"),r=n("32e9"),i=n("79e5"),c=n("be13"),o=n("2b4c"),s=n("520a"),l=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=o(e),h=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=h?!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!t})):void 0;if(!h||!f||"replace"===e&&!u||"split"===e&&!d){var v=/./[p],g=n(c,p,""[e],(function(e,t,n,a,r){return t.exec===s?h&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}})),b=g[0],m=g[1];a(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},3852:function(e,t,n){var a=n("96f3"),r=n("e2c0");function i(e,t){return null!=e&&r(e,t,a)}e.exports=i},"4e50":function(e,t,n){e.exports=n.p+"static/img/wx_pay.2731abb7.png"},"520a":function(e,t,n){"use strict";var a=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,c=r,o="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[o]||0!==t[o]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(c=function(e){var t,n,c,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),s&&(t=d[o]),c=r.call(d,e),s&&c&&(d[o]=d.global?c.index+c[0].length:t),l&&c&&c.length>1&&i.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c}),e.exports=c},"5eca":function(e,t,n){"use strict";n("6874")},"5f1b":function(e,t,n){"use strict";var a=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},6874:function(e,t,n){},"78eb":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}}},8812:function(e,t,n){"use strict";n.r(t);var a,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"payment"},[e._m(0),a("van-cell-group",{staticClass:"payment_group"},[a("van-cell",{attrs:{title:"订单编号",value:e.order.orderInfo.orderSn}}),a("van-cell",{attrs:{title:"实付金额"}},[a("span",{staticClass:"red"},[e._v(e._s(e._f("yuan")(100*e.order.orderInfo.actualPrice)))])])],1),a("div",{staticClass:"pay_way_group"},[a("div",{staticClass:"pay_way_title"},[e._v("选择支付方式")]),a("van-radio-group",{model:{value:e.payWay,callback:function(t){e.payWay=t},expression:"payWay"}},[a("van-cell-group",[a("van-cell",[a("template",{slot:"title"},[a("img",{attrs:{src:n("d179"),alt:"支付宝",width:"82",height:"29"}})]),a("van-radio",{attrs:{name:"ali"}})],2),a("van-cell",[a("template",{slot:"title"},[a("img",{attrs:{src:n("4e50"),alt:"微信支付",width:"113",height:"23"}})]),a("van-radio",{attrs:{name:"wx"}})],2)],1)],1)],1),a("van-button",{staticClass:"pay_submit",attrs:{type:"primary",bottomAction:""},on:{click:e.pay}},[e._v("去支付")])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"time_down payment_group"},[e._v("\n    请在\n    "),n("span",{staticClass:"red"},[e._v("半小时内")]),e._v("\n    完成付款，否则系统自动取消订单\n  ")])}],c=n("bd86"),o=(n("68ef"),n("dc1b"),n("e27c")),s=(n("7f7f"),n("9d70"),n("3743"),n("dde9"),n("9f14")),l=(n("a481"),n("e17f"),n("2241")),u=n("3852"),d=n.n(u),p=n("4ec3"),h=n("3c96"),f={name:"payment",data:function(){return{payWay:"wx",order:{orderInfo:{},orderGoods:[]},orderId:0}},created:function(){d()(this.$route.params,"orderId")&&(this.orderId=this.$route.params.orderId,this.getOrder(this.orderId))},methods:{getOrder:function(e){var t=this;Object(p["O"])({orderId:e}).then((function(e){t.order=e.data.data}))},pay:function(){var e=this;l["a"].alert({message:"你选择了"+("wx"===this.payWay?"微信支付":"支付宝支付")}).then((function(){if("wx"===e.payWay){var t=navigator.userAgent.toLowerCase(),n=-1!=t.indexOf("micromessenger");n?Object(p["R"])({orderId:e.orderId}).then((function(t){var n=t.data.data,a=JSON.stringify({appId:n.appId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.packageValue,signType:"MD5",paySign:n.paySign});Object(h["c"])({prepay_data:a}),"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e.onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e.onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",e.onBridgeReady)):e.onBridgeReady()})).catch((function(e){l["a"].alert({message:e.data.errmsg}),that.$router.replace({name:"paymentStatus",params:{status:"failed"}})})):Object(p["P"])({orderId:e.orderId}).then((function(t){var n=t.data.data;window.location.replace(n.mwebUrl+"&redirect_url="+encodeURIComponent(window.location.origin+"/#/?orderId="+e.orderId+"&tip=yes"))})).catch((function(e){l["a"].alert({message:e.data.errmsg})}))}}))},onBridgeReady:function(){var e=this,t=Object(h["a"])("prepay_data");WeixinJSBridge.invoke("getBrandWCPayRequest",JSON.parse(t.prepay_data),(function(t){"get_brand_wcpay_request:ok"==t.err_msg?e.$router.replace({name:"paymentStatus",params:{status:"success"}}):"get_brand_wcpay_request:cancel"==t.err_msg?e.$router.replace({name:"paymentStatus",params:{status:"cancel"}}):e.$router.replace({name:"paymentStatus",params:{status:"failed"}})}))}},components:(a={},Object(c["a"])(a,s["a"].name,s["a"]),Object(c["a"])(a,o["a"].name,o["a"]),Object(c["a"])(a,l["a"].name,l["a"]),a)},v=f,g=(n("5eca"),n("2877")),b=Object(g["a"])(v,r,i,!1,null,"69f6685c",null);t["default"]=b.exports},"96f3":function(e,t){var n=Object.prototype,a=n.hasOwnProperty;function r(e,t){return null!=e&&a.call(e,t)}e.exports=r},"9f14":function(e,t,n){"use strict";var a=n("d282"),r=n("0a26"),i=Object(a["a"])("radio"),c=i[0],o=i[1];t["a"]=c({mixins:[Object(r["a"])({bem:o,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(e){(this.parent||this).$emit("input",e)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}})},a481:function(e,t,n){"use strict";var a=n("cb7c"),r=n("4bf8"),i=n("9def"),c=n("4588"),o=n("0390"),s=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,v){return[function(a,r){var i=e(this),c=void 0==a?void 0:a[t];return void 0!==c?c.call(a,i,r):n.call(String(i),a,r)},function(e,t){var r=v(n,e,this,t);if(r.done)return r.value;var d=a(e),p=String(this),h="function"===typeof t;h||(t=String(t));var b=d.global;if(b){var m=d.unicode;d.lastIndex=0}var y=[];while(1){var x=s(d,p);if(null===x)break;if(y.push(x),!b)break;var S=String(x[0]);""===S&&(d.lastIndex=o(p,i(d.lastIndex),m))}for(var _="",w=0,k=0;k<y.length;k++){x=y[k];for(var I=String(x[0]),O=l(u(c(x.index),p.length),0),C=[],$=1;$<x.length;$++)C.push(f(x[$]));var R=x.groups;if(h){var j=[I].concat(C,O,p);void 0!==R&&j.push(R);var E=String(t.apply(void 0,j))}else E=g(I,p,O,C,R,t);O>=w&&(_+=p.slice(w,O)+E,w=O+I.length)}return _+p.slice(w)}];function g(e,t,a,i,c,o){var s=a+e.length,l=i.length,u=h;return void 0!==c&&(c=r(c),u=p),n.call(o,u,(function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(s);case"<":o=c[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var p=d(u/10);return 0===p?n:p<=l?void 0===i[p-1]?r.charAt(1):i[p-1]+r.charAt(1):n}o=i[u-1]}return void 0===o?"":o}))}}))},b0c5:function(e,t,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},d179:function(e,t,n){e.exports=n.p+"static/img/ali_pay.41a79780.png"},dc1b:function(e,t,n){},dde9:function(e,t,n){},e27c:function(e,t,n){"use strict";var a=n("d282"),r=n("78eb"),i=n("9884"),c=Object(a["a"])("radio-group"),o=c[0],s=c[1];t["a"]=o({mixins:[Object(i["b"])("vanRadio"),r["a"]],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(e){this.$emit("change",e)}},render:function(){var e=arguments[0];return e("div",{class:s([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}})}}]);