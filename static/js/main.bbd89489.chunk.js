(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{76:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),a=t.n(c),i=t(23),o=t.n(i),s=t(9),u=t(22),d=t(49),l=t(12),j=t.n(l),b=t(15),f=t(43),x=t(44),h=t.n(x),O=function(){var n=Object(f.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.get("/To-do-list-React/exampleTasks.json");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p="tasks",v=function(n){localStorage.setItem(p,JSON.stringify(n))},g=Object(u.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(p))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){n.tasks.map((function(n){return n.done=!0}))},fetchExampleTasks:function(){},setExampleTasks:function(n,e){var t=e.payload;n.tasks=t}}}),m=g.actions,k=m.addTask,w=m.toggleHideDone,y=m.toggleTaskDone,z=m.removeTask,T=m.setAllDone,D=m.fetchExampleTasks,S=m.setExampleTasks,C=function(n){return n.tasks.tasks},N=function(n){return n.tasks.hideDone},P=g.reducer,R=j.a.mark(H),U=j.a.mark(I),E=j.a.mark(J);function H(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.b)(O);case 3:return n=e.sent,e.next=6,Object(b.c)(S(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(b.b)(alert,"Popsute :/");case 12:case 13:case"end":return e.stop()}}),R,null,[[0,8]])}function I(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.d)(C);case 3:return n=e.sent,e.next=6,Object(b.b)(v,n);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(b.b)(alert,"Popsute :/");case 12:case 13:case"end":return e.stop()}}),U,null,[[0,8]])}function J(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.f)(1e4,D.type,H);case 2:return n.next=4,Object(b.e)("*",I);case 4:case"end":return n.stop()}}),E)}var L=j.a.mark(F);function F(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.a)([J()]);case 2:case"end":return n.stop()}}),L)}var B=Object(d.a)(),W=Object(u.a)({reducer:{tasks:P},middleware:[B]});B.run(F);var A=W,M=t(17),Z=t(8),_=t(48),$=t(4),q=t(5);function G(){var n=Object($.a)(["\n    background-color: teal;\n    box-shadow: 0 0 5px #ccc;\n    border: none;\n    color: rgba(255, 255, 255, 0.801);\n    transition: 0.5s;\n    margin-left: 15px;\n\n    &:hover {\n        opacity: 0.7;\n        transform: scale(1.1);\n    }\n\n    @media (max-width: 767px) {\n        flex-grow: 1;\n        align-self: center;\n        height: 45px;\n        margin: 10px;\n    }\n"]);return G=function(){return n},n}function K(){var n=Object($.a)(["\n    border: 1px solid #ccc;\n    flex-grow: 1;\n    padding: 9px;\n    align-self: center;\n\n    @media (max-width: 767px) {\n        height: 45px;\n    }\n"]);return K=function(){return n},n}function Q(){var n=Object($.a)(["\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    flex-wrap: wrap;\n"]);return Q=function(){return n},n}var V=q.c.form(Q()),X=q.c.input(K()),Y=q.c.button(G()),nn=function(){var n=Object(c.useState)(""),e=Object(_.a)(n,2),t=e[0],a=e[1],i=Object(c.useRef)(null),o=Object(s.b)();return Object(r.jsxs)(V,{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(o(k({content:t.trim(),done:!1,id:Object(u.c)()})),i.current.focus(),a(""))},children:[Object(r.jsx)(X,{ref:i,value:t,placeholder:"Co jest do zrobienia?",onChange:function(n){return a(n.target.value)}}),Object(r.jsx)(Y,{children:"Dodaj zadanie"})]})};function en(){var n=Object($.a)(["\n    border: none;\n    background-color: white;\n    color: teal;\n    padding: 0 10px;\n    transition: 0.5s;\n\n    &:hover {\n        opacity: 0.7;\n    }\n\n    &:disabled {\n        color: grey;\n    }\n\n    @media (max-width: 466px) {\n        margin: 5px 0;\n    }\n"]);return en=function(){return n},n}function tn(){var n=Object($.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 466px) {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n"]);return tn=function(){return n},n}var rn=q.c.span(tn()),cn=q.c.button(en()),an=function(){var n=Object(s.b)(),e=Object(s.c)(C),t=Object(s.c)(N);return 0===e.length?null:Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{onClick:function(){return n(w())},children:t?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(r.jsx)(cn,{onClick:function(){return n(T())},disabled:e.tasks.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})};function on(){var n=Object($.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    width: 100vw;\n"]);return on=function(){return n},n}function sn(){var n=Object($.a)(["\n    flex-grow: 1;\n    align-self: center; \n    justify-self: center;\n    margin: 8px;\n"]);return sn=function(){return n},n}function un(){var n=Object($.a)(["\n    background-color: white;\n    padding: 15px;\n    box-shadow: 0 0 5px #ccc;\n    display: flex;\n    flex-wrap: wrap;\n    margin: 2px;\n"]);return un=function(){return n},n}var dn=q.c.section(un()),ln=q.c.h2(sn()),jn=q.c.div(on()),bn=function(n){var e=n.title,t=n.extrasToHeader,c=n.body;return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsxs)(dn,{children:[Object(r.jsx)(ln,{children:e}),t]}),Object(r.jsx)(dn,{children:Object(r.jsx)(jn,{children:c})})]})};t(76);function fn(){var n=Object($.a)(["\n\n"]);return fn=function(){return n},n}function xn(){var n=Object($.a)(["\n    font-size: 2.5em;\n    margin-left: 10px;\n    font-family: 'Rubik', sans-serif;\n"]);return xn=function(){return n},n}var hn=q.c.h1(xn()),On=q.c.header(fn()),pn=function(n){var e=n.title;return Object(r.jsx)(On,{className:"header",children:Object(r.jsx)(hn,{className:"header__title",children:e})})};function vn(){var n=Object($.a)(["\n    display: flex;\n    flex-direction: column; \n"]);return vn=function(){return n},n}var gn=q.c.div(vn()),mn=function(n){return Object(r.jsx)(gn,{children:n.children})},kn=function(n){return Object(r.jsx)("main",{children:n.children})};function wn(){var n=Object($.a)(["\n    border: 1px solid #ccc;\n    padding: 9px;\n    width: 100%;\n\n"]);return wn=function(){return n},n}var yn=q.c.input(wn()),zn=function(){var n=Object(Z.h)(),e=n.search,t=n.pathname,c=new URLSearchParams(e).get("szukaj"),a=Object(Z.g)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(yn,{placeholder:"Szukaj",value:c||"",onChange:function(n){var r=n.target,c=new URLSearchParams(e);""===r.value.trim()?c.delete("szukaj"):c.set("szukaj",r.value),a.push("".concat(t,"?").concat(c.toString()))}})})};function Tn(){var n=Object($.a)(["\n        display: none;\n    "]);return Tn=function(){return n},n}function Dn(){var n=Object($.a)(["\n    text-align: center;\n    align-self: center;\n    justify-content: center;\n    align-content: flex-start;\n\n    ","\n"]);return Dn=function(){return n},n}function Sn(){var n=Object($.a)(["\n        text-decoration: line-through;\n    "]);return Sn=function(){return n},n}function Cn(){var n=Object($.a)(["\n    flex-grow: 1;\n    align-self: center;\n    white-space: normal;\n    text-overflow: visible;\n    padding: 5px;\n\n    ","\n"]);return Cn=function(){return n},n}function Nn(){var n=Object($.a)(["\n        background-color: red;\n    "]);return Nn=function(){return n},n}function Pn(){var n=Object($.a)(["\n        background-color: green;\n    "]);return Pn=function(){return n},n}function Rn(){var n=Object($.a)(["\n    margin: 10px;\n    height: 30px;\n    width: 30px;\n    color: white;\n    box-shadow: none;\n    border: none;\n    align-self: center;\n    padding: 10px;\n    display: flex;\n    transition: 0.5s;\n\n    &:hover {\n        opacity: 0.7;\n    }\n\n    ","\n\n    ","\n"]);return Rn=function(){return n},n}function Un(){var n=Object($.a)(["\n    display: ",";\n    width: 100%;\n    justify-content: space-around;\n    border-bottom: 1px solid #eeeeee;\n"]);return Un=function(){return n},n}function En(){var n=Object($.a)(["\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n"]);return En=function(){return n},n}function Hn(){var n=Object($.a)(["\n    text-decoration: none;\n    color: black;\n"]);return Hn=function(){return n},n}var In=Object(q.c)(M.b).attrs((function(){return{activeClassName:"active"}}))(Hn()),Jn=q.c.ul(En()),Ln=q.c.li(Un(),(function(n){return n.display||"flex"})),Fn=q.c.button(Rn(),(function(n){return n.done&&Object(q.b)(Pn())}),(function(n){return n.toDelete&&Object(q.b)(Nn())})),Bn=q.c.span(Cn(),(function(n){return n.done&&Object(q.b)(Sn())})),Wn=q.c.div(Dn(),(function(n){return n.done||Object(q.b)(Tn())})),An=function(){var n=Object(Z.h)().search,e=new URLSearchParams(n).get("szukaj"),t=Object(s.c)((function(n){return function(n,e){var t=C(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),c=Object(s.c)(N),a=Object(s.b)();return Object(r.jsx)(Jn,{children:t.tasks.map((function(n){return Object(r.jsxs)(Ln,{display:"".concat(n.done&&c?"none":""),children:[Object(r.jsx)(Fn,{done:!0,onClick:function(){return a(y(n.id))},children:Object(r.jsx)(Wn,{done:n.done,className:"fas fa-check "})}),Object(r.jsx)(Bn,{done:n.done,children:Object(r.jsx)(In,{to:"/zadania/".concat(n.id),children:n.content})}),Object(r.jsx)(Fn,{toDelete:!0,onClick:function(){return a(z(n.id))},children:Object(r.jsx)(Wn,{done:!0,className:"far fa-trash-alt"})})]},n.id)}))})};var Mn=function(){var n=Object(s.b)();return Object(r.jsxs)(kn,{children:[Object(r.jsx)(pn,{title:"Lista zada\u0144"}),Object(r.jsxs)(mn,{children:[Object(r.jsx)(bn,{title:"Dodaj nowe zadanie",extrasToHeader:Object(r.jsx)(cn,{onClick:function(){return n(D())},children:"Pobierz przyk\u0142adowe zadania"}),body:Object(r.jsx)(nn,{})}),Object(r.jsx)(bn,{title:"Wyszukaj zadania",body:Object(r.jsx)(zn,{})}),Object(r.jsx)(bn,{title:"Lista zada\u0144",extrasToHeader:Object(r.jsx)(an,{}),body:Object(r.jsx)(An,{})})]})]})};var Zn=function(){return Object(r.jsxs)(kn,{children:[Object(r.jsx)(pn,{title:"O autorze"}),Object(r.jsx)(mn,{children:Object(r.jsx)(bn,{title:"Olga Sowi\u0144ska",body:Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:"Mi\u0142o, \u017ce tu jeste\u015b! Je\u015bli jeste\u015b rekruterem to nie wahaj si\u0119 i \u015bmia\u0142o si\u0119 ze mn\u0105 skontaktuj! \ud83d\ude01 B\u0119dzie mi wtedy jeszcze milej \ud83d\ude0f"})})})})]})};var _n=function(){var n=Object(Z.i)().id,e=Object(s.c)((function(e){return function(n,e){return C(n).find((function(n){return n.id===e}))}(e,n)}));return console.log(e),Object(r.jsxs)(kn,{children:[Object(r.jsx)(pn,{title:"Szczeg\xf3\u0142y zadania"}),Object(r.jsx)(mn,{children:Object(r.jsx)(bn,{title:e?e.content:"Nie znaleziono zadania :(",body:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("strong",{children:["Zrobione: ",e?e.done?"Tak":"Nie":""," "]})})})})]})};function $n(){var n=Object($.a)(["\n    font-size: 1.6em;\n"]);return $n=function(){return n},n}function qn(){var n=Object($.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    height: 100%;\n    column-gap: 40px;\n"]);return qn=function(){return n},n}function Gn(){var n=Object($.a)(["\n    background-color: teal;\n    height: 4.5em;\n"]);return Gn=function(){return n},n}function Kn(){var n=Object($.a)(["\n    text-decoration: none;\n    color: white;\n\n    &."," {\n        border-bottom: 2px solid white;\n    }\n"]);return Kn=function(){return n},n}var Qn="active",Vn=Object(q.c)(M.b).attrs((function(){return{activeClassName:Qn}}))(Kn(),Qn),Xn=q.c.nav(Gn()),Yn=q.c.ul(qn()),ne=q.c.li($n());function ee(){return Object(r.jsxs)(M.a,{children:[Object(r.jsx)(Xn,{children:Object(r.jsxs)(Yn,{children:[Object(r.jsx)(ne,{children:Object(r.jsx)(Vn,{to:"/zadania",children:"Zadania"})}),Object(r.jsx)(ne,{children:Object(r.jsx)(Vn,{to:"/author",children:"O autorze"})})]})}),Object(r.jsxs)(Z.d,{children:[Object(r.jsx)(Z.b,{path:"/author",children:Object(r.jsx)(Zn,{})}),Object(r.jsx)(Z.b,{path:"/zadania/:id",children:Object(r.jsx)(_n,{})}),Object(r.jsx)(Z.b,{path:"/zadania",children:Object(r.jsx)(Mn,{})}),Object(r.jsx)(Z.b,{children:Object(r.jsx)(Z.a,{to:"/zadania"})})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(){var n=Object($.a)(["\n  html {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: #eeeeee;\n  max-width: 1000px;\n  margin: 50px auto;\n  font-family: 'Roboto', sans-serif;\n  padding: 10px;\n}\n"]);return te=function(){return n},n}var re=Object(q.a)(te());o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(s.a,{store:A,children:[Object(r.jsx)(re,{}),Object(r.jsx)(ee,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.bbd89489.chunk.js.map