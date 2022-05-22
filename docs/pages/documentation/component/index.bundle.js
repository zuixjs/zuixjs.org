zuix.setComponentCache([{componentId:"widgets/time-clock",controller:function(){"use strict";let e={};const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];return e.exports=function(){const e=this;function t(e,t,n,o){const i=new Date;switch(t){case"date":var s=a[i.getMonth()];e.html(s+" "+i.getDate()+", "+i.getFullYear());break;case"time":e.html(i.toLocaleTimeString());break;case"info":s=r[i.getDay()];e.html(s)}o(1e3)}this.init=function(){e.model(t)},this.create=function(){}},e.exports}(),css:". {\n    text-align: center;\n}\n.header {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    padding-top: 8px;\n    padding-left: 4px;\n    padding-right: 4px;\n}\n.time {\n    font-size: 300%;\n    line-height: 100%;\n}\n.date,.day {\n    font-size: 80%;\n    font-weight: 700;\n    line-height: 100%;\n}\n.frame {\n    display: inline-block;\n    width: auto;\n    padding: 16px;\n    border-radius: 12px;\n    border: solid 2px rgba(128,128,128,0.5);\n    -webkit-box-shadow: 0 8px 10px 1px rgba(50,0,0,0.14), 0 3px 14px 2px rgba(50,0,0,0.12), 0 5px 5px -3px rgba(50,0,0,0.3);\n    box-shadow: 0 8px 10px 1px rgba(50,0,0,0.14), 0 3px 14px 2px rgba(50,0,0,0.12), 0 5px 5px -3px rgba(50,0,0,0.3);\n}\n",view:'<div class="frame">\n\n    <div #time="" class="time"></div>\n    <div class="header">\n        <div #info="" class="day"></div>\n        <div #date="" class="date"></div>\n    </div>\n\n</div>\n'},{componentId:"https://zuixjs.org/app/content/docs/examples/links",controller:null,css:"div[layout] {\n    width:auto;\n    padding: 16px;\n    margin: 24px;\n    background-color: #1c88e6;\n    -webkit-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    -moz-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n}\na {\n    color: white;\n    font-size: 18px;\n    text-decoration: none;\n}",view:'<div layout="row center-spread" class="animated fadeInUp">\n    <a href="https://github.com/zuixjs/zuix">zUIx</a>\n    <a href="https://github.com/genielabs">@genielabs</a>\n    <a href="https://genielabs.github.io/HomeGenie/">HomeGenie</a>\n</div>\n'},{componentId:"/lib/1.1/controllers/mdl-button",controller:function(){"use strict";let e={};return e.exports=function(){const i=this;this.create=()=>{this.context.isReady=!1;const t=this.view(),e=this.options();var n=e.type||"raised";if(t.addClass("mdl-button mdl-js-button mdl-button--"+n+" mdl-js-ripple-effect"),e.class){const o=e.class.split(" ");o.forEach(e=>{t.addClass("mdl-button--"+e)})}n=t,zuix.activeRefresh(n,n,null,(e,t,n,o)=>{window.componentHandler?(componentHandler.upgradeElements(e.get()),i.context.isReady=!0):o(n,100,!0)}).start()}},e.exports}()},{componentId:"/lib/1.1/controllers/header-auto-hide",controller:function(){"use strict";let e={};return e.exports=function(i){let s,t,r,a,l,c=0,d;function p(){null!=s&&s.hasClass("header-collapse")&&s.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),d&&d.check()}function u(){s.hasClass("header-collapse")||s.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}i.init=function(){i.options().css=!1,i.options().html=!1},i.create=function(){r=i.options().showEnd||"true"===i.view().attr("data-o-show-end"),s=i.options().header||i.view().attr("data-o-header");const n=i.options().zIndex||10;if(!s)throw new Error("Header element not specified.");if(0===(s=zuix.field(s)).length())throw new Error('Header element not found: "'+s+'".');a=s.position().rect.height;var e=getComputedStyle(s.get()).position;"fixed"!==e&&"absolute"!==e&&(c=a);const o=i.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+a+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+a+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+a+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");e=i.options().footer||i.view().attr("data-o-footer");null!=e&&((t=zuix.field(e)).css({position:"fixed",zIndex:n}),l=t.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+l+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+l+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+l+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:o,on:{"scroll:change":function(e,t){"scroll"===t.event&&t.info.viewport.y<-c?t.info.shift.y<-4?(0<c&&"fixed"!==s.css("position")&&(o.css({paddingTop:a+"px"}),s.hide().css({position:"fixed",zIndex:n})),u()):4<t.info.shift.y&&(s.show(),p()):"hit-bottom"===t.event&&r?(s.show(),p()):0<c&&0===t.info.viewport.y&&(o.css({paddingTop:null}),s.show().css({position:null,zIndex:null})),i.trigger("page:scroll",t)}},ready:function(e){d=e,i.expose("scroll",{get:function(){return d}}),i.trigger("scroll:ready",d)}}),i.expose("show",p),i.expose("hide",u)}},e.exports}()},{componentId:"/lib/1.1/controllers/scroll-helper",controller:function(){"use strict";let e={};function o(n,o){let i=void 0,s=void 0;return function(){const e=this,t=arguments;s?(clearTimeout(i),i=setTimeout(function(){Date.now()-s>=o&&(n.apply(e,t),s=Date.now())},o-(Date.now()-s))):(n.apply(e,t),s=Date.now())}}return e.exports=function(){const s={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let t,n,i,r=0,a;const l=this;function c(){null!=t&&clearTimeout(t);var e=(new Date).getTime();if(100<e-s.timestamp?d():t=setTimeout(function(){d()},99),!(e<r&&e-a<66)){a=e;const o="scroll-helper-visible";null!=n&&null!=i&&n.each(function(e,t){const n=this.position();if(!n.visible&&this.hasClass(o))this.removeClass(o),n.event="exit";else if(n.visible){if(!n.visible)return;this.hasClass(o)?n.event="scroll":(n.event="enter",this.addClass(o))}else n.event="off-scroll";i(this,n)})}}function d(){const e=l.view().get();var t=e.getBoundingClientRect();const n={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y};n.y=-l.view().get().scrollTop||n.y||0,n.height=l.view().get().scrollHeight||n.height||0,s.size.width=n.width,s.size.height=n.height,e===document.body?(s.size.width=document.body.offsetWidth,s.size.height=document.body.offsetHeight,s.viewport.width=document.documentElement.clientWidth||s.size.width,s.viewport.height=document.documentElement.clientHeight||s.size.height):(s.viewport.width=e.offsetWidth,s.viewport.height=e.offsetHeight),s.timestamp=(new Date).getTime(),s.shift={x:n.x-s.viewport.x,y:n.y-s.viewport.y},s.viewport.x=n.x,s.viewport.y=n.y,0==s.size.height+n.y-s.viewport.height||0===n.y?l.trigger("scroll:change",{event:0===n.y?"hit-top":"hit-bottom",info:s}):l.trigger("scroll:change",{event:"scroll",info:s})}function p(e,t){if((e instanceof Element||e instanceof zuix.$.ZxQuery)&&(e=zuix.$(e).position().y-s.viewport.y),-1===t)return u(e);var n=Date.now(),n=(t=(r=null!=t?n+t:r)-n,l.view().get());let o=0;o=n===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:n.scrollTop;n=e-o;if(t<=0||0==n)return u(e),void c();const i=o+n/t*33;requestAnimationFrame(function(){u(i),p(e)})}function u(e){const t=l.view().get();t===document.body?(document.documentElement.scrollTop=e,document.body.scrollTop=e):t.scrollTop=e}l.init=function(){l.options().html=!1,l.options().css=!1},l.create=function(){l.view().get()===document.body?0<l.options().throttle?window.onscroll=o(c,l.options().throttle):window.onscroll=c:0<l.options().throttle?l.view().on("scroll",{handler:o(c,l.options().throttle),passive:!0}):l.view().on("scroll",{handler:c,passive:!0});l.expose("watch",function(e,t){return e=e,t=t,i=null!=e?(n=l.view(e),t):n=null,l.context}),l.expose("scrollStart",function(e){return p(0,e=null==e?-1:e),l.context}).expose("scrollEnd",function(e){return null==e&&(e=-1),p(s.size.height,e),l.context}).expose("scrollTo",function(e,t){return p(e,t=null==t?-1:t),l.context}).expose("info",function(){return s}).expose("check",c)}},e.exports}()},{componentId:"/lib/1.1/controllers/gesture-helper",controller:function(){"use strict";let e={};return e.exports=function(){const n=0,i=1,s=2,o=750;let r=n,a,l=!1,c=!0,d=-1,p,u,h,f=!1,x=(new Date).getTime();Math.sign=Math.sign||function(e){return(0<e)-(e<0)||+e};const m=this;function g(e,t,n){var o=(new Date).getTime();a={event:e,cancel:function(){a.event.cancelBubble=!0,c||a.event.preventDefault()},startX:t,startY:n,startTime:o,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:o,velocity:0,x:t,y:n,scrollIntent:function(){switch(r){case i:return"horizontal";case s:return"vertical"}return!1}},h=function(o){let i;function e(){o.stepTime=o.endTime,o.stepX=o.shiftX,o.stepY=o.shiftY,o.stepSpeed=0,o.stepDistance=0}function s(){i=o.direction,r.time=(new Date).getTime(),r.x=o.x,r.y=o.y,o.velocity=0,o.distance=0,e()}const r={time:0,x:0,y:0},a={time:0,x:0,y:0};return s(),{update:function(){var e,t,n;a.time=(new Date).getTime(),a.x=o.x,a.y=o.y,null!=i&&i!==o.direction?s():(null==i&&o.direction!==i&&(i=o.direction),e=a.time-r.time,t={x:a.x-r.x,y:a.y-r.y},n=Math.sqrt(t.x*t.x+t.y*t.y),n=(o.distance=n)/e,o.velocity="left"===o.direction||"up"===o.direction?-n:n,o.stepTime=o.endTime-o.stepTime,t={x:o.shiftX-o.stepX,y:o.shiftY-o.stepY},o.stepDistance=Math.sqrt(t.x*t.x+t.y*t.y),o.stepSpeed=o.stepDistance/o.stepTime)},step:e}}(a),m.trigger("gesture:touch",a)}function t(e,t,n){null!=a&&(a.event=e,a.x=t,a.y=n,a.shiftX=t-a.startX,a.shiftY=n-a.startY,a.endTime=(new Date).getTime(),null!=(e=v())&&!1!==p&&(u=null!=u&&u!==a.direction?(p=!1,"cancel"):(p=e,a.direction)),m.trigger("gesture:pan",a))}function w(e){null!=a&&(h.update(),a.event=e,null!=(p=null==p?v():p)&&!1!==p&&m.trigger(p,a)),m.trigger("gesture:release",a),r=n,u=null,p=null,a=null}function v(){let e=null;h.update();var t=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>x+100&&a.stepTime<o?(x=(new Date).getTime(),e="gesture:tap"):(r===n||r===i)&&2<a.stepDistance&&(135<=t&&t<=180||-180<=t&&t<=-135)?(a.direction="left",e="gesture:swipe",r=i):(r===n||r===i)&&2<a.stepDistance&&(0<=t&&t<=45||-45<=t&&t<0)?(a.direction="right",e="gesture:swipe",r=i):(r===n||r===s)&&2<a.stepDistance&&45<t&&t<135?(a.direction="down",e="gesture:swipe",r=s):(r===n||r===s)&&2<a.stepDistance&&-135<t&&t<-45&&(a.direction="up",e="gesture:swipe",r=s),2<a.stepDistance&&h.step(),e}m.init=function(){const e=m.view(),t=m.options();t.html=!1,t.css=!1,c=!1!==t.passive&&"false"!==e.attr("data-o-passive"),d=t.startGap||e.attr("data-o-startgap")},m.create=function(){const e=c?zuix.$(window):m.view();e.on("dragstart",{handler:function(e){l||c||e.preventDefault()},passive:c}).on("mousedown",{handler:function(e){const t=zuix.$(e.target);1===e.which&&0===t.parent('[class*="no-gesture"]').length()&&e.x>d?(f=!0,l=!1,t.get().draggable=!1,g(e,e.x,e.y)):l=!0},passive:c}).on("mousemove",{handler:function(e){!l&&f&&t(e,e.x,e.y)},passive:c}).on("mouseup",function(e){1!==e.which||l||(f=!1,w(e))}).on("touchstart",{handler:function(e){const t=zuix.$(e.target);0===t.parent('[class*="no-gesture"]').length()&&e.touches[0].clientX>d?(l=!1,t.get().draggable=!1,g(e,e.touches[0].clientX,e.touches[0].clientY)):l=!0},passive:c}).on("touchmove",{handler:function(e){l||t(e,e.touches[0].clientX,e.touches[0].clientY)},passive:c}).on("touchend",function(e){l||w(e)})}},e.exports}()},{componentId:"/lib/1.1/controllers/drawer-layout",controller:function(){"use strict";let e={};return e.exports=function(){let o=!0,i=!1,t=!1,s=!1,r=!0,a=null,l=null,c=null,d=280,n=960,p=!1,u=0;const h=this;function f(){l.visibility("initial").css("left",0).get().focus(),t&&(l.find("a").one("click",function(){x()}),a.css("opacity","initial"),a.show()),o||(o=!0,h.trigger("drawer:open",{smallScreen:t}))}function x(){var e;t&&(e=function(){o||l.visibility("hidden")},l.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e()}),l.css("left",-d+"px"),a.hide(),o&&(o=!1,h.trigger("drawer:close",{smallScreen:t}))),o=!1,l.find("a").off("click")}function e(){return o}function m(){(window.innerWidth||document.body.clientWidth)<n||-1===n||p?(t&&!r||(t=!0,i=!1,g()),x()):(t||r)&&(t&&(a.hide(),o&&x()),t=!1,i=!0,g(),f())}function g(){var e;r||w(),c&&(e=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),t?c.css({paddingLeft:e-d+"px"}):c.css({paddingLeft:d+e+"px"})),h.trigger("layout:change",{smallScreen:t,drawerLocked:i})}function w(){var e;s||(s=!0,e="ease .15s",l.css({"transition-property":"left",transition:e}),a.css({"transition-property":"opacity",transition:e}))}h.init=function(){const e=h.view();this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)?(t=parseInt(e.attr("data-o-width")),isNaN(t)||(d=t)):d=parseInt(this.options().drawerWidth);{var t;isNaN(this.options().autoHideWidth)?(t=parseInt(e.attr("data-o-hide-width")),isNaN(t)||(n=t)):n=parseInt(this.options().autoHideWidth)}},h.create=function(){l=h.view(),c=h.options().mainContent,(a=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){i||x()}).hide(),l.parent().append(a.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:d+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(e,t){i||(w(),u=o&&t.startX<d?d-t.startX:0)},"gesture:release":function(e,t){i||n&&(n=!1,w(),(0<t.velocity?f:x)())},"gesture:pan":function(e,t){if(!i&&"horizontal"===t.scrollIntent()&&((n||o)&&t.x<d||!n&&t.x<50)){n=n||!0,w();{let e=t.x;0<e&&e<=d-u&&(e=-d+e+u,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",e+"px"),"none"===a.display()&&a.show(),a.css("opacity",(d+e)/d))}s&&(s=!1,l.css({transition:"none"}),a.css({transition:"none"}))}}}}),h.expose("toggle",function(){w(),(o?x:f)()}),h.expose("open",function(){w(),f()}),h.expose("close",function(){w(),x()}),h.expose("isOpen",e),h.expose("lock",function(e){if(null==e)return i;i=e}),h.expose("float",function(e){if(null==e)return p;p=e,m()}),l.on("keydown",function(e){27===(e=e||window.event).keyCode&&x()}),m(),r=!1,window.addEventListener("resize",function(){m()})}},e.exports}()}]);