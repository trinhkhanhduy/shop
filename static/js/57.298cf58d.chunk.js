"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[57],{26057:function(e,n,t){t.r(n);var r=t(42982),s=t(74165),a=t(15861),i=t(70885),c=t(72791),l=t(35777),d=t(45050),u=t(48674),o=t(96637),x=t(8486),h=t(27218),m=t(16030),p=t(11601),v=t(9672),j=t(80184);n.default=function(){var e=(0,c.useState)([]),n=(0,i.Z)(e,2),t=n[0],f=n[1],g=(0,c.useState)([]),N=(0,i.Z)(g,2),b=N[0],w=N[1],y=(0,m.I0)(),Z=(0,c.useState)([]),k=(0,i.Z)(Z,2),_=k[0],S=k[1],C=(0,c.useState)([]),D=(0,i.Z)(C,2),B=D[0],V=D[1],F=(0,m.v9)((function(e){var n;return null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.productlistsale}));(0,c.useEffect)((function(){(0,a.Z)((0,s.Z)().mark((function e(){var n,t,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getList();case 2:return n=e.sent,e.next=5,d.Z.getList();case 5:if(t=e.sent,w(t),f(n),0===_.length){e.next=20;break}if(0===B.length){e.next=16;break}return e.next=12,u.Z.sortSizeBrandSale({check:_,brand:B});case 12:r=e.sent,y((0,h.Bj)(r)),e.next=20;break;case 16:return e.next=18,u.Z.sortSizeSale({check:_});case 18:a=e.sent,y((0,h.Bj)(a));case 20:case"end":return e.stop()}}),e)})))()}),[_]);var T=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.sortBySale(n);case 2:t=e.sent,y((0,h.Bj)(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.sortBrandSale(n);case 2:t=e.sent,y((0,h.Bj)(t)),V(n);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=(0,c.useState)([5e5,15e5]),z=(0,i.Z)(L,2),A=z[0],E=z[1],K=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.rangePriceSale(A);case 2:n=e.sent,y((0,h.Bj)(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=8,q=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P+=8,e.next=3,v.Z.getDiscountProductAddList({number:P});case 3:n=e.sent,y((0,h.Bj)(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:" relative w-[100%] min-h-[46vh] ",children:[(0,j.jsxs)("div",{className:"flex gap-5 w-[80%] mx-auto mt-10",children:[(0,j.jsxs)("div",{className:"w-[20%]",children:[(0,j.jsx)("div",{className:"mb-5",children:(0,j.jsxs)("select",{onChange:function(e){return T(e.target.value)},className:"w-full py-[6px] px-4 bg-gray-200 outline-none rounded-lg shadow-md",children:[(0,j.jsx)("option",{value:"",children:"S\u1eafp x\u1ebfp gi\xe1"}),(0,j.jsx)("option",{value:"ASC",children:"T\u1eeb th\u1ea5p \u0111\u1ebfn cao"}),(0,j.jsx)("option",{value:"DESC",children:"T\u1eeb cao \u0111\u1ebfn th\u1ea5p"})]})}),(0,j.jsx)("div",{className:"mb-5",children:(0,j.jsxs)("select",{onChange:function(e){return I(e.target.value)},className:"w-full py-[6px] px-4 bg-gray-200 outline-none rounded-lg shadow-md",children:[(0,j.jsx)("option",{value:"",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),null===t||void 0===t?void 0:t.map((function(e,n){var t=e.id_th,r=e.ten_th;return(0,j.jsx)("option",{value:t,children:r},n)}))]})}),(0,j.jsxs)("div",{className:"mb-5",children:[(0,j.jsx)("div",{className:"w-full py-[6px] px-4 bg-gray-200 outline-none rounded-lg shadow-md",children:"K\xedch Th\u01b0\u1edbc"}),(0,j.jsx)("div",{className:"w-full mt-2 h-[100%] rounded-lg border-2 border-gray-400 flex gap-3 py-1 px-2 flex-wrap ",children:b.map((function(e,n){return(0,j.jsxs)("div",{className:"flex",children:[(0,j.jsx)("input",{type:"checkbox",checked:_.includes(e.id_kt),onChange:function(){return n=e.id_kt,void S((function(e){return _.includes(n)?_.filter((function(e){return e!==n})):[].concat((0,r.Z)(e),[n])}));var n}}),(0,j.jsx)("p",{className:"ml-2",children:e.ten_kt})]},n)}))})]}),(0,j.jsxs)("div",{className:"mb-5 p-4 bg-slate-100 rounded-md",children:[(0,j.jsx)(p.ZP,{getAriaLabel:function(){return"Temperature range"},value:A,onChange:function(e,n){E(n)},max:3e6}),(0,j.jsxs)("div",{className:"flex justify-between",children:[(0,j.jsxs)("p",{children:[" ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(A[0])]}),(0,j.jsx)("p",{children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(A[1])})]}),(0,j.jsx)("button",{onClick:K,className:"block ml-auto mr-0 py-2 px-4 mt-2 text-white font-medium bg-green-500 rounded-md",children:"L\u1ecdc"})]})]}),(0,j.jsxs)("div",{className:"w-[80%] min-h-[53vh] mx-auto mt-5",children:[(0,j.jsx)("div",{className:"grid grid-cols-4 gap-5",children:null===F||void 0===F?void 0:F.map((function(e,n){return(0,j.jsx)(o.Z,{data:e},n)}))}),(0,j.jsx)("p",{onClick:q,className:"text-center text-[18px] text-slate-700 mt-5 cursor-pointer",children:"Xem th\xeam"})]})]}),(0,j.jsx)(x.Z,{})]})}},96637:function(e,n,t){var r=t(74165),s=t(15861),a=t(70885),i=t(72791),c=t(11087),l=t(63048),d=t(26241),u=t(80184);n.Z=function(e){var n,t,o=e.data,x=(0,i.useState)([]),h=(0,a.Z)(x,2),m=h[0],p=h[1],v=(0,d.Ds)().enqueueSnackbar;return(0,i.useEffect)((function(){(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.getImage(o.id_sp);case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0.message,{variant:"error",autoHideDuration:2e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[o]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"relative w-full border-2  pb-4 mx-auto bg-[#F4F1EA] rounded-lg shadow-md",children:(0,u.jsxs)(c.OL,{to:"/shop/product/SP=".concat(o.id_sp),children:[(0,u.jsx)("div",{children:null!==o&&void 0!==o&&o.gia_km?(0,u.jsx)("div",{className:"absolute right-0 py-1 px-2 text-white font-bold bg-orange-500 rounded-tr-md rounded-bl-md",children:(0,u.jsxs)("span",{children:["Gi\u1ea3m ",null===o||void 0===o?void 0:o.gia_km," %"]})}):(0,u.jsx)(u.Fragment,{})}),(0,u.jsx)("div",{children:(0,u.jsx)("img",{className:"rounded-t-lg",src:null===(n=m[0])||void 0===n?void 0:n.hinh_anh_sp.slice(12,null===(t=m[0])||void 0===t?void 0:t.hinh_anh_sp.length),alt:"san pham"})}),(0,u.jsx)("div",{className:"mt-2 ",children:(0,u.jsx)("p",{className:"text-[16px] px-1 font-medium text-center",children:o.ten_sp})}),(0,u.jsx)("div",{children:null!==o&&void 0!==o&&o.gia_km?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"text-red-600  text-[18px] text-center font-bold ",children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format((null===o||void 0===o?void 0:o.gia_ban_sp)-(null===o||void 0===o?void 0:o.gia_ban_sp)*(null===o||void 0===o?void 0:o.gia_km)/100)}),(0,u.jsx)("div",{className:"h-[25px] mb-2",children:(0,u.jsx)("p",{className:"text-slate-700 text-center line-through",children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(null===o||void 0===o?void 0:o.gia_ban_sp)})})]}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("p",{className:"text-red-600 mb-2 text-[18px] text-center font-bold",children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(o.gia_ban_sp)})})})]})})})}},8486:function(e,n,t){t.d(n,{Z:function(){return a}});t(72791);var r=t(39126),s=t(80184);var a=function(){return(0,s.jsx)("div",{className:" mt-10 p-6 text-white bg-slate-700  opacity-90 shadow-md container",children:(0,s.jsxs)("div",{className:"flex gap-6 leading-8 h-[100%] justify-center items-center",children:[(0,s.jsxs)("div",{className:"w-[25%]  ml-[10%]  ",children:[(0,s.jsx)("span",{className:"text-[30px] font-[900] bg-text-color bg-clip-text  ",children:"DShop"}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsxs)("p",{children:["Trinh Khanh Duy ",(0,s.jsx)("br",{})," B1809558 - Can Tho University ",(0,s.jsx)("br",{})," \u0110\xe3 \u0111\u0103ng k\xfd B\u1ea3n quy\u1ec1n."]})})]}),(0,s.jsxs)("div",{className:"w-[25%] text-center ",children:[(0,s.jsx)("p",{className:"text-[25px] font-bold",children:"C\u1eeda h\xe0ng"}),(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsx)("p",{children:"Th\xf4ng tin"}),(0,s.jsx)("p",{children:"Gi\u1edbi thi\u1ec7u"}),(0,s.jsx)("p",{children:"Li\xean h\u1ec7"}),(0,s.jsx)("p",{children:"V\u1ec1 ch\xfang t\xf4i"})]})]}),(0,s.jsxs)("div",{className:"w-[25%]  ",children:[(0,s.jsx)("p",{className:"text-[25px] font-bold",children:"D\u1ecbch v\u1ee5"}),(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsx)("p",{children:"Ch\xednh s\xe1ch"}),(0,s.jsx)("p",{children:"Cam k\u1ebft v\xe0 b\u1ea3o h\xe0nh"}),(0,s.jsx)("p",{children:"\u0110i\u1ec1u kho\u1ea3n"}),(0,s.jsx)("p",{children:"B\u1ea3o m\u1eadt"})]})]}),(0,s.jsxs)("div",{className:"w-[20%] ",children:[(0,s.jsx)("p",{className:"text-[25px] font-bold",children:"M\u1ea1ng x\xe3 h\u1ed9i"}),(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsxs)("div",{className:"mt-4 flex gap-4 items-center",children:[(0,s.jsx)(r.Vs6,{size:25})," ",(0,s.jsx)("p",{children:"@Khanh_Duy"})]}),(0,s.jsxs)("div",{className:"mt-4 flex gap-4 items-center",children:[(0,s.jsx)(r.k1O,{size:25})," ",(0,s.jsx)("p",{children:"@Khanh_Duy"})]})]})]})]})})}}}]);
//# sourceMappingURL=57.298cf58d.chunk.js.map