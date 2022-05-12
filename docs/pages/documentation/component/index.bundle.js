zuix.setComponentCache([{componentId:"widgets/time-clock",controller:function(){module={};const a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];return module.exports=function(){const e=this;function t(e,t,n,o){const i=new Date;switch(t){case"date":var s=r[i.getMonth()];e.html(s+" "+i.getDate()+", "+i.getFullYear());break;case"time":e.html(i.toLocaleTimeString());break;case"info":s=a[i.getDay()];e.html(s)}o(1e3)}this.init=function(){e.model(t)},this.create=function(){}},module.exports}(),css:". {\n    text-align: center;\n}\n.header {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    padding-top: 8px;\n    padding-left: 4px;\n    padding-right: 4px;\n}\n.time {\n    font-size: 300%;\n    line-height: 100%;\n}\n.date,.day {\n    font-size: 80%;\n    font-weight: 700;\n    line-height: 100%;\n}\n.frame {\n    display: inline-block;\n    width: auto;\n    padding: 16px;\n    border-radius: 12px;\n    border: solid 2px rgba(128,128,128,0.5);\n    -webkit-box-shadow: 0 8px 10px 1px rgba(50,0,0,0.14), 0 3px 14px 2px rgba(50,0,0,0.12), 0 5px 5px -3px rgba(50,0,0,0.3);\n    box-shadow: 0 8px 10px 1px rgba(50,0,0,0.14), 0 3px 14px 2px rgba(50,0,0,0.12), 0 5px 5px -3px rgba(50,0,0,0.3);\n}\n",view:'<div class="frame">\n\n    <div #time="" class="time"></div>\n    <div class="header">\n        <div #info="" class="day"></div>\n        <div #date="" class="date"></div>\n    </div>\n\n</div>\n'},{componentId:"https://zuixjs.org/app/content/docs/examples/links",controller:(module={}).exports,css:"div[layout] {\n    width:auto;\n    padding: 16px;\n    margin: 24px;\n    background-color: #1c88e6;\n    -webkit-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    -moz-box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n    box-shadow: 9px 10px 36px -7px rgba(0,0,0,0.58);\n}\na {\n    color: white;\n    font-size: 18px;\n    text-decoration: none;\n}",view:'<div layout="row center-spread" class="animated fadeInUp">\n    <a href="https://github.com/zuixjs/zuix">zUIx</a>\n    <a href="https://github.com/genielabs">@genielabs</a>\n    <a href="https://genielabs.github.io/HomeGenie/">HomeGenie</a>\n</div>\n'},{componentId:"/lib/1.1/controllers/header-auto-hide",controller:((module={}).exports=function(i){let s,t,a,r,l,d=0,c;function p(){null!=s&&s.hasClass("header-collapse")&&s.removeClass("header-collapse").addClass("header-expand"),null!=t&&t.hasClass("footer-collapse")&&t.removeClass("footer-collapse").addClass("footer-expand"),c&&c.check()}function u(){s.hasClass("header-collapse")||s.removeClass("header-expand").addClass("header-collapse"),null==t||t.hasClass("footer-collapse")||t.removeClass("footer-expand").addClass("footer-collapse")}i.init=function(){i.options().css=!1,i.options().html=!1},i.create=function(){a=i.options().showEnd||"true"===i.view().attr("data-o-show-end"),s=i.options().header||i.view().attr("data-o-header");const n=i.options().zIndex||10;if(!s)throw new Error("Header element not specified.");if(0===(s=zuix.field(s)).length())throw new Error('Header element not found: "'+s+'".');r=s.position().rect.height;var e=getComputedStyle(s.get()).position;"fixed"!==e&&"absolute"!==e&&(d=r);const o=i.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+r+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+r+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+r+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");e=i.options().footer||i.view().attr("data-o-footer");null!=e&&((t=zuix.field(e)).css({position:"fixed",zIndex:n}),l=t.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+l+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+l+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+l+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:o,on:{"scroll:change":function(e,t){"scroll"===t.event&&t.info.viewport.y<-d?t.info.shift.y<-4?(0<d&&"fixed"!==s.css("position")&&(o.css({paddingTop:r+"px"}),s.hide().css({position:"fixed",zIndex:n})),u()):4<t.info.shift.y&&(s.show(),p()):"hit-bottom"===t.event&&a?(s.show(),p()):0<d&&0===t.info.viewport.y&&(o.css({paddingTop:null}),s.show().css({position:null,zIndex:null})),i.trigger("page:scroll",t)}},ready:function(e){c=e,i.expose("scroll",{get:function(){return c}}),i.trigger("scroll:ready",c)}}),i.expose("show",p),i.expose("hide",u)}},module.exports)},{componentId:"/lib/1.1/controllers/gesture-helper",controller:((module={}).exports=function(){const n=0,i=1,s=2,o=750;let a=n,r,l=!1,d=!0,c=-1,p,u,h,f=!1,x=(new Date).getTime();Math.sign=Math.sign||function(e){return(0<e)-(e<0)||+e};const m=this;function g(e,t,n){var o=(new Date).getTime();r={event:e,cancel:function(){r.event.cancelBubble=!0,d||r.event.preventDefault()},startX:t,startY:n,startTime:o,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:o,velocity:0,x:t,y:n,scrollIntent:function(){switch(a){case i:return"horizontal";case s:return"vertical"}return!1}},h=function(o){let i;function e(){o.stepTime=o.endTime,o.stepX=o.shiftX,o.stepY=o.shiftY,o.stepSpeed=0,o.stepDistance=0}function s(){i=o.direction,a.time=(new Date).getTime(),a.x=o.x,a.y=o.y,o.velocity=0,o.distance=0,e()}const a={time:0,x:0,y:0},r={time:0,x:0,y:0};return s(),{update:function(){var e,t,n;r.time=(new Date).getTime(),r.x=o.x,r.y=o.y,null!=i&&i!==o.direction?s():(null==i&&o.direction!==i&&(i=o.direction),e=r.time-a.time,t={x:r.x-a.x,y:r.y-a.y},n=Math.sqrt(t.x*t.x+t.y*t.y),n=(o.distance=n)/e,o.velocity="left"===o.direction||"up"===o.direction?-n:n,o.stepTime=o.endTime-o.stepTime,t={x:o.shiftX-o.stepX,y:o.shiftY-o.stepY},o.stepDistance=Math.sqrt(t.x*t.x+t.y*t.y),o.stepSpeed=o.stepDistance/o.stepTime)},step:e}}(r),m.trigger("gesture:touch",r)}function t(e,t,n){null!=r&&(r.event=e,r.x=t,r.y=n,r.shiftX=t-r.startX,r.shiftY=n-r.startY,r.endTime=(new Date).getTime(),null!=(e=b())&&!1!==p&&(u=null!=u&&u!==r.direction?(p=!1,"cancel"):(p=e,r.direction)),m.trigger("gesture:pan",r))}function w(e){null!=r&&(h.update(),r.event=e,null!=(p=null==p?b():p)&&!1!==p&&m.trigger(p,r)),m.trigger("gesture:release",r),a=n,u=null,p=null,r=null}function b(){let e=null;h.update();var t=180*Math.atan2(r.shiftY-r.stepY,r.shiftX-r.stepX)/Math.PI;return 0===r.shiftX&&0===r.shiftY&&r.startTime>x+100&&r.stepTime<o?(x=(new Date).getTime(),e="gesture:tap"):(a===n||a===i)&&2<r.stepDistance&&(135<=t&&t<=180||-180<=t&&t<=-135)?(r.direction="left",e="gesture:swipe",a=i):(a===n||a===i)&&2<r.stepDistance&&(0<=t&&t<=45||-45<=t&&t<0)?(r.direction="right",e="gesture:swipe",a=i):(a===n||a===s)&&2<r.stepDistance&&45<t&&t<135?(r.direction="down",e="gesture:swipe",a=s):(a===n||a===s)&&2<r.stepDistance&&-135<t&&t<-45&&(r.direction="up",e="gesture:swipe",a=s),2<r.stepDistance&&h.step(),e}m.init=function(){const e=m.view(),t=m.options();t.html=!1,t.css=!1,d=!1!==t.passive&&"false"!==e.attr("data-o-passive"),c=t.startGap||e.attr("data-o-startgap")},m.create=function(){const e=d?zuix.$(window):m.view();e.on("dragstart",{handler:function(e){l||d||e.preventDefault()},passive:d}).on("mousedown",{handler:function(e){const t=zuix.$(e.target);1===e.which&&0===t.parent('[class*="no-gesture"]').length()&&e.x>c?(f=!0,l=!1,t.get().draggable=!1,g(e,e.x,e.y)):l=!0},passive:d}).on("mousemove",{handler:function(e){!l&&f&&t(e,e.x,e.y)},passive:d}).on("mouseup",function(e){1!==e.which||l||(f=!1,w(e))}).on("touchstart",{handler:function(e){const t=zuix.$(e.target);0===t.parent('[class*="no-gesture"]').length()&&e.touches[0].clientX>c?(l=!1,t.get().draggable=!1,g(e,e.touches[0].clientX,e.touches[0].clientY)):l=!0},passive:d}).on("touchmove",{handler:function(e){l||t(e,e.touches[0].clientX,e.touches[0].clientY)},passive:d}).on("touchend",function(e){l||w(e)})}},module.exports)},{componentId:"/lib/1.1/controllers/drawer-layout",controller:((module={}).exports=function(){let o=!0,i=!1,t=!1,s=!1,a=!0,r=null,l=null,d=null,c=280,n=960,p=!1,u=0;const h=this;function f(){l.visibility("initial").css("left",0).get().focus(),t&&(l.find("a").one("click",function(){x()}),r.css("opacity","initial"),r.show()),o||(o=!0,h.trigger("drawer:open",{smallScreen:t}))}function x(){var e;t&&(e=function(){o||l.visibility("hidden")},l.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e()}),l.css("left",-c+"px"),r.hide(),o&&(o=!1,h.trigger("drawer:close",{smallScreen:t}))),o=!1,l.find("a").off("click")}function e(){return o}function m(){(window.innerWidth||document.body.clientWidth)<n||-1===n||p?(t&&!a||(t=!0,i=!1,g()),x()):(t||a)&&(t&&(r.hide(),o&&x()),t=!1,i=!0,g(),f())}function g(){var e;a||w(),d&&(e=parseFloat(getComputedStyle(d.get(),null).getPropertyValue("padding-left")),t?d.css({paddingLeft:e-c+"px"}):d.css({paddingLeft:c+e+"px"})),h.trigger("layout:change",{smallScreen:t,drawerLocked:i})}function w(){var e;s||(s=!0,e="ease .15s",l.css({"transition-property":"left",transition:e}),r.css({"transition-property":"opacity",transition:e}))}h.init=function(){const e=h.view();this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)?(t=parseInt(e.attr("data-o-width")),isNaN(t)||(c=t)):c=parseInt(this.options().drawerWidth);{var t;isNaN(this.options().autoHideWidth)?(t=parseInt(e.attr("data-o-hide-width")),isNaN(t)||(n=t)):n=parseInt(this.options().autoHideWidth)}},h.create=function(){l=h.view(),d=h.options().mainContent,(r=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){i||x()}).hide(),l.parent().append(r.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:c+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(e,t){i||(w(),u=o&&t.startX<c?c-t.startX:0)},"gesture:release":function(e,t){i||n&&(n=!1,w(),(0<t.velocity?f:x)())},"gesture:pan":function(e,t){if(!i&&"horizontal"===t.scrollIntent()&&((n||o)&&t.x<c||!n&&t.x<50)){n=n||!0,w();{let e=t.x;0<e&&e<=c-u&&(e=-c+e+u,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",e+"px"),"none"===r.display()&&r.show(),r.css("opacity",(c+e)/c))}s&&(s=!1,l.css({transition:"none"}),r.css({transition:"none"}))}}}}),h.expose("toggle",function(){w(),(o?x:f)()}),h.expose("open",function(){w(),f()}),h.expose("close",function(){w(),x()}),h.expose("isOpen",e),h.expose("lock",function(e){if(null==e)return i;i=e}),h.expose("float",function(e){if(null==e)return p;p=e,m()}),l.on("keydown",function(e){27===(e=e||window.event).keyCode&&x()}),m(),a=!1,window.addEventListener("resize",function(){m()})}},module.exports)}]);