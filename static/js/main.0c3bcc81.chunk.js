(this["webpackJsonpmonstro-app"]=this["webpackJsonpmonstro-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(32),a(33),a(18)),i=a.n(s),l=a(5),u=a(6),m=a(7),h=a(8),d=a(70),p=(a(34),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={search:null},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Search-box"},r.a.createElement(d.a,{id:"outlined-basic",label:"Search",variant:"outlined"}))}}]),a}(n.Component)),f=a(14),v=a.n(f),E=a(23),b=(a(39),a(40),function(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{className:"avatar",src:"https://robohash.org/".concat(e.id,"?set=set4&size=260x260"),alt:"userAvatar"}),r.a.createElement("h2",{className:"name"},e.name),r.a.createElement("h4",{className:"email"},e.email))}),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).fetchProfiles=Object(E.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n.setState({users:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed to fetch");case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),n.state={users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchProfiles()}},{key:"render",value:function(){return r.a.createElement("div",{className:"cardList"},this.state.users.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})})))}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(a,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Whoops... Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);a(41);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement(p,null),r.a.createElement(j,null,r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0c3bcc81.chunk.js.map