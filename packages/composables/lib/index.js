var a=Object.defineProperty,ne=Object.defineProperties,ae=Object.getOwnPropertyDescriptor,ie=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(n)for(var r of n(t))d.call(t,r)&&u(e,r,t[r]);return e},g=(e,t)=>ne(e,ie(t));var p=(e,t)=>{var r={};for(var s in e)i.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&n)for(var s of n(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r};var ue=(e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})},de=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ce(t))!i.call(e,o)&&o!==r&&a(e,o,{get:()=>t[o],enumerable:!(s=ae(t,o))||s.enumerable});return e};var me=e=>de(a({},"__esModule",{value:!0}),e);var br={};ue(br,{cartGetters:()=>V,categoryGetters:()=>$,facetGetters:()=>H,forgotPasswordGetters:()=>J,orderGetters:()=>X,productGetters:()=>Y,reviewGetters:()=>Z,storeGetters:()=>ee,useBilling:()=>f,useCart:()=>P,useCategory:()=>A,useContent:()=>C,useFacet:()=>I,useForgotPassword:()=>U,useMakeOrder:()=>w,useProduct:()=>R,useReview:()=>b,useShipping:()=>G,useShippingProvider:()=>W,useStore:()=>N,useUser:()=>Q,useUserBilling:()=>_,useUserOrder:()=>z,useUserShipping:()=>L,useWishlist:()=>K,userBillingGetters:()=>te,userGetters:()=>re,userShippingGetters:()=>se,wishlistGetters:()=>oe});module.exports=me(br);var l=require("@vue-storefront/core"),ge={load:async(e,{customQuery:t})=>(console.log("Mocked: useBilling.load"),{}),save:async(e,{params:t,billingDetails:r,customQuery:s})=>(console.log("Mocked: useBilling.save"),{})},f=(0,l.useBillingFactory)(ge);var y=require("@vue-storefront/core"),pe={load:async(e,{customQuery:t})=>(console.log("Mocked: useCart.load"),{}),addItem:async(e,{currentCart:t,product:r,quantity:s,customQuery:o})=>(console.log("Mocked: useCart.addItem"),{}),removeItem:async(e,{currentCart:t,product:r,customQuery:s})=>(console.log("Mocked: useCart.removeItem"),{}),updateItemQty:async(e,{currentCart:t,product:r,quantity:s,customQuery:o})=>(console.log("Mocked: useCart.updateItemQty"),{}),clear:async(e,{currentCart:t})=>(console.log("Mocked: useCart.clear"),{}),applyCoupon:async(e,{currentCart:t,couponCode:r,customQuery:s})=>(console.log("Mocked: useCart.applyCoupon"),{updatedCart:{},updatedCoupon:{}}),removeCoupon:async(e,{currentCart:t,couponCode:r,customQuery:s})=>(console.log("Mocked: useCart.removeCoupon"),{updatedCart:{}}),isInCart:(e,{currentCart:t,product:r})=>(console.log("Mocked: useCart.isInCart"),!1)},P=(0,y.useCartFactory)(pe);var x=require("@vue-storefront/core"),le={categorySearch:async(e,s)=>{var o=s,{customQuery:t}=o,r=p(o,["customQuery"]);return console.log("Mocked: useCategory.categorySearch"),[{id:1,name:"Women",slug:"women",items:[]},{id:2,name:"Men",slug:"men",items:[]},{id:3,name:"Kids",slug:"kids",items:[]}]}},A=(0,x.useCategoryFactory)(le);function C(){}var h=require("@vue-storefront/core"),fe={search:async(e,t)=>(console.log("Mocked: useFacet.search"),{})},I=(0,h.useFacetFactory)(fe);var S=require("@vue-storefront/core"),ye={resetPassword:async(e,{email:t,customQuery:r})=>(console.log("Mocked: resetPassword"),{}),setNewPassword:async(e,{tokenValue:t,newPassword:r,customQuery:s})=>(console.log("Mocked: setNewPassword"),{})},U=(0,S.useForgotPasswordFactory)(ye);var v=require("@vue-storefront/core"),Pe={make:async(e,{customQuery:t})=>(console.log("Mocked: useMakeOrder.make"),{})},w=(0,v.useMakeOrderFactory)(Pe);var F=require("@vue-storefront/core"),xe={productsSearch:async(e,t)=>(await e.$addcom.api.getFeaturedProduct(t)).psdata},R=(0,F.useProductFactory)(xe);var k=require("@vue-storefront/core"),Ae={searchReviews:async(e,t)=>(console.log("Mocked: useReview.searchReviews"),{}),addReview:async(e,t)=>(console.log("Mocked: useReview.addReview"),{})},b=(0,k.useReviewFactory)(Ae);var M=require("@vue-storefront/core"),Ce={load:async(e,{customQuery:t})=>(console.log("Mocked: useShipping.load"),{}),save:async(e,{shippingDetails:t,customQuery:r})=>(console.log("Mocked: useShipping.save"),{})},G=(0,M.useShippingFactory)(Ce);var O=require("@vue-storefront/core"),he={load:async(e,{customQuery:t})=>(console.log("Mocked: loadShippingProvider"),{}),save:async(e,{shippingMethod:t,customQuery:r})=>(console.log("Mocked: saveShippingProvider"),{})},W=(0,O.useShippingProviderFactory)(he);var B=require("@vue-storefront/core"),N=(0,B.useStoreFactory)({load(e,t){return console.log("Mocked: useStore.load"),Promise.resolve({})},change(e,t){return console.log("Mocked: useStore.change"),Promise.resolve({})}});var T=require("@vue-storefront/core"),Ie={load:async e=>(console.log("Mocked: useUser.load"),{}),logOut:async e=>{console.log("Mocked: useUser.logOut")},updateUser:async(e,{currentUser:t,updatedUserData:r})=>(console.log("Mocked: useUser.updateUser"),{}),register:async(e,{email:t,password:r,firstName:s,lastName:o})=>(console.log("Mocked: useUser.register"),{}),logIn:async(e,{username:t,password:r})=>(console.log("Mocked: useUser.logIn"),{}),changePassword:async(e,{currentUser:t,currentPassword:r,newPassword:s})=>(console.log("Mocked: useUser.changePassword"),{})},Q=(0,T.useUserFactory)(Ie);var D=require("@vue-storefront/core"),Se={addAddress:async(e,t)=>(console.log("Mocked: useUserBilling.addAddress"),{}),deleteAddress:async(e,t)=>(console.log("Mocked: useUserBilling.deleteAddress"),{}),updateAddress:async(e,t)=>(console.log("Mocked: useUserBilling.updateAddress"),{}),load:async(e,t)=>(console.log("Mocked: useUserBilling.load"),{}),setDefaultAddress:async(e,t)=>(console.log("Mocked: useUserBilling.setDefaultAddress"),{})},_=(0,D.useUserBillingFactory)(Se);var j=require("@vue-storefront/core"),Ue={searchOrders:async(e,t)=>(console.log("Mocked: searchOrders"),{})},z=(0,j.useUserOrderFactory)(Ue);var E=require("@vue-storefront/core"),ve={addAddress:async(e,t)=>(console.log("Mocked: useUserShipping.addAddress"),{}),deleteAddress:async(e,t)=>(console.log("Mocked: useUserShipping.deleteAddress"),{}),updateAddress:async(e,t)=>(console.log("Mocked: useUserShipping.updateAddress"),{}),load:async(e,t)=>(console.log("Mocked: useUserShipping.load"),{}),setDefaultAddress:async(e,t)=>(console.log("Mocked: useUserShipping.setDefaultAddress"),{})},L=(0,E.useUserShippingFactory)(ve);var q=require("@vue-storefront/core"),we={load:async e=>(console.log("Mocked: useWishlist.load"),{}),addItem:async(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.addItem"),{}),removeItem:async(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.removeItem"),{}),clear:async(e,{currentWishlist:t})=>(console.log("Mocked: useWishlist.clear"),{}),isInWishlist:(e,{currentWishlist:t,product:r})=>(console.log("Mocked: useWishlist.isInWishlist"),!1)},K=(0,q.useWishlistFactory)(we);function Fe(e){return[{}]}function Re(e){return"Name"}function ke(e){return"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"}function be(e){return{regular:12,special:10}}function Me(e){return 1}function Ge(e,t){return{color:"red"}}function Oe(e){return""}function We(e){return{total:12,subtotal:12,special:10}}function Be(e){return 0}function Ne(e){return 1}function Te(e){return""}function Qe(e){return[]}function De(e){return[]}var V={getTotals:We,getShippingPrice:Be,getItems:Fe,getItemName:Re,getItemImage:ke,getItemPrice:be,getItemQty:Me,getItemAttributes:Ge,getItemSku:Oe,getFormattedPrice:Te,getTotalItems:Ne,getCoupons:Qe,getDiscounts:De};function _e(e){return{label:"",slug:"",items:[],isCurrent:!1}}var $={getTree:_e};function je(e,t){return[]}function ze(e,t){return[]}function Ee(e){return{options:[],selected:""}}function Le(e){return{label:"",slug:"",items:null,isCurrent:!1,count:0}}function qe(e){return[{_id:1,_description:"Some description",_categoriesRef:["1","2"],name:"Black jacket",sku:"black-jacket",images:["https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"],price:{original:12.34,current:10}}]}function Ke(e){return{currentPage:1,totalPages:1,totalItems:1,itemsPerPage:10,pageOptions:[]}}function Ve(e){return[]}var H={getSortOptions:Ee,getGrouped:ze,getAll:je,getProducts:qe,getCategoryTree:Le,getBreadcrumbs:Ve,getPagination:Ke};function $e(e){return""}function He(e){return!0}var J={getResetPasswordToken:$e,isPasswordChanged:He};function Je(e){return""}function Xe(e){return"1"}function Ye(e){return""}function Ze(e){return 0}function et(e){return[]}function tt(e){return""}function rt(e){return""}function st(e){return 0}function ot(e){return 0}function nt(e){return""}function at(e){return 1}var X={getDate:Je,getId:Xe,getStatus:Ye,getPrice:Ze,getItems:et,getItemSku:tt,getItemName:rt,getItemQty:st,getItemPrice:ot,getFormattedPrice:nt,getOrdersTotal:at};var it=e=>e.map(r=>g(m({},r),{name:r.name,coverImage:r.cover.url,regularPrice:r.regular_price_amount,discountPrice:r.price_amount})),c=it;function ct(e){return(e==null?void 0:e.name)||""}function ut(e){return"slug"}function dt(e){return{regular:(e==null?void 0:e.regularPrice)||0,special:(e==null?void 0:e.discountPrice)||0}}function mt(e){return[{small:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg",normal:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg",big:"https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg"}]}function gt(e){return e.coverImage}function pt(e,t){return e?(e=Array.isArray(e)?e:[e],c(e)):[]}function lt(e,t){return{}}function ft(e){return""}function yt(e){return[]}function Pt(e){return"1"}function xt(e){return""}function At(e){return 0}function Ct(e){return 0}var Y={getName:ct,getSlug:ut,getPrice:dt,getGallery:mt,getCoverImage:gt,getFiltered:pt,getAttributes:lt,getDescription:ft,getCategoryIds:yt,getId:Pt,getFormattedPrice:xt,getTotalReviews:At,getAverageRating:Ct};function ht(e){return[]}function It(e){return""}function St(e){return""}function Ut(e){return""}function vt(e){return 0}function wt(e){return""}function Ft(e){return 0}function Rt(e){return 0}function kt(e){return[]}function bt(e){return 0}var Z={getItems:ht,getReviewId:It,getReviewAuthor:St,getReviewMessage:Ut,getReviewRating:vt,getReviewDate:wt,getTotalReviews:Ft,getAverageRating:Rt,getRatesCount:kt,getReviewsPage:bt};function Mt(e,t={}){return[]}function Gt(e){return null}var ee={getItems:Mt,getSelected:Gt};function Ot(e,t){return[]}function Wt(e){return{}}function Bt(e){return 0}function Nt(e){return""}function Tt(e){return""}function Qt(e){return""}function Dt(e){return""}function _t(e){return""}function jt(e){return""}function zt(e){return""}function Et(e){return""}function Lt(e){return""}function qt(e){return""}function Kt(e){return""}function Vt(e){return""}function $t(e){return""}function Ht(e){return""}function Jt(e){return!1}var te={getAddresses:Ot,getDefault:Wt,getTotal:Bt,getPostCode:Nt,getStreetName:Tt,getStreetNumber:Qt,getCity:Dt,getFirstName:_t,getLastName:jt,getCountry:zt,getPhone:Et,getEmail:Lt,getProvince:qt,getCompanyName:Kt,getTaxNumber:Vt,getId:$t,getApartmentNumber:Ht,isDefault:Jt};function Xt(e){return""}function Yt(e){return""}function Zt(e){return""}function er(e){return""}var re={getFirstName:Xt,getLastName:Yt,getFullName:Zt,getEmailAddress:er};function tr(e,t){return[]}function rr(e){return{}}function sr(e){return 0}function or(e){return""}function nr(e){return""}function ar(e){return""}function ir(e){return""}function cr(e){return""}function ur(e){return""}function dr(e){return""}function mr(e){return""}function gr(e){return""}function pr(e){return""}function lr(e){return""}function fr(e){return""}function yr(e){return""}function Pr(e){return""}function xr(e){return!1}var se={getAddresses:tr,getDefault:rr,getTotal:sr,getPostCode:or,getStreetName:nr,getStreetNumber:ar,getCity:ir,getFirstName:cr,getLastName:ur,getCountry:dr,getPhone:mr,getEmail:gr,getProvince:pr,getCompanyName:lr,getTaxNumber:fr,getId:yr,getApartmentNumber:Pr,isDefault:xr};function Ar(e){return[]}function Cr(e){return{total:10,subtotal:10}}function hr(e){return""}function Ir(e){return""}function Sr(e){return{regular:12,special:10}}function Ur(e){return 1}function vr(e,t){return{color:"red"}}function wr(e){return""}function Fr(e){return 0}function Rr(e){return 1}function kr(e){return""}var oe={getItems:Ar,getTotals:Cr,getItemName:hr,getItemImage:Ir,getItemPrice:Sr,getItemQty:Ur,getItemAttributes:vr,getShippingPrice:Fr,getItemSku:wr,getTotalItems:Rr,getFormattedPrice:kr};0&&(module.exports={cartGetters,categoryGetters,facetGetters,forgotPasswordGetters,orderGetters,productGetters,reviewGetters,storeGetters,useBilling,useCart,useCategory,useContent,useFacet,useForgotPassword,useMakeOrder,useProduct,useReview,useShipping,useShippingProvider,useStore,useUser,useUserBilling,useUserOrder,useUserShipping,useWishlist,userBillingGetters,userGetters,userShippingGetters,wishlistGetters});
//# sourceMappingURL=index.js.map
