"use strict";(self.webpackChunkviews=self.webpackChunkviews||[]).push([[98],{85098:function(e,t,n){n.r(t);var a=n(1413),r=n(42982),i=n(74165),s=n(15861),d=n(70885),l=n(72791),o=n(57689),c=n(26241),u=n(72426),x=n.n(u),p=n(11087),m=n(38447),v=n(50228),h=n(99444),g=n(53464),f=n(19910),w=n(85027),b=n(78894),Z=n(61134),j=n(80184),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",boxShadow:24,p:2};t.default=function(){var e,t,n,u,N,_,y,S,R,D=(0,c.Ds)(),C=(0,o.UO)(),I=(0,l.useState)(0),Y=(0,d.Z)(I,2),M=Y[0],E=Y[1],O=(0,l.useState)([]),F=(0,d.Z)(O,2),P=F[0],U=F[1],V=(0,l.useState)([]),z=(0,d.Z)(V,2),A=z[0],H=z[1],K=(0,l.useState)([]),L=(0,d.Z)(K,2),B=L[0],G=L[1],q=(0,l.useState)(0),J=(0,d.Z)(q,2),Q=J[0],T=(J[1],(0,l.useState)([])),W=(0,d.Z)(T,2),X=W[0],$=W[1],ee=(0,l.useState)([]),te=(0,d.Z)(ee,2),ne=te[0],ae=te[1],re=(0,l.useState)(0),ie=(0,d.Z)(re,2),se=ie[0],de=ie[1],le=(0,l.useState)([]),oe=(0,d.Z)(le,2),ce=oe[0],ue=oe[1],xe=(0,l.useState)(!1),pe=(0,d.Z)(xe,2),me=pe[0],ve=pe[1],he=(0,Z.cI)(),ge=he.register,fe=he.handleSubmit;(0,l.useEffect)((function(){(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.getExportInvoice(C.idhdx);case 3:return t=e.sent,e.next=6,g.Z.getDetailExportInvoice(C.idhdx);case 6:n=e.sent,$(t),ae(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),D(e.t0.message,{variant:"error",autoHideDuration:2e3});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[Q]);var we=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,n,a){var r,s,d,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.getProduct({idhdx:C.idhdx,idsp:t,idms:n,idkt:a});case 2:return s=e.sent,e.next=5,w.Z.getOneReview({idhdx:C.idhdx,idsp:t,idms:n,idkt:a});case 5:return d=e.sent,e.next=8,b.Z.getImage(null===(r=d[0])||void 0===r?void 0:r.id_dg);case 8:l=e.sent,ue(l),de(d),G(s),ve(!0);case 13:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),be=function(){ve(!1),window.location.reload()},Ze=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){t(a.result)},a.onerror=function(e){n(e)}}))},je=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H(t.target.files),!(t.target.files.length+P.length<=3)){e.next=16;break}n=0,a=(0,i.Z)().mark((function e(){var a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.files[n]){e.next=3;break}return e.abrupt("return",{v:void 0});case 3:return e.next=5,Ze(a);case 5:s=e.sent,U((function(e){return[].concat((0,r.Z)(e),[{url:s}])}));case 7:case"end":return e.stop()}}),e)}));case 6:if(!(n<t.target.files.length)){e.next=14;break}return e.delegateYield(a(),"t0",8);case 8:if("object"!==typeof(s=e.t0)){e.next=11;break}return e.abrupt("return",s.v);case 11:n++,e.next=6;break;case 14:e.next=16;break;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(e){var t=e.target.getAttribute("name");U(P.filter((function(e){return e.url!==t})))},Ne=null===P||void 0===P?void 0:P.map((function(e,t){return(0,j.jsxs)("div",{className:"relative",children:[(0,j.jsx)("img",{className:"w-[100px] h-[100px] rounded-lg",src:e.url,alt:"anhsanpham"}),(0,j.jsx)("div",{className:"absolute -top-1 -right-1 bg-red-600 text-center text-[12px] text-white px-[6px] rounded-full cursor-pointer",name:e.url,onClick:ke,children:"x"})]},t)})),_e=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n,a,r,s,d,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0!==M&&""!==t.comment&&A.length>0)){e.next=13;break}return e.next=3,w.Z.createreview({sosao:M,noidung:t.comment,ngaydg:x()().format("YYYY-MM-DD"),idhdx:C.idhdx,idsp:null===(n=B[0])||void 0===n?void 0:n.id_sp,idms:null===(a=B[0])||void 0===a?void 0:a.id_ms,idkt:null===(r=B[0])||void 0===r?void 0:r.id_kt});case 3:if(s=e.sent,d=new FormData,!A){e.next=10;break}for(o=0;o<A.length;o++)d.append("photos",A[o]);return d.append("iddg",null===(l=s[0])||void 0===l?void 0:l.id_dg),e.next=10,b.Z.createImageRV(d);case 10:be(),e.next=14;break;case 13:D("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 th\xf4ng tin!",{variant:"error",autoHideDuration:2e3});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=ce&&(null===ce||void 0===ce?void 0:ce.map((function(e,t){var n=e.hinh_anh_dg;return(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:"w-[100px] h-[100px] rounded-lg",src:n.slice(12,n.length),alt:"hinh anh san pham"})},t)})));return(0,j.jsxs)("div",{className:"w-[50%] my-6 mx-auto",children:[(0,j.jsxs)("div",{className:"flex justify-between my-4",children:[(0,j.jsxs)("p",{children:["Ng\xe0y: ",x()(null===(e=X[0])||void 0===e?void 0:e.ngay_lap_hdx).format("DD/MM/YYYY")]}),(0,j.jsx)("p",{className:"text-green-700 font-bold",children:null===(t=X[0])||void 0===t?void 0:t.trang_thai})]}),(0,j.jsxs)("div",{children:[null===ne||void 0===ne?void 0:ne.map((function(e,t){var n=e.id_sp,a=e.ten_sp,r=e.hinh_anh,i=e.so_luong_xuat,s=e.id_ms,d=e.id_kt,l=e.ten_ms,o=e.ten_kt;return(0,j.jsxs)("div",{className:"mb-4 p-3 bg-slate-50 rounded-md",children:[(0,j.jsx)(p.rU,{to:"/shop/order/".concat(C.idhdx),children:(0,j.jsxs)("div",{className:"relative flex justify-between gap-5 items-center",children:[(0,j.jsx)("img",{className:"block w-[10%] align-middle rounded-lg",src:r,alt:""}),(0,j.jsx)("span",{className:"w-[70%] text-[20px] font-bold",children:a}),(0,j.jsxs)("span",{className:"w-[20%] text-right",children:["S\u1ed1 l\u01b0\u1ee3ng: ",i]}),(0,j.jsxs)("div",{className:"absolute flex gap-5 left-[12.5%] top-[75%] text-slate-500 text-[14px]",children:[(0,j.jsxs)("p",{children:["M\xe0u s\u1eafc: ",l]}),(0,j.jsxs)("p",{children:["K\xedch th\u01b0\u1edbc: ",o]})]})]})}),(0,j.jsx)("div",{children:(0,j.jsx)("p",{onClick:function(){return we(n,s,d)},className:"text-right text-yellow-500 font-medium cursor-pointer",children:"\u0110\xe1nh gi\xe1"})})]},t)})),(0,j.jsx)(h.Z,{open:me,onClose:be,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,j.jsxs)(v.Z,{sx:k,children:[(0,j.jsxs)("div",{className:"relative mb-2 flex justify-between gap-5 items-center",children:[(0,j.jsx)("img",{className:"block w-[10%] align-middle rounded-lg",src:null===(n=B[0])||void 0===n?void 0:n.hinh_anh,alt:""}),(0,j.jsx)("span",{className:"w-[70%] text-[20px] font-bold",children:null===(u=B[0])||void 0===u?void 0:u.ten_sp}),(0,j.jsxs)("span",{className:"w-[20%] text-right",children:["S\u1ed1 l\u01b0\u1ee3ng: ",null===(N=B[0])||void 0===N?void 0:N.so_luong_xuat]}),(0,j.jsxs)("div",{className:"absolute flex gap-5 left-[12.5%] top-[75%] text-slate-500 text-[14px]",children:[(0,j.jsxs)("p",{children:["M\xe0u s\u1eafc: ",null===(_=B[0])||void 0===_?void 0:_.ten_ms]}),(0,j.jsxs)("p",{children:["K\xedch th\u01b0\u1edbc: ",null===(y=B[0])||void 0===y?void 0:y.ten_kt]})]})]}),0===se.length?(0,j.jsxs)("div",{children:[(0,j.jsx)(m.Z,{className:"my-2",name:"simple-controlled",value:M,size:"large",onChange:function(e,t){E(t)}}),(0,j.jsxs)("form",{onSubmit:fe((function(e){return _e(e)})),children:[(0,j.jsx)("div",{className:"my-2 flex gap-4",children:(0,j.jsxs)("div",{className:"flex gap-4",children:[(0,j.jsx)("input",{type:"file",id:"default-btn-rv",className:"hidden",name:"file",onChange:function(e){je(e)},multiple:!0}),(0,j.jsx)("div",{className:"w-[100px] h-[100px] border border-slate-400 rounded-lg cursor-pointer",onClick:function(){document.getElementById("default-btn-rv").click()},children:(0,j.jsx)("div",{className:"text-[25px] text-[#ccc] text-center leading-[90px] ",children:"+"})}),Ne]})}),(0,j.jsx)("textarea",(0,a.Z)((0,a.Z)({},ge("comment")),{},{name:"comment",className:"p-4 my-2 w-full border border-slate-500 rounded-md",rows:"8"})),(0,j.jsx)("button",{className:"block w-[100px] text-center py-2 ml-auto mr-0 bg-emerald-400 rounded-md text-white font-bold shadow-md",children:"G\u1eedi"})]})]}):(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)(m.Z,{className:"my-3",name:"read-only",size:"large",value:null===(S=se[0])||void 0===S?void 0:S.so_sao,readOnly:!0}),(0,j.jsx)("div",{className:"flex gap-5",children:ye}),(0,j.jsxs)("p",{className:"mt-5",children:["\u0110\xe1nh gi\xe1: ",null===(R=se[0])||void 0===R?void 0:R.noi_dung_dg]}),(0,j.jsx)("button",{onClick:function(){ve(!1)},className:"block py-2 px-4 ml-auto mr-0 bg-slate-200 rounded-md shadow-md",children:"\u0110\xf3ng"})]})})]})})]})]})}},78894:function(e,t,n){var a=n(65608),r={createImageRV:function(e){return a.Z.post("/api/manage/review/photos/upload",e)},getImage:function(e){var t="/api/manage/image_review/iddg=".concat(e);return a.Z.get(t)}};t.Z=r},85027:function(e,t,n){var a=n(65608),r={createreview:function(e){return a.Z.post("/api/manage/review/add",e)},getListReview:function(){return a.Z.get("/api/manage/review/list")},getReview:function(e){var t="/api/manage/review/idhdx=".concat(e);return a.Z.get(t)},getReviewProduct:function(e){var t="/api/manage/review/idsp=".concat(e);return a.Z.get(t)},getdanhgia:function(e){var t="/api/manage/danhgia/idsp=".concat(e);return a.Z.get(t)},getReviewInvoice:function(e){var t="/api/manage/review/idhdx=".concat(e);return a.Z.get(t)},getOneReview:function(e){return a.Z.get("/api/manage/one_review",{params:e})},updateStatus:function(e,t){var n="/api/manage/update_status/status=".concat(t,"/iddg=").concat(e);return a.Z.put(n)},deleteReview:function(e){var t="/api/manage/review/delete/iddg=".concat(e);return a.Z.delete(t)}};t.Z=r}}]);
//# sourceMappingURL=98.2ec4e6dd.chunk.js.map