(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[8],{1756:function(e,t,n){var i={"./af-ZA.js":[1892,44],"./ar-SA.js":[1893,45],"./ca-ES.js":[1894,46],"./cs-CZ.js":[1895,47],"./da-DK.js":[1896,48],"./de-DE.js":[1897,49],"./el-GR.js":[1898,50],"./en-US.js":[1899,51],"./es-ES.js":[1900,52],"./fi-FI.js":[1901,53],"./fr-FR.js":[1902,54],"./he-IL.js":[1903,55],"./hu-HU.js":[1904,56],"./id-ID.js":[1905,57],"./it-IT.js":[1906,58],"./ja-JP.js":[1907,59],"./ko-KR.js":[1908,60],"./nl-NL.js":[1909,61],"./no-NO.js":[1910,62],"./pl-PL.js":[1911,63],"./pseudo.js":[1912,64],"./pt-BR.js":[1913,65],"./pt-PT.js":[1914,66],"./ro-RO.js":[1915,67],"./ru-RU.js":[1916,68],"./sr-SP.js":[1917,69],"./sv-SE.js":[1918,70],"./sw-TZ.js":[1919,71],"./tr-TR.js":[1920,72],"./uk-UA.js":[1921,73],"./vi-VN.js":[1922,74],"./zh-CN.js":[1923,75],"./zh-TW.js":[1924,76]};function c(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(i)},c.id=1756,e.exports=c},1939:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return kn}));var i,c=n(38),o=n(3),r=n(1722),a=n(24),s=n(111),d=n(4),l=n(131),u=n(59),f=n(2),p=n.n(f),h=n(19),x=n(5),j=n(34),b=n(10),g=n(6),m=n(9),O=n(440),w=n(1);function v(e){var t=e.address,n=Object(w.useState)(null),c=Object(b.a)(n,2),o=c[0],r=c[1],a=Object(w.useState)(null),s=Object(b.a)(a,2),d=s[0],l=s[1],u=Object(w.useState)(!1),f=Object(b.a)(u,2),v=f[0],y=f[1],k=Object(O.gql)(i||(i=Object(j.a)([""])));return Object(w.useEffect)((function(){var e,n=(e={},Object(x.a)(e,m.f.ARBITRUM_ONE,g.CurrencyAmount.fromRawAmount(new g.Token(m.f.ARBITRUM_ONE,t,18),1e19)),Object(x.a)(e,m.f.MAINNET,g.CurrencyAmount.fromRawAmount(new g.Token(m.f.MAINNET,t,18),1e18)),Object(x.a)(e,m.f.RINKEBY,g.CurrencyAmount.fromRawAmount(new g.Token(m.f.RINKEBY,t,9),1e19)),e),i=function(){var e=Object(h.a)(p.a.mark((function e(t){var i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e,t){return new Promise((function(n){return setTimeout(n,e+Math.round(Math.random()*Math.max(0,t-e)))}))},e.prev=1,console.log("useNetworkTokenBalances.fetchNetworkTokenBalances",k),y(!0),l(null),console.log("useNetworkTokenBalances.fetchNetworkTokenBalances",t),e.next=8,i(250,2e3);case 8:if(!(Math.random()<.05)){e.next=10;break}throw new Error("fake error");case 10:return e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(1),l("something went wrong");case 16:return e.prev=16,y(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(t){return e.apply(this,arguments)}}();y(!0),l(null),i(t).then((function(e){e&&r(e)})).catch((function(e){return l(e)})).finally((function(){return y(!1)}))}),[t,k]),{data:o,error:d,loading:v}}var y=n(1567),k=n(86),C=n(0),I=o.default.div.withConfig({componentId:"sc-vs77k9-0"})(["width:100%;display:flex;flex-direction:column;font-size:16px;line-height:20px;"]),z=o.default.div.withConfig({componentId:"sc-vs77k9-1"})(["display:flex;"]),S=o.default.div.withConfig({componentId:"sc-vs77k9-2"})(["display:flex;justify-content:space-between;"]),T=o.default.img.withConfig({componentId:"sc-vs77k9-3"})(["height:32px;width:32px;margin-right:8px;"]),E=o.default.span.withConfig({componentId:"sc-vs77k9-4"})(["font-size:12px;line-height:16px;font-weight:500;color:",";"],(function(e){return e.color})),A=o.default.div.withConfig({componentId:"sc-vs77k9-5"})(["display:flex;padding-top:16px;align-items:center;"]);function M(e){var t=e.logoUrl,n=e.balance,i=e.tokenSymbol,c=e.fiatValue,o=e.label,r=e.networkColor,a=Object(k.a)();return Object(C.jsxs)(A,{children:[Object(C.jsx)(T,{src:t}),Object(C.jsxs)(I,{children:[Object(C.jsxs)(S,{children:[Object(C.jsxs)(z,{children:[n,"\xa0",i]}),Object(C.jsxs)(z,{children:["$",c]})]}),Object(C.jsx)(E,{color:null!==r&&void 0!==r?r:a.textPrimary,children:o})]})]})}var P=o.default.div.withConfig({componentId:"sc-q4z8fs-0"})(["width:284px;height:fit-content;color:",";font-size:12px;line-height:20px;padding:20px;background-color:",";border-radius:12px;border:1px solid ",";"],(function(e){return e.theme.textPrimary}),(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline})),q=o.default.div.withConfig({componentId:"sc-q4z8fs-1"})(["display:flex;align-items:center;gap:12px;color:",";font-weight:500;font-size:14px;line-height:20px;"],(function(e){return e.theme.textSecondary})),N=o.default.span.withConfig({componentId:"sc-q4z8fs-2"})(["display:flex;flex-wrap:wrap;"]),R=o.default.div.withConfig({componentId:"sc-q4z8fs-3"})(["height:fit-content;"]),D=o.default.div.withConfig({componentId:"sc-q4z8fs-4"})(["height:fit-content;border-bottom:1px solid ",";margin-bottom:20px;padding-bottom:20px;"],(function(e){return e.theme.backgroundOutline})),F=o.default.div.withConfig({componentId:"sc-q4z8fs-5"})(["display:flex;justify-content:space-between;font-size:20px;line-height:28px;margin-top:12px;align-items:center;"]),B=o.default.div.withConfig({componentId:"sc-q4z8fs-6"})(["display:flex;"]);function U(e){var t,n=e.address,i=e.networkBalances,c=e.totalBalance,r=(Object(o.useTheme)(),null===(t=Object(u.f)(n))||void 0===t?void 0:t.symbol),s=v({address:n}),f=s.loading,p=s.error,h=s.data,x=Object(a.useWeb3React)().chainId,j=Object(l.c)(x);j.label,j.logoUrl;return f?null:Object(C.jsx)(P,{children:p?Object(C.jsxs)(q,{children:[Object(C.jsx)(y.a,{size:24}),Object(C.jsx)(N,{children:Object(C.jsx)(d.b,{id:"There was an error loading your {tokenSymbol} balance",values:{tokenSymbol:r}})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(D,{children:["Your balance across all networks",Object(C.jsxs)(F,{children:[Object(C.jsx)(B,{children:"".concat(c," ").concat(r)}),Object(C.jsx)(B,{children:"$4,210.12"})]})]}),Object(C.jsx)(R,{children:"Your balances by network"}),h&&i]})})}var L=n(371),W="56px",H=o.default.div.withConfig({componentId:"sc-i7e5qx-0"})(["height:fit-content;border:1px solid ",";background-color:",";border-radius:20px 20px 0px 0px;padding:12px 16px;font-weight:500;font-size:14px;line-height:20px;width:100%;color:",";position:fixed;left:0;bottom:",";display:flex;flex-direction:column;align-content:center;"],(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.textSecondary}),W),J=o.default.div.withConfig({componentId:"sc-i7e5qx-1"})(["font-size:20px;line-height:28px;display:flex;gap:8px;"]),Y=o.default.div.withConfig({componentId:"sc-i7e5qx-2"})(["display:flex;flex-wrap:wrap;gap:8px;color:",";"],(function(e){return e.theme.textPrimary})),$=o.default.div.withConfig({componentId:"sc-i7e5qx-3"})(["display:flex;justify-content:flex-start;flex-direction:column;"]),V=o.default.div.withConfig({componentId:"sc-i7e5qx-4"})(["position:fixed;bottom:0px;left:0px;background-color:",";height:",";width:100%;align-items:flex-end;padding:20px 8px;font-size:10px;"],(function(e){return e.theme.backgroundBackdrop}),W),_=o.default.span.withConfig({componentId:"sc-i7e5qx-5"})(["display:flex;align-self:flex-end;font-size:12px;line-height:24px;@media only screen and (max-width:","){line-height:16px;}"],s.e),G=o.default.div.withConfig({componentId:"sc-i7e5qx-6"})(["height:fit-content;border-top:1px solid ",";display:flex;flex-direction:column;padding:16px 0px 8px 0px;margin-top:16px;color:",";"],(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.textPrimary})),K=o.default.span.withConfig({componentId:"sc-i7e5qx-7"})(["color:",";"],(function(e){return e.theme.textSecondary})),Z=o.default.button.withConfig({componentId:"sc-i7e5qx-8"})(["background-color:",";border-radius:12px;display:flex;align-items:center;border:none;color:",";padding:12px 16px;width:120px;height:44px;font-size:16px;font-weight:600;justify-content:center;"],(function(e){return e.theme.accentAction}),(function(e){return e.theme.textPrimary})),Q=o.default.div.withConfig({componentId:"sc-i7e5qx-9"})(["display:flex;color:",";justify-content:space-between;align-items:center;"],(function(e){return e.theme.textSecondary})),X=(o.default.span.withConfig({componentId:"sc-i7e5qx-10"})(["display:flex;color:",";font-size:14px;line-height:20px;cursor:pointer;"],(function(e){return e.theme.accentAction})),o.default.div.withConfig({componentId:"sc-i7e5qx-11"})(["display:flex;align-items:center;gap:8px;padding-right:8px;"])),ee=o.default.div.withConfig({componentId:"sc-i7e5qx-12"})(["display:flex;flex-direction:column;gap:12px;"]),te=Object(o.default)(L.a).withConfig({componentId:"sc-i7e5qx-13"})(["height:12px;width:172px;"]),ne=Object(o.default)(L.a).withConfig({componentId:"sc-i7e5qx-14"})(["height:16px;width:188px;"]),ie=o.default.span.withConfig({componentId:"sc-i7e5qx-15"})(["display:flex;flex-wrap:wrap;"]);function ce(e){var t,n=e.address,i=e.networkBalances,c=e.totalBalance,o=null===(t=Object(u.f)(n))||void 0===t?void 0:t.symbol,r=Object(w.useState)(!1),a=Object(b.a)(r,2),s=a[0],d=(a[1],v({address:n})),l=d.loading,f=d.error;return Object(C.jsxs)(H,{children:[Object(C.jsxs)(Q,{children:[l?Object(C.jsxs)(ee,{children:[Object(C.jsx)(te,{}),Object(C.jsx)(ne,{})]}):f?Object(C.jsxs)(X,{children:[Object(C.jsx)(y.a,{size:17}),Object(C.jsx)(ie,{children:"There was an error fetching your balance"})]}):Object(C.jsxs)($,{children:["Your balance on ".concat("Ethereum"),Object(C.jsxs)(Y,{children:[Object(C.jsxs)(J,{children:[c," ",o]}),Object(C.jsx)(_,{children:"($107, 610.04)"})]}),false]}),Object(C.jsx)(Z,{onClick:function(){return window.location.href="https://app.uniswap.org/#/swap"},children:"Swap"})]}),s&&Object(C.jsxs)(G,{children:[Object(C.jsx)(K,{children:"Your balances by network"})," ",i]}),Object(C.jsx)(V,{children:"**leaving space for updated nav footer**"})]})}var oe=n(1940),re=n(1942),ae=n(1941),se=n(1934),de=n(134),le=n(138),ue=n(291),fe=n(309),pe=n(163),he=n(1632),xe=n(1654),je=n(8),be=function(e,t,n){return new Date(1e3*e.valueOf()).toLocaleTimeString(t,n)},ge=function(e){return function(t){return be(t,e,{hour:"numeric",minute:"numeric",hour12:!0})}},me=function(e){return function(t){return be(t,e,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}},Oe=function(e,t,n){return new Date(1e3*e.valueOf()).toLocaleDateString(t,n)},we=function(e){return function(t){return Oe(t,e,{month:"long",day:"numeric"})}},ve=function(e){return function(t){return Oe(t,e,{month:"long",year:"numeric"})}},ye=function(e){return function(t){return Oe(t,e,{month:"short",year:"numeric",day:"numeric"})}},ke=function(e){return function(t){return Oe(t,e,{month:"long"})}},Ce=function(e){return function(t){return Oe(t,e,{weekday:"long"})}},Ie=n(893),ze=n(894),Se=[[fe.a.hour,"1H"],[fe.a.day,"1D"],[fe.a.week,"1W"],[fe.a.month,"1M"],[fe.a.year,"1Y"],[fe.a.all,"All"]];var Te=Object(o.default)(he.a).withConfig({componentId:"sc-1wxr3hb-0"})(["color:",";"],(function(e){return e.theme.accentSuccess})),Ee=Object(o.default)(xe.a).withConfig({componentId:"sc-1wxr3hb-1"})(["color:",";"],(function(e){return e.theme.accentFailure}));var Ae=o.default.div.withConfig({componentId:"sc-1wxr3hb-2"})(["position:absolute;"]),Me=o.default.span.withConfig({componentId:"sc-1wxr3hb-3"})(["font-size:36px;line-height:44px;"]),Pe=o.default.div.withConfig({componentId:"sc-1wxr3hb-4"})(["height:16px;display:flex;align-items:center;"]),qe=o.default.div.withConfig({componentId:"sc-1wxr3hb-5"})(["padding-left:2px;display:flex;"]),Ne=o.default.div.withConfig({componentId:"sc-1wxr3hb-6"})(["display:flex;justify-content:flex-end;"]),Re=o.default.div.withConfig({componentId:"sc-1wxr3hb-7"})(["display:flex;justify-content:flex-end;margin-top:4px;gap:4px;border:1px solid ",";border-radius:16px;height:40px;padding:4px;width:fit-content;"],(function(e){return e.theme.backgroundOutline})),De=o.default.button.withConfig({componentId:"sc-1wxr3hb-8"})(["background-color:",";font-weight:600;font-size:16px;padding:6px 12px;border-radius:12px;line-height:20px;border:none;cursor:pointer;color:",";:hover{","}"],(function(e){var t=e.theme;return e.active?t.backgroundInteractive:"transparent"}),(function(e){var t=e.theme;return e.active?t.textPrimary:t.textSecondary}),(function(e){return!e.active&&"opacity: ".concat(je.q,";")}));function Fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return Array.from({length:n},(function(i,c){return t-(t-e)/(n+1)*(c+1)}))}var Be=86,Ue=48,Le=72;var We=function(e){var t=e.width,n=e.height,i=Object(pe.useAtom)(de.d),o=Object(b.a)(i,2),r=o[0],a=o[1],s=Object(ue.c)(),d=Object(k.a)(),l=Ie[r],u=l[0],f=l[l.length-1],p={pricePoint:f,xCoordinate:null},h=Object(w.useState)(p),x=Object(b.a)(h,2),j=x[0],g=x[1],m=t+80,O=n-44,v=O-Be-Ue,y=Object(le.i)().domain([u.timestamp,f.timestamp]).range([0,t]),I=Object(le.i)().domain(function(e){var t=e.map((function(e){return e.value}));return[Math.min.apply(Math,Object(c.a)(t)),Math.max.apply(Math,Object(c.a)(t))]}(l)).range([v,0]),z=Object(w.useCallback)((function(e){var t=(Object(re.a)(e)||{x:0}).x,n=y.invert(t),i=Object(le.c)(l.map((function(e){return e.timestamp})),n,1),c=l[i-1],o=l[i],r=c;o&&o.timestamp&&(r=n.valueOf()-c.timestamp.valueOf()>o.timestamp.valueOf()-n.valueOf()?o:c),g({pricePoint:r,xCoordinate:y(r.timestamp)})}),[y,l]),S=function(e,t,n,i){switch(n){case fe.a.hour:case fe.a.day:return[ge(i),me(i),Fe(e,t)];case fe.a.week:return[Ce(i),me(i),Fe(e,t,6)];case fe.a.month:return[we(i),me(i),Fe(e,t)];case fe.a.year:return[ke(i),ye(i),Fe(e,t)];case fe.a.all:return[ve(i),ye(i),Fe(e,t)]}}(u.timestamp,f.timestamp,r,s),T=Object(b.a)(S,3),E=T[0],A=T[1],M=T[2],P=function(e,t){var n=100*(t/e-1),i=Math.sign(n)>0,c=n.toFixed(2)+"%";return i?["+"+c,Object(C.jsx)(Te,{size:16},"arrow-up")]:0===n?[c,null]:[c,Object(C.jsx)(Ee,{size:16},"arrow-down")]}(u.value,j.pricePoint.value),q=Object(b.a)(P,2),N=q[0],R=q[1],D=.97*t,F=!!j.xCoordinate&&j.xCoordinate>D;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(Ae,{children:[Object(C.jsxs)(Me,{children:["$",j.pricePoint.value.toFixed(2)]}),Object(C.jsxs)(Pe,{children:[N,Object(C.jsx)(qe,{children:R})]})]}),Object(C.jsxs)(ze.a,{data:l,getX:function(e){return y(e.timestamp)},getY:function(e){return I(e.value)},marginTop:Be,curve:r===fe.a.all?le.e:void 0,strokeWidth:2,width:m,height:O,children:[null!==j.xCoordinate?Object(C.jsxs)("g",{children:[Object(C.jsx)(oe.a,{scale:y,stroke:d.backgroundOutline,tickFormat:E,tickStroke:d.backgroundOutline,tickLength:4,tickTransform:"translate(0 -5)",tickValues:M,top:O-1,tickLabelProps:function(){return{fill:d.textSecondary,fontSize:12,textAnchor:"middle",transform:"translate(0 -24)"}}}),Object(C.jsx)("text",{x:j.xCoordinate+(F?-4:4),y:Le+10,textAnchor:F?"end":"start",fontSize:12,fill:d.textSecondary,children:A(j.pricePoint.timestamp)}),Object(C.jsx)(se.a,{from:{x:j.xCoordinate,y:Le},to:{x:j.xCoordinate,y:O},stroke:d.backgroundOutline,strokeWidth:1,pointerEvents:"none",strokeDasharray:"4,4"}),Object(C.jsx)(ae.a,{left:j.xCoordinate,top:I(j.pricePoint.value)+Be,size:50,fill:d.accentActive,stroke:d.backgroundOutline,strokeWidth:2})]}):Object(C.jsx)(oe.a,{scale:y,stroke:d.backgroundOutline,top:O-1,hideTicks:!0}),Object(C.jsx)("rect",{x:0,y:0,width:t,height:O,fill:"transparent",onTouchStart:z,onTouchMove:z,onMouseMove:z,onMouseLeave:function(){return g(p)}})]}),Object(C.jsx)(Ne,{children:Object(C.jsx)(Re,{children:Se.map((function(e){var t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(C.jsx)(De,{active:r===n,onClick:function(){return a(n)},children:i},i)}))})})]})},He=n(1673),Je=n(67),Ye=n(907),$e=n(875),Ve=n(210),_e=n(128),Ge=n(1645),Ke=n(1566),Ze=n(65),Qe=n(96),Xe=n(469),et=n(61),tt=Object(o.default)(je.i).withConfig({componentId:"sc-nf1mzc-0"})(["display:flex;color:",";font-weight:500;font-size:14px;line-height:20px;gap:4px;text-decoration:none;&:hover,&:focus{color:",";text-decoration:none;}"],(function(e){return e.theme.accentAction}),(function(e){var t=e.theme;return Object(et.a)(.1,t.accentAction)}));function nt(e){var t=e.name,n=e.link;return Object(C.jsxs)(tt,{href:n,children:[t,Object(C.jsx)("sup",{children:"\u2197"})]})}var it,ct=n(248),ot=n(1935),rt=n(70),at=n(69),st=n(36),dt=n(106),lt=["title","titleId"];function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ut.apply(this,arguments)}function ft(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function pt(e,t){var n=e.title,i=e.titleId,c=ft(e,lt);return w.createElement("svg",ut({xmlns:"http://www.w3.org/2000/svg",width:22,height:22,fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"#fff",ref:t,"aria-labelledby":i},c),n?w.createElement("title",{id:i},n):null,it||(it=w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7-5-5-5 5m5-5v12"})))}var ht=w.forwardRef(pt),xt=(n.p,o.default.div.withConfig({componentId:"sc-1x925ti-0"})(["display:flex;position:relative;"])),jt=Object(o.default)(ht).withConfig({componentId:"sc-1x925ti-1"})(["stroke:",";height:24px;width:24px;"," ",";"],(function(e){return e.theme.textSecondary}),je.c,(function(e){return e.open&&"opacity: ".concat(je.p," !important")})),bt=o.default.div.withConfig({componentId:"sc-1x925ti-2"})(["position:absolute;z-index:",";width:240px;top:36px;right:0px;justify-content:center;display:flex;flex-direction:column;overflow:auto;padding:8px;background-color:",";border:0.5px solid ",";box-shadow:",";border-radius:12px;"],je.y.dropdown,(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.flyoutDropShadow})),gt=o.default.div.withConfig({componentId:"sc-1x925ti-3"})(["display:flex;align-items:center;padding:8px;border-radius:8px;font-size:16px;font-weight:400;gap:12px;height:40px;color:",";cursor:pointer;:hover{background-color:",";}"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme;return Object(dt.a)(10,t.darkMode?st.a.gray200:st.a.gray300)}));function mt(e){var t=Object(o.useTheme)(),n=Object(w.useRef)(null),i=Object(rt.d)(at.a.SHARE),c=Object(rt.k)(at.a.SHARE);Object(ct.a)(n,i?c:void 0);var r=(window.screen.width-560)/2,a=(window.screen.height-480)/2,s=Object(w.useRef)(null);return Object(C.jsxs)(xt,{ref:n,children:[Object(C.jsx)(jt,{onClick:c,"aria-label":"ShareOptions",open:i}),i&&Object(C.jsxs)(bt,{children:[Object(C.jsx)(gt,{onClick:function(){var e;return null===(e=s.current)||void 0===e?void 0:e.forceCopy()},children:Object(C.jsx)(je.f,{link:!0,color:t.textPrimary,iconPosition:"left",toCopy:window.location.href,ref:s,children:"Copy Link"})}),Object(C.jsxs)(gt,{onClick:function(){c(),window.open("https://twitter.com/intent/tweet?text=Check%20out%20".concat(e.tokenName,"%20(").concat(e.tokenSymbol,")%20https://app.uniswap.org/%23/tokens/").concat(e.tokenSymbol,"%20via%20@uniswap"),"newwindow","left=".concat(r,", top=").concat(a,", width=").concat(560,", height=").concat(480))},children:[Object(C.jsx)(ot.a,{color:t.textPrimary,size:20,strokeWidth:1.5}),"Share to Twitter"]})]})]})}var Ot=o.default.div.withConfig({componentId:"sc-19zgvsz-0"})(["display:flex;flex-direction:column;gap:16px;padding:24px 0px;"]),wt=o.default.span.withConfig({componentId:"sc-19zgvsz-1"})(["font-size:28px;line-height:36px;"]),vt=Object(o.default)(Ze.b).withConfig({componentId:"sc-19zgvsz-2"})(["display:flex;color:",";font-size:14px;line-height:20px;align-items:center;gap:4px;text-decoration:none;margin-bottom:16px;&:hover{color:",";}"],(function(e){return e.theme.textSecondary}),(function(e){return e.theme.textTertiary})),yt=o.default.div.withConfig({componentId:"sc-19zgvsz-3"})(["width:100%;display:flex;flex-direction:column;color:",";gap:4px;margin-bottom:24px;"],(function(e){return e.theme.textPrimary})),kt=o.default.button.withConfig({componentId:"sc-19zgvsz-4"})(["display:flex;color:",";gap:10px;align-items:center;background:transparent;border:none;padding:0px;cursor:pointer;"],(function(e){return e.theme.textPrimary})),Ct=o.default.div.withConfig({componentId:"sc-19zgvsz-5"})(["padding:24px 0px;"]),It=o.default.div.withConfig({componentId:"sc-19zgvsz-6"})(["display:flex;flex-direction:column;color:",";font-size:14px;gap:4px;"],(function(e){return e.theme.textSecondary})),zt=o.default.div.withConfig({componentId:"sc-19zgvsz-7"})(["display:flex;height:436px;align-items:center;"]),St=o.default.div.withConfig({componentId:"sc-19zgvsz-8"})(["display:flex;flex-direction:column;color:",";font-size:14px;min-width:168px;flex:1;gap:4px;padding:24px 0px;"],(function(e){return e.theme.textSecondary})),Tt=o.default.span.withConfig({componentId:"sc-19zgvsz-9"})(["font-size:28px;color:",";"],(function(e){return e.theme.textPrimary})),Et=o.default.div.withConfig({componentId:"sc-19zgvsz-10"})(["display:flex;flex-wrap:wrap;"]),At=o.default.div.withConfig({componentId:"sc-19zgvsz-11"})(["display:flex;flex:1;flex-wrap:wrap;"]),Mt=o.default.div.withConfig({componentId:"sc-19zgvsz-12"})(["display:flex;gap:8px;font-size:20px;line-height:28px;align-items:center;"]),Pt=o.default.div.withConfig({componentId:"sc-19zgvsz-13"})(["display:flex;gap:16px;color:",";"],(function(e){return e.theme.textSecondary})),qt=o.default.div.withConfig({componentId:"sc-19zgvsz-14"})(["display:flex;justify-content:space-between;align-items:center;"]),Nt=o.default.span.withConfig({componentId:"sc-19zgvsz-15"})(["color:",";"],(function(e){return e.theme.textSecondary})),Rt=o.default.div.withConfig({componentId:"sc-19zgvsz-16"})(["max-width:832px;"]),Dt=o.default.div.withConfig({componentId:"sc-19zgvsz-17"})(["display:flex;gap:14px;"]),Ft=o.default.div.withConfig({componentId:"sc-19zgvsz-18"})(["border-radius:5px;padding:4px 8px;font-weight:600;font-size:12px;line-height:12px;color:",";background-color:",";"],(function(e){var t=e.theme,n=e.networkColor;return null!==n&&void 0!==n?n:t.textPrimary}),(function(e){var t=e.theme,n=e.backgroundColor;return null!==n&&void 0!==n?n:t.backgroundSurface})),Bt=Object(o.default)(Ge.a).withConfig({componentId:"sc-19zgvsz-19"})([""," height:22px;width:24px;color:",";fill:",";"],je.c,(function(e){var t=e.isFavorited,n=e.theme;return t?n.accentAction:n.textSecondary}),(function(e){var t=e.isFavorited,n=e.theme;return t?n.accentAction:"transparent"}));function Ut(e){var t=e.address,n=Object(u.f)(t),i=Object(u.b)(t),c=Object(_e.useAtomValue)(de.a).includes(t),o=Object(de.i)(t),r=Object(Ve.c)(t),a=Object(Qe.g)(),s=Object(u.d)(n),f=Object(w.useState)(!!r&&!s),p=Object(b.a)(f,2),h=p[0],x=p[1],j=Object(w.useCallback)((function(){x(!1)}),[x]),g=Object(l.b)(null===n||void 0===n?void 0:n.chainId),m=null===g||void 0===g?void 0:g.label,O=null===g||void 0===g?void 0:g.backgroundColor;if(!n||!n.name||!n.symbol)return Object(C.jsx)("div",{children:"No Token"});var v=n.name,y=n.symbol;return Object(C.jsxs)(Rt,{children:[Object(C.jsxs)(vt,{to:"/explore",children:[Object(C.jsx)(Ke.a,{size:14})," Explore"]}),Object(C.jsxs)(yt,{children:[Object(C.jsxs)(qt,{children:[Object(C.jsxs)(Mt,{children:[Object(C.jsx)(Je.a,{currency:i,size:"32px"}),v," ",Object(C.jsx)(Nt,{children:y}),!r&&Object(C.jsx)(Ye.a,{size:"20px"}),O&&Object(C.jsx)(Ft,{networkColor:null===g||void 0===g?void 0:g.color,backgroundColor:O,children:m})]}),Object(C.jsxs)(Pt,{children:[Object(C.jsx)(mt,{tokenName:v,tokenSymbol:y}),Object(C.jsx)(Xe.a,{onClick:o,children:Object(C.jsx)(Bt,{isFavorited:c})})]})]}),Object(C.jsx)(zt,{children:Object(C.jsx)(He.a,{children:function(e){var t=e.width,n=e.height;return Object(C.jsx)(We,{width:t,height:n})}})})]}),Object(C.jsxs)(Ot,{children:[Object(C.jsx)(wt,{children:Object(C.jsx)(d.b,{id:"About"})}),"Ethereum is a decentralized computing platform that uses ETH (Ether) to pay transaction fees (gas). Developers can use Ethereum to run decentralized applications (dApps) and issue new crypto assets, known as Ethereum tokens.",Object(C.jsxs)(Dt,{children:[Object(C.jsx)(nt,{name:"Etherscan",link:"https://etherscan.io/"}),Object(C.jsx)(nt,{name:"Protocol Info",link:"https://info.uniswap.org/#/tokens/".concat(t)})]})]}),Object(C.jsxs)(Et,{children:[Object(C.jsxs)(At,{children:[Object(C.jsxs)(St,{children:["Market cap",Object(C.jsxs)(Tt,{children:["$","23.02B"]})]}),Object(C.jsxs)(St,{children:["24H volume",Object(C.jsxs)(Tt,{children:["$","1.6B"]})]})]}),Object(C.jsxs)(At,{children:[Object(C.jsxs)(St,{children:["52W low",Object(C.jsx)(Tt,{children:"$1,790.01"})]}),Object(C.jsxs)(St,{children:["52W high",Object(C.jsx)(Tt,{children:"$4,420.71"})]})]})]}),Object(C.jsx)(Ct,{children:Object(C.jsxs)(It,{children:["Contract Address",Object(C.jsx)(kt,{children:Object(C.jsx)(je.e,{address:t})})]})}),Object(C.jsx)($e.a,{isOpen:h,tokenAddress:t,onCancel:function(){return a(-1)},onContinue:j})]})}var Lt=Object(o.default)(zt).withConfig({componentId:"sc-1cpvv9r-0"})(["height:336px;overflow:hidden;"]),Wt=Object(o.default)(L.a).withConfig({componentId:"sc-1cpvv9r-1"})(["height:16px;width:180px;"]),Ht=Object(o.default)(Wt).withConfig({componentId:"sc-1cpvv9r-2"})(["width:140px;"]),Jt=Object(o.default)(Wt).withConfig({componentId:"sc-1cpvv9r-3"})(["height:32px;border-radius:8px;margin-top:4px;"]),Yt=Object(o.default)(Jt).withConfig({componentId:"sc-1cpvv9r-4"})(["height:40px;"]),$t=Object(o.default)(Wt).withConfig({componentId:"sc-1cpvv9r-5"})(["width:100%;"]),Vt=Object(o.default)(Wt).withConfig({componentId:"sc-1cpvv9r-6"})(["width:50%;"]),_t=Object(o.default)(Wt).withConfig({componentId:"sc-1cpvv9r-7"})(["width:32px;height:32px;border-radius:50%;"]),Gt=Object(o.default)(Jt).withConfig({componentId:"sc-1cpvv9r-8"})(["width:116px;"]),Kt=o.default.div.withConfig({componentId:"sc-1cpvv9r-9"})(["display:flex;gap:24px;flex-wrap:wrap;"]),Zt=o.default.div.withConfig({componentId:"sc-1cpvv9r-10"})(["display:flex;animation:wave 8s cubic-bezier(0.36,0.45,0.63,0.53) infinite;overflow:hidden;@keyframes wave{0%{margin-left:0;}100%{margin-left:-800px;}}"]),Qt=o.default.div.withConfig({componentId:"sc-1cpvv9r-11"})(["height:",";"],(function(e){var t=e.heightSize;return"".concat(t,"px")}));function Xt(){var e=Object(k.a)();return Object(C.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:Object(C.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.backgroundOutline,fill:"transparent",strokeWidth:"2"})})}function en(){return Object(C.jsxs)(Rt,{children:[Object(C.jsx)(vt,{to:"/explore",children:Object(C.jsx)(Qt,{heightSize:20})}),Object(C.jsxs)(yt,{children:[Object(C.jsx)(qt,{children:Object(C.jsxs)(Mt,{children:[Object(C.jsx)(_t,{}),Object(C.jsx)(Ht,{})]})}),Object(C.jsx)(Me,{children:Object(C.jsx)(Yt,{})}),Object(C.jsx)(Pe,{children:Object(C.jsx)(Qt,{heightSize:20})}),Object(C.jsx)(Lt,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(Zt,{children:[Object(C.jsx)(Xt,{}),Object(C.jsx)(Xt,{}),Object(C.jsx)(Xt,{}),Object(C.jsx)(Xt,{}),Object(C.jsx)(Xt,{})]})})}),Object(C.jsx)(Qt,{heightSize:32})]}),Object(C.jsxs)(Ot,{children:[Object(C.jsx)(wt,{children:Object(C.jsx)(Jt,{})}),Object(C.jsx)($t,{}),Object(C.jsx)($t,{}),Object(C.jsx)(Vt,{}),Object(C.jsx)(Dt,{children:null})]}),Object(C.jsx)(Et,{children:Object(C.jsxs)(Kt,{children:[Object(C.jsxs)(At,{children:[Object(C.jsxs)(St,{children:[Object(C.jsx)(Vt,{}),Object(C.jsx)(Gt,{})]}),Object(C.jsxs)(St,{children:[Object(C.jsx)(Vt,{}),Object(C.jsx)(Gt,{})]})]}),Object(C.jsxs)(At,{children:[Object(C.jsxs)(St,{children:[Object(C.jsx)(Vt,{}),Object(C.jsx)(Gt,{})]}),Object(C.jsxs)(St,{children:[Object(C.jsx)(Vt,{}),Object(C.jsx)(Gt,{})]})]})]})}),Object(C.jsx)(Ct,{children:null})]})}var tn=n(556),nn=n(1631),cn=n(32),on=o.default.div.withConfig({componentId:"sc-cvfme0-0"})(["width:284px;padding:12px 20px;background-color:",";border-radius:16px;color:",";"],(function(e){return e.color+"1F"}),(function(e){return e.color})),rn=o.default.div.withConfig({componentId:"sc-cvfme0-1"})(["align-items:center;font-weight:700;display:inline-flex;"]),an=Object(o.default)(cn.b).withConfig({componentId:"sc-cvfme0-2"})(["font-weight:600;font-size:16px;line-height:24px;margin-left:7px;"]),sn=o.default.div.withConfig({componentId:"sc-cvfme0-3"})(["margin-top:8px;font-size:12px;color:",";"],(function(e){return e.theme.textSecondary}));function dn(e){var t=e.warning,n=e.tokenAddress,i=Object(tn.a)(t.level),c=Object(Ve.d)(t),o=c.heading,r=c.description;return Object(C.jsxs)(on,{color:i,children:[Object(C.jsxs)(rn,{children:[t.canProceed?Object(C.jsx)(y.a,{size:"16px"}):Object(C.jsx)(nn.a,{size:"16px"}),Object(C.jsx)(an,{marginLeft:"7px",children:t.message})]}),Object(C.jsxs)(sn,{children:[o&&[o,". "],r,n&&Object(C.jsxs)(je.i,{href:Ve.a,children:[" ",Object(C.jsx)(d.b,{id:"Learn more"})]})]})]})}var ln,un,fn=n(1767);!function(e){e[e.USD=0]="USD"}(ln||(ln={})),function(e){e.hour="hour",e.day="day",e.week="week",e.month="month",e.year="year",e.max="max"}(un||(un={}));var pn={priceHistory:Object(x.a)({},m.f.MAINNET,[{id:"string",currency:ln.USD,priceInCurrency:1e3,timestamp:"Sat Jul 23 2022 08:35:30 GMT-0000"},{id:"string",currency:ln.USD,priceInCurrency:1100,timestamp:"Sat Jul 23 2022 09:35:30 GMT-0000"},{id:"string",currency:ln.USD,priceInCurrency:900,timestamp:"Sat Jul 23 2022 10:35:30 GMT-0000"}]),links:[{name:"github",url:"https://github.com/JFrankfurt",displayable_name:"Github"},{name:"twitter",url:"https://twitter.com/JordanFrankfurt",displayable_name:"Twitter"}],marketCap:1e9,volume:Object(x.a)({},un.day,1e6)},hn=function(e){var t=Object(w.useState)(null),n=Object(b.a)(t,2),i=n[0],c=n[1],o=Object(w.useState)(null),r=Object(b.a)(o,2),a=r[0],s=r[1],d=Object(w.useState)(!1),l=Object(b.a)(d,2),u=l[0],f=l[1],x=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e,t){return new Promise((function(n){return setTimeout(n,e+Math.round(Math.random()*Math.max(0,t-e)))}))},e.prev=1,f(!0),s(null),e.next=6,n(250,2e3);case 6:if(!(Math.random()<.05)){e.next=8;break}throw new Error("fake error");case 8:return console.log("fetchTokenDetails",t),e.abrupt("return",pn);case 12:e.prev=12,e.t0=e.catch(1),s("something went wrong");case 15:return e.prev=15,f(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.useEffect)((function(){e&&Object(fn.isAddress)(e)&&(f(!0),s(null),x(e).then((function(e){e&&c(e)})).catch((function(e){return s(e)})).finally((function(){return f(!1)})))}),[e]),{data:i,error:a,loading:u}},xn=n(66),jn={container:"#EDEFF7",interactive:"#EDEFF7",module:"#E1E4EE",accent:st.a.pink400,dialog:"#E1E4EE",primary:st.a.gray900,secondary:st.a.gray500,onInteractive:st.a.gray900,success:st.a.green400,warning:st.a.gold200,error:st.a.red400},bn={container:st.a.gray900,interactive:"rgba(153, 161, 189, 0.08)",module:"#191D27",accent:st.a.blue400,dialog:"#191D27",primary:st.a.white,secondary:st.a.gray300,onInteractive:st.a.white,success:st.a.greenVibrant,warning:st.a.gold200,error:st.a.red400},gn=n(16),mn=n(300),On=Object.keys(mn.b).reduce((function(e,t){return Object(gn.a)(Object(gn.a)({},e),{},Object(x.a)({},t,[mn.b[t]]))}),{}),wn=o.default.div.withConfig({componentId:"sc-uuct7w-0"})(["display:none;@media only screen and (max-width:","){display:flex;}"],s.a),vn=o.default.div.withConfig({componentId:"sc-uuct7w-1"})(["display:flex;gap:80px;padding:0px 20px;width:100%;justify-content:center;@media only screen and (max-width:","){gap:40px;}@media only screen and (max-width:","){padding:0px 16px;}@media only screen and (max-width:","){padding:0px 8px;}"],s.b,s.f,s.d),yn=o.default.div.withConfig({componentId:"sc-uuct7w-2"})(["display:flex;flex-direction:column;gap:20px;@media only screen and (max-width:","){display:none;}"],s.a);function kn(){var e,t,n=Object(Qe.h)().tokenAddress,i=hn(n).loading,o=null===(e=Object(u.f)(n))||void 0===e?void 0:e.symbol,s=Object(xn.f)(),d=Object(w.useMemo)((function(){return s?bn:jn}),[s]),f=Object(ue.c)(),p=Object(w.useCallback)((function(){console.log("onTxSubmit")}),[]),h=Object(w.useCallback)((function(){console.log("onTxSuccess")}),[]),x=Object(w.useCallback)((function(){console.log("onTxFail")}),[]);t=n?i?Object(C.jsx)(en,{}):Object(C.jsx)(Ut,{address:n}):"invalid token";var j=n?Object(Ve.c)(n):null,b=n?function(e){return v({address:e})}(n):{data:null},g=b.data,O=Object(a.useWeb3React)(),y=O.chainId,k=O.provider,I=Object(w.useMemo)((function(){var e=[].concat(Object(c.a)(m.c),Object(c.a)(m.d));return y&&m.g.includes(y)||(e=e.filter((function(e){return!m.g.includes(e)}))),e}),[y]),z=g?I.map((function(e){var t=g[e];if(!t||!o)return null;var n=Object(l.b)(e),i=n.color;return n?Object(C.jsx)(M,{logoUrl:n.logoUrl,balance:"1",tokenSymbol:o,fiatValue:t.toSignificant(2),label:n.label,networkColor:i},e):null})):null;return Object(C.jsxs)(vn,{children:[t,n&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(yn,{children:[Object(C.jsx)(r.a,{defaultChainId:y,defaultInputTokenAddress:"NATIVE",defaultOutputTokenAddress:n,hideConnectionUI:!0,jsonRpcUrlMap:On,locale:f,onTxSubmit:p,onTxSuccess:h,onTxFail:x,provider:k,routerUrl:"https://api.uniswap.org/v1/",theme:d,width:290}),j&&Object(C.jsx)(dn,{tokenAddress:n,warning:j}),!i&&Object(C.jsx)(U,{address:n,totalBalance:4.3,networkBalances:z})]}),Object(C.jsx)(wn,{children:!i&&Object(C.jsx)(ce,{address:n,totalBalance:4.3,networkBalances:z})})]})]})}}}]);
//# sourceMappingURL=8.00ef0bcb.chunk.js.map