(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(22),s=a.n(i),r=(a(31),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),d=a(13),h=(a(32),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav-bar"},c.a.createElement(d.b,{to:"/",className:"left-button"},"Shopping List"),c.a.createElement(d.b,{to:"/add",className:"right-button"},"Add+"))}}]),t}(n.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header-text"},"Shopping List"))}}]),t}(n.Component),b=a(12),O=a(10),v=a(11),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list;return c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"item-head"},c.a.createElement("div",{className:"item-short-descr"},c.a.createElement("div",{className:"item-name"},t.name),c.a.createElement("div",{className:"item-type"},t.type,":"),c.a.createElement("div",{className:"item-weight-number"},t.weightNumber)),c.a.createElement("button",{className:"arrow"},"\ud83e\udc93")),c.a.createElement("div",{className:"item-description"},c.a.createElement("div",{className:"item-buttons"},c.a.createElement("button",{className:"cancel",onClick:function(){return e.props.cancel(t.id)}},"\u0421ancel"),c.a.createElement("button",{className:"complete",onClick:function(){return e.props.complete(t.id)}},"Complete"))))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.need.map(function(t){return c.a.createElement(j,{key:t.id,list:t,cancel:e.props.n,complete:e.props.y})});return c.a.createElement("div",null,t)}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item;return c.a.createElement("div",{className:"item-head"},c.a.createElement("div",{className:"item-short-descr"},c.a.createElement("div",{className:"item-name"},e.name),c.a.createElement("div",{className:"item-type"},e.type,":"),c.a.createElement("div",{className:"item-weight-number"},e.weightNumber)),c.a.createElement("button",{className:"arrow"},"\ud83e\udc93"))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.completed.map(function(e){return c.a.createElement(E,{key:e.id,item:e})});return c.a.createElement("div",{className:""},e)}}]),t}(n.Component),N=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={need:[],completed:[]},e.complete=e.complete.bind(Object(v.a)(e)),e.cancel=e.cancel.bind(Object(v.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("shoppingList"));this.setState({need:e.need,completed:e.completed})}},{key:"cancel",value:function(e){for(var t=Object(O.a)(this.state.need),a=0;a<t.length;a++)e===t[a].id&&t.splice(a,1);localStorage.setItem("shoppingList",JSON.stringify({need:t,completed:Object(O.a)(this.state.completed)})),this.setState({need:t})}},{key:"complete",value:function(e){for(var t,a=Object(O.a)(this.state.need),n=0;n<a.length;n++)e===a[n].id&&(t=a.splice(n,1));localStorage.setItem("shoppingList",JSON.stringify({need:a,completed:[].concat(Object(O.a)(this.state.completed),Object(O.a)(t))})),this.setState({need:a,completed:[].concat(Object(O.a)(this.state.completed),Object(O.a)(t))})}},{key:"render",value:function(){return c.a.createElement("div",{className:""},c.a.createElement("h3",null,"Need:"),c.a.createElement("div",null,c.a.createElement(g,{need:this.state.need,y:this.complete,n:this.cancel})),c.a.createElement("h3",null,"Completed:"),c.a.createElement("div",null,c.a.createElement(f,{completed:this.state.completed})))}}]),t}(n.Component),y=a(25),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",weightNumber:"",type:"weight",warn:!1,done:!1,added:""},a.Change=a.Change.bind(Object(v.a)(a)),a.checked=a.checked.bind(Object(v.a)(a)),a.addNew=a.addNew.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"Change",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"checked",value:function(e){this.setState({type:e.target.value})}},{key:"addNew",value:function(){if(""!==this.state.name&&""!==this.state.weightNumber){this.setState({done:!0}),this.setState({warn:!1}),this.setState({added:this.state.name});var e={name:this.state.name,type:this.state.type,weightNumber:this.state.weightNumber,id:Math.floor(1e4*Math.random())+1+"aaa"},t=JSON.parse(localStorage.getItem("shoppingList"));t.need=[].concat(Object(O.a)(t.need),[e]),localStorage.setItem("shoppingList",JSON.stringify(t)),this.setState({name:""}),this.setState({weightNumber:""})}else this.setState({done:!1}),this.setState({warn:!0})}},{key:"render",value:function(){var e=this.state.warn&&c.a.createElement("div",{className:"warning"},"Please check the entered!"),t=this.state.done&&c.a.createElement("div",{className:"done"},this.state.added," successfully added");return c.a.createElement("div",{className:""},c.a.createElement("h3",null,"Enter information about the new task:"),c.a.createElement("div",{className:"add-to-list"},c.a.createElement("div",null,c.a.createElement("div",{className:"put"},"Name:",c.a.createElement("input",{className:"input",type:"text",value:this.state.name,name:"name",onChange:this.Change})),c.a.createElement("div",{className:"put"},c.a.createElement("input",{type:"radio",name:"type",value:"weight",checked:"weight"===this.state.type,onChange:this.checked}),"weight",c.a.createElement("input",{type:"radio",name:"type",value:"pieces",checked:"pieces"===this.state.type,onChange:this.checked}),"pieces:",c.a.createElement("input",{className:"input",type:"text",value:this.state.weightNumber,name:"weightNumber",onChange:this.Change})))),c.a.createElement("button",{className:"add-button",onClick:this.addNew},"Add"),t,e)}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:N})," />",c.a.createElement(b.a,{path:"/add",exact:!0,component:w})))}}]),t}(n.Component),S=function(e){function t(e){var a;if(Object(r.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e)),0===localStorage.length){localStorage.setItem("shoppingList",JSON.stringify({need:[],completed:[]}))}return console.log(JSON.parse(localStorage.getItem("shoppingList"))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:"/shopping-list"},c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(k,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.2ded4b51.chunk.js.map