"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[658],{776:function($,d,e){e.r(d),e.d(d,{default:function(){return R}});var S=e(90228),v=e.n(S),j=e(87999),y=e.n(j),C=e(48305),c=e.n(C),u=e(75271),x=e(59613),A=e(45879),I=e(93966),a={container:"container___wL12H",selectButton:"selectButton___XdVCo",result:"result___VURgI",menu:"menu___tkuqc",menuItem:"menuItem___SVK5c",close:"close___jn2BM"},n=e(52676),N=function(){var B=(0,u.useState)("\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u9009\u62E9"),h=c()(B,2),f=h[0],E=h[1],F=(0,u.useState)(!1),m=c()(F,2),T=m[0],D=m[1],M=(0,u.useState)([]),g=c()(M,2),l=g[0],V=g[1];(0,u.useEffect)(function(){D(!0)},[f]);var Z=function(){var s=y()(v()().mark(function t(){var o,i;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,I.Z.get("http://localhost:3000/api/dishes");case 2:i=r.sent,V(i==null||(o=i.data)===null||o===void 0?void 0:o.data);case 4:case"end":return r.stop()}},t)}));return function(){return s.apply(this,arguments)}}();(0,u.useEffect)(function(){Z()},[]);var p=function(){D(!1);var t=l[Math.floor(Math.random()*l.length)];setTimeout(function(){E("\u4ECA\u5929\u5403\uFF1A".concat(t==null?void 0:t.name))},200)},G=function(t){console.log(t)};return(0,n.jsxs)("div",{className:a.container,children:[(0,n.jsx)("h1",{children:"\u968F\u673A\u70B9\u83DC\u5DE5\u5177"}),(0,n.jsx)("div",{className:a.result,style:{opacity:T?"1":"0"},children:f}),(0,n.jsx)(x.ZP,{className:a.selectButton,type:"primary",onClick:p,children:"\u968F\u673A\u9009\u62E9"}),(0,n.jsx)("div",{className:a.menu,children:l==null?void 0:l.map(function(s,t){return(0,n.jsxs)("div",{className:a.menuItem,children:[s==null?void 0:s.name," ",(0,n.jsx)(A.Z,{onClick:function(){return G(s)},className:a.close})]},t)})})]})},R=N}}]);
