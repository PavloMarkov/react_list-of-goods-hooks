(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),r=n(3),a=n(7),i=n(1),u=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(i.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(i.useState)(0),b=Object(r.a)(o,2),d=b[0],j=b[1],h=Object(i.useState)(!1),O=Object(r.a)(h,2),f=O[0],m=O[1],N=Object(i.useState)(1),g=Object(r.a)(N,2),p=g[0],x=g[1],E=function(t,e,n,s){var o=Object(a.a)(t);switch(e){case c.ALPABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:o.sort((function(t,e){return t.length-e.length}));case c.NONE:}return n&&o.reverse(),o.filter((function(t){return t.length>=s}))}(l,d,f,p);return Object(u.jsxs)("div",{className:"App",children:[!n&&Object(u.jsx)("button",{type:"button",className:"button is-success is-rounded is-fullwidth",onClick:function(){s(!0)},children:"Start"}),n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",className:"button is-rounded ".concat(d===c.ALPABET?"is-success":""),onClick:function(){j(c.ALPABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-rounded ".concat(d===c.LENGTH?"is-success":""),onClick:function(){j(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-rounded ".concat(f?"is-success":""),onClick:function(){m((function(t){return!t}))},children:"Reverse"}),Object(u.jsx)("button",{type:"button",className:"button is-rounded is-danger",onClick:function(){j(c.NONE),m(!1)},children:"Reset"}),Object(u.jsx)("ul",{className:"Goods",children:0===E.length?Object(u.jsxs)("strong",{children:["No goods to show with length of word of"," ",p," ","letters"]}):E.map((function(t){return Object(u.jsx)("li",{className:"Goods__item",children:t},t)}))}),Object(u.jsx)("div",{className:"length",children:"Select minimal length of word to sort:"}),Object(u.jsx)("div",{className:"select",children:Object(u.jsx)("select",{name:"maxLength",id:"maxLength",value:p,onChange:function(t){return e=+t.currentTarget.value,void x(e);var e},children:Array(10).fill(1).map((function(t,e){var n=t+e;return Object(u.jsx)("option",{value:n,children:n},n)}))})})]})]})};o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1a030df0.chunk.js.map