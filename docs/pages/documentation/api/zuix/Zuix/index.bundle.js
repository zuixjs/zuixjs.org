zuix.setComponentCache([{componentId:"/lib/1.1/controllers/header-auto-hide",controller:((module={}).exports=function(t){let i,n,a,s,r=0,l;function d(){null!=i&&i.hasClass("header-collapse")&&i.removeClass("header-collapse").addClass("header-expand"),null!=n&&n.hasClass("footer-collapse")&&n.removeClass("footer-collapse").addClass("footer-expand"),l&&l.check()}function p(){i.hasClass("header-collapse")||i.removeClass("header-expand").addClass("header-collapse"),null==n||n.hasClass("footer-collapse")||n.removeClass("footer-expand").addClass("footer-collapse")}t.init=function(){t.options().css=!1,t.options().html=!1},t.create=function(){if(!(i=t.options().header||t.view().attr("data-o-header")))throw new Error("Header element not specified.");if(0===(i=zuix.field(i)).length())throw new Error('Header element not found: "'+i+'".');a=i.position().rect.height;var o=getComputedStyle(i.get()).position;"fixed"!==o&&"absolute"!==o&&(r=a);const e=t.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+a+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+a+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+a+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");o=t.options().footer||t.view().attr("data-o-footer");null!=o&&((n=zuix.field(o)).css({position:"fixed",zIndex:1}),s=n.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+s+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+s+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+s+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:e,on:{"scroll:change":function(o,n){"scroll"===n.event&&n.info.viewport.y<-r?n.info.shift.y<-4?(0<r&&"fixed"!==i.css("position")&&(e.css({paddingTop:a+"px"}),i.hide().css({position:"fixed",zIndex:1})),p()):4<n.info.shift.y&&(i.show(),d()):"hit-bottom"===n.event?(i.show(),d()):0<r&&0===n.info.viewport.y&&(e.css({paddingTop:null}),i.show().css({position:null,zIndex:null})),t.trigger("page:scroll",n)}},ready:function(o){l=o,t.expose("scroll",{get:function(){return l}}),t.trigger("scroll:ready",l)}}),t.expose("show",d),t.expose("hide",p)}},module.exports)},{componentId:"/lib/1.1/controllers/drawer-layout",controller:((module={}).exports=function(){let t=!0,i=!1,n=!1,a=!1,s=!0,r=null,l=null,d=null,p=280,e=960,c=!1,f=0;const u=this;function h(){l.visibility("initial").css("left",0).get().focus(),n&&(l.find("a").one("click",function(){m()}),r.css("opacity","initial"),r.show()),t||(t=!0,u.trigger("drawer:open",{smallScreen:n}))}function m(){var o;n&&(o=function(){t||l.visibility("hidden")},l.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){o()}),l.css("left",-p+"px"),r.hide(),t&&(t=!1,u.trigger("drawer:close",{smallScreen:n}))),t=!1,l.find("a").off("click")}function o(){return t}function x(){(window.innerWidth||document.body.clientWidth)<e||-1===e||c?(n&&!s||(n=!0,i=!1,w()),m()):(n||s)&&(n&&(r.hide(),t&&m()),n=!1,i=!0,w(),h())}function w(){var o;s||g(),d&&(o=parseFloat(getComputedStyle(d.get(),null).getPropertyValue("padding-left")),n?d.css({paddingLeft:o-p+"px"}):d.css({paddingLeft:p+o+"px"})),u.trigger("layout:change",{smallScreen:n,drawerLocked:i})}function g(){var o;a||(a=!0,o="ease .15s",l.css({"transition-property":"left",transition:o}),r.css({"transition-property":"opacity",transition:o}))}u.init=function(){const o=u.view();this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)?(n=parseInt(o.attr("data-o-width")),isNaN(n)||(p=n)):p=parseInt(this.options().drawerWidth);{var n;isNaN(this.options().autoHideWidth)?(n=parseInt(o.attr("data-o-hide-width")),isNaN(n)||(e=n)):e=parseInt(this.options().autoHideWidth)}},u.create=function(){l=u.view(),d=u.options().mainContent,(r=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){i||m()}).hide(),l.parent().append(r.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:p+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let e=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(o,n){i||(g(),f=t&&n.startX<p?p-n.startX:0)},"gesture:release":function(o,n){i||e&&(e=!1,g(),(0<n.velocity?h:m)())},"gesture:pan":function(o,n){if(!i&&"horizontal"===n.scrollIntent()&&((e||t)&&n.x<p||!e&&n.x<50)){e=e||!0,g();{let o=n.x;0<o&&o<=p-f&&(o=-p+o+f,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",o+"px"),"none"===r.display()&&r.show(),r.css("opacity",(p+o)/p))}a&&(a=!1,l.css({transition:"none"}),r.css({transition:"none"}))}}}}),u.expose("toggle",function(){g(),(t?m:h)()}),u.expose("open",function(){g(),h()}),u.expose("close",function(){g(),m()}),u.expose("isOpen",o),u.expose("lock",function(o){if(null==o)return i;i=o}),u.expose("float",function(o){if(null==o)return c;c=o,x()}),l.on("keydown",function(o){27===(o=o||window.event).keyCode&&m()}),x(),s=!1,window.addEventListener("resize",function(){x()})}},module.exports)}]);