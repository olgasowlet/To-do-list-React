(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{17:function(n,e,t){n.exports=t(30)},29:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=t(4),u=t(6),l=Object(u.b)({name:"tasks",initialState:{tasks:[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t[a].done=!t[a].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t.splice(a,1)},setAllDone:function(n){n.tasks.map((function(n){return n.done=!0}))}}}),d=l.actions,f=d.addTask,s=d.toggleHideDone,m=d.toggleTaskDone,b=d.removeTask,p=d.setAllDone,x=function(n){return n.tasks},g=l.reducer,h=Object(u.a)({reducer:{tasks:g}}),v=t(16),j=t(1),k=t(2);function w(){var n=Object(j.a)(["\n    background-color: teal;\n    box-shadow: 0 0 5px #ccc;\n    border: none;\n    color: rgba(255, 255, 255, 0.801);\n    transition: 0.5s;\n    margin-left: 15px;\n\n    &:hover {\n        opacity: 0.7;\n        transform: scale(1.1);\n    }\n\n    @media (max-width: 767px) {\n        flex-grow: 1;\n        align-self: center;\n        height: 45px;\n        margin: 10px;\n    }\n"]);return w=function(){return n},n}function O(){var n=Object(j.a)(["\n    border: 1px solid #ccc;\n    flex-grow: 1;\n    padding: 9px;\n    align-self: center;\n\n    @media (max-width: 767px) {\n        height: 45px;\n    }\n"]);return O=function(){return n},n}function y(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    flex-wrap: wrap;\n"]);return y=function(){return n},n}var E=k.c.form(y()),D=k.c.input(O()),z=k.c.button(w()),T=function(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),l=Object(i.b)();return a.a.createElement(E,{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(l(f({content:t.trim(),done:!1,id:Object(u.c)()})),c.current.focus(),o(""))}},a.a.createElement(D,{ref:c,value:t,placeholder:"Co jest do zrobienia?",onChange:function(n){return o(n.target.value)}}),a.a.createElement(z,null,"Dodaj zadanie"))};function C(){var n=Object(j.a)(["\n    border: none;\n    background-color: white;\n    color: teal;\n    padding: 0 10px;\n    transition: 0.5s;\n\n    &:hover {\n        opacity: 0.7;\n    }\n\n    &:disabled {\n        color: grey;\n    }\n\n    @media (max-width: 466px) {\n        margin: 5px 0;\n    }\n"]);return C=function(){return n},n}function H(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 466px) {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n"]);return H=function(){return n},n}var N=k.c.span(H()),S=k.c.button(C()),I=function(n){var e=Object(i.b)(),t=Object(i.c)(x),r=t.tasks,o=t.hideDone;return 0===r.length?null:a.a.createElement(N,null,a.a.createElement(S,{onClick:function(){return e(s())}},o?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),a.a.createElement(S,{onClick:function(){return e(p())},disabled:r.every((function(n){return n.done}))},"Uko\u0144cz wszystkie"))};function R(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    width: 100vw;\n"]);return R=function(){return n},n}function A(){var n=Object(j.a)(["\n    flex-grow: 1;\n    align-self: center; \n    justify-self: center;\n    margin: 8px;\n"]);return A=function(){return n},n}function B(){var n=Object(j.a)(["\n    background-color: white;\n    padding: 15px;\n    box-shadow: 0 0 5px #ccc;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2px;\n"]);return B=function(){return n},n}var J=k.c.section(B()),L=k.c.h2(A()),U=k.c.div(R()),W=function(n){var e=n.title,t=n.extrasToHeader,r=n.body;return a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null,a.a.createElement(L,null,e),t),a.a.createElement(J,null,a.a.createElement(U,null,r)))};t(29);function _(){var n=Object(j.a)(["\n\n"]);return _=function(){return n},n}function F(){var n=Object(j.a)(["\n    font-size: 2.5em;\n    margin-left: 10px;\n    font-family: 'Rubik', sans-serif;\n"]);return F=function(){return n},n}var M=k.c.h1(F()),P=k.c.header(_()),$=function(n){var e=n.title;return a.a.createElement(P,{className:"header"},a.a.createElement(M,{className:"header__title"},e))};function q(){var n=Object(j.a)(["\n    display: flex;\n    flex-direction: column; \n"]);return q=function(){return n},n}var G=k.c.div(q()),K=function(n){return a.a.createElement(G,null,n.children)},Q=function(n){return a.a.createElement("main",null,n.children)};function V(){var n=Object(j.a)(["\n        display: none;\n    "]);return V=function(){return n},n}function X(){var n=Object(j.a)(["\n    text-align: center;\n    align-self: center;\n    justify-content: center;\n    align-content: flex-start;\n\n    ","\n"]);return X=function(){return n},n}function Y(){var n=Object(j.a)(["\n        text-decoration: line-through;\n    "]);return Y=function(){return n},n}function Z(){var n=Object(j.a)(["\n    flex-grow: 1;\n    align-self: center;\n    white-space: normal;\n    text-overflow: visible;\n    padding: 5px;\n\n    ","\n"]);return Z=function(){return n},n}function nn(){var n=Object(j.a)(["\n        background-color: red;\n    "]);return nn=function(){return n},n}function en(){var n=Object(j.a)(["\n        background-color: green;\n    "]);return en=function(){return n},n}function tn(){var n=Object(j.a)(["\n    margin: 10px;\n    height: 30px;\n    width: 30px;\n    color: white;\n    box-shadow: none;\n    border: none;\n    align-self: center;\n    padding: 10px;\n    display: flex;\n    transition: 0.5s;\n\n    &:hover {\n        opacity: 0.7;\n    }\n\n    ","\n\n    ","\n"]);return tn=function(){return n},n}function rn(){var n=Object(j.a)(["\n    display: ",";\n    width: 100%;\n    justify-content: space-around;\n    border-bottom: 1px solid #eeeeee;\n"]);return rn=function(){return n},n}function an(){var n=Object(j.a)(["\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"]);return an=function(){return n},n}var on=k.c.ul(an()),cn=k.c.li(rn(),(function(n){return n.display||"flex"})),un=k.c.button(tn(),(function(n){return n.done&&Object(k.b)(en())}),(function(n){return n.toDelete&&Object(k.b)(nn())})),ln=k.c.span(Z(),(function(n){return n.done&&Object(k.b)(Y())})),dn=k.c.div(X(),(function(n){return n.done||Object(k.b)(V())})),fn=function(){var n=Object(i.c)(x),e=n.tasks,t=n.hideDone,r=Object(i.b)();return a.a.createElement(on,null,e.map((function(n){return a.a.createElement(cn,{display:"".concat(n.done&&t?"none":""),key:n.id},a.a.createElement(un,{done:!0,onClick:function(){return r(m(n.id))}},a.a.createElement(dn,{done:n.done,className:"fas fa-check "})),a.a.createElement(ln,{done:n.done},n.content),a.a.createElement(un,{toDelete:!0,onClick:function(){return r(b(n.id))}},a.a.createElement(dn,{done:!0,className:"far fa-trash-alt"})))})))};var sn=function(){return a.a.createElement(Q,null,a.a.createElement($,{title:"Lista zada\u0144"}),a.a.createElement(K,null,a.a.createElement(W,{title:"Dodaj nowe zadanie",body:a.a.createElement(T,null)}),a.a.createElement(W,{title:"Lista zada\u0144",extrasToHeader:a.a.createElement(I,null),body:a.a.createElement(fn,null)})))};function mn(){return a.a.createElement(sn,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function bn(){var n=Object(j.a)(["\n  html {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: #eeeeee;\n  max-width: 1000px;\n  margin: 50px auto;\n  font-family: 'Roboto', sans-serif;\n  padding: 10px;\n}\n"]);return bn=function(){return n},n}var pn=Object(k.a)(bn());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:h},a.a.createElement(pn,null),a.a.createElement(mn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.cc8348cb.chunk.js.map