(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),i=n(10),s=n.n(i),a=(n(15),n(3)),d=n(1);var r=function(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),o=n[0],i=n[1],s=Object(c.useRef)(null);Object(c.useEffect)((function(){s.current.focus()}));var r=function(t){i(t.target.value)},u=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e5*Math.random()),text:o}),i("")};return Object(d.jsx)("form",{className:"todo-form",onSubmit:u,children:t.edit?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{placeholder:"Update todo",value:o,name:"test",className:"update todo-input",ref:s,onChange:r}),Object(d.jsx)("button",{onClick:u,className:"edit todo-button",children:"Update"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{placeholder:"Add a todo",value:o,name:"text",className:"todo-input",ref:s,onChange:r}),Object(d.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},u=n(9),j=n(6),l=n(7);var b=function(t){var e=t.todos,n=t.completeTodo,o=t.removeTodo,i=t.updateTodo,s=Object(c.useState)({id:null,value:""}),u=Object(a.a)(s,2),b=u[0],O=u[1];return b.id?Object(d.jsx)(r,{edit:b,onSubmit:function(t){i(b.id,t),O({id:null,value:""})}}):e.map((function(t,e){return Object(d.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(d.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"checkbox"})}),Object(d.jsx)(j.a,{onClick:function(){return o(t.id)},className:"delete-icon"}),Object(d.jsx)(l.a,{onClick:function(){return O({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var O=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Todo App"}),Object(d.jsxs)("p",{children:["To remove click ",Object(d.jsx)(j.a,{})]}),Object(d.jsxs)("p",{children:["To update click ",Object(d.jsx)(l.a,{})]}),Object(d.jsx)(r,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(n));o(e)}}}),Object(d.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var x=function(){return Object(d.jsx)("div",{className:"todo-list",children:Object(d.jsx)(O,{})})};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b01ecbed.chunk.js.map