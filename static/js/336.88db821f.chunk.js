"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{336:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(791),a=t(434),o=t(942),s=t(413),c=t(439),i={name:"",number:""},l={text:"phonebooks-form_text__9I4To",btn:"phonebooks-form_btn__6op9f",input:"phonebooks-form_input__IWMTp"},u=t(329),m=function(e){var n=e.onSubmit,t=(0,r.useState)((0,s.Z)({},i)),a=(0,c.Z)(t,2),m=a[0],h=a[1],f=function(e){var n=e.target,t=n.name,r=n.value,a=n.type,c=n.checked,i="checkbox"===a?c:r;h((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},t,i))}))},p=m.name,d=m.number,b=m.favorite;return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,s.Z)({},m)),h((0,s.Z)({},i))},children:[(0,u.jsxs)("div",{className:l.formGroup,children:[(0,u.jsx)("label",{className:l.text,children:"Name"}),(0,u.jsx)("input",{className:l.input,name:"name",value:p,onChange:f,placeholder:"Enter name"})]}),(0,u.jsxs)("div",{className:l.formGroup,children:[(0,u.jsx)("label",{className:l.text,children:"Number"}),(0,u.jsx)("input",{className:l.input,name:"number",value:d,onChange:f,placeholder:"Enter number"})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{children:"Favorite"}),(0,u.jsx)("input",{name:"favorite",checked:b,onChange:f,type:"checkbox"})]}),(0,u.jsx)("button",{className:l.btn,type:"submit",children:"Add contact"})]})},h="phonebook-list_btn__P6GsM",f="phonebook-list_list__h5ZsW",p="phonebook-list_item__IwJVX",d=function(e){var n=e.removeContact,t=e.contacts.map((function(e){var t=e._id,r=e.name,a=e.number;return(0,u.jsxs)("li",{className:p,children:[r,": ",a,".",(0,u.jsx)("button",{className:h,onClick:function(){return n(t)},type:"button",children:"Delete"})]},t)}));return(0,u.jsx)("ol",{className:f,children:t})},b=d;d.defaultProps={contacts:[]};var v={input:"phonebooks-filter_input__CMMCf",text:"phonebooks-filter_text__cu6ws"},x=function(e){var n=e.handleChange,t=e.value;return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsxs)("div",{className:v.formGroup,children:[(0,u.jsx)("label",{className:v.text,children:"Find contacts by name"}),(0,u.jsx)("input",{value:t,className:v.input,name:"filter",onChange:n})]})]})},_=function(e){return e.contacts.items.filter((function(e){return e.favorite}))},j=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var r=t.toLowerCase();return n.items.filter((function(e){var n=e.name,t=e.number;return n.toLowerCase().includes(r)||t.toLowerCase().includes(r)}))},k=function(e){var n=e.removeContact,t=(0,a.v9)(_).map((function(e){var t=e.id,r=e.name,a=e.number;return(0,u.jsxs)("li",{className:p,children:[r,": ",a,".",(0,u.jsx)("button",{className:h,onClick:function(){return n(t)},type:"button",children:"Delete"})]},t)}));return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"My Favorite contacts"}),(0,u.jsx)("ol",{className:f,children:t})]})},N=k;k.defaultProps={contacts:[]};var C=t(30),w=t(653),g=function(e){return e.filter},y={phonebook:"phonebooks_phonebook__n83Qu",wrapper:"phonebooks_wrapper__CL6a8"},Z=function(){var e=(0,a.v9)(j),n=(0,a.v9)(g),t=(0,a.I0)();(0,r.useEffect)((function(){t((0,C.yF)())}),[t]);var o=Boolean(e.length);return(0,u.jsxs)("div",{className:y.wrapper,children:[(0,u.jsxs)("div",{className:y.block,children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(m,{onSubmit:function(e){var n=e.name,r=e.number,a=e.favorite;t((0,C.uK)({name:n,number:r,favorite:a}))}})]}),(0,u.jsxs)("div",{className:y.block,children:[(0,u.jsx)(N,{}),(0,u.jsx)(x,{value:n,handleChange:function(e){var n=e.target;t((0,w.T)(n.value))}}),o&&(0,u.jsx)(b,{removeContact:function(e){t((0,C.GK)(e))},contacts:e}),!o&&(0,u.jsx)("p",{children:"No contacts in list"})]})]})}}}]);
//# sourceMappingURL=336.88db821f.chunk.js.map