"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[896],{47896:function(e,n,t){t.r(n);var a=t(74165),i=t(15861),r=t(70885),s=t(72791),c=t(40508),o=t(72426),l=t.n(o),d=t(80184);n.default=function(){var e=(0,s.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],u=(0,s.useState)([]),h=(0,r.Z)(u,2),p=h[0],v=h[1];(0,s.useEffect)((function(){(0,i.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.getAllInvoice();case 2:return n=e.sent,o(n),e.next=6,c.Z.getnameShip();case 6:t=e.sent,v(t);case 8:case"end":return e.stop()}}),e)})))()}),[]);var g=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=n.target.value,e.next=4,c.Z.getPriceShip(t);case 4:i=e.sent,o(i);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return console.log(t),(0,d.jsxs)("div",{className:"px-[20px] ",children:[(0,d.jsx)("div",{className:"w-[10%]",children:(0,d.jsxs)("select",{name:"nv",onChange:g,className:"h-8 px-2 w-full border border-slate-400 outline-none rounded-lg",children:[(0,d.jsx)("option",{value:"",children:"Nh\xe2n vi\xean"}),p&&(null===p||void 0===p?void 0:p.map((function(e,n){var t=e.ten_nv,a=e.id_nv;return(0,d.jsx)("option",{value:a,children:t},n)})))]})}),(0,d.jsx)("div",{className:"grid grid-cols-5 gap-5 mt-5 overflow-y-auto h-[calc(72vh)]",children:t.map((function(e,n){var t,a=e.ten_kh,i=e.tong_tien_hdx,r=e.id_hdx,s=e.trang_thai_gh,c=e.ten_nv,o=e.ngay_lap_hdx,u=e.ngay_gh,h=e.ghi_chu,p=e.ten_sp;return(0,d.jsxs)("div",{className:" relative p-4 bg-slate-100 rounded-md shadow-md border-2",children:[(0,d.jsxs)("p",{children:["M\xe3 \u0111\u01a1n h\xe0ng: ",r]}),(0,d.jsxs)("p",{children:["T\xean kh\xe1ch h\xe0ng: ",a]}),(0,d.jsxs)("p",{children:["T\xean s\u1ea3n ph\u1ea9m: ",(0,d.jsxs)("span",{className:"font-bold",children:[p," "]})]}),(0,d.jsxs)("p",{children:["T\u1ed5ng ti\u1ec1n h\xf3a \u0111\u01a1n:"," ",(0,d.jsx)("span",{className:"text-red-600 font-bold",children:i.toLocaleString("it-IT",{style:"currency",currency:"VND"})})]}),(0,d.jsxs)("p",{children:["T\xean nh\xe2n vi\xean giao h\xe0ng:"," ",(0,d.jsx)("span",{className:"font-bold",children:c})]}),(0,d.jsxs)("p",{children:["Ng\xe0y l\u1eadp \u0111\u01a1n:"," ",(0,d.jsx)("span",{className:"font-bold",children:l()(o).format("DD/MM/YYYY")})]}),"\u0110\xe3 giao h\xe0ng"===s?(0,d.jsx)("p",{className:"text-green-500 font-bold",children:s}):(0,d.jsx)("p",{className:"text-orange-500 font-bold",children:s}),(0,d.jsxs)("p",{children:["L\xfd do tr\u1ea3 h\xe0ng: ",h]}),(0,d.jsxs)("p",{children:["Ng\xe0y Giao H\xe0ng:"," ",u?(0,d.jsx)("span",{className:"font-bold",children:null===(t=l()(u))||void 0===t?void 0:t.format("DD/MM/YYYY")}):(0,d.jsx)("span",{className:"font-bold",children:"\u0110\u01a1n h\xe0ng ch\u01b0a ho\xe0n th\xe0nh"})]})]},n)}))})]})}},40508:function(e,n,t){var a=t(65608),i={createDeliver:function(e){return a.Z.post("/api/manage/delivier/add",e)},getnameShip:function(){return a.Z.get("/api/manage/delivier/getnameship")},getInvoice:function(e){var n="/api/manage/deliver/list_invoice/idnv=".concat(e);return a.Z.get(n)},getInvoiceStatus:function(e,n){var t="/api/manage/deliver/get_invoice_status/idnv=".concat(e);return a.Z.put(t,n)},updateStatusNote:function(e){return a.Z.post("/api/manage/deliver/update_status_note",e)},updateStatus:function(e){return a.Z.post("/api/manage/deliver/update_status",e)},getOneInvoice:function(e){var n="/api/manage/deliver/one_invoice/idhdx=".concat(e);return a.Z.get(n)},getAllInvoice:function(){return a.Z.get("/api/manage/deliver/list_invoice")},getPriceShip:function(e){var n="/api/manage/deliver/shipinvoice/idnv=".concat(e);return a.Z.get(n)},deleteInvoice:function(e){var n="/api/manage/deliver/delete_invoice/idhdx=".concat(e);return a.Z.delete(n)}};n.Z=i}}]);
//# sourceMappingURL=896.2a623131.chunk.js.map