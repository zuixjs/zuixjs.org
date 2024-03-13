zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";var t={};return t.exports=function(r){let l,e,a,c,u,p=0,d;function h(){null!=l&&l.hasClass("header-collapse")&&l.removeClass("header-collapse").addClass("header-expand"),null!=e&&e.hasClass("footer-collapse")&&e.removeClass("footer-collapse").addClass("footer-expand"),d&&d.check()}function f(){l.hasClass("header-collapse")||l.removeClass("header-expand").addClass("header-collapse"),null==e||e.hasClass("footer-collapse")||e.removeClass("footer-expand").addClass("footer-collapse")}r.init=function(){r.options().css=!1,r.options().html=!1},r.create=function(){a=r.options().showEnd,l=r.options().header;const i=r.options().zIndex||10;if(!l)throw new Error("Header element not specified.");if(0===(l=zuix.field(l)).length())throw new Error('Header element not found: "'+l+'".');const o=getComputedStyle(l.get());zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide");var t=r.options().footer;let n=null;null!=t&&((e=zuix.field(t)).css({position:"fixed",zIndex:i}),n=getComputedStyle(e.get()),zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide"));const s=r.options().scrollHost||r.view();zuix.load("@lib/controllers/scroll-helper",{view:s,on:{"scroll:change":function(t,e){c=parseFloat(o.height),"fixed"!==o.position&&"absolute"!==o.position&&(p=c),document.documentElement.style.setProperty("--header-height",-c+"px"),n&&(u=parseFloat(n.height),document.documentElement.style.setProperty("--footer-height",-u+"px")),"scroll"===e.event&&e.info.viewport.y<-p?e.info.shift.y<-4?(0<p&&"fixed"!==l.css("position")&&(s.css({paddingTop:c+"px"}),l.hide().css({position:"fixed",zIndex:i})),f()):4<e.info.shift.y&&(l.show(),h()):"hit-bottom"===e.event&&a?(l.show(),h()):0<p&&0===e.info.viewport.y&&(s.css({paddingTop:null}),l.show().css({position:null,zIndex:null})),r.trigger("page:scroll",e)}},ready:function(t){d=t,r.expose("scroll",{get:function(){return d}}),r.trigger("scroll:ready",d)}}),r.expose("show",h),r.expose("hide",f)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";var t={};function o(i,o){let n=void 0,s=void 0;return function(){const t=this,e=arguments;s?(clearTimeout(n),n=setTimeout(function(){Date.now()-s>=o&&(i.apply(t,e),s=Date.now())},o-(Date.now()-s))):(i.apply(t,e),s=Date.now())}}return t.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let e,i,n,r=0,l;const a=this;function c(){null!=e&&clearTimeout(e);var t=(new Date).getTime();if(100<t-s.timestamp?u():e=setTimeout(function(){u()},99),!(t<r&&t-l<66)){l=t;const o="scroll-helper-visible";null!=i&&null!=n&&i.each(function(t,e){var i=this.position();if(!i.visible&&this.hasClass(o))this.removeClass(o),i.event="exit";else if(i.visible){if(!i.visible)return;this.hasClass(o)?i.event="scroll":(i.event="enter",this.addClass(o))}else i.event="off-scroll";n(this,i)})}}function u(){var t=a.view().get(),e=t.getBoundingClientRect(),e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y},t=(e.y=-a.view().get().scrollTop||e.y||0,e.height=a.view().get().scrollHeight||e.height||0,s.size.width=e.width,s.size.height=e.height,t===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=t.offsetWidth,s.viewport.height=t.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:e.x-s.viewport.x,y:e.y-s.viewport.y},s.viewport.x=e.x,s.viewport.y=e.y,s.size.height+e.y-s.viewport.height);0==t||0===e.y?a.trigger("scroll:change",{event:0===e.y?"hit-top":"hit-bottom",info:s}):a.trigger("scroll:change",{event:"scroll",info:s})}function p(t,e){if((t instanceof Element||t instanceof zuix.$.ZxQuery)&&(t=zuix.$(t).position().y-s.viewport.y),-1===e)return d(t);var i=Date.now(),i=(e=(r=null!=e?i+e:r)-i,a.view().get());let o=0;o=i===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:i.scrollTop;i=t-o;if(e<=0||0==i)d(t),c();else{const n=o+i/e*33;requestAnimationFrame(function(){d(n),p(t)})}}function d(t){var e=a.view().get();e===document.body?(document.documentElement.scrollTop=t,document.body.scrollTop=t):e.scrollTop=t}a.init=function(){a.options().html=!1,a.options().css=!1},a.create=function(){a.view().get()===document.body?0<a.options().throttle?window.onscroll=o(c,a.options().throttle):window.onscroll=c:0<a.options().throttle?a.view().on("scroll",{handler:o(c,a.options().throttle),passive:!0}):a.view().on("scroll",{handler:c,passive:!0});a.expose("watch",function(t,e){return t=t,e=e,n=null!=t?(i=a.view(t),e):i=null,a.context}),a.expose("scrollStart",function(t){return p(0,t=null==t?-1:t),a.context}).expose("scrollEnd",function(t){return null==t&&(t=-1),p(s.size.height,t),a.context}).expose("scrollTo",function(t,e){return p(t,e=null==e?-1:e),a.context}).expose("info",function(){return s}).expose("check",c)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/mdl-button",controller:function(){"use strict";var t={};return t.exports=function(){this.init=()=>{var t=this.options().theme||"indigo-pink";this.view().parent().get().mode&&(this.options().fetchOptions={priority:"low"},self.MaterialButton||this.using("script","@cdnjs/material-design-lite/1.3.0/material.min.js"),this.using("style","@cdnjs/material-design-lite/1.3.0/material."+t+".min.css"),this.using("style","https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"))},this.create=()=>{const e=this.view();var t=this.options(),i=t.type||"raised";e.addClass("mdl-button mdl-js-button mdl-button--"+i+" mdl-js-ripple-effect"),t.class&&t.class.split(" ").forEach(t=>{e.addClass("mdl-button--"+t)}),"fab"!==i&&"icon"!==i||-1!==e.html().indexOf("material-icons")||(t=e.get().textContent,e.html(`<i class="material-icons">${t}</i>`)),i=e,zuix.activeRefresh(i,i,null,(t,e,i,o)=>{window.componentHandler?componentHandler.upgradeElements(t.get()):o(i,33,!0)}).start()}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";var t={};return t.exports=function(){let o=!0,n=!1,e=!1,s=!1,r=!0,l=null,a=null,c=null,u=280,t=960,p=!1,d=0;const h=this;function f(){a.visibility("initial").css("left",0).get().focus(),e&&(a.find("a").one("click",function(){m()}),l.css("opacity","initial"),l.show()),o||(o=!0,h.trigger("drawer:open",{smallScreen:e}))}function m(){var t;e&&(t=function(){o||a.visibility("hidden")},a.one("transitionend transitioncancel",function(){t()}),a.css("left",-u+"px"),l.hide(),o)&&(o=!1,h.trigger("drawer:close",{smallScreen:e})),o=!1,a.find("a").off("click")}function g(){return o}function x(){(window.innerWidth||document.body.clientWidth)<t||-1===t||p?(e&&!r||(e=!0,n=!1,i()),m()):(e||r)&&(e&&(l.hide(),o)&&m(),e=!1,n=!0,i(),f())}function i(){var t;r||w(),c&&(t=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),e?c.css({paddingLeft:t-u+"px"}):c.css({paddingLeft:u+t+"px"})),h.trigger("layout:change",{smallScreen:e,drawerLocked:n})}function w(){var t;s||(s=!0,t="ease .15s",a.css({"transition-property":"left",transition:t}),l.css({"transition-property":"opacity",transition:t}))}h.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(u=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(t=parseInt(this.options().autoHideWidth))},h.create=function(){a=h.view(),c=h.options().mainContent,(l=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){n||m()}).hide(),a.parent().append(l.get()),a.css({position:"fixed","overflow-y":"auto",left:0,width:u+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let i=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(t,e){n||(w(),d=o&&e.startX<u?u-e.startX:0)},"gesture:release":function(t,e){n||i&&(i=!1,w(),(0<e.velocity?f:m)())},"gesture:pan":function(t,e){n||"horizontal"!==e.scrollIntent()||((i||o)&&e.x<u||!i&&e.x<50)&&(i=i||!0,w(),0<(e=(e=e).x)&&e<=u-d&&(e=-u+e+d,"hidden"===a.visibility()&&a.visibility("initial"),a.css("left",e+"px"),"none"===l.display()&&l.show(),l.css("opacity",(u+e)/u)),s)&&(s=!1,a.css({transition:"none"}),l.css({transition:"none"}))}}}),h.expose("toggle",function(){w(),(o?m:f)()}),h.expose("open",function(){w(),f()}),h.expose("close",function(){w(),m()}),h.expose("isOpen",g),h.expose("lock",function(t){if(null==t)return n;n=t}),h.expose("float",function(t){if(null==t)return p;p=t,x()}),a.on("keydown",function(t){27===(t=t||window.event).keyCode&&m()}),x(),r=!1,window.addEventListener("resize",function(){x()})}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var t={};return t.exports=function(){const i=0,n=1,s=2,o=750;let r=i,l,a=!1,c=!0,u=-1,p,d,h,f=!1,m=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const g=this;function x(t,e,i){var o=(new Date).getTime();l={event:t,cancel:function(){l.event.cancelBubble=!0,c||l.event.preventDefault()},startX:e,startY:i,startTime:o,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:o,velocity:0,x:e,y:i,scrollIntent:function(){switch(r){case n:return"horizontal";case s:return"vertical"}return!1}},h=function(o){let n;function t(){o.stepTime=o.endTime,o.stepX=o.shiftX,o.stepY=o.shiftY,o.stepSpeed=0,o.stepDistance=0}function s(){n=o.direction,r.time=(new Date).getTime(),r.x=o.x,r.y=o.y,o.velocity=0,o.distance=0,t()}const r={time:0,x:0,y:0},l={time:0,x:0,y:0};return s(),{update:function(){var t,e,i;l.time=(new Date).getTime(),l.x=o.x,l.y=o.y,null!=n&&n!==o.direction?s():(null==n&&o.direction!==n&&(n=o.direction),t=l.time-r.time,e={x:l.x-r.x,y:l.y-r.y},i=Math.sqrt(e.x*e.x+e.y*e.y),i=(o.distance=i)/t,o.velocity="left"===o.direction||"up"===o.direction?-i:i,o.stepTime=o.endTime-o.stepTime,e={x:o.shiftX-o.stepX,y:o.shiftY-o.stepY},o.stepDistance=Math.sqrt(e.x*e.x+e.y*e.y),o.stepSpeed=o.stepDistance/o.stepTime)},step:t}}(l),g.trigger("gesture:touch",l)}function e(t,e,i){null!=l&&(l.event=t,l.x=e,l.y=i,l.shiftX=e-l.startX,l.shiftY=i-l.startY,l.endTime=(new Date).getTime(),null!=(t=v())&&!1!==p&&(d=null!=d&&d!==l.direction?(p=!1,"cancel"):(p=t,l.direction)),g.trigger("gesture:pan",l))}function w(t){null!=l&&(h.update(),l.event=t,null!=(p=null==p?v():p))&&!1!==p&&g.trigger(p,l),g.trigger("gesture:release",l),r=i,d=null,p=null,l=null}function v(){let t=null;h.update();var e=180*Math.atan2(l.shiftY-l.stepY,l.shiftX-l.stepX)/Math.PI;return 0===l.shiftX&&0===l.shiftY&&l.startTime>m+100&&l.stepTime<o?(m=(new Date).getTime(),t="gesture:tap"):(r===i||r===n)&&2<l.stepDistance&&(135<=e&&e<=180||-180<=e&&e<=-135)?(l.direction="left",t="gesture:swipe",r=n):(r===i||r===n)&&2<l.stepDistance&&(0<=e&&e<=45||-45<=e&&e<0)?(l.direction="right",t="gesture:swipe",r=n):(r===i||r===s)&&2<l.stepDistance&&45<e&&e<135?(l.direction="down",t="gesture:swipe",r=s):(r===i||r===s)&&2<l.stepDistance&&-135<e&&e<-45&&(l.direction="up",t="gesture:swipe",r=s),2<l.stepDistance&&h.step(),t}g.init=function(){var t=g.options();t.html=!1,t.css=!1,c=!1!==t.passive&&c,u=t.startGap||u},g.create=function(){(c?zuix.$(window):g.view()).on("dragstart",{handler:function(t){a||c||t.preventDefault()},passive:c}).on("mousedown",{handler:function(t){var e=zuix.$(t.target);!(a=-1===document.elementsFromPoint(t.x,t.y).indexOf(g.view().get()))&&1===t.which&&0===e.parent('[class*="no-gesture"]').length()&&t.x>u?(f=!0,a=!1,e.get().draggable=!1,x(t,t.x,t.y)):a=!0},passive:c}).on("mousemove",{handler:function(t){!a&&f&&e(t,t.x,t.y)},passive:c}).on("mouseup",function(t){1!==t.which||a||(f=!1,w(t))}).on("touchstart",{handler:function(t){var e=zuix.$(t.target);!(a=-1===document.elementsFromPoint(t.touches[0].clientX,t.touches[0].clientY).indexOf(g.view().get()))&&0===e.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>u?(a=!1,e.get().draggable=!1,x(t,t.touches[0].clientX,t.touches[0].clientY)):a=!0},passive:c}).on("touchmove",{handler:function(t){a||e(t,t.touches[0].clientX,t.touches[0].clientY)},passive:c}).on("touchend",function(t){a||w(t)})}},t.exports}()}]);