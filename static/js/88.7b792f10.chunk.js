"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{88:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(9434),s="phonebooks-form_form__EaUDQ",r="phonebooks-form_inputBlock__95lvS",o="phonebooks-form_input__cdI6K",c="phonebooks-form_button__0QzIo",i=t(30),l=t(3329),u=function(){var e={name:"",number:""},n=(0,a.v9)((function(e){return e.contacts.items})),t=(0,a.I0)(),u=function(n){var t=n.target.name;e[t]=n.target.value};return(0,l.jsxs)("form",{className:s,onSubmit:function(a){a.preventDefault(),function(e){var a=e.name;if(n.find((function(e){return e.name===a})))alert("".concat(a," is already in contacts"));else{var s=e.number,r=(0,i.uK)({name:a,number:s});t(r)}}(e),function(e){e.target.elements.name.value="",e.target.elements.number.value=""}(a)},children:[(0,l.jsxs)("label",{className:r,children:["Name",(0,l.jsx)("input",{onChange:u,className:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{className:r,children:["Number",(0,l.jsx)("input",{onChange:u,className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{className:c,type:"submit",children:"Add contact"})]})},m="phonebooks-filter_filter__CXIk9",d=t(5653),f=function(e){return e.filter},h=function(){var e=(0,a.v9)(f),n=(0,a.I0)();return(0,l.jsxs)("label",{className:m,children:["Find contact",(0,l.jsx)("input",{type:"text",value:e,onChange:function(e){var t=(0,d.T)(e.target.value);n(t)}})]})},p=t(2791),_=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){var n=e.name,t=e.number;return n.toLowerCase().includes(a)||t.toLowerCase().includes(a)}))},b=function(e){return e.contacts.isLoading},v="phonebook-list-item_listItem__KZA5M",x="phonebook-list-item_button__aOxeP",j="phonebook-list-item_contactInfo__aQWol",k="phonebook-list-item_name__t2IfW",N="phonebook-list-item_number__BR3my",g=function(e){var n=e.nameId,t=e.name,s=e.number,r=(0,a.I0)();return(0,l.jsxs)("li",{className:v,children:[(0,l.jsxs)("div",{className:j,children:[(0,l.jsxs)("span",{className:k,children:[t,":"]}),(0,l.jsx)("span",{className:N,children:s})]}),(0,l.jsx)("button",{className:x,onClick:function(){return function(e){var n=(0,i.GK)(e);r(n)}(n)},type:"button",children:"Delete"})]})},C=t(5138),I={contactList:"phonebook-list_contactList__ZEwQP",text:"phonebook-list_text__TblN3"},y=function(){var e=(0,a.I0)();(0,p.useEffect)((function(){e((0,i.yF)())}),[e]);var n=(0,a.v9)(_),t=Boolean(n.length);return(0,a.v9)(b)?(0,l.jsx)(C.Z,{}):(0,l.jsxs)("div",{className:I.contactList,children:[t&&(0,l.jsx)("ul",{className:I.ul,children:n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,l.jsx)(g,{name:t,number:a,nameId:n},n)}))}),!t&&(0,l.jsx)("p",{className:I.text,children:"There are no contacts!"})]})},w=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{}),(0,l.jsx)(h,{}),(0,l.jsx)(y,{})]})}}}]);
//# sourceMappingURL=88.7b792f10.chunk.js.map