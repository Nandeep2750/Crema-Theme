(this.webpackJsonphister=this.webpackJsonphister||[]).push([[87],{1661:function(e,t,i){"use strict";var n=i(13),r=i(3),o=i(2),c=(i(8),i(12)),s=i(153),a=i(17),l=i(25),d=i(1495),p=i(167),u=i(1),x=["className"],j=Object(a.a)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,"flex-start"===i.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,i=e.ownerState;return Object(r.a)({minWidth:56,color:t.palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===i.alignItems&&{marginTop:8})})),h=o.forwardRef((function(e,t){var i=Object(l.a)({props:e,name:"MuiListItemIcon"}),a=i.className,h=Object(n.a)(i,x),b=o.useContext(p.a),m=Object(r.a)({},i,{alignItems:b.alignItems}),f=function(e){var t=e.alignItems,i=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(s.a)(n,d.b,i)}(m);return Object(u.jsx)(j,Object(r.a)({className:Object(c.default)(f.root,a),ownerState:m,ref:t},h))}));t.a=h},1690:function(e,t,i){"use strict";var n=i(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(94)),o=i(1),c=(0,r.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"FavoriteOutlined");t.default=c},1691:function(e,t,i){"use strict";var n=i(66);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i(94)),o=i(1),c=(0,r.default)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckOutlined");t.default=c},2326:function(e,t,i){"use strict";i.r(t);i(2);var n=i(85),r=i(1458),o=i(60),c=i(223),s=i(206),a=i(719),l=i(1582),d=i(990),p=i(1661),u=i(1562),x=i(1691),j=i.n(x),h=i(5),b=i(23),m=i(1),f=["children"],g=function(e){var t=e.children,i=Object(b.a)(e,f);return Object(m.jsx)(s.a,Object(h.a)(Object(h.a)({sx:{px:7.5,py:5,borderRadius:function(e){return e.cardRadius/4},border:function(e){return"solid 1px ".concat(e.palette.divider)},position:"relative",overflow:"hidden","& .popular":{position:"absolute",right:-30,top:-10,zIndex:0,maxWidth:120,display:"flex","&:before":{content:'""',position:"absolute",right:-50,bottom:-30,zIndex:-1,width:200,height:200,borderRadius:"50%",backgroundColor:function(e){return e.palette.background.default}}}}},i),{},{children:t}))},O=i(15),v=i(1690),C=i.n(v),S=["children"],y=function(e){var t=e.children,i=Object(b.a)(e,S);return Object(m.jsx)(s.a,Object(h.a)(Object(h.a)({sx:{pt:2.5,position:"relative","& .tag":{position:"absolute",left:30,top:0,zIndex:1,padding:"2px 5px",minWidth:70,fontSize:12,fontWeight:O.a.BOLD,textTransform:"uppercase",color:function(e){return e.palette.common.white},textAlign:"center",borderRadius:function(e){return e.cardRadius/16}}}},i),{},{children:t}))},w=function(e){var t=e.pricing;return Object(m.jsxs)(y,{children:[Object(m.jsx)(s.a,{component:"span",className:"tag",sx:{backgroundColor:t.tagColor},children:t.tag}),Object(m.jsxs)(g,{children:[Object(m.jsxs)(s.a,{sx:{position:"relative",pr:20},children:[Object(m.jsx)(c.a,{component:"h3",sx:{fontWeight:O.a.BOLD,fontSize:{xs:28,md:32,lg:36}},children:t.title}),Object(m.jsxs)(c.a,{component:"h4",sx:{fontSize:{xs:20,md:22,lg:24},mb:{xs:5,lg:7.5}},children:[Object(m.jsxs)(s.a,{component:"span",sx:{fontWeight:O.a.BOLD},children:["$",t.price]}),"/month"]}),t.popular?Object(m.jsxs)(s.a,{className:"popular",children:[Object(m.jsx)(C.a,{sx:{fontSize:14,mr:2.5,mt:1.25}}),Object(m.jsx)(c.a,{sx:{fontSize:{xs:12,xl:14}},children:t.popular})]}):null]}),Object(m.jsx)(s.a,{sx:{mb:7.5},children:Object(m.jsx)(a.a,{variant:"outlined",sx:{width:"100%",fontWeight:O.a.BOLD,color:function(e){return e.palette.text.primary},minHeight:46,borderRadius:7.5,boxShadow:"none",borderWidth:2,borderColor:t.tagColor,"&:hover, &:focus":{borderColor:t.tagColor,borderWidth:2}},children:"Start Trial"})}),Object(m.jsx)(l.a,{sx:{py:0},children:t.pricingList.map((function(e,t){return Object(m.jsxs)(d.a,{sx:{p:0,mb:2.5},children:[Object(m.jsx)(p.a,{sx:{minWidth:10,mr:3.5},children:Object(m.jsx)(j.a,{sx:{fontSize:16,mt:1,color:function(e){return e.palette.text.primary}}})}),Object(m.jsx)(u.a,{primary:e.title})]},t)}))})]})]})},z=function(e){var t=e.pricing;return Object(m.jsx)(n.b,{title:"Pricing Package Style 1",sxStyle:{alignItems:"center"},children:Object(m.jsx)(o.a,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((function(e,t){return Object(m.jsx)(r.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsx)(w,{pricing:e})},t)}))})})},L={pricingOne:[{id:1,tag:"Basic",tagColor:"#11C15B",title:"Basic",price:69,pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]},{id:2,tag:"Pro",tagColor:"#FF8B26",title:"Pro",price:349,popular:"Chosen by 57% of customers",pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]},{id:3,tag:"Growth",tagColor:"#00905F",title:"Growth",price:149,pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]}],pricingFour:[{id:1,priceColor:"#11C15B",title:"Basic",price:69,pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]},{id:2,priceColor:"#FF8B26",title:"Pro",price:349,pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]},{id:3,priceColor:"#00905F",title:"Growth",price:149,pricingList:[{id:1,title:"All features from previous plan"},{id:2,title:"Memberships and bundles"},{id:3,title:"Advanced quizzes"},{id:4,title:"Private & hidden courses"},{id:5,title:"2 Site admin accounts"},{id:6,title:"5 Course admins/authors"}]}],pricingTwo:[{id:1,title:"Free",description:"Designed to help your building initial community and educational content.",price:19,priceColor:"#11C15B",priceDescription:"No transaction fees",pricingList:[{id:1,title:"1 course to share privately"},{id:2,title:"No selling option"},{id:3,title:"No Social Marketing"},{id:4,title:"Courses & Pages are not discoverable"},{id:5,title:"No team of helpers"},{id:6,title:"No personal and page Blogs"}]},{id:2,title:"Start",description:"Designed to help your building initial community and educational content.",price:89,priceColor:"#FF8B26",priceDescription:"10% transaction fees + Stripe fees",pricingList:[{id:1,title:"5 courses"},{id:2,title:"Can sell courses and charge users"},{id:3,title:"Marketing with social media"},{id:4,title:"Courses & Pages are discoverable"},{id:5,title:"No team of helpers"},{id:6,title:"Create your personal and page Blogs"}]},{id:3,title:"Scale",description:"Designed to help your building initial community and educational content.",price:49,priceColor:"#00905F",priceDescription:"8% transaction fees + Stripe fees",pricingList:[{id:1,title:"Unlimited courses"},{id:2,title:"Can sell courses and charge users"},{id:3,title:"Marketing with social media"},{id:4,title:"Courses & Pages are discoverable"},{id:5,title:"No team of helpers"},{id:6,title:"Create your personal and page Blogs"}]}]},W=i(1460),B=function(e){var t=e.pricing;return Object(m.jsxs)(W.a,{sx:{boxShadow:"none",border:"1px solid #e8e5dd"},children:[Object(m.jsxs)(s.a,{sx:{pt:5,px:5},children:[Object(m.jsx)(s.a,{sx:{display:"flex",justifyContent:"center",mb:7.5},children:Object(m.jsxs)(s.a,{sx:{width:149,height:149,p:2.5,backgroundColor:t.priceColor,borderRadius:"50%",color:function(e){return e.palette.common.white},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(m.jsxs)(c.a,{component:"h3",sx:{fontSize:16,fontWeight:O.a.MEDIUM,mb:0},children:[Object(m.jsxs)(s.a,{component:"span",sx:{fontWeight:O.a.BOLD,fontSize:26,mb:0},children:["$",t.price]}),"/month"]}),Object(m.jsx)(c.a,{component:"h5",sx:{fontWeight:O.a.BOLD,fontSize:16,textTransform:"uppercase"},children:t.title})]})}),Object(m.jsx)(l.a,{sx:{py:0,borderTop:function(e){return"solid 1px ".concat(e.palette.divider)}},children:t.pricingList.map((function(e,t){return Object(m.jsxs)(d.a,{sx:{px:0,py:2.75,borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[Object(m.jsx)(p.a,{sx:{minWidth:10,mr:3.5},children:Object(m.jsx)(j.a,{sx:{fontSize:16,mt:1,color:function(e){return e.palette.success.main}}})}),Object(m.jsx)(u.a,{primary:e.title})]},t)}))})]}),Object(m.jsx)(s.a,{sx:{mt:7.5},children:Object(m.jsx)(a.a,{variant:"contained",sx:{width:"100%",fontWeight:O.a.BOLD,color:function(e){return e.palette.common.white},minHeight:46,borderRadius:0,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]})},k=function(e){var t=e.pricing;return Object(m.jsx)(n.b,{title:"Pricing Package Style 4",sxStyle:{alignItems:"center"},children:Object(m.jsx)(o.a,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((function(e,t){return Object(m.jsx)(r.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsx)(B,{pricing:e})},t)}))})})},D=i(145),I=["children"],P=function(e){var t=e.children,i=Object(b.a)(e,I);return Object(m.jsx)(W.a,Object(h.a)(Object(h.a)({sx:{boxShadow:"none",border:"1px solid #e8e5dd",backgroundColor:function(e){return Object(D.e)(e.palette.common.black,.1)},color:function(e){return e.palette.common.white},position:"relative","&:before":{content:'""',position:"absolute",left:0,top:-26,zIndex:1,height:55,width:"calc(100% + 30px)",backgroundColor:function(e){return Object(D.a)(e.palette.common.white,.1)},transform:"rotate(10deg)"}}},i),{},{children:t}))},M=function(e){var t=e.pricing;return Object(m.jsxs)(P,{children:[Object(m.jsxs)(s.a,{sx:{pt:5,px:5},children:[Object(m.jsx)(c.a,{component:"h5",sx:{fontWeight:O.a.BOLD,fontSize:16,textTransform:"uppercase",mb:{xs:5,md:7.5},letterSpacing:"0.2em"},children:t.title}),Object(m.jsx)(l.a,{sx:{py:0},children:t.pricingList.map((function(e,t){return Object(m.jsxs)(d.a,{sx:{px:0,py:0,mb:2},children:[Object(m.jsx)(p.a,{sx:{minWidth:10,mr:3.5},children:Object(m.jsx)(j.a,{sx:{fontSize:16,mt:1,color:function(e){return e.palette.success.main}}})}),Object(m.jsx)(u.a,{primary:e.title})]},t)}))}),Object(m.jsx)(s.a,{sx:{my:4},children:Object(m.jsxs)(c.a,{component:"h3",sx:{fontSize:{xs:16,md:18,lg:20},fontWeight:O.a.MEDIUM},children:[Object(m.jsxs)(s.a,{component:"span",sx:{fontWeight:O.a.BOLD,fontSize:{xs:26,md:32,lg:44,xl:54}},children:["$",t.price]}),"/month"]})})]}),Object(m.jsx)(s.a,{sx:{mt:7.5},children:Object(m.jsx)(a.a,{variant:"contained",sx:{width:"100%",fontWeight:O.a.BOLD,color:function(e){return e.palette.common.white},minHeight:46,borderRadius:0,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]})},A=function(e){var t=e.pricing;return Object(m.jsx)(n.b,{title:"Pricing Package Style 3",sxStyle:{alignItems:"center"},children:Object(m.jsx)(o.a,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((function(e,t){return Object(m.jsx)(r.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsx)(M,{pricing:e})},t)}))})})},F=function(e){var t=e.pricing;return Object(m.jsxs)(W.a,{sx:{boxShadow:"none",border:"1px solid #e8e5dd"},children:[Object(m.jsxs)(s.a,{sx:{py:5,px:5,textAlign:"center",borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[Object(m.jsx)(c.a,{component:"h5",sx:{fontWeight:O.a.BOLD,fontSize:16,mb:4},children:t.title}),Object(m.jsx)(c.a,{children:t.description})]}),Object(m.jsxs)(s.a,{sx:{py:5,px:5,textAlign:"center",borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[Object(m.jsx)(s.a,{sx:{mb:4},children:Object(m.jsxs)(c.a,{component:"h3",sx:{fontSize:{xs:16,md:18,lg:20},fontWeight:O.a.MEDIUM,color:function(e){return e.palette.text.secondary}},children:[Object(m.jsx)(s.a,{component:"span",sx:{display:"inline-block",verticalAlign:"top"},children:"$"}),Object(m.jsx)(s.a,{component:"span",sx:{fontWeight:O.a.BOLD,fontSize:{xs:26,md:32,lg:44,xl:54},color:t.priceColor,lineHeight:1},children:t.price}),"/month"]})}),Object(m.jsx)(c.a,{children:t.priceDescription})]}),Object(m.jsxs)(s.a,{sx:{py:5,px:5},children:[Object(m.jsx)(l.a,{sx:{py:0},children:t.pricingList.map((function(e,t){return Object(m.jsxs)(d.a,{sx:{px:0,py:0,mb:2},children:[Object(m.jsx)(p.a,{sx:{minWidth:10,mr:3.5},children:Object(m.jsx)(j.a,{sx:{fontSize:16,mt:1,color:function(e){return e.palette.success.main}}})}),Object(m.jsx)(u.a,{primary:e.title})]},t)}))}),Object(m.jsx)(s.a,{sx:{mt:7.5,textAlign:"center"},children:Object(m.jsx)(a.a,{variant:"contained",sx:{fontWeight:O.a.BOLD,color:function(e){return e.palette.common.white},minWidth:150,borderRadius:7.5,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]})]})},R=function(e){var t=e.pricing;return Object(m.jsx)(n.b,{title:"Pricing Package Style 2",sxStyle:{alignItems:"center"},children:Object(m.jsx)(o.a,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((function(e,t){return Object(m.jsx)(r.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsx)(F,{pricing:e})},t)}))})})};t.default=function(){return Object(m.jsxs)(n.e,{children:[Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(z,{pricing:L.pricingOne})}),Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(R,{pricing:L.pricingTwo})}),Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(A,{pricing:L.pricingFour})}),Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(k,{pricing:L.pricingFour})})]})}}}]);
//# sourceMappingURL=87.fff56413.chunk.js.map