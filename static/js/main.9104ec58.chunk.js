(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(22),r=a.n(i),s=(a(31),a(1)),m=a(2),l=a(4),o=a(3),u=a(5),p=a(13),h=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav-bar"},c.a.createElement(p.b,{to:"/",className:"left-button"},"Shopping List"),c.a.createElement(p.b,{to:"/add",className:"right-button"},"Add"))}}]),t}(n.Component)),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"header-text"},"Shopping List"))}}]),t}(n.Component),b=a(11),O=a(12),v=a(10),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.itemName,n=t.measurementType,i=t.itemQuantity,r=t.id;return c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"item-head"},c.a.createElement("div",{className:"item-short-descr"},c.a.createElement("div",{className:"item-name"},a),c.a.createElement("div",{className:"item-type"},n,":"),c.a.createElement("div",{className:"item-weight-number"},i))),c.a.createElement("div",{className:"item-description"},c.a.createElement("div",{className:"item-buttons"},c.a.createElement("button",{className:"cancel",onClick:function(){return e.props.cancel(r)}},"\u0421ancel"),c.a.createElement("button",{className:"complete",onClick:function(){return e.props.complete(r)}},"Complete"))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.need.map(function(t){return c.a.createElement(j,{key:t.id,item:t,cancel:e.props.cancel,complete:e.props.complete})});return c.a.createElement("div",null,t)}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.itemName,a=e.measurementType,n=e.itemQuantity;return c.a.createElement("div",{className:"item-head"},c.a.createElement("div",{className:"item-short-descr"},c.a.createElement("div",{className:"item-name"},t),c.a.createElement("div",{className:"item-type"},a,":"),c.a.createElement("div",{className:"item-weight-number"},n)))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.completed.map(function(e){return c.a.createElement(E,{key:e.id,item:e})});return c.a.createElement("div",null,e)}}]),t}(n.Component),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).call(this))).state={need:[],completed:[]},e.complete=e.complete.bind(Object(v.a)(e)),e.cancel=e.cancel.bind(Object(v.a)(e)),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(0===localStorage.length){localStorage.setItem("shoppingList",JSON.stringify({need:[],completed:[]}))}var e=JSON.parse(localStorage.getItem("shoppingList")),t=e.need,a=e.completed;this.setState({need:t,completed:a})}},{key:"cancel",value:function(e){var t=this.state.need.filter(function(t){return e!==t.id});localStorage.setItem("shoppingList",JSON.stringify({need:t,completed:Object(O.a)(this.state.completed)})),this.setState({need:t})}},{key:"complete",value:function(e){var t=this.state.need.filter(function(t){return e!==t.id}),a=this.state.need.filter(function(t){return e===t.id});localStorage.setItem("shoppingList",JSON.stringify({need:t,completed:[].concat(Object(O.a)(this.state.completed),Object(O.a)(a))})),this.setState({need:t,completed:[].concat(Object(O.a)(this.state.completed),Object(O.a)(a))})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"Need:"),c.a.createElement("div",null,c.a.createElement(f,{need:this.state.need,complete:this.complete,cancel:this.cancel})),c.a.createElement("h3",null,"Completed:"),c.a.createElement("div",null,c.a.createElement(g,{completed:this.state.completed})))}}]),t}(n.Component),N=a(25),C="Kilograms",k="Pieces",w="Liters",I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("select",{className:"input",value:this.props.measurementType,onChange:this.props.onItemMeasurementChange},c.a.createElement("option",{value:k},"Pieces"),c.a.createElement("option",{value:C},"Kilograms"),c.a.createElement("option",{value:w},"Liters"))}}]),t}(n.Component),S={KILOGRAMS:"Kilograms",PIECES:"Pieces",LITERS:"Liters"},L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={itemName:"",itemQuantity:"",measurementType:S.PIECES,showWarning:!1},a.onItemValueChange=a.onItemValueChange.bind(Object(v.a)(a)),a.onItemMeasurementChange=a.onItemMeasurementChange.bind(Object(v.a)(a)),a.addNewItem=a.addNewItem.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"onItemValueChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"onItemMeasurementChange",value:function(e){this.setState({measurementType:e.target.value}),console.log(this.state.measurementType)}},{key:"addNewItem",value:function(){if(this.state.itemName&&this.state.itemQuantity){var e={itemName:this.state.itemName,measurementType:this.state.measurementType,itemQuantity:this.state.itemQuantity,id:Date.now()},t=JSON.parse(localStorage.getItem("shoppingList"));t.need=[].concat(Object(O.a)(t.need),[e]),localStorage.setItem("shoppingList",JSON.stringify(t)),this.setState({itemName:"",itemQuantity:"",showWarning:!1}),window.location.replace("/")}else this.setState({showWarning:!0})}},{key:"render",value:function(){var e=this.state.showWarning&&c.a.createElement("div",{className:"warning"},"Please check the entered!");return c.a.createElement("div",null,c.a.createElement("h3",null,"Please, provide new item information:"),c.a.createElement("div",{className:"add-to-list"},c.a.createElement("div",null,c.a.createElement("div",{className:"put"},c.a.createElement("input",{placeholder:"Name",className:"input focus-bg",type:"text",value:this.state.itemName,name:"itemName",onChange:this.onItemValueChange})),c.a.createElement("div",{className:"put"},c.a.createElement(I,{measurementType:this.state.measurementType,onItemMeasurementChange:this.onItemMeasurementChange}),c.a.createElement("input",{placeholder:this.state.measurementType,className:"input focus-bg",type:"text",value:this.state.itemQuantity,name:"itemQuantity",onChange:this.onItemValueChange})))),c.a.createElement("button",{className:"add-button",onClick:this.addNewItem},"Add"),e)}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:y}),c.a.createElement(b.a,{path:"/add",exact:!0,component:L})))}}]),t}(n.Component),Q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/shopping-list"},c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(h,null),c.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9104ec58.chunk.js.map