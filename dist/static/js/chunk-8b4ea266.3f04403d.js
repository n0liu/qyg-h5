(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b4ea266"],{"09fe":function(t,r,e){},"11e9":function(t,r,e){var i=e("52a7"),n=e("4630"),a=e("6821"),o=e("6a99"),s=e("69a8"),c=e("c69a"),l=Object.getOwnPropertyDescriptor;r.f=e("9e1e")?l:function(t,r){if(t=a(t),r=o(r,!0),c)try{return l(t,r)}catch(e){}if(s(t,r))return n(!i.f.call(t,r),t[r])}},"44bf":function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),a=e("d282"),o=e("a142"),s=e("ea8e"),c=e("ad06"),l=Object(a["a"])("image"),u=l[0],d=l[1];r["a"]=u({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(o["c"])(this.width)&&(t.width=Object(s["a"])(this.width)),Object(o["c"])(this.height)&&(t.height=Object(s["a"])(this.height)),Object(o["c"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(s["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&o["b"]&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var r=t.el;r===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var r=t.el;r!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:d("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:d("loading-icon")})]):this.error&&this.showError?t("div",{class:d("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:d("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,r={class:d("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",n()([{ref:"image",directives:[{name:"lazy",value:this.src}]},r])):t("img",n()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},r]))}},render:function(){var t=arguments[0];return t("div",{class:d({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},"4d48":function(t,r,e){"use strict";e("68ef"),e("bf60")},"5dbc":function(t,r,e){var i=e("d3f4"),n=e("8b97").set;t.exports=function(t,r,e){var a,o=r.constructor;return o!==e&&"function"==typeof o&&(a=o.prototype)!==e.prototype&&i(a)&&n&&n(t,a),t}},"66fd":function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),a=e("d282"),o=e("a142"),s=e("ba31"),c=e("a3e2"),l=e("44bf"),u=Object(a["a"])("card"),d=u[0],f=u[1];function h(t,r,e,i){var a,u=r.thumb,d=e.num||Object(o["c"])(r.num),h=e.price||Object(o["c"])(r.price),g=e["origin-price"]||Object(o["c"])(r.originPrice),p=d||h||g||e.bottom;function b(t){Object(s["a"])(i,"click-thumb",t)}function v(){if(e.tag||r.tag)return t("div",{class:f("tag")},[e.tag?e.tag():t(c["a"],{attrs:{mark:!0,type:"danger"}},[r.tag])])}function m(){if(e.thumb||u)return t("a",{attrs:{href:r.thumbLink},class:f("thumb"),on:{click:b}},[e.thumb?e.thumb():t(l["a"],{attrs:{src:u,width:"100%",height:"100%",fit:"cover","lazy-load":r.lazyLoad}}),v()])}function y(){return e.title?e.title():r.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[r.title]):void 0}function S(){return e.desc?e.desc():r.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[r.desc]):void 0}function O(){var e=r.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[r.currency]),t("span",{class:f("price-integer")},[e[0]]),".",t("span",{class:f("price-decimal")},[e[1]])])}function j(){if(h)return t("div",{class:f("price")},[e.price?e.price():O()])}function k(){if(g){var i=e["origin-price"];return t("div",{class:f("origin-price")},[i?i():r.currency+" "+r.originPrice])}}function _(){if(d)return t("div",{class:f("num")},[e.num?e.num():"x"+r.num])}function N(){if(e.footer)return t("div",{class:f("footer")},[e.footer()])}return t("div",n()([{class:f()},Object(s["b"])(i,!0)]),[t("div",{class:f("header")},[m(),t("div",{class:f("content",{centered:r.centered})},[t("div",[y(),S(),null==e.tags?void 0:e.tags()]),p&&t("div",{class:"van-card__bottom"},[null==(a=e["price-top"])?void 0:a.call(e),j(),k(),_(),null==e.bottom?void 0:e.bottom()])])]),N()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},r["a"]=d(h)},"7b0a":function(t,r,e){},"81e6":function(t,r,e){"use strict";e("68ef"),e("7b0a")},"8b97":function(t,r,e){var i=e("d3f4"),n=e("cb7c"),a=function(t,r){if(n(t),!i(r)&&null!==r)throw TypeError(r+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,i){try{i=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function(t,e){return a(t,e),r?t.__proto__=e:i(t,e),t}}({},!1):void 0),check:a}},9093:function(t,r,e){var i=e("ce10"),n=e("e11e").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},9995:function(t,r,e){"use strict";e.r(r);var i,n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"goods_brand"},[e("div",{staticClass:"brand-info"},[e("div",{staticClass:"name"},[e("img",{staticClass:"img",attrs:{src:t.brand.picUrl,"background-size":"cover"}}),e("div",{staticClass:"info-box"},[e("div",{staticClass:"txt"},[t._v(t._s(t.brand.name))]),e("div",{staticClass:"line"})])]),e("div",{staticClass:"desc"},[t._v("\n      "+t._s(t.brand.desc)+"\n    ")])]),e("van-row",{attrs:{gutter:""}},t._l(t.brandGoods,(function(r,i){return e("van-col",{key:i,attrs:{span:"12"}},[e("router-link",{attrs:{to:{path:"/items/detail/"+r.id}}},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:r.picUrl}})]),e("div",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(r.name))]),e("div",{staticStyle:{"margin-left":"20px",color:"#ab956d"}},[t._v("￥ "+t._s(r.retailPrice))])],1)})),1)],1)},a=[],o=e("bd86"),s=(e("81e6"),e("9ffb")),c=(e("4d48"),e("d1e1")),l=(e("7f7f"),e("9cb7"),e("66fd")),u=(e("c5f6"),e("4ec3")),d={props:{brandId:[String,Number]},data:function(){return{brand:{},brandGoods:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object(u["n"])({id:this.brandId}).then((function(r){t.brand=r.data.data})),Object(u["I"])({brandId:this.brandId}).then((function(r){t.brandGoods=r.data.data.list}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(i={},Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,s["a"].name,s["a"]),i)},f=d,h=(e("f49f"),e("2877")),g=Object(h["a"])(f,n,a,!1,null,"5099e348",null);r["default"]=g.exports},"9b7e":function(t,r,e){},"9cb7":function(t,r,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("09fe"),e("9b7e"),e("ea82")},"9ffb":function(t,r,e){"use strict";var i=e("d282"),n=e("9884"),a=Object(i["a"])("col"),o=a[0],s=a[1];r["a"]=o({mixins:[Object(n["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,r=this.parent||{},e=r.spaces;if(e&&e[t]){var i=e[t],n=i.left,a=i.right;return{paddingLeft:n?n+"px":null,paddingRight:a?a+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,r=arguments[0],e=this.span,i=this.offset;return r(this.tag,{style:this.style,class:s((t={},t[e]=e,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,r,e){"use strict";var i=e("2638"),n=e.n(i),a=e("d282"),o=e("ba31"),s=e("ad06"),c=Object(a["a"])("tag"),l=c[0],u=c[1];function d(t,r,e,i){var a,c=r.type,l=r.mark,d=r.plain,f=r.color,h=r.round,g=r.size,p=r.textColor,b=d?"color":"backgroundColor",v=(a={},a[b]=f,a);d?(v.color=p||f,v.borderColor=f):(v.color=p,v.background=f);var m={mark:l,plain:d,round:h};g&&(m[g]=g);var y=r.closeable&&t(s["a"],{attrs:{name:"cross"},class:u("close"),on:{click:function(t){t.stopPropagation(),Object(o["a"])(i,"close")}}});return t("transition",{attrs:{name:r.closeable?"van-fade":null}},[t("span",n()([{key:"content",style:v,class:u([m,c])},Object(o["b"])(i,!0)]),[null==e.default?void 0:e.default(),y])])}d.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},r["a"]=l(d)},aa77:function(t,r,e){var i=e("5ca1"),n=e("be13"),a=e("79e5"),o=e("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(t,r,e){var n={},s=a((function(){return!!o[t]()||c[t]()!=c})),l=n[t]=s?r(f):o[t];e&&(n[e]=l),i(i.P+i.F*s,"String",n)},f=d.trim=function(t,r){return t=String(n(t)),1&r&&(t=t.replace(l,"")),2&r&&(t=t.replace(u,"")),t};t.exports=d},bf60:function(t,r,e){},c5f6:function(t,r,e){"use strict";var i=e("7726"),n=e("69a8"),a=e("2d95"),o=e("5dbc"),s=e("6a99"),c=e("79e5"),l=e("9093").f,u=e("11e9").f,d=e("86cc").f,f=e("aa77").trim,h="Number",g=i[h],p=g,b=g.prototype,v=a(e("2aeb")(b))==h,m="trim"in String.prototype,y=function(t){var r=s(t,!1);if("string"==typeof r&&r.length>2){r=m?r.trim():f(r,3);var e,i,n,a=r.charCodeAt(0);if(43===a||45===a){if(e=r.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(r.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+r}for(var o,c=r.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>n)return NaN;return parseInt(c,i)}}return+r};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof g&&(v?c((function(){b.valueOf.call(e)})):a(e)!=h)?o(new p(y(r)),e,g):y(r)};for(var S,O=e("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;O.length>j;j++)n(p,S=O[j])&&!n(g,S)&&d(g,S,u(p,S));g.prototype=b,b.constructor=g,e("2aba")(i,h,g)}},d1e1:function(t,r,e){"use strict";var i=e("d282"),n=e("9884"),a=Object(i["a"])("row"),o=a[0],s=a[1];r["a"]=o({mixins:[Object(n["b"])("vanRow")],props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{spaces:function(){var t=Number(this.gutter);if(t){var r=[],e=[[]],i=0;return this.children.forEach((function(t,r){i+=Number(t.span),i>24?(e.push([r]),i-=24):e[e.length-1].push(r)})),e.forEach((function(e){var i=t*(e.length-1)/e.length;e.forEach((function(e,n){if(0===n)r.push({right:i});else{var a=t-r[e-1].right,o=i-a;r.push({left:a,right:o})}}))})),r}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,r=arguments[0],e=this.align,i=this.justify,n="flex"===this.type;return r(this.tag,{class:s((t={flex:n},t["align-"+e]=n&&e,t["justify-"+i]=n&&i,t)),on:{click:this.onClick}},[this.slots()])}})},ea82:function(t,r,e){},f49f:function(t,r,e){"use strict";e("fe0b")},fdef:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},fe0b:function(t,r,e){}}]);