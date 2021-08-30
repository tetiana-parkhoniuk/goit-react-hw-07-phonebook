(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__2eDOn",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},20:function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__8l6kJ",deleteBtn:"ContactsListItem_deleteBtn__1sLou"}},30:function(t,e,n){t.exports={contactList:"ContactsList_contactList__-3u15"}},31:function(t,e,n){t.exports={container:"App_container__1MQN3"}},43:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return F})),n.d(r,"createContact",(function(){return y})),n.d(r,"deleteContact",(function(){return L}));var a={};n.r(a),n.d(a,"getFilter",(function(){return k})),n.d(a,"getContacts",(function(){return I})),n.d(a,"getFilteredContacts",(function(){return D}));var c=n(0),o=n.n(c),u=n(12),s=n.n(u),i=n(5),l=(n(43),n(44),n(21)),b=n(67),f=n(16),j=n(8),d=n.n(j),p=n(2),m=n.n(p),O=n(7),h=n(6),v=n(11),x=n.n(v);x.a.defaults.baseURL="https://612c1c8cab461c00178b5c10.mockapi.io";var C,_=function(){var t=Object(O.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(O.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/contacts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(O.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("/contacts/".concat(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=Object(h.b)("contacts/fetchContacts",Object(O.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),y=Object(h.b)("contacts/createContact",function(){var t=Object(O.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(h.b)("contacts/deleteContact",function(){var t=Object(O.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),N=n(13),k=function(t){return t.contacts.filter},I=function(t){return t.contacts.entities},D=Object(N.a)([I,k],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),B=n(4),E=n(33),S=Object(h.c)({name:"contacts",initialState:{entities:[],status:null,error:null,filter:""},reducers:{changeFilter:function(t,e){var n=e.payload;t.filter=n}},extraReducers:(C={},Object(B.a)(C,F.fulfilled,(function(t,e){var n=e.payload;t.entities=n,t.status=null,t.error=null})),Object(B.a)(C,F.pending,(function(t,e){t.status="loading",t.error=null})),Object(B.a)(C,F.rejected,(function(t,e){t.status="rejected",t.error="Error"})),Object(B.a)(C,y.fulfilled,(function(t,e){var n=e.payload;t.entities=[n].concat(Object(E.a)(t.entities)),t.status=null,t.error=null})),Object(B.a)(C,y.pending,(function(t,e){t.status="loading",t.error=null})),Object(B.a)(C,y.rejected,(function(t,e){t.status="rejected",t.error="Error"})),Object(B.a)(C,L.fulfilled,(function(t,e){var n=e.payload;t.entities=t.entities.filter((function(t){return t.id!==n})),t.status=null,t.error=null})),Object(B.a)(C,L.pending,(function(t,e){t.status="loading",t.error=null})),Object(B.a)(C,L.rejected,(function(t,e){t.status="rejected",t.error="Error"})),C)}),J=S.actions.changeFilter,T=S.reducer,A=n(1);function M(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],o=e[1],u=Object(c.useState)(""),s=Object(l.a)(u,2),j=s[0],p=s[1],m=Object(i.c)(a.getFilteredContacts),O=Object(i.b)(),h=Object(b.a)(),v=Object(b.a)(),x=function(){o(""),p("")};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(f.a,{position:"top-right",toastOptions:{duration:2e3}}),Object(A.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),m.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?f.b.error("".concat(n," is already in contacts.")):""===n.trim()||""===j.trim()?f.b.error("Please enter at least some data"):O(r.createContact({name:n,number:j})),x()},children:[Object(A.jsx)("label",{className:d.a.formLabel,htmlFor:h,children:"Name"}),Object(A.jsx)("input",{type:"text",name:"name",id:h,value:n,className:d.a.formInput,onChange:function(t){var e=t.currentTarget.value;o(e)}}),Object(A.jsx)("label",{className:d.a.formLabel,htmlFor:h,children:"Number"}),Object(A.jsx)("input",{type:"text",name:"number",id:v,value:j,className:d.a.formInput,onChange:function(t){var e=t.currentTarget.value;p(e)}}),Object(A.jsx)("button",{type:"submit",className:d.a.submitBtn,children:"Add contact"})]})]})}var P=n(15),Q=n.n(P);function R(){var t=Object(b.a)(),e=Object(i.c)(a.getFilter),n=Object(i.b)();return Object(A.jsxs)("div",{className:Q.a.filterContainer,children:[Object(A.jsx)("label",{className:Q.a.label,htmlFor:t,children:"Find contacts by name"}),Object(A.jsx)("input",{type:"text",id:t,value:e,className:Q.a.input,onChange:function(t){return n(J(t.target.value))}})]})}var U=n(20),V=n.n(U);function Z(t){var e=t.id,n=t.name,r=t.number,a=t.onDeleteContact;return Object(A.jsxs)("li",{className:V.a.contactItem,children:[n,": ",r,Object(A.jsx)("button",{className:V.a.deleteBtn,onClick:function(){return a(e)},children:"Delete"})]})}var q=n(30),z=n.n(q);function G(){var t=Object(i.c)(a.getFilteredContacts),e=Object(i.b)();return Object(c.useEffect)((function(){e(r.fetchContacts())}),[e]),Object(A.jsx)("ul",{className:z.a.contactList,children:t.map((function(t){return Object(A.jsx)(Z,{id:t.id,name:t.name,number:t.number,onDeleteContact:function(){return e(r.deleteContact(t.id))}},t.id)}))})}var H=n(31),K=n.n(H);var W=function(){return Object(A.jsxs)("div",{className:K.a.container,children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(M,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(R,{}),Object(A.jsx)(G,{})]})},X=n(32),Y=n.n(X),$=n(10),tt=Object(h.a)({reducer:{contacts:T},middleware:[$.a,Y.a],devTools:!1});s.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(i.a,{store:tt,children:Object(A.jsx)(W,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",formLabel:"ContactForm_formLabel__1hDC-",formInput:"ContactForm_formInput__1r2bF",submitBtn:"ContactForm_submitBtn__J-Qu6"}}},[[66,1,2]]]);
//# sourceMappingURL=main.49c3bdf5.chunk.js.map