"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[658],{776:function(x,S,s){s.r(S),s.d(S,{default:function(){return L}});var F=s(90228),c=s.n(F),E=s(87999),m=s.n(E),P=s(48305),v=s.n(P),i=s(75271),f=s(86639),y=s(45292),R=s(27130),T=s(45879),p=s(93966),l={container:"container___wL12H",selectButton:"selectButton___XdVCo",inputContainer:"inputContainer___L8neo",selectButton1:"selectButton1___CeISe",result:"result___VURgI",menu:"menu___tkuqc",menuItem:"menuItem___SVK5c",close:"close___jn2BM"},u=s(52676),V=function(){var M=(0,i.useState)("\u70B9\u51FB\u6309\u94AE\u5F00\u59CB\u9009\u62E9"),j=v()(M,2),Z=j[0],G=j[1],k=(0,i.useState)(!1),B=v()(k,2),H=B[0],I=B[1],K=(0,i.useState)([]),N=v()(K,2),h=N[0],O=N[1],U=(0,i.useState)(""),$=v()(U,2),g=$[0],X=$[1],z=(0,i.useState)(!1),A=v()(z,2),J=A[0],D=A[1];(0,i.useEffect)(function(){I(!0)},[Z]);var C=function(){var n=m()(c()().mark(function a(){var t,r;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p.Z.get("http://localhost:3000/api/dishes/getAllDishes");case 2:r=o.sent,O(r==null||(t=r.data)===null||t===void 0?void 0:t.data);case 4:case"end":return o.stop()}},a)}));return function(){return n.apply(this,arguments)}}();(0,i.useEffect)(function(){C()},[]);var Q=function(){I(!1);var a=h[Math.floor(Math.random()*h.length)];setTimeout(function(){G("\u4ECA\u5929\u5403\uFF1A".concat(a==null?void 0:a.name))},200)},W=function(){var n=m()(c()().mark(function a(t){var r,d;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.post("http://localhost:3000/api/dishes/deleteDish",{name:t==null?void 0:t.name});case 3:d=e.sent,((r=d.data)===null||r===void 0?void 0:r.code)===200&&(f.ZP.success("\u5220\u9664\u6210\u529F"),C()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.ZP.error("\u5220\u9664\u5931\u8D25");case 10:case"end":return e.stop()}},a,null,[[0,7]])}));return function(t){return n.apply(this,arguments)}}(),Y=function(){var n=m()(c()().mark(function a(){var t,r,d;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(D(!0),g){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,p.Z.post("http://localhost:3000/api/dishes/addDishes",{name:g});case 6:r=e.sent,((t=r.data)===null||t===void 0?void 0:t.code)===200&&(D(!1),f.ZP.success("\u6DFB\u52A0\u6210\u529F"),C()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),D(!1),f.ZP.error((d=e.t0.response.data)===null||d===void 0?void 0:d.message);case 14:case"end":return e.stop()}},a,null,[[3,10]])}));return function(){return n.apply(this,arguments)}}(),w=function(a){X(a.target.value)};return(0,u.jsxs)("div",{className:l.container,children:[(0,u.jsx)("h1",{children:"\u968F\u673A\u70B9\u83DC\u5DE5\u5177"}),(0,u.jsx)("div",{className:l.result,style:{opacity:H?"1":"0"},children:Z}),(0,u.jsx)(y.ZP,{className:l.selectButton,type:"primary",onClick:Q,children:"\u968F\u673A\u9009\u62E9"}),(0,u.jsxs)("div",{className:l.inputContainer,children:[(0,u.jsx)(R.Z,{value:g,placeholder:"\u8BF7\u8F93\u5165",onChange:w}),(0,u.jsx)(y.ZP,{loading:J,className:l.selectButton1,type:"primary",onClick:Y,children:"\u65B0\u589E\u83DC\u54C1"})]}),(0,u.jsx)("div",{className:l.menu,children:h==null?void 0:h.map(function(n,a){return(0,u.jsxs)("div",{className:l.menuItem,children:[n==null?void 0:n.name," ",(0,u.jsx)(T.Z,{onClick:function(){return W(n)},className:l.close})]},a)})})]})},L=V}}]);
