(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{22:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=n(3),o=n(18),m=n(1),s=n(14),d=n.n(s),f=n(2),u=n(34),h=n(33);function g(){var e=Object(m.a)(['\n  font-family: "Fira Code";\n\n  border: none;\n  background: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  /* padding: 0 0.5vw; */\n\n  font-size: 5vw;\n\n  @media (max-width: 1200px) {\n    font-size: 7vw;\n  }\n\n  @media (max-width: 480px) {\n    font-size: 9vw;\n  }\n\n  &.letter-transition-enter {\n    opacity: 0;\n    transform: translateY(20%);\n  }\n\n  &.letter-transition-enter-active {\n    opacity: 1;\n    transform: translateY(0);\n    transition: all 0.3s ease-out;\n  }\n\n  &.letter-transition-exit {\n    opacity: 1;\n  }\n\n  &.letter-transition-exit-active {\n    opacity: 0;\n    transition: all 0.3s ease-in;\n  }\n']);return g=function(){return e},e}var p=f.b.span(g()),E=function(e){var t=e.isRevealed,n=e.value;return r.a.createElement(p,null,t?n:"_")},v=n(17),w=n.n(v),b=function(){return 8},y=function(){return new Map(Object(c.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((function(e){return[e,!1]})))},O=function(){for(var e="";e.length<=5;)e=w()();return e.toUpperCase()},R=function(e,t){return 0===e||0===t.length},x=function(e){return Array.from(e.values()).some((function(e){return!0===e}))};function j(){var e=Object(m.a)(["\n  float: left;\n  width: 4vw;\n  height: 6vw;\n  position: relative;\n  text-align: center;\n\n  @media (max-width: 1200px) {\n    width: ","vw;\n    height: ","vw;\n  }\n\n  @media (max-width: 480px) {\n    width: ","vw;\n    height: ","vw;\n  }\n"]);return j=function(){return e},e}function P(){var e=Object(m.a)(["\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0 auto 0.2vw;\n"]);return P=function(){return e},e}var _=f.b.ul(P()),k=f.b.li(j(),5.6,8.4,7.2,10.8);var S=function(e){var t=e.word,n=e.revealed,a=e.isGameFinished,l=x(n),i=Object(c.a)(t).map((function(e,i){return r.a.createElement(u.a,{timeout:300,component:k,key:"".concat(t+e+i)},r.a.createElement(h.a,{key:"".concat(t+e+i,"-").concat(n.get(e)?"revealed":"hidden"),enter:l,exit:l,classNames:"letter-transition",timeout:300},r.a.createElement(E,{isRevealed:a||n.get(e),value:e})))}));return r.a.createElement(_,null,i)};function M(){var e=Object(m.a)(["\n  font-family: 'Fira Code';\n  width: 90%;\n  margin: 1.25vh auto;\n  text-align: center;\n  font-size: 4vw;\n  font-weight: 700;\n\n  @media(max-width: 1200px) {\n    width: 100%;\n    font-size: 4vw;\n    margin: 0.4vh auto;\n  }\n\n  @media(max-width: 480px) {\n    width: 100%;\n    font-size: 6vw;\n    margin: 0.4vh auto;\n  }\n"]);return M=function(){return e},e}var C=f.b.div(M()),z=function(e){var t=e.tries,n=e.isGameFinished;return r.a.createElement(C,null,n?t>0?"you win! \ud83c\udf89\ud83c\udf89\ud83c\udf89":"game over. you lose. \ud83d\udc4e\ud83c\udffd\ud83d\udc4e\ud83c\udffb\ud83d\udc4e\ud83c\udfff":"".concat(t,1===t?" attempt remaining.":" attempts remaining."))};function I(){var e=Object(m.a)(["\n  font-family: 'Inter';\n  width: 100%;\n  background: #00000022;\n  color: black;\n  border: none;\n  font-size: 2.7vw;\n  font-weight: 900;\n  transition: 5s;\n  transition-timing-function: ease;\n  transition-property: background, color;\n\n  &:focus{\n    outline:0;\n  }\n\n  &:hover{\n    background: #000000cc;\n    color: white;\n    transition: 0.4s;\n    transition-property: background, color;\n  }\n\n  @media(max-width: 1200px) {\n    font-size: 4vw;\n  }\n  @media(max-width: 480px) {\n    font-size: 8vw;\n  }\n"]);return I=function(){return e},e}function H(){var e=Object(m.a)(["\n  width: 100%;\n  margin: auto;\n  padding: 1.5vw 0;\n"]);return H=function(){return e},e}var Z=f.b.div(H()),W=f.b.button(I()),F=function(e){var t=e.onClick;return r.a.createElement(Z,null,r.a.createElement(W,{title:"you can also press enter key to restart",onClick:t,type:"button"},"NEW GAME"))};function B(){var e=Object(m.a)(["\n    border-color: transparent;\n    "]);return B=function(){return e},e}function G(){var e=Object(m.a)(["\n    border-color: transparent;\n    "]);return G=function(){return e},e}function A(){var e=Object(m.a)(["\n  border-color: transparent;\n  background: red;\n  color: white;\n  "]);return A=function(){return e},e}function L(){var e=Object(m.a)(["\n  border-color: transparent;\n  background: green;\n  color: white;\n  "]);return L=function(){return e},e}function V(){var e=Object(m.a)(["\n  border-color: black;\n  background: none;\n  color: black;\n  \n  &:hover {\n    color: white;\n    background: black;\n    border-color: transparent;\n    transition-duration: 0.2s;\n  }\n  "]);return V=function(){return e},e}function D(){var e=Object(m.a)(["\n  font-family: 'Inter';\n  height: 1.5em;\n  width: 1.5em;\n  border: 0.6vw solid;\n  margin: 0.3vw;\n  font-weight: 900;\n  padding: 0;\n  font-size: 3.4vw;\n  text-align: center;\n  transition-duration: 0.5s;\n\n  &:focus {\n    outline:0;\n  }\n  \n  ","\n  \n  ","\n  \n  ","\n\n  @media(max-width: 1200px) {\n    border: 0.9vw solid black;\n    ","\n    margin: 0.45vw;\n    font-size: 5vw;\n  }\n  @media(max-width: 480px) {\n    border: 1.6vw solid black;\n    ","\n    margin: 0.8vw;\n    font-size: 9vw;\n  }\n"]);return D=function(){return e},e}var J=f.b.button(D(),(function(e){return!e.isClicked&&Object(f.a)(V())}),(function(e){return e.isClicked&&e.letterInWord&&Object(f.a)(L())}),(function(e){return e.isClicked&&!e.letterInWord&&Object(f.a)(A())}),(function(e){return e.isClicked&&Object(f.a)(G())}),(function(e){return e.isClicked&&Object(f.a)(B())})),K=function(e){var t=e.isClicked,n=e.onClick,a=e.letterInWord,l=e.letter;return r.a.createElement(J,{type:"button",isClicked:t,letterInWord:a,onClick:n,title:"you can also type a letter on your keyboard"},l)};function N(){var e=Object(m.a)(["\n  margin-top: 1.5vh;\n\n  ul{\n    list-style-type: none;;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 0;\n    margin: 0 auto;\n  }\n  ul li{\n    float: left;\n  }\n\n  @media (max-width: 1200px) {\n    margin-top: 0.7vh;\n  }\n"]);return N=function(){return e},e}var U=f.b.div(N());var Y=function(e){var t=e.isGameFinished,n=e.revealed,a=e.onLetterSelected,l=e.word,i=Object(c.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(K,{isClicked:n.get(e),onClick:function(){return a(e)},letter:e,letterInWord:l.includes(e)}))}));return r.a.createElement(U,null,!t&&r.a.createElement("ul",null,i))};function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman"},r.a.createElement("rect",{width:512,height:512}))),q=r.a.createElement("g",{id:"hangman",clipPath:"url(#clip-hangman)"},r.a.createElement("circle",{id:"Ellipse_1","data-name":"Ellipse 1",cx:32,cy:32,r:32,transform:"translate(0 448)"})),$=function(e){var t=e.svgRef,n=e.title,a=T(e,["svgRef","title"]);return r.a.createElement("svg",Q({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,X,q)},ee=r.a.forwardRef((function(e,t){return r.a.createElement($,Q({svgRef:t},e))}));n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ae=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangmanWon"},r.a.createElement("rect",{width:512,height:512}))),re=r.a.createElement("g",{id:"hangmanWon",clipPath:"url(#clip-hangmanWon)"},r.a.createElement("g",{id:"torso",transform:"translate(240 404)"},r.a.createElement("rect",{id:"Rectangle_14","data-name":"Rectangle 14",width:32,height:108})),r.a.createElement("g",{id:"arms",transform:"translate(188.934 132)"},r.a.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M31.61,6.1V119.512H0V11.806Z",transform:"matrix(-0.985, -0.174, 0.174, -0.985, 30.07, 391.722)"}),r.a.createElement("rect",{id:"Rectangle_16","data-name":"Rectangle 16",width:32,height:180,transform:"translate(212.439 158.093) rotate(45)"}),r.a.createElement("rect",{id:"Rectangle_19","data-name":"Rectangle 19",width:32,height:180,transform:"translate(203.066)"})),r.a.createElement("g",{id:"face",transform:"translate(128 120)"},r.a.createElement("g",{id:"Ellipse_2","data-name":"Ellipse 2",fill:"none",stroke:"#000",strokeWidth:32},r.a.createElement("circle",{cx:128,cy:128,r:128,stroke:"none"}),r.a.createElement("circle",{cx:128,cy:128,r:112,fill:"none"})),r.a.createElement("ellipse",{id:"Ellipse_3","data-name":"Ellipse 3",cx:16,cy:15.938,rx:16,ry:15.938,transform:"translate(80 80.125)"}),r.a.createElement("ellipse",{id:"Ellipse_4","data-name":"Ellipse 4",cx:16,cy:15.938,rx:16,ry:15.938,transform:"translate(144 80.125)"}),r.a.createElement("path",{id:"Subtraction_1","data-name":"Subtraction 1",d:"M47.977,51.975A44.53,44.53,0,0,1,29.3,47.89a47.8,47.8,0,0,1-15.25-11.139A52.239,52.239,0,0,1,3.77,20.231,55.39,55.39,0,0,1,0,0H95.954a55.389,55.389,0,0,1-3.77,20.231A52.239,52.239,0,0,1,81.9,36.752,47.8,47.8,0,0,1,66.652,47.89,44.53,44.53,0,0,1,47.977,51.975Z",transform:"translate(79.963 139.932)"}))),le=function(e){var t=e.svgRef,n=e.title,a=ne(e,["svgRef","title"]);return r.a.createElement("svg",te({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,ae,re)},ie=r.a.forwardRef((function(e,t){return r.a.createElement(le,te({svgRef:t},e))}));n.p;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var me=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman0"},r.a.createElement("rect",{width:512,height:512}))),se=r.a.createElement("g",{id:"hangman0",clipPath:"url(#clip-hangman0)"}),de=function(e){var t=e.svgRef,n=e.title,a=oe(e,["svgRef","title"]);return r.a.createElement("svg",ce({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,me,se)},fe=r.a.forwardRef((function(e,t){return r.a.createElement(de,ce({svgRef:t},e))}));n.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ge=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman1"},r.a.createElement("rect",{width:512,height:512}))),pe=r.a.createElement("g",{id:"hangman1",clipPath:"url(#clip-hangman1)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"}))),Ee=function(e){var t=e.svgRef,n=e.title,a=he(e,["svgRef","title"]);return r.a.createElement("svg",ue({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,ge,pe)},ve=r.a.forwardRef((function(e,t){return r.a.createElement(Ee,ue({svgRef:t},e))}));n.p;function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ye=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman2"},r.a.createElement("rect",{width:512,height:512}))),Oe=r.a.createElement("g",{id:"hangman2",clipPath:"url(#clip-hangman2)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"}))),Re=function(e){var t=e.svgRef,n=e.title,a=be(e,["svgRef","title"]);return r.a.createElement("svg",we({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,ye,Oe)},xe=r.a.forwardRef((function(e,t){return r.a.createElement(Re,we({svgRef:t},e))}));n.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _e=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman3"},r.a.createElement("rect",{width:512,height:512}))),ke=r.a.createElement("g",{id:"hangman3",clipPath:"url(#clip-hangman3)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"})),r.a.createElement("g",{id:"horizontal",transform:"translate(64 4)"},r.a.createElement("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:394,height:28}))),Se=function(e){var t=e.svgRef,n=e.title,a=Pe(e,["svgRef","title"]);return r.a.createElement("svg",je({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,_e,ke)},Me=r.a.forwardRef((function(e,t){return r.a.createElement(Se,je({svgRef:t},e))}));n.p;function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ie=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman4"},r.a.createElement("rect",{width:512,height:512}))),He=r.a.createElement("g",{id:"hangman4",clipPath:"url(#clip-hangman4)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"})),r.a.createElement("g",{id:"horizontal",transform:"translate(64 4)"},r.a.createElement("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:394,height:28})),r.a.createElement("g",{id:"support",transform:"translate(82.286 32.036)"},r.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M5342,119.424l59.526-59.393H5440.1L5342,159.262Z",transform:"translate(-5342 -60.031)"})),r.a.createElement("g",{id:"rope",transform:"translate(356 28)"},r.a.createElement("rect",{id:"Rectangle_8","data-name":"Rectangle 8",width:10,height:76}))),Ze=function(e){var t=e.svgRef,n=e.title,a=ze(e,["svgRef","title"]);return r.a.createElement("svg",Ce({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,Ie,He)},We=r.a.forwardRef((function(e,t){return r.a.createElement(Ze,Ce({svgRef:t},e))}));n.p;function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Be(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ge=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman5"},r.a.createElement("rect",{width:512,height:512}))),Ae=r.a.createElement("g",{id:"hangman5",clipPath:"url(#clip-hangman5)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"})),r.a.createElement("g",{id:"horizontal",transform:"translate(64 4)"},r.a.createElement("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:394,height:28})),r.a.createElement("g",{id:"support",transform:"translate(82.286 32.036)"},r.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M5342,119.424l59.526-59.393H5440.1L5342,159.262Z",transform:"translate(-5342 -60.031)"})),r.a.createElement("g",{id:"rope",transform:"translate(356 28)"},r.a.createElement("rect",{id:"Rectangle_8","data-name":"Rectangle 8",width:10,height:76})),r.a.createElement("g",{id:"face",transform:"translate(324 100)"},r.a.createElement("g",{id:"Ellipse_2","data-name":"Ellipse 2",fill:"none",stroke:"#000",strokeWidth:8},r.a.createElement("circle",{cx:37,cy:37,r:37,stroke:"none"}),r.a.createElement("circle",{cx:37,cy:37,r:33,fill:"none"})),r.a.createElement("circle",{id:"Ellipse_3","data-name":"Ellipse 3",cx:5,cy:5,r:5,transform:"translate(22 22)"}),r.a.createElement("ellipse",{id:"Ellipse_4","data-name":"Ellipse 4",cx:4,cy:5,rx:4,ry:5,transform:"translate(42 22)"}),r.a.createElement("path",{id:"Subtraction_1","data-name":"Subtraction 1",d:"M27.429,14.856H0a15.4,15.4,0,0,1,4.017-10.5,12.981,12.981,0,0,1,19.395,0,15.41,15.41,0,0,1,4.017,10.5Z",transform:"translate(22.857 40.001)"}))),Le=function(e){var t=e.svgRef,n=e.title,a=Be(e,["svgRef","title"]);return r.a.createElement("svg",Fe({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,Ge,Ae)},Ve=r.a.forwardRef((function(e,t){return r.a.createElement(Le,Fe({svgRef:t},e))}));n.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ke=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman6"},r.a.createElement("rect",{width:512,height:512}))),Ne=r.a.createElement("g",{id:"hangman6",clipPath:"url(#clip-hangman6)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"})),r.a.createElement("g",{id:"horizontal",transform:"translate(64 4)"},r.a.createElement("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:394,height:28})),r.a.createElement("g",{id:"support",transform:"translate(82.286 32.036)"},r.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M5342,119.424l59.526-59.393H5440.1L5342,159.262Z",transform:"translate(-5342 -60.031)"})),r.a.createElement("g",{id:"rope",transform:"translate(356 28)"},r.a.createElement("rect",{id:"Rectangle_8","data-name":"Rectangle 8",width:10,height:78})),r.a.createElement("g",{id:"face",transform:"translate(324 100)"},r.a.createElement("g",{id:"Ellipse_2","data-name":"Ellipse 2",fill:"none",stroke:"#000",strokeWidth:8},r.a.createElement("circle",{cx:37,cy:37,r:37,stroke:"none"}),r.a.createElement("circle",{cx:37,cy:37,r:33,fill:"none"})),r.a.createElement("circle",{id:"Ellipse_3","data-name":"Ellipse 3",cx:5,cy:5,r:5,transform:"translate(22 22)"}),r.a.createElement("ellipse",{id:"Ellipse_4","data-name":"Ellipse 4",cx:4,cy:5,rx:4,ry:5,transform:"translate(42 22)"}),r.a.createElement("path",{id:"Subtraction_1","data-name":"Subtraction 1",d:"M27.429,14.856H0a15.4,15.4,0,0,1,4.017-10.5,12.981,12.981,0,0,1,19.395,0,15.41,15.41,0,0,1,4.017,10.5Z",transform:"translate(22.857 40.001)"})),r.a.createElement("g",{id:"torso",transform:"translate(356 182)"},r.a.createElement("rect",{id:"Rectangle_14","data-name":"Rectangle 14",width:10,height:106}))),Ue=function(e){var t=e.svgRef,n=e.title,a=Je(e,["svgRef","title"]);return r.a.createElement("svg",De({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,Ke,Ne)},Ye=r.a.forwardRef((function(e,t){return r.a.createElement(Ue,De({svgRef:t},e))}));n.p;function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Xe=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangman7"},r.a.createElement("rect",{width:512,height:512}))),qe=r.a.createElement("g",{id:"hangman7",clipPath:"url(#clip-hangman7)"},r.a.createElement("g",{id:"base",transform:"translate(0 458)"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",width:512,height:26,transform:"translate(0 28)"}),r.a.createElement("rect",{id:"Rectangle_4","data-name":"Rectangle 4",width:10,height:54,transform:"translate(64)"})),r.a.createElement("g",{id:"vertical",transform:"translate(54)"},r.a.createElement("rect",{id:"Rectangle_5","data-name":"Rectangle 5",width:28,height:512}),r.a.createElement("rect",{id:"Rectangle_6","data-name":"Rectangle 6",width:54,height:8,transform:"translate(14 14)"})),r.a.createElement("g",{id:"horizontal",transform:"translate(64 4)"},r.a.createElement("rect",{id:"Rectangle_7","data-name":"Rectangle 7",width:394,height:28})),r.a.createElement("g",{id:"support",transform:"translate(82.286 32.036)"},r.a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M5342,119.424l59.526-59.393H5440.1L5342,159.262Z",transform:"translate(-5342 -60.031)"})),r.a.createElement("g",{id:"rope",transform:"translate(356 28)"},r.a.createElement("rect",{id:"Rectangle_8","data-name":"Rectangle 8",width:10,height:76})),r.a.createElement("g",{id:"face",transform:"translate(324 100)"},r.a.createElement("g",{id:"Ellipse_2","data-name":"Ellipse 2",fill:"none",stroke:"#000",strokeWidth:8},r.a.createElement("circle",{cx:37,cy:37,r:37,stroke:"none"}),r.a.createElement("circle",{cx:37,cy:37,r:33,fill:"none"})),r.a.createElement("circle",{id:"Ellipse_3","data-name":"Ellipse 3",cx:5,cy:5,r:5,transform:"translate(22 22)"}),r.a.createElement("ellipse",{id:"Ellipse_4","data-name":"Ellipse 4",cx:4,cy:5,rx:4,ry:5,transform:"translate(42 22)"}),r.a.createElement("path",{id:"Subtraction_1","data-name":"Subtraction 1",d:"M27.429,14.856H0a15.4,15.4,0,0,1,4.017-10.5,12.981,12.981,0,0,1,19.395,0,15.41,15.41,0,0,1,4.017,10.5Z",transform:"translate(22.857 40.001)"})),r.a.createElement("g",{id:"torso",transform:"translate(356 182)"},r.a.createElement("rect",{id:"Rectangle_14","data-name":"Rectangle 14",width:10,height:106})),r.a.createElement("g",{id:"arms",transform:"translate(291.429 104.191)"},r.a.createElement("rect",{id:"Rectangle_15","data-name":"Rectangle 15",width:9.143,height:105.143,transform:"translate(60.489 91.238) rotate(150)"}),r.a.createElement("rect",{id:"Rectangle_16","data-name":"Rectangle 16",width:9.143,height:105.143,transform:"translate(132.124 0) rotate(30)"}))),$e=function(e){var t=e.svgRef,n=e.title,a=Te(e,["svgRef","title"]);return r.a.createElement("svg",Qe({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,Xe,qe)},et=r.a.forwardRef((function(e,t){return r.a.createElement($e,Qe({svgRef:t},e))}));n.p;function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var at=r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-hangmanDead"},r.a.createElement("rect",{width:512,height:512}))),rt=r.a.createElement("g",{id:"hangmanDead",clipPath:"url(#clip-hangmanDead)"},r.a.createElement("g",{id:"face",transform:"translate(128 128)"},r.a.createElement("g",{id:"Ellipse_2","data-name":"Ellipse 2",fill:"none",stroke:"#000",strokeWidth:32},r.a.createElement("circle",{cx:128,cy:128,r:128,stroke:"none"}),r.a.createElement("circle",{cx:128,cy:128,r:112,fill:"none"})),r.a.createElement("rect",{id:"Rectangle_9","data-name":"Rectangle 9",width:96,height:16,transform:"translate(80 160)"}),r.a.createElement("path",{id:"Path_3","data-name":"Path 3",d:"M42,54H90V70H42Z",transform:"translate(91.8 4.118) rotate(45)"}),r.a.createElement("path",{id:"Path_4","data-name":"Path 4",d:"M42,54H90V70H42Z",transform:"translate(158.545 4.118) rotate(45)"}),r.a.createElement("path",{id:"Path_5","data-name":"Path 5",d:"M0,0H48V16H0Z",transform:"translate(117.256 83.314) rotate(135)"}),r.a.createElement("path",{id:"Path_6","data-name":"Path 6",d:"M0,0H48V16H0Z",transform:"translate(184 83.314) rotate(135)"}),r.a.createElement("rect",{id:"Rectangle_20","data-name":"Rectangle 20",width:16,height:32,transform:"translate(158 160)"})),r.a.createElement("g",{id:"rope",transform:"translate(240)"},r.a.createElement("rect",{id:"Rectangle_8","data-name":"Rectangle 8",width:32,height:136})),r.a.createElement("g",{id:"torso",transform:"translate(240 400)"},r.a.createElement("rect",{id:"Rectangle_14","data-name":"Rectangle 14",width:32,height:112})),r.a.createElement("g",{id:"arms",transform:"translate(149.146 400)"},r.a.createElement("path",{id:"Path_7","data-name":"Path 7",d:"M.082.007,30.77-.006l-.155,352.051-30.687.013Z",transform:"matrix(-0.985, -0.174, 0.174, -0.985, 30.303, 352.013)"}),r.a.createElement("path",{id:"Path_8","data-name":"Path 8",d:"M0,0,30.687.013l.155,352.051L.155,352.051Z",transform:"matrix(0.985, -0.174, 0.174, 0.985, 122.199, 5.316)"}))),lt=function(e){var t=e.svgRef,n=e.title,a=nt(e,["svgRef","title"]);return r.a.createElement("svg",tt({width:512,height:512,viewBox:"0 0 512 512",ref:t},a),n?r.a.createElement("title",null,n):null,at,rt)},it=r.a.forwardRef((function(e,t){return r.a.createElement(lt,tt({svgRef:t},e))}));n.p;function ct(){var e=Object(m.a)(["\n  font-family: 'Fira Code';\n\n  width: 100%;\n  justify-content: center;\n\n  padding: 2rem 0 0 0;\n  text-align: center;\n  font-size: 6vw;\n  font-weight: 900;\n\n  svg{\n    width: 8vw;\n    height: 8vw;\n  }\n\n  @media (max-width: 1200px) {\n    padding: 0.5rem 0 0.2rem 0;\n    font-size: 6vw;\n  }\n\n  @media (max-width: 480px) {\n    font-size: 8vw;\n  }\n"]);return ct=function(){return e},e}var ot=f.b.div(ct()),mt=function(e){var t,n=e.tries,a=e.isGameFinished,l=e.gameStarted;return r.a.createElement(ot,null,"==> hangman",(t=n,a?0===t?r.a.createElement(it,null):r.a.createElement(ie,null):8!==t||l?8===t?r.a.createElement(fe,null):7===t?r.a.createElement(ve,null):6===t?r.a.createElement(xe,null):5===t?r.a.createElement(Me,null):4===t?r.a.createElement(We,null):3===t?r.a.createElement(Ve,null):2===t?r.a.createElement(Ye,null):r.a.createElement(et,null):r.a.createElement(ee,null)),"<==")};function st(){var e=Object(m.a)(['\n  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css);\n\n  @import url("https://rsms.me/inter/inter.css");\n\n  width: 75%;\n  margin: auto;\n  flex-flow: column nowrap;\n  display: flex;\n\n  @media (max-width: 1200px) {\n    width: 90%;\n  }\n']);return st=function(){return e},e}var dt=f.b.div(st());function ft(){var e=O(),t=Object(a.useState)({word:e,letters:Array.from(new Set(Object(c.a)(e))),revealedMap:y(),tries:b()}),n=Object(o.a)(t,2),l=n[0],i=l.word,m=l.letters,s=l.revealedMap,f=l.tries,u=n[1],h=R(f,m),g=function(e){if(!s.get(e)){var t=new Map(s);t.set(e,!0),u({word:i,letters:i.includes(e)?m.filter((function(t){return t!==e})):m,revealedMap:t,tries:i.includes(e)?f:f-1})}},p=function(){var e=O();u({word:e,letters:Array.from(new Set(Object(c.a)(e))),revealedMap:y(),tries:b()})};return r.a.createElement(dt,null,r.a.createElement(d.a,{handleKeys:[].concat(Object(c.a)("abcdefghijklmnopqrstuvwxyz"),["enter","space"]),handleFocusableElements:!0,onKeyEvent:function(e){var t;"enter"===(t=e)||"space"===t?p():h||g(t.toUpperCase())}}),r.a.createElement(mt,{tries:f,isGameFinished:h,gameStarted:Array.from(s.values()).includes(!0)}),r.a.createElement(S,{word:i,revealed:s,isGameFinished:h}),r.a.createElement(z,{tries:f,isGameFinished:h}),r.a.createElement(Y,{isGameFinished:h,word:i,revealed:s,onLetterSelected:g}),r.a.createElement(F,{onClick:function(){return p()}}))}i.a.render(r.a.createElement(ft,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fa1f083b.chunk.js.map