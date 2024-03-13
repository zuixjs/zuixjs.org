zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/header-auto-hide",controller:function(){"use strict";var t={};return t.exports=function(l){let a,e,r,c,d,h=0,p;function u(){null!=a&&a.hasClass("header-collapse")&&a.removeClass("header-collapse").addClass("header-expand"),null!=e&&e.hasClass("footer-collapse")&&e.removeClass("footer-collapse").addClass("footer-expand"),p&&p.check()}function m(){a.hasClass("header-collapse")||a.removeClass("header-expand").addClass("header-collapse"),null==e||e.hasClass("footer-collapse")||e.removeClass("footer-expand").addClass("footer-collapse")}l.init=function(){l.options().css=!1,l.options().html=!1},l.create=function(){r=l.options().showEnd,a=l.options().header;const i=l.options().zIndex||10;if(!a)throw new Error("Header element not specified.");if(0===(a=zuix.field(a)).length())throw new Error('Header element not found: "'+a+'".');const n=getComputedStyle(a.get());zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide");var t=l.options().footer;let s=null;null!=t&&((e=zuix.field(t)).css({position:"fixed",zIndex:i}),s=getComputedStyle(e.get()),zuix.$.appendCss(`
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
`,null,"zkit_header_auto_hide"));const o=l.options().scrollHost||l.view();zuix.load("@lib/controllers/scroll-helper",{view:o,on:{"scroll:change":function(t,e){c=parseFloat(n.height),"fixed"!==n.position&&"absolute"!==n.position&&(h=c),document.documentElement.style.setProperty("--header-height",-c+"px"),s&&(d=parseFloat(s.height),document.documentElement.style.setProperty("--footer-height",-d+"px")),"scroll"===e.event&&e.info.viewport.y<-h?e.info.shift.y<-4?(0<h&&"fixed"!==a.css("position")&&(o.css({paddingTop:c+"px"}),a.hide().css({position:"fixed",zIndex:i})),m()):4<e.info.shift.y&&(a.show(),u()):"hit-bottom"===e.event&&r?(a.show(),u()):0<h&&0===e.info.viewport.y&&(o.css({paddingTop:null}),a.show().css({position:null,zIndex:null})),l.trigger("page:scroll",e)}},ready:function(t){p=t,l.expose("scroll",{get:function(){return p}}),l.trigger("scroll:ready",p)}}),l.expose("show",u),l.expose("hide",m)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/scroll-helper",controller:function(){"use strict";var t={};function n(i,n){let s=void 0,o=void 0;return function(){const t=this,e=arguments;o?(clearTimeout(s),s=setTimeout(function(){Date.now()-o>=n&&(i.apply(t,e),o=Date.now())},n-(Date.now()-o))):(i.apply(t,e),o=Date.now())}}return t.exports=function(){const o={timestamp:0,size:{width:0,height:0},viewport:{x:0,y:0,width:0,height:0}};let e,i,s,l=0,a;const r=this;function c(){null!=e&&clearTimeout(e);var t=(new Date).getTime();if(100<t-o.timestamp?d():e=setTimeout(function(){d()},99),!(t<l&&t-a<66)){a=t;const n="scroll-helper-visible";null!=i&&null!=s&&i.each(function(t,e){var i=this.position();if(!i.visible&&this.hasClass(n))this.removeClass(n),i.event="exit";else if(i.visible){if(!i.visible)return;this.hasClass(n)?i.event="scroll":(i.event="enter",this.addClass(n))}else i.event="off-scroll";s(this,i)})}}function d(){var t=r.view().get(),e=t.getBoundingClientRect(),e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height,x:e.x,y:e.y},t=(e.y=-r.view().get().scrollTop||e.y||0,e.height=r.view().get().scrollHeight||e.height||0,o.size.width=e.width,o.size.height=e.height,t===document.body?(o.size.width=document.body.offsetWidth,o.size.height=document.body.offsetHeight,o.viewport.width=document.documentElement.clientWidth||o.size.width,o.viewport.height=document.documentElement.clientHeight||o.size.height):(o.viewport.width=t.offsetWidth,o.viewport.height=t.offsetHeight),o.timestamp=(new Date).getTime(),o.shift={x:e.x-o.viewport.x,y:e.y-o.viewport.y},o.viewport.x=e.x,o.viewport.y=e.y,o.size.height+e.y-o.viewport.height);0==t||0===e.y?r.trigger("scroll:change",{event:0===e.y?"hit-top":"hit-bottom",info:o}):r.trigger("scroll:change",{event:"scroll",info:o})}function h(t,e){if((t instanceof Element||t instanceof zuix.$.ZxQuery)&&(t=zuix.$(t).position().y-o.viewport.y),-1===e)return p(t);var i=Date.now(),i=(e=(l=null!=e?i+e:l)-i,r.view().get());let n=0;n=i===document.body?void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:i.scrollTop;i=t-n;if(e<=0||0==i)p(t),c();else{const s=n+i/e*33;requestAnimationFrame(function(){p(s),h(t)})}}function p(t){var e=r.view().get();e===document.body?(document.documentElement.scrollTop=t,document.body.scrollTop=t):e.scrollTop=t}r.init=function(){r.options().html=!1,r.options().css=!1},r.create=function(){r.view().get()===document.body?0<r.options().throttle?window.onscroll=n(c,r.options().throttle):window.onscroll=c:0<r.options().throttle?r.view().on("scroll",{handler:n(c,r.options().throttle),passive:!0}):r.view().on("scroll",{handler:c,passive:!0});r.expose("watch",function(t,e){return t=t,e=e,s=null!=t?(i=r.view(t),e):i=null,r.context}),r.expose("scrollStart",function(t){return h(0,t=null==t?-1:t),r.context}).expose("scrollEnd",function(t){return null==t&&(t=-1),h(o.size.height,t),r.context}).expose("scrollTo",function(t,e){return h(t,e=null==e?-1:e),r.context}).expose("info",function(){return o}).expose("check",c)}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/mdl-button",controller:function(){"use strict";var t={};return t.exports=function(){this.init=()=>{var t=this.options().theme||"indigo-pink";this.view().parent().get().mode&&(this.options().fetchOptions={priority:"low"},self.MaterialButton||this.using("script","@cdnjs/material-design-lite/1.3.0/material.min.js"),this.using("style","@cdnjs/material-design-lite/1.3.0/material."+t+".min.css"),this.using("style","https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"))},this.create=()=>{const e=this.view();var t=this.options(),i=t.type||"raised";e.addClass("mdl-button mdl-js-button mdl-button--"+i+" mdl-js-ripple-effect"),t.class&&t.class.split(" ").forEach(t=>{e.addClass("mdl-button--"+t)}),"fab"!==i&&"icon"!==i||-1!==e.html().indexOf("material-icons")||(t=e.get().textContent,e.html(`<i class="material-icons">${t}</i>`)),i=e,zuix.activeRefresh(i,i,null,(t,e,i,n)=>{window.componentHandler?componentHandler.upgradeElements(t.get()):n(i,33,!0)}).start()}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/mdl-menu",controller:function(){"use strict";var t={};return t.exports=function(){const l=this;l.init=function(){var t=this.options().theme||"indigo-pink";this.view().parent().get()instanceof ShadowRoot&&(this.options().fetchOptions={priority:"low"},self.MaterialMenu||this.using("script","@cdnjs/material-design-lite/1.3.0/material.min.js"),this.using("style","@cdnjs/material-design-lite/1.3.0/material."+t+".min.css"),this.using("style","https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"));this.options().css="ul{ margin:0 !important; padding:0 !important; } li{width:100%} li[disabled]{ pointer-events: none; } a{text-decoration: none;}",!0!==window.__mdl_patched&&(Object.defineProperty(window,"__mdl_patched",{value:!0}),MaterialMenu.prototype.init=function(){if(this.element_){var e=document.createElement("div"),i=(e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e,document.createElement("div")),i=(i.classList.add(this.CssClasses_.OUTLINE),this.outline_=i,e.insertBefore(i,this.element_),this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"));let t=this.element_.__mdl_menu_forel;(t=null==t&&i?document.getElementById(i):t)&&((this.forElement_=t).addEventListener("click",this.handleForClick_.bind(this)),t.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this)));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(let t=0;t<n.length;t++)n[t].addEventListener("click",this.boundItemClick_),n[t].tabIndex="-1",n[t].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(let t=0;t<n.length;t++){var s=n[t],o=document.createElement("span"),l=(o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER),document.createElement("span"));l.classList.add(this.CssClasses_.RIPPLE),o.appendChild(l),s.appendChild(o),s.classList.add(this.CssClasses_.RIPPLE_EFFECT)}}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED),t&&setTimeout(()=>{zuix.context(t,t=>{var e=t.$.hasClass("mdl-button--mini-fab"),i=t.$.hasClass("mdl-button--icon");t.$.find(".material-icons").css({transition:"none",transform:"translate(0,0)",WebkitTransform:"translate(0,0)",marginTop:e?"8px":i?"0":"16px",marginLeft:e||i?"1px":"2px",position:"initial"}),setTimeout(()=>{t.$.find(".material-icons").css({transition:"transform .2s ease-in-out"})},100)})},250)}},MaterialMenu.prototype.handleForClick_=function(t){if(this.element_&&this.forElement_){var e=this.forElement_.getBoundingClientRect(),i=this.forElement_.context?this.forElement_.context.options().__shadowRoot.position().rect:this.forElement_.parentElement.getBoundingClientRect();let t=this.forElement_.context?i.top:0;t&&(t+=document.scrollingElement.scrollTop);var n=this.forElement_.context?i.width:0;this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=i.right-e.right-n+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight-t+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=i.bottom-e.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=i.right-e.right+"px",this.container_.style.bottom=i.bottom-e.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(t)},MaterialMenu.prototype._hide||(MaterialMenu.prototype._hide=MaterialMenu.prototype.hide,MaterialMenu.prototype.hide=function(){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(zuix.context(this.container_.parentElement,t=>{t._c.trigger("menu:hide",this.forElement_)}),this._hide())}),MaterialMenu.prototype._show||(MaterialMenu.prototype._show=MaterialMenu.prototype.show,MaterialMenu.prototype.show=function(t){zuix.context(this.container_.parentElement,t=>{t._c.trigger("menu:show",this.forElement_)}),this._show(t)}))},l.create=function(){this.view().css("position","relative");const t=this.options().position||"unaligned",e="menu-"+this.context.contextId,o=this.view("ul");if(o.length()){o.addClass("mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--"+t).attr("for",e),o.get().__mdl_menu_forel=this.options().forel,o.find("li").on("click",function(t,e){t.target===e.get()&&this.find("a").each((t,e,i)=>{e.click()})}),this.view("li").addClass("mdl-menu__item mdl-menu__item--full-bleed-divider").on("click",function(t,e){l.trigger("menu:select",{action:e.attr("action"),$el:e})});const i=t=>{var e,t=function(t,e){if(null==t.position){let t="mdl-menu--";return e.frame.dy<.5?t+="bottom-":t+="top-",e.frame.dx<.5?t+="left":t+="right",t}}(l.options(),t.position());t&&(e="mdl-menu--bottom-left mdl-menu--bottom-right mdl-menu--top-left mdl-menu--top-right mdl-menu--unaligned",o.removeClass(e).addClass(t),o.prev().removeClass(e).addClass(t),l.view("div.mdl-menu__container").css({top:"",left:"",right:"",bottom:""}))};this.expose({toggle:t=>o.get().MaterialMenu.toggle(t),show:t=>o.get().MaterialMenu.show(t),hide:()=>o.get().MaterialMenu.hide()});let s=this.view("a,button");1<=s.length()&&(s=s.eq(s.length()-1)).attr("id",e).addClass("mdl-button mdl-js-button mdl-js-ripple-effect").on("click",()=>i(s)),i(l.view()),zuix.activeRefresh(l.view(),l.view(),null,(t,e,i,n)=>{window.componentHandler?(new MaterialMenu(o.get()),componentHandler.upgradeElements(o.get().querySelectorAll("li")),1<=s.length()&&componentHandler.upgradeElements(s.get()),l.context.isReady=!0):n(i,33,!0)}).start()}}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/drawer-layout",controller:function(){"use strict";var t={};return t.exports=function(){let n=!0,s=!1,e=!1,o=!1,l=!0,a=null,r=null,c=null,d=280,t=960,h=!1,p=0;const u=this;function m(){r.visibility("initial").css("left",0).get().focus(),e&&(r.find("a").one("click",function(){f()}),a.css("opacity","initial"),a.show()),n||(n=!0,u.trigger("drawer:open",{smallScreen:e}))}function f(){var t;e&&(t=function(){n||r.visibility("hidden")},r.one("transitionend transitioncancel",function(){t()}),r.css("left",-d+"px"),a.hide(),n)&&(n=!1,u.trigger("drawer:close",{smallScreen:e})),n=!1,r.find("a").off("click")}function g(){return n}function x(){(window.innerWidth||document.body.clientWidth)<t||-1===t||h?(e&&!l||(e=!0,s=!1,i()),f()):(e||l)&&(e&&(a.hide(),n)&&f(),e=!1,s=!0,i(),m())}function i(){var t;l||v(),c&&(t=parseFloat(getComputedStyle(c.get(),null).getPropertyValue("padding-left")),e?c.css({paddingLeft:t-d+"px"}):c.css({paddingLeft:d+t+"px"})),u.trigger("layout:change",{smallScreen:e,drawerLocked:s})}function v(){var t;o||(o=!0,t="ease .15s",r.css({"transition-property":"left",transition:t}),a.css({"transition-property":"opacity",transition:t}))}u.init=function(){this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)||(d=parseInt(this.options().drawerWidth));isNaN(this.options().autoHideWidth)||(t=parseInt(this.options().autoHideWidth))},u.create=function(){r=u.view(),c=u.options().mainContent,(a=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){s||f()}).hide(),r.parent().append(a.get()),r.css({position:"fixed","overflow-y":"auto",left:0,width:d+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let i=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(t,e){s||(v(),p=n&&e.startX<d?d-e.startX:0)},"gesture:release":function(t,e){s||i&&(i=!1,v(),(0<e.velocity?m:f)())},"gesture:pan":function(t,e){s||"horizontal"!==e.scrollIntent()||((i||n)&&e.x<d||!i&&e.x<50)&&(i=i||!0,v(),0<(e=(e=e).x)&&e<=d-p&&(e=-d+e+p,"hidden"===r.visibility()&&r.visibility("initial"),r.css("left",e+"px"),"none"===a.display()&&a.show(),a.css("opacity",(d+e)/d)),o)&&(o=!1,r.css({transition:"none"}),a.css({transition:"none"}))}}}),u.expose("toggle",function(){v(),(n?f:m)()}),u.expose("open",function(){v(),m()}),u.expose("close",function(){v(),f()}),u.expose("isOpen",g),u.expose("lock",function(t){if(null==t)return s;s=t}),u.expose("float",function(t){if(null==t)return h;h=t,x()}),r.on("keydown",function(t){27===(t=t||window.event).keyCode&&f()}),x(),l=!1,window.addEventListener("resize",function(){x()})}},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/gesture-helper",controller:function(){"use strict";var t={};return t.exports=function(){const i=0,s=1,o=2,n=750;let l=i,a,r=!1,c=!0,d=-1,h,p,u,m=!1,f=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const g=this;function x(t,e,i){var n=(new Date).getTime();a={event:t,cancel:function(){a.event.cancelBubble=!0,c||a.event.preventDefault()},startX:e,startY:i,startTime:n,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:n,velocity:0,x:e,y:i,scrollIntent:function(){switch(l){case s:return"horizontal";case o:return"vertical"}return!1}},u=function(n){let s;function t(){n.stepTime=n.endTime,n.stepX=n.shiftX,n.stepY=n.shiftY,n.stepSpeed=0,n.stepDistance=0}function o(){s=n.direction,l.time=(new Date).getTime(),l.x=n.x,l.y=n.y,n.velocity=0,n.distance=0,t()}const l={time:0,x:0,y:0},a={time:0,x:0,y:0};return o(),{update:function(){var t,e,i;a.time=(new Date).getTime(),a.x=n.x,a.y=n.y,null!=s&&s!==n.direction?o():(null==s&&n.direction!==s&&(s=n.direction),t=a.time-l.time,e={x:a.x-l.x,y:a.y-l.y},i=Math.sqrt(e.x*e.x+e.y*e.y),i=(n.distance=i)/t,n.velocity="left"===n.direction||"up"===n.direction?-i:i,n.stepTime=n.endTime-n.stepTime,e={x:n.shiftX-n.stepX,y:n.shiftY-n.stepY},n.stepDistance=Math.sqrt(e.x*e.x+e.y*e.y),n.stepSpeed=n.stepDistance/n.stepTime)},step:t}}(a),g.trigger("gesture:touch",a)}function e(t,e,i){null!=a&&(a.event=t,a.x=e,a.y=i,a.shiftX=e-a.startX,a.shiftY=i-a.startY,a.endTime=(new Date).getTime(),null!=(t=w())&&!1!==h&&(p=null!=p&&p!==a.direction?(h=!1,"cancel"):(h=t,a.direction)),g.trigger("gesture:pan",a))}function v(t){null!=a&&(u.update(),a.event=t,null!=(h=null==h?w():h))&&!1!==h&&g.trigger(h,a),g.trigger("gesture:release",a),l=i,p=null,h=null,a=null}function w(){let t=null;u.update();var e=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>f+100&&a.stepTime<n?(f=(new Date).getTime(),t="gesture:tap"):(l===i||l===s)&&2<a.stepDistance&&(135<=e&&e<=180||-180<=e&&e<=-135)?(a.direction="left",t="gesture:swipe",l=s):(l===i||l===s)&&2<a.stepDistance&&(0<=e&&e<=45||-45<=e&&e<0)?(a.direction="right",t="gesture:swipe",l=s):(l===i||l===o)&&2<a.stepDistance&&45<e&&e<135?(a.direction="down",t="gesture:swipe",l=o):(l===i||l===o)&&2<a.stepDistance&&-135<e&&e<-45&&(a.direction="up",t="gesture:swipe",l=o),2<a.stepDistance&&u.step(),t}g.init=function(){var t=g.options();t.html=!1,t.css=!1,c=!1!==t.passive&&c,d=t.startGap||d},g.create=function(){(c?zuix.$(window):g.view()).on("dragstart",{handler:function(t){r||c||t.preventDefault()},passive:c}).on("mousedown",{handler:function(t){var e=zuix.$(t.target);!(r=-1===document.elementsFromPoint(t.x,t.y).indexOf(g.view().get()))&&1===t.which&&0===e.parent('[class*="no-gesture"]').length()&&t.x>d?(m=!0,r=!1,e.get().draggable=!1,x(t,t.x,t.y)):r=!0},passive:c}).on("mousemove",{handler:function(t){!r&&m&&e(t,t.x,t.y)},passive:c}).on("mouseup",function(t){1!==t.which||r||(m=!1,v(t))}).on("touchstart",{handler:function(t){var e=zuix.$(t.target);!(r=-1===document.elementsFromPoint(t.touches[0].clientX,t.touches[0].clientY).indexOf(g.view().get()))&&0===e.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>d?(r=!1,e.get().draggable=!1,x(t,t.touches[0].clientX,t.touches[0].clientY)):r=!0},passive:c}).on("touchmove",{handler:function(t){r||e(t,t.touches[0].clientX,t.touches[0].clientY)},passive:c}).on("touchend",function(t){r||v(t)})}},t.exports}()}]);