(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8mZM":function(e,t){e.exports="/_next/static/images/splash-b930beb8cc206955ad4470aa9513ef97.gif"},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("vOnD"),l=a("0iUn"),s=a("sLSF"),r=a("MI3g"),c=a("a7VT"),m=a("Tit0"),d=a("8mZM"),h=a.n(d),u=o.b.div.withConfig({displayName:"splash__Wrapper",componentId:"sc-16pddj9-0"})(["width:100vw;height:100vh;top:0px;left:0px;position:fixed;display:",";justify-content:center;align-items:center;"],function(e){return e.hasPlayed?"none":"flex"}),f=o.b.img.withConfig({displayName:"splash__SplashLogo",componentId:"sc-16pddj9-1"})(["max-height:300px;position:fixed;z-index:3;display:",";"],function(e){return e.hasPlayed?"none":"block"}),p=o.b.div.withConfig({displayName:"splash__LeftSlide",componentId:"sc-16pddj9-2"})(["@keyframes slideLeft{from{transform:translateX(0vw);}to{transform:translateX(-50vw);}}animation:slideLeft 1000ms linear 2990ms 1 normal none;height:100vh;width:50vw;display:",";border-right:1px solid black;background-color:white;"],function(e){return e.hasPlayed?"none":"block"}),b=o.b.div.withConfig({displayName:"splash__RightSlide",componentId:"sc-16pddj9-3"})(["@keyframes slideRight{from{transform:translateX(0vw);}to{transform:translateX(50vw);}}height:100vh;width:50vw;animation:slideRight 1000ms linear 2990ms 1 normal none;display:",";background-color:white;border-left:1px solid black;"],function(e){return e.hasPlayed?"none":"block"}),y=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(r.default)(this,Object(c.default)(t).call(this,e))).state={imgHasPlayed:!1,hasPlayed:!1},a}return Object(m.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){var e=this;return setTimeout(function(){e.setState(function(e){return{imgHasPlayed:!0}})},3e3),setTimeout(function(){e.setState(function(e){return{hasPlayed:!0}})},3900),i.a.createElement(u,{hasPlayed:this.state.hasPlayed},i.a.createElement(p,{hasPlayed:this.state.hasPlayed}),i.a.createElement(f,{src:h.a,hasPlayed:this.state.imgHasPlayed}),i.a.createElement(b,{hasPlayed:this.state.hasPlayed}))}}]),t}(n.Component),g=a("AT/M"),v=a("hfKm"),w=a.n(v);function _(e,t,a){return t in e?w()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=o.b.div.withConfig({displayName:"contactForm__Wrapper",componentId:"sc-1aonc4b-0"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]),C=o.b.input.withConfig({displayName:"contactForm__TextLine",componentId:"sc-1aonc4b-1"})(["display:block;"]),P=o.b.textarea.withConfig({displayName:"contactForm__TextBox",componentId:"sc-1aonc4b-2"})([""]),x=o.b.label.withConfig({displayName:"contactForm__Label",componentId:"sc-1aonc4b-3"})([""]),j=o.b.form.withConfig({displayName:"contactForm__Form",componentId:"sc-1aonc4b-4"})([""]),N=function(e){function t(e){var a;return Object(l.default)(this,t),a=Object(r.default)(this,Object(c.default)(t).call(this,e)),_(Object(g.default)(a),"saveToState",function(e){a.setState(_({},e.target.name,e.target.value))}),a.state={first:"",last:"",company:"",email:"",phone:"",inquiry:""},a}return Object(m.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return i.a.createElement(E,null,i.a.createElement(j,{action:"https://formspree.io/info@willient.com",method:"post"},i.a.createElement("fieldset",null,i.a.createElement(x,{htmlFor:"first"},"First Name",i.a.createElement(C,{name:"first",value:this.state.first,onChange:this.saveToState,required:!0})),i.a.createElement(x,{htmlFor:"last"},"Last Name",i.a.createElement(C,{name:"last",value:this.state.last,onChange:this.saveToState,required:!0})),i.a.createElement(x,{htmlFor:"company"},"Company",i.a.createElement(C,{name:"company",value:this.state.company,onChange:this.saveToState,required:!0})),i.a.createElement(x,{htmlFor:"email"},"Email",i.a.createElement(C,{name:"email",type:"email",value:this.state.email,onChange:this.saveToState,required:!0})),i.a.createElement(x,{htmlFor:"phone"},"Phone Number",i.a.createElement(C,{name:"phone",value:this.state.phone,onChange:this.saveToState,required:!0})),i.a.createElement(x,{htmlFor:"inquiry"},"Inquiry",i.a.createElement(P,{name:"inquiry",value:this.state.inquiry,onChange:this.saveToState,required:!0})),i.a.createElement("button",{type:"submit"},"Send"))))}}]),t}(n.Component),T=o.b.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-1wbo52z-0"})(["height:100vh;"]);t.default=function(){return i.a.createElement(T,null,i.a.createElement(N,null),i.a.createElement(y,null))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);