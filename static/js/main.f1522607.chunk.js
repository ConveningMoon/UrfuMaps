(this["webpackJsonpurfu-maps"]=this["webpackJsonpurfu-maps"]||[]).push([[0],{11:function(e,t,n){},15:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);n(15);var c=n(12),i=n.n(c),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},a=n(14),r=n(2),o=n(3),l=n(0),u=n(5),j=n.n(u),b=n(8),d=n(6),O=(n(21),n(1)),h=function(e){var t=e.floorNumber,n=e.buildingName,c=e.searchedCabinet,i=Object(l.useState)(!0),s=Object(o.a)(i,2),a=s[0],r=s[1],u=Object(l.useState)(),h=Object(o.a)(u,2),p=h[0],x=h[1];return Object(l.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||null==n){e.next=10;break}return e.next=3,fetch("".concat(d.a.API_DOMAIN,"/map?floor=").concat(t,"&building=").concat(n),{method:"GET"});case 3:return c=e.sent,e.t0=x,e.next=7,c.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),c.ok&&r(!1);case 10:case"end":return e.stop()}}),e)})))()}),[n,t]),Object(O.jsx)("div",{className:"map-scheme",children:a?Object(O.jsx)("img",{src:"loading-icon.svg",className:"loading-icon",alt:""}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{className:"map-image",src:null===p||void 0===p?void 0:p.imageLink,alt:"floor map"}),null===p||void 0===p?void 0:p.positions.map((function(e){var t={top:"".concat(e.y,"%"),left:"".concat(e.x,"%")};return e.cabinet===c?Object(O.jsx)("img",{className:"map-marker",src:"marker-icon.svg",alt:"mark",style:t},e.cabinet):null}))]})})},p=(n(11),function(e){var t,n,c=Object(l.useState)({}),i=Object(o.a)(c,2),s=i[0],a=i[1];function r(t){e.setFloorNumber(t.currentTarget.value)}function u(t){e.setBuildingName(t.currentTarget.value)}return Object(l.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d.a.API_DOMAIN,"/info"),{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c={},n.forEach((function(e){c[e.buildingName]=e.floorList})),a(c);case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(O.jsxs)("div",{className:"app-header",children:[Object(O.jsxs)("div",{className:"floor-select",children:[Object(O.jsx)("span",{children:"Floor: "}),Object(O.jsx)("select",{onChange:r,onLoad:r,children:null===(t=s[e.buildingName])||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("option",{children:e},e)}))})]}),Object(O.jsxs)("div",{className:"building-select",children:[Object(O.jsx)("span",{children:"Building: "}),Object(O.jsx)("select",{onChange:u,onLoad:u,children:null===(n=Object.keys(s))||void 0===n?void 0:n.map((function(e){return Object(O.jsx)("option",{children:e},e)}))})]}),Object(O.jsxs)("div",{className:"cabinet-select",children:[Object(O.jsx)("span",{children:"Cabinet: "}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:e.searchedCabinet,onChange:function(t){e.setSearchedCabinet(t.currentTarget.value)},size:5}),Object(O.jsx)("button",{className:"button",type:"submit",value:"Search",children:"Search"})]})]})]})});n(23);var x=function(){var e=Object(l.useState)(1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)("rtf"),s=Object(o.a)(i,2),a=s[0],r=s[1],u=Object(l.useState)(""),j=Object(o.a)(u,2),b=j[0],d=j[1];return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(p,{floor:n,setFloorNumber:c,buildingName:a,setBuildingName:r,searchedCabinet:b,setSearchedCabinet:d}),Object(O.jsx)(h,{floorNumber:n,buildingName:a,searchedCabinet:b})]})},f=n(13),m=function(e){var t=e.setEditedPosition,n=e.editedPosition,c=e.setCoords,i=e.coords,s=e.link,a=e.positions,r=e.setPositions,u=Object(l.useState)(NaN),h=Object(o.a)(u,2),p=h[0],x=h[1],m=Object(l.useState)(""),v=Object(o.a)(m,2),g=v[0],N=v[1],C=Object(l.useState)(""),k=Object(o.a)(C,2),S=k[0],y=k[1],T=Object(l.useState)(""),F=Object(o.a)(T,2),P=F[0],E=F[1];function L(){return(L=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={floorNumber:p,buildingName:g,imageLink:s,positions:a},console.log({floorNumber:p,buildingName:g,imageLink:"link",positions:a}),e.next=5,fetch("".concat(d.a.API_DOMAIN,"/map"),{headers:{Authorization:d.a.TOKEN,accept:"text/plain","Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){t({cabinet:S,description:P,x:null===i||void 0===i?void 0:i.x,y:null===i||void 0===i?void 0:i.y})}),[S,P,i,t]),Object(O.jsxs)("div",{className:"app-header-edit",children:[Object(O.jsxs)("form",{className:"floor-edit",onSubmit:function(e){return L.apply(this,arguments)},children:[Object(O.jsx)("label",{children:"Floor:"}),Object(O.jsx)("input",{onChange:function(e){x(parseInt(e.currentTarget.value))},size:5}),Object(O.jsx)("label",{children:"Building:"}),Object(O.jsx)("input",{onChange:function(e){N(e.currentTarget.value)},size:5}),Object(O.jsx)("input",{type:"submit",value:"Upload map"})]}),void 0!==i?Object(O.jsxs)("form",{id:"cabinet-form",className:"cabinet-edit",onSubmit:function(e){e.preventDefault(),r([].concat(Object(f.a)(a),[n])),c(void 0),y(""),E("")},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"cabinet",children:"Cabinet:"}),Object(O.jsx)("input",{id:"cabinet",size:5,onChange:function(e){y(e.currentTarget.value)}}),Object(O.jsx)("label",{htmlFor:"description",children:"Descrpiption"}),Object(O.jsx)("input",{id:"description",size:5,onChange:function(e){E(e.currentTarget.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"x",children:"X:"}),Object(O.jsx)("input",{readOnly:!0,id:"x",size:5,value:i.x}),Object(O.jsx)("label",{htmlFor:"y",children:"Y:"}),Object(O.jsx)("input",{readOnly:!0,id:"y",size:5,value:i.y}),Object(O.jsx)("input",{className:"edit-button",type:"submit",value:"Add"})]})]}):null]})},v=function(e){var t=e.setCoords,n=e.link,c=e.setLink;return Object(l.useEffect)((function(){}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Link: "}),Object(O.jsx)("input",{value:n,onChange:function(e){c(e.currentTarget.value)}}),Object(O.jsx)("br",{}),0!==n.length?Object(O.jsx)("img",{alt:"",src:n,onClick:function(e){var n=e.currentTarget.getBoundingClientRect();t({x:(100*(e.pageX-n.left)/n.width).toFixed(4),y:(100*(e.pageY-n.top)/n.height).toFixed(4)})}}):null]})},g=(n(24),function(e){var t=e.positions;return Object(O.jsx)("div",{className:"card-list",children:t.map((function(e,t){return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("text",{children:["Cabinet: ",e.cabinet]}),Object(O.jsxs)("text",{children:["Description: ",e.description]}),Object(O.jsxs)("text",{children:["X: ",e.x]}),Object(O.jsxs)("text",{children:["Y: ",e.y]})]},t)}))})}),N=function(){var e=Object(l.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(l.useState)(),s=Object(o.a)(i,2),a=s[0],r=s[1],u=Object(l.useState)(""),j=Object(o.a)(u,2),b=j[0],d=j[1],h=Object(l.useState)([]),p=Object(o.a)(h,2),x=p[0],f=p[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(m,{editedPosition:n,setEditedPosition:c,coords:a,setCoords:r,link:b,positions:x,setPositions:f}),Object(O.jsx)(v,{setCoords:r,link:b,setLink:d}),Object(O.jsx)(g,{positions:x})]})},C=document.getElementById("root");i.a.render(Object(O.jsx)(a.a,{children:Object(O.jsxs)(r.c,{children:[Object(O.jsx)(r.a,{path:"/home",element:Object(O.jsx)(x,{})}),Object(O.jsx)(r.a,{path:"/",element:Object(O.jsx)(N,{})})]})}),C),s()}},[[25,1,2]]]);
//# sourceMappingURL=main.f1522607.chunk.js.map