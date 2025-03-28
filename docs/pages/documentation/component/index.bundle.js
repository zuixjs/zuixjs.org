zuix.setComponentCache([{componentId:"widgets/time-clock",controller:class extends ControllerInstance{onInit(){this.locale=(new Intl.DateTimeFormat).resolvedOptions().locale,this.timeZone=this.options().timeZone||(new Intl.DateTimeFormat).resolvedOptions().timeZone,this.model((e,t,n,i)=>this.refreshFn(e,t,n,i))}refreshFn(e,t,n,i){var o=this.timeZone,s=new Date;switch(t){case"time":e.html(s.toLocaleTimeString(this.locale,{timeZone:o}));break;case"day":var a=new Intl.DateTimeFormat(this.locale,{timeZone:o,weekday:"long"}).format(s);e.html(a);break;case"date":a=new Intl.DateTimeFormat(this.locale,{timeZone:o,dateStyle:"long"}).format(s);e.html(a);break;case"timezone":e.html(o.replace("_"," ").replace("/"," / "))}i(1e3)}},css:":host {\n    display: inline-flex;\n    place-content: center;\n    width: 200px;\n    border: 1px solid var(--primary-color-half);\n    border-radius: 6px;\n    text-align: center;\n    font-size: 12px;\n}\n.info {\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.time {\n    font-size: 250%;\n    font-family: monospace;\n    line-height: 100%;\n    opacity: 0.75;\n}\n.date,.day {\n    font-size: 80%;\n    font-weight: 700;\n    line-height: 100%;\n    white-space: nowrap;\n}\n.frame {\n    display: inline-block;\n    width: auto;\n    border-radius: 6px;\n}\n.translucent {\n    opacity: 0.5;\n}\n",view:'<div class="frame">\n\n    <div class="info">\n\n        <div #day class="day"></div>\n        <div #date class="date"></div>\n\n    </div>\n\n    <div #time class="time"></div>\n\n    <div #timezone class="translucent"></div>\n\n</div>\n'},{componentId:"https://zuixjs.org/app/content/docs/examples/links",controller:null,css:"div[layout] {\n    width:auto;\n    padding: 16px;\n    margin: 24px;\n    background-color: #1c88e6;\n    -webkit-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    -moz-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n}\na {\n    color: white;\n    font-size: 18px;\n    text-decoration: none;\n}",view:'<div layout="row center-spread" class="animated fadeInUp">\n    <a href="https://github.com/zuixjs/zuix">zUIx</a>\n    <a href="https://github.com/genielabs">@genielabs</a>\n    <a href="https://genielabs.github.io/HomeGenie/">HomeGenie</a>\n</div>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/mdl-button",controller:class extends ControllerInstance{onInit(){var e=this.options().theme||"indigo-pink",t=this.view().parent().get()instanceof ShadowRoot;t&&(this.options().fetchOptions={priority:"low"}),self.MaterialButton||this.using("script","@cdnjs/material-design-lite/1.3.0/material.min.js"),zuix.$.classExists(".mdl-button")&&!t||this.using("style","@cdnjs/material-design-lite/1.3.0/material."+e+".min.css"),zuix.$.classExists(".material-icons")||zuix.using("style","https://fonts.googleapis.com/icon?family=Material+Icons&display=swap")}onCreate(){const t=this.view();var e=this.options(),n=e.type||"raised";t.addClass("mdl-button mdl-js-button mdl-button--"+n+" mdl-js-ripple-effect"),e.class&&e.class.split(" ").forEach(e=>{t.addClass("mdl-button--"+e)}),"fab"!==n&&"icon"!==n||-1!==t.html().indexOf("material-icons")||(e=t.get().textContent,t.html(`<i class="material-icons">${e}</i>`)),this.initializeMdl(t)}initializeMdl(e){zuix.activeRefresh(e,e,null,(e,t,n,i)=>{window.componentHandler?componentHandler.upgradeElements(e.get()):i(n,33,!0)}).start()}}},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";var e={};return e.exports=function(a){let l,t,r,c,d,p=0,h;function u(){null!=l&&l.hasClass("header-collapse")&&l.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),h&&h.check()}function f(){l.hasClass("header-collapse")||l.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}a.init=function(){a.options().css=!1,a.options().html=!1},a.create=function(){r=a.options().showEnd,l=a.options().header;const n=a.options().zIndex||10;if(!l)throw new Error("Header element not specified.");if(0===(l=zuix.field(l)).length())throw new Error('Header element not found: "'+l+'".');const i=getComputedStyle(l.get());zuix.$.appendCss(`
/* Header bar shrink/expand */
@keyframes header-collapse-anim {
  from { top: 0; }
  to { top: var(--header-height); }
}
@keyframes header-expand-anim {
  from { top: var(--header-height); }
  to { top: 0; }
}
.header-collapse {
  animation-fill-mode: forwards;
  animation-name: header-collapse-anim;
  animation-duration: 0.5s;
  top: var(--header-height);
}
.header-expand {
  animation-fill-mode: forwards;
  animation-name: header-expand-anim;
  animation-duration: 0.5s;
  top: 0px;
}
`,null,"zkit_header_auto_hide");var e=a.options().footer;let o=null;null!=e&&((t=zuix.field(e)).css({position:"fixed",zIndex:n}),o=getComputedStyle(t.get()),zuix.$.appendCss(`
/* Footer bar shrink/expand */
@keyframes footer-collapse-anim {
  from { bottom: 0; }
  to { bottom: var(--footer-height); }
}
@keyframes footer-expand-anim {
  from { bottom: var(--footer-height); }
  to { bottom: 0; }
}
.footer-collapse {
  animation-fill-mode: forwards;
  animation-name: footer-collapse-anim;
  animation-duration: 0.5s;
  bottom: var(--footer-height);
}
.footer-expand {
  animation-fill-mode: forwards;
  animation-name: footer-expand-anim;
  animation-duration: 0.5s;
  bottom: 0;
}
`,null,"zkit_header_auto_hide"));const s=a.options().scrollHost||a.view();zuix.load("@lib/controllers/scroll-helper",{view:s,on:{"scroll:change":function(e,t){c=parseFloat(i.height),"fixed"!==i.position&&"absolute"!==i.position&&(p=c),document.documentElement.style.setProperty("--header-height",-c+"px"),o&&(d=parseFloat(o.height),document.documentElement.style.setProperty("--footer-height",-d+"px")),"scroll"===t.event&&t.info.viewport.y<-p?t.info.shift.y<-4?(0<p&&"fixed"!==l.css("position")&&(s.css({paddingTop:c+"px"}),l.hide().css({position:"fixed",zIndex:n})),f()):4<t.info.shift.y&&(l.show(),u()):"hit-bottom"===t.event&&r?(l.show(),u()):0<p&&0===t.info.viewport.y&&(s.css({paddingTop:null}),l.show().css({position:null,zIndex:null})),a.trigger("page:scroll",t)}},ready:function(e){h=e,a.expose("scroll",{get:function(){return h}}),a.trigger("scroll:ready",h)}}),a.expose("show",u),a.expose("hide",f)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";var e={};function i(n,i){let o=void 0,s=void 0;return function(){const e=this,t=arguments;s?(clearTimeout(o),o=setTimeout(function(){Date.now()-s>=i&&(n.apply(e,t),s=Date.now())},i-(Date.now()-s))):(n.apply(e,t),s=Date.now())}}return e.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let t,n,o,a=0,l;const r=this;function c(){null!=t&&clearTimeout(t);var e=(new Date).getTime();if(100<e-s.timestamp?d():t=setTimeout(function(){d()},99),!(e<a&&e-l<66)){l=e;const i="scroll-helper-visible";null!=n&&null!=o&&n.each(function(e,t){var n=this.position();if(!n.visible&&this.hasClass(i))this.removeClass(i),n.event="exit";else if(n.visible){if(!n.visible)return;this.hasClass(i)?n.event="scroll":(n.event="enter",this.addClass(i))}else n.event="off-scroll";o(this,n)})}}function d(){var e=r.view().get(),t=e.getBoundingClientRect(),t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y},e=(t.y=-r.view().get().scrollTop||t.y||0,t.height=r.view().get().scrollHeight||t.height||0,s.size.width=t.width,s.size.height=t.height,e===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=e.offsetWidth,s.viewport.height=e.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:t.x-s.viewport.x,y:t.y-s.viewport.y},s.viewport.x=t.x,s.viewport.y=t.y,s.size.height+t.y-s.viewport.height);0==e||0===t.y?r.trigger("scroll:change",{event:0===t.y?"hit-top":"hit-bottom",info:s}):r.trigger("scroll:change",{event:"scroll",info:s})}function p(e,t){if((e instanceof Element||e instanceof zuix.$.ZxQuery)&&(e=zuix.$(e).position().y-s.viewport.y),-1===t)return h(e);var n=Date.now(),n=(t=(a=null!=t?n+t:a)-n,r.view().get());let i=0;i=n===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:n.scrollTop;n=e-i;if(t<=0||0==n)h(e),c();else{const o=i+n/t*33;requestAnimationFrame(function(){h(o),p(e)})}}function h(e){var t=r.view().get();t===document.body?(document.documentElement.scrollTop=e,document.body.scrollTop=e):t.scrollTop=e}r.init=function(){r.options().html=!1,r.options().css=!1},r.create=function(){r.view().get()===document.body?0<r.options().throttle?window.onscroll=i(c,r.options().throttle):window.onscroll=c:0<r.options().throttle?r.view().on("scroll",{handler:i(c,r.options().throttle),passive:!0}):r.view().on("scroll",{handler:c,passive:!0});r.expose("watch",function(e,t){return e=e,t=t,o=null!=e?(n=r.view(e),t):n=null,r.context}),r.expose("scrollStart",function(e){return p(0,e=null==e?-1:e),r.context}).expose("scrollEnd",function(e){return null==e&&(e=-1),p(s.size.height,e),r.context}).expose("scrollTo",function(e,t){return p(e,t=null==t?-1:t),r.context}).expose("info",function(){return s}).expose("check",c)}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var e={};return e.exports=function(){const n=0,o=1,s=2,i=750;let a=n,l,r=!1,c=!0,d=-1,p,h,u,f=!1,m=(new Date).getTime();Math.sign=Math.sign||function(e){return(0<e)-(e<0)||+e};const g=this;function x(e,t,n){var i=(new Date).getTime();l={event:e,cancel:function(){l.event.cancelBubble=!0,c||l.event.preventDefault()},startX:t,startY:n,startTime:i,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:i,velocity:0,x:t,y:n,scrollIntent:function(){switch(a){case o:return"horizontal";case s:return"vertical"}return!1}},u=function(i){let o;function e(){i.stepTime=i.endTime,i.stepX=i.shiftX,i.stepY=i.shiftY,i.stepSpeed=0,i.stepDistance=0}function s(){o=i.direction,a.time=(new Date).getTime(),a.x=i.x,a.y=i.y,i.velocity=0,i.distance=0,e()}const a={time:0,x:0,y:0},l={time:0,x:0,y:0};return s(),{update:function(){var e,t,n;l.time=(new Date).getTime(),l.x=i.x,l.y=i.y,null!=o&&o!==i.direction?s():(null==o&&i.direction!==o&&(o=i.direction),e=l.time-a.time,t={x:l.x-a.x,y:l.y-a.y},n=Math.sqrt(t.x*t.x+t.y*t.y),n=(i.distance=n)/e,i.velocity="left"===i.direction||"up"===i.direction?-n:n,i.stepTime=i.endTime-i.stepTime,t={x:i.shiftX-i.stepX,y:i.shiftY-i.stepY},i.stepDistance=Math.sqrt(t.x*t.x+t.y*t.y),i.stepSpeed=i.stepDistance/i.stepTime)},step:e}}(l),g.trigger("gesture:touch",l)}function t(e,t,n){null!=l&&(l.event=e,l.x=t,l.y=n,l.shiftX=t-l.startX,l.shiftY=n-l.startY,l.endTime=(new Date).getTime(),null!=(e=v())&&!1!==p&&(h=null!=h&&h!==l.direction?(p=!1,"cancel"):(p=e,l.direction)),g.trigger("gesture:pan",l))}function w(e){null!=l&&(u.update(),l.event=e,null!=(p=null==p?v():p))&&!1!==p&&g.trigger(p,l),g.trigger("gesture:release",l),a=n,h=null,p=null,l=null}function v(){let e=null;u.update();var t=180*Math.atan2(l.shiftY-l.stepY,l.shiftX-l.stepX)/Math.PI;return 0===l.shiftX&&0===l.shiftY&&l.startTime>m+100&&l.stepTime<i?(m=(new Date).getTime(),e="gesture:tap"):(a===n||a===o)&&2<l.stepDistance&&(135<=t&&t<=180||-180<=t&&t<=-135)?(l.direction="left",e="gesture:swipe",a=o):(a===n||a===o)&&2<l.stepDistance&&(0<=t&&t<=45||-45<=t&&t<0)?(l.direction="right",e="gesture:swipe",a=o):(a===n||a===s)&&2<l.stepDistance&&45<t&&t<135?(l.direction="down",e="gesture:swipe",a=s):(a===n||a===s)&&2<l.stepDistance&&-135<t&&t<-45&&(l.direction="up",e="gesture:swipe",a=s),2<l.stepDistance&&u.step(),e}g.init=function(){var e=g.options();e.html=!1,e.css=!1,c=!1!==e.passive&&c,d=e.startGap||d},g.create=function(){(c?zuix.$(window):g.view()).on("dragstart",{handler:function(e){r||c||e.preventDefault()},passive:c}).on("mousedown",{handler:function(e){var t=zuix.$(e.target);!(r=-1===document.elementsFromPoint(e.x,e.y).indexOf(g.view().get()))&&1===e.which&&0===t.parent('[class*="no-gesture"]').length()&&e.x>d?(f=!0,r=!1,t.get().draggable=!1,x(e,e.x,e.y)):r=!0},passive:c}).on("mousemove",{handler:function(e){!r&&f&&t(e,e.x,e.y)},passive:c}).on("mouseup",function(e){1!==e.which||r||(f=!1,w(e))}).on("touchstart",{handler:function(e){var t=zuix.$(e.target);!(r=-1===document.elementsFromPoint(e.touches[0].clientX,e.touches[0].clientY).indexOf(g.view().get()))&&0===t.parent('[class*="no-gesture"]').length()&&e.touches[0].clientX>d?(r=!1,t.get().draggable=!1,x(e,e.touches[0].clientX,e.touches[0].clientY)):r=!0},passive:c}).on("touchmove",{handler:function(e){r||t(e,e.touches[0].clientX,e.touches[0].clientY)},passive:c}).on("touchend",function(e){r||w(e)})}},e.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";var e={};return e.exports=function(){let i=!0,o=!1,t=!1,s=!1,a=!0,l=null,r=null,c=null,d=280,e=960,p=!1,h=0;const u=this;function f(){r.visibility("initial").css("left",0).get().focus(),t&&(r.find("a").one("click",function(){m()}),l.css("opacity","initial"),l.show()),i||(i=!0,u.trigger("drawer:open",{smallScreen:t}))}function m(){var e;t&&(e=function(){i||r.visibility("hidden")},r.one("transitionend transitioncancel",function(){e()}),r.css("left",-d+"px"),l.hide(),i)&&(i=!1,u.trigger("drawer:close",{smallScreen:t})),i=!1,r.find("a").off("click")}function g(){return i}function x(){(window.innerWidth||document.body.clientWidth)<e||-1===e||p?(t&&!a||(t=!0,o=!1,n()),m()):(t||a)&&(t&&(l.hide(),i)&&m(),t=!1,o=!0,n(),f())}function n(){var e;a||w(),c&&(e=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),t?c.css({paddingLeft:e-d+"px"}):c.css({paddingLeft:d+e+"px"})),u.trigger("layout:change",{smallScreen:t,drawerLocked:o})}function w(){var e;s||(s=!0,e="ease .15s",r.css({"transition-property":"left",transition:e}),l.css({"transition-property":"opacity",transition:e}))}u.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(d=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(e=parseInt(this.options().autoHideWidth))},u.create=function(){r=u.view(),c=u.options().mainContent,(l=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){o||m()}).hide(),r.parent().append(l.get()),r.css({position:"fixed","overflow-y":"auto",left:0,width:d+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(e,t){o||(w(),h=i&&t.startX<d?d-t.startX:0)},"gesture:release":function(e,t){o||n&&(n=!1,w(),(0<t.velocity?f:m)())},"gesture:pan":function(e,t){o||"horizontal"!==t.scrollIntent()||((n||i)&&t.x<d||!n&&t.x<50)&&(n=n||!0,w(),0<(t=(t=t).x)&&t<=d-h&&(t=-d+t+h,"hidden"===r.visibility()&&r.visibility("initial"),r.css("left",t+"px"),"none"===l.display()&&l.show(),l.css("opacity",(d+t)/d)),s)&&(s=!1,r.css({transition:"none"}),l.css({transition:"none"}))}}}),u.expose("toggle",function(){w(),(i?m:f)()}),u.expose("open",function(){w(),f()}),u.expose("close",function(){w(),m()}),u.expose("isOpen",g),u.expose("lock",function(e){if(null==e)return o;o=e}),u.expose("float",function(e){if(null==e)return p;p=e,x()}),r.on("keydown",function(e){27===(e=e||window.event).keyCode&&m()}),x(),a=!1,window.addEventListener("resize",function(){x()})}},e.exports}()},{componentId:"_res/style/style-310852538",controller:null,css:"@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}",using:"https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"}]);