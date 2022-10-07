(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{32:function(t,n,e){},41:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var i,c,r,a,o,s,l,d=e(0),j=e.n(d),b=e(10),x=e.n(b),h=(e(32),e(3)),p=e(26),g=e(4),u=e(24),O=e.n(u),f=e(25),m=e.n(f),w=e(12),v=e(13),y=Object(v.b)({name:"car",initialState:{cars:["R1","R2","R3"]},reducers:{}}),k=function(t){return t.car.cars},B=y.reducer,I=e(2);var R,S,T,z,A,C,E,J=function(){var t=Object(d.useState)(!1),n=Object(p.a)(t,2),e=n[0],i=n[1],c=Object(w.b)(k),r=function(){i(!e),document.querySelector("body").classList.toggle("hideScroll")};return Object(I.jsxs)(M,{children:[Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"/images/logo_min.png",alt:""})}),Object(I.jsx)(P,{children:c&&c.map((function(t,n){return Object(I.jsx)("a",{href:"#",children:t},n)}))}),Object(I.jsxs)(U,{children:[Object(I.jsx)("a",{href:"#",children:"Shop"}),Object(I.jsx)("a",{href:"#",children:"Rent"}),Object(I.jsx)(W,{onClick:r})]}),Object(I.jsxs)(X,{show:e,children:[Object(I.jsx)(q,{children:Object(I.jsx)(D,{onClick:r})}),c&&c.map((function(t,n){return Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"#",children:t},n)})})),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Existing Inventory"})," "]}),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Used Inventory"})," "]}),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Trade-in"})," "]}),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Components"})," "]}),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Utilities"})," "]}),Object(I.jsxs)("li",{children:[" ",Object(I.jsx)("a",{href:"#",children:"Test"})," "]})]})]})},M=g.a.div(i||(i=Object(h.a)(["\n\tposition: fixed;\n\tmin-height: 60px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 20px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1;\n\n\tbackground-color: rgba( 255, 255, 255, 0.5);\n\tbox-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);\n\n\t@media(max-width: 400px){\n\t\tmin-height: 40px;\n\t\tpadding: 0 10px;\n\t\ta{\n\t\t\timg{\n\t\t\t\twidth: 75px;\n\t\t\t}\n\t\t}\n\t}\n"]))),P=g.a.div(c||(c=Object(h.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex: 1;\n\t\n\ta{\n\t\tcolor: black;\n\t\tfont-weight: 600;\n\t\ttext-transform: uppercase;\n\t\tpadding: 0 10px;\n\t\twhite-space: nowrap;\n\t}\n\n\t@media(max-width: 768px){\n\t\tdisplay: none;\n\t}\n"]))),U=g.a.div(r||(r=Object(h.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\ta{\n\t\tcolor: black;\n\t\tfont-weight: 600;\n\t\ttext-transform: uppercase;\n\t\tmargin-right: 10px;\n\t\twhite-space: nowrap;\n\t}\n\t@media(max-width: 400px){\n\t\ta{\n\t\t\tfont-size: 12px;\n\t\t}\n\t}\n\n"]))),W=Object(g.a)(O.a)(a||(a=Object(h.a)(["\n\tcursor: pointer;\n"]))),X=g.a.div(o||(o=Object(h.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\tbackground: rgba( 255, 255, 255, 1);\n\twidth: 300px;\n\tz-index: 16;\n\tlist-style: none;\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: start;\n\n\ttransform: ",";\n\ttransition: transform 0.2s ease-in-out;\n\n\toverflow-y: scroll ;\n\t\n\tli{\n\t\tpadding: 15px 0;\n\t\tborder-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\n\t\ta{\n\t\t\tcolor: black;\n\t\t\tfont-weight: 600;\n\t\t}\n\t}\n\n\t::-webkit-scrollbar {\n  \tdisplay: none;\n\t}\n"])),(function(t){return t.show?"translateX(0)":"translateX(100%)"})),q=g.a.div(s||(s=Object(h.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]))),D=Object(g.a)(m.a)(l||(l=Object(h.a)(["\n\tcursor: pointer;\n"]))),F=e(15),L=e.n(F);var N,$=function(t){var n=t.title,e=t.description,i=t.backgroundImg,c=t.leftBtnText,r=t.rightBtnText;return Object(I.jsxs)(_,{bgImage:i,children:[" ",Object(I.jsx)(L.a,{bottom:!0,children:Object(I.jsxs)(G,{children:[Object(I.jsx)("h1",{children:n}),Object(I.jsx)("p",{children:e})]})}),Object(I.jsxs)(Y,{children:[Object(I.jsx)(L.a,{bottom:!0,children:Object(I.jsxs)(H,{children:[Object(I.jsx)(K,{children:c}),r&&Object(I.jsx)(Q,{children:r})]})}),Object(I.jsx)(V,{src:"/images/down-arrow.svg"})]})]})},_=g.a.div(R||(R=Object(h.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-size: cover; /* set size to cover */\n\tbackground-position: center; /* center the image */\n\tbackground-repeat: no-repeat; /* dont repeat the background */\n\n\tdisplay: flex;\n\tflex-direction: column; /* switch to vertical */\n\tjustify-content: space-between; /* horizontal alignment */\n\talign-items: center; /* vertical alignment */\n\n\tbackground-image: ",";\n"])),(function(t){return'url("/images/'.concat(t.bgImage,'")')})),G=g.a.div(S||(S=Object(h.a)(["\n\tpadding-top: 15vh;\n\ttext-align: center;\n"]))),H=g.a.div(T||(T=Object(h.a)(["\n\tdisplay: flex;\n\tmargin-bottom: 30px;\n\n\t@media (max-width: 768px){\n\t\tflex-direction: column;\n\t}\n"]))),K=g.a.div(z||(z=Object(h.a)(["\n\tbackground-color: rgba(23, 26, 32, 0.8);\n\theight: 40px;\n\twidth: 256px;\n\tcolor: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 100px;\n\topacity: 0.85;\n\ttext-transform: uppercase;\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tcursor: pointer;\n\tletter-spacing: 1px;\n\tmargin: 8px;\n"]))),Q=Object(g.a)(K)(A||(A=Object(h.a)(["\n\tbackground-color: white;\n\topacity: 0.65;\n\tcolor: black;\t\n"]))),V=g.a.img(C||(C=Object(h.a)(["\n\theight: 40px;\n\tanimation: animationDown infinite 1.5s;\n\toverflow-x: hidden;\n"]))),Y=g.a.div(E||(E=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"])));var Z=function(){return Object(I.jsxs)(tt,{children:[Object(I.jsx)($,{title:"R1",description:"Fully Autonomous Robotic Sweeper",backgroundImg:"render1.png",leftBtnText:"Buy",rightBtnText:"Rent"}),Object(I.jsx)($,{title:"Resilient R2",description:"Electric Push Sweeper",backgroundImg:"render3.png",leftBtnText:"Buy"}),Object(I.jsx)($,{title:"R3",description:"Manual Push Sweeper",backgroundImg:"render4.png",leftBtnText:"Buy"}),Object(I.jsx)($,{title:"Accessories",description:"",backgroundImg:"parts.png",leftBtnText:"Shop now"})]})},tt=g.a.div(N||(N=Object(h.a)(["\n\theight: 100vh;\t\n"])));e(41);var nt=function(){return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(J,{}),Object(I.jsx)(Z,{})]})},et=Object(v.a)({reducer:{car:B}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(Object(I.jsx)(j.a.StrictMode,{children:Object(I.jsx)(w.a,{store:et,children:Object(I.jsx)(nt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.82dd877c.chunk.js.map