(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b04323"],{"24eb":function(e,t,n){"use strict";n.r(t);var o,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"order"},[n("van-cell-group",[e.checkedAddress?n("van-cell",{attrs:{isLink:"",title:"收货地址"},on:{click:function(t){return e.goAddressList()}}},[n("div",{attrs:{slot:"label"},slot:"label"},[n("div",[n("span",[e._v(e._s(e.checkedAddress.name)+" ")]),n("span",[e._v(e._s(e.checkedAddress.tel)+" ")])]),n("div",[e._v("\n        "+e._s(e.checkedAddress.addressDetail)+"\n      ")])])]):e._e()],1),n("van-cell-group",[n("van-cell",{staticClass:"order-coupon",attrs:{title:"优惠券","is-link":"",value:e.getCouponValue()},on:{click:e.getCoupons}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showList,callback:function(t){e.showList=t},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:e.coupons,"chosen-coupon":e.chosenCoupon,"disabled-coupons":e.disabledCoupons},on:{change:e.onChange,exchange:e.onExchange}})],1),e._l(e.checkedGoodsList,(function(t){return n("van-card",{key:t.id,attrs:{title:t.goodsName,num:t.number,price:t.price+".00",thumb:t.picUrl}},[n("div",{attrs:{slot:"desc"},slot:"desc"},[n("div",{staticClass:"van-card__desc"},e._l(t.specifications,(function(t,o){return n("van-tag",{key:o,staticStyle:{"margin-right":"6px"},attrs:{plain:""}},[e._v("\n            "+e._s(t)+"\n          ")])})),1)])])})),n("van-cell-group",[n("van-cell",{attrs:{title:"商品金额"}},[n("span",{staticClass:"red"},[e._v(e._s(e._f("yuan")(100*e.goodsTotalPrice)))])]),n("van-cell",{attrs:{title:"邮费"}},[n("span",{staticClass:"red"},[e._v(e._s(e._f("yuan")(100*e.freightPrice)))])]),n("van-cell",{attrs:{title:"优惠券"}},[n("span",{staticClass:"red"},[e._v("-"+e._s(e._f("yuan")(100*e.couponPrice)))])]),n("van-field",{attrs:{placeholder:"请输入备注",label:"订单备注"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[n("template",{slot:"icon"},[e._v(e._s(e.message.length)+"/50")])],2)],1),n("van-submit-bar",{attrs:{price:100*e.actualPrice,label:"总计：",buttonText:"提交订单",disabled:e.isDisabled},on:{submit:e.onSubmit}})],2)},a=[],i=n("bd86"),c=(n("8a58"),n("e41f")),r=(n("e324"),n("453b")),d=(n("b76c"),n("ac3c")),u=(n("5f1a"),n("a3e2")),l=(n("be7f"),n("565f")),p=(n("9cb7"),n("66fd")),b=(n("be39"),n("efa0")),f=(n("7f7f"),n("e7e5"),n("d399")),h=n("4ec3"),g=n("3c96"),v=(n("5a0c"),{data:function(){return{checkedGoodsList:[],checkedAddress:{},availableCouponLength:0,goodsTotalPrice:0,freightPrice:0,couponPrice:0,grouponPrice:0,orderTotalPrice:0,actualPrice:0,message:"",isDisabled:!1,showList:!1,chosenCoupon:-1,coupons:[],disabledCoupons:[]}},created:function(){this.init()},methods:{onSubmit:function(){var e=this,t=Object(g["a"])("AddressId","CartId","CouponId","UserCouponId"),n=t.AddressId,o=t.CartId,s=t.CouponId,a=t.UserCouponId;null!==n?(this.isDisabled=!0,Object(h["T"])({addressId:n,cartId:o,couponId:s,userCouponId:a,grouponLinkId:0,grouponRulesId:0,message:this.message}).then((function(t){Object(g["c"])({AddressId:0,CartId:0,CouponId:0});var n=t.data.data.orderId;e.$router.push({name:"payment",params:{orderId:n}})})).catch((function(t){e.isDisabled=!1,e.$toast("下单失败")}))):f["a"].fail("请设置收货地址")},goAddressList:function(){this.$router.push({path:"/user/address"})},getCouponValue:function(){return 0!==this.couponPrice?"-¥"+this.couponPrice+".00元":0!==this.availableCouponLength?this.availableCouponLength+"张可用":"没有可用优惠券"},getCoupons:function(){var e=this,t=Object(g["a"])("AddressId","CartId","CouponId"),n=(t.AddressId,t.CartId);t.CouponId;Object(h["D"])({cartId:n,grouponRulesId:0}).then((function(t){var n=t.data.data.list;e.coupons=[],e.disabledCoupons=[];for(var o=0;o<n.length;o++){var s=n[o],a={id:s.id,cid:s.cid,name:s.name,condition:"满"+s.min+"元可用",value:100*s.discount,description:s.desc,startAt:new Date(s.startTime).getTime()/1e3,endAt:new Date(s.endTime).getTime()/1e3,valueDesc:s.discount,unitDesc:"元"};s.available?e.coupons.push(a):e.disabledCoupons.push(a)}e.showList=!0}))},init:function(){var e=this,t=Object(g["a"])("AddressId","CartId","CouponId","UserCouponId"),n=t.AddressId,o=t.CartId,s=t.CouponId,a=t.UserCouponId;Object(h["r"])({cartId:o,addressId:n,couponId:s,userCouponId:a,grouponRulesId:0}).then((function(t){var n=t.data.data;e.checkedGoodsList=n.checkedGoodsList,e.checkedAddress=n.checkedAddress,e.availableCouponLength=n.availableCouponLength,e.actualPrice=n.actualPrice,e.couponPrice=n.couponPrice,e.grouponPrice=n.grouponPrice,e.freightPrice=n.freightPrice,e.goodsTotalPrice=n.goodsTotalPrice,e.orderTotalPrice=n.orderTotalPrice,Object(g["c"])({AddressId:n.addressId,CartId:n.cartId,CouponId:n.couponId,UserCouponId:n.userCouponId})}))},onChange:function(e){if(this.showList=!1,this.chosenCoupon=e,-1===e)Object(g["c"])({CouponId:-1,UserCouponId:-1});else{var t=this.coupons[e].cid,n=this.coupons[e].id;Object(g["c"])({CouponId:t,UserCouponId:n})}this.init()},onExchange:function(){this.$toast("兑换暂不支持")}},components:(o={},Object(i["a"])(o,f["a"].name,f["a"]),Object(i["a"])(o,b["a"].name,b["a"]),Object(i["a"])(o,p["a"].name,p["a"]),Object(i["a"])(o,l["a"].name,l["a"]),Object(i["a"])(o,u["a"].name,u["a"]),Object(i["a"])(o,d["a"].name,d["a"]),Object(i["a"])(o,r["a"].name,r["a"]),Object(i["a"])(o,c["a"].name,c["a"]),o)}),m=v,C=(n("4f0e"),n("2877")),I=Object(C["a"])(m,s,a,!1,null,"f1c077fc",null);t["default"]=I.exports},"3b42":function(e,t,n){},"4f0e":function(e,t,n){"use strict";n("d1b0")},"5f1a":function(e,t,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("9b7e")},"8a58":function(e,t,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75")},be39:function(e,t,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b"),n("3b42")},be7f:function(e,t,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04"),n("1146")},d1b0:function(e,t,n){},e41f:function(e,t,n){"use strict";var o=n("d282"),s=n("a142"),a=n("6605"),i=n("ad06"),c=Object(o["a"])("popup"),r=c[0],d=c[1];t["a"]=r({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var e=this,t=function(t){return function(n){return e.$emit(t,n)}};this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},methods:{onClickCloseIcon:function(e){this.$emit("click-close-icon",e),this.close()}},render:function(){var e,t=arguments[0];if(this.shouldRender){var n=this.round,o=this.position,a=this.duration,c="center"===o,r=this.transition||(c?"van-fade":"van-popup-slide-"+o),u={};if(Object(s["c"])(a)){var l=c?"animationDuration":"transitionDuration";u[l]=a+"s"}return t("transition",{attrs:{appear:this.transitionAppear,name:r},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:u,class:d((e={round:n},e[o]=o,e["safe-area-inset-bottom"]=this.safeAreaInsetBottom,e)),on:{click:this.onClick}},[this.slots(),this.closeable&&t(i["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:d("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}})},efa0:function(e,t,n){"use strict";var o=n("2638"),s=n.n(o),a=n("d282"),i=n("ba31"),c=n("ad06"),r=n("b650"),d=Object(a["a"])("submit-bar"),u=d[0],l=d[1],p=d[2];function b(e,t,n,o){var a=t.tip,d=t.price,u=t.tipIcon;function b(){if("number"===typeof d){var n=(d/100).toFixed(t.decimalLength).split("."),o=t.decimalLength?"."+n[1]:"";return e("div",{style:{textAlign:t.textAlign?t.textAlign:""},class:l("text")},[e("span",[t.label||p("label")]),e("span",{class:l("price")},[t.currency,e("span",{class:l("price","integer")},[n[0]]),o]),t.suffixLabel&&e("span",{class:l("suffix-label")},[t.suffixLabel])])}}function f(){if(n.tip||a)return e("div",{class:l("tip")},[u&&e(c["a"],{class:l("tip-icon"),attrs:{name:u}}),a&&e("span",{class:l("tip-text")},[a]),n.tip&&n.tip()])}return e("div",s()([{class:l({unfit:!t.safeAreaInsetBottom})},Object(i["b"])(o)]),[n.top&&n.top(),f(),e("div",{class:l("bar")},[n.default&&n.default(),b(),n.button?n.button():e(r["a"],{attrs:{round:!0,type:t.buttonType,text:t.loading?"":t.buttonText,color:t.buttonColor,loading:t.loading,disabled:t.disabled},class:l("button",t.buttonType),on:{click:function(){Object(i["a"])(o,"submit")}}})])])}b.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,buttonColor:String,suffixLabel:String,safeAreaInsetBottom:{type:Boolean,default:!0},decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},t["a"]=u(b)}}]);