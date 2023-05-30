(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(5),s=(n(20),n(21),n(2)),a=n(6),i=n.n(a),j=n(0),l=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(r.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(j.jsx)(r.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},o=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},b=n(8),h=n(11),d=n(4),u=n(1),O=(n(23),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){if(!e.ok)throw new Error("Connection issue");return e.json()}));var e}var p=function(e){var t=e.person;return Object(j.jsx)(r.b,{to:"../".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.person,n=e.motherInList,c=e.fatherInList,r=Object(s.h)().slug,a=t.sex,l=t.born,o=t.died,b=t.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":b===r}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(p,{person:t})}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:o}),Object(j.jsx)("td",{children:n?Object(j.jsx)(p,{person:n}):"-"}),Object(j.jsx)("td",{children:c?Object(j.jsx)(p,{person:c}):"-"})]})},f=function(){var e=Object(u.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(!1),s=Object(d.a)(r,2),a=s[0],i=s[1],l=Object(u.useState)([]),o=Object(d.a)(l,2),p=o[0],f=o[1],v=function(){var e=Object(h.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,x();case 4:t=e.sent,f(t),i(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),i(!0);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){v()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[n&&Object(j.jsx)(O,{}),a&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),p.length?Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:p.map((function(e){var t=p.find((function(t){return t.name===e.motherName}))||null,n=p.find((function(t){return t.name===e.fatherName}))||null;return Object(j.jsx)(m,{motherInList:t,fatherInList:n,person:e},e.slug)}))})]}):!a&&!n&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},v=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},g=(n(24),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(s.b,{path:"/home",element:Object(j.jsx)(s.a,{to:"/",replace:!0})}),Object(j.jsxs)(s.b,{path:"/people",children:[Object(j.jsx)(s.b,{index:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(s.b,{path:":slug",element:Object(j.jsx)(f,{})})]}),Object(j.jsx)(s.b,{path:"*",element:Object(j.jsx)(v,{})})]})})})]})});Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(r.a,{children:Object(j.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.45099cf3.chunk.js.map