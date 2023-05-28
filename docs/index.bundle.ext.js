zuix.store("config",{title:"zuix.js",subtitle:"Presentation and documentation website.",language:"en",baseUrl:"/",resourcePath:"/app/",siteRoot:"https://zuixjs.org/",libraryPath:{"@lib":"https://zuixjs.github.io/zkit/lib/1.2/","@hgui":"https://genielabs.github.io/homegenie-web-ui/app/","@cdnjs":"https://cdnjs.cloudflare.com/ajax/libs/"},"zuixjs.github.io":{baseUrl:"/zuixjs.org/",resourcePath:"/zuixjs.org/app/"},siteMapUrl:"https://zuixjs.org",googleSiteId:null}),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js")});var clicky_custom,clicky_obj=clicky_obj||function(){var t=null;function e(){var p=this,g=[],c=[],t=0,e=0,i=0,o=0;this.domain="//in.getclicky.com",this.sitekeys=[],this.site_id_exists=function(t){for(var e in g)if(g[e]==t)return!0;return!1},this.sitekey=function(t,e){return p.sitekeys&&p.sitekeys[t]?(e?"":"&sitekey=")+p.sitekeys[t]:""},this.init=function(t){p.site_id_exists(t)||(g.push(t),clicky_custom.getHighEntropyValues&&navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&navigator.userAgentData.getHighEntropyValues(["model","platformVersion"]).then(function(t){p.he_model=t.model,p.he_platform=parseInt(t.platformVersion)}),e||(e=1,setTimeout(p.setup,200)))},this.setup=function(){location.hash.match(/^#_heatmap/)&&p.heatmap(),p.get_cookie("_first_pageview")||p.set_referrer(),p.start_monitors(),clicky_custom.pageview_disable||p.pageview(1)},this.custom_data=function(){for(var t={},e=["username","name","email"],i=e.length,c=0;c<i;c++){var o=e[c],n="";(n=p.get_cookie("_custom_data_"+o))&&(t[o]=n),clicky_custom.visitor&&(n=clicky_custom.visitor[o])&&(t[o]=n),location.search.match(/utm_custom/)&&(n=location.search.split("utm_custom["+o+"]"))[1]&&(n=n[1].split("&")[0].split("=")[1])&&(t[o]=n)}var a="";if(clicky_custom.visitor)for(var c in clicky_custom.visitor)clicky_custom.visitor.hasOwnProperty&&clicky_custom.visitor.hasOwnProperty(c)&&(t[c]||(t[c]=clicky_custom.visitor[c]));if(t)for(var c in t)t.hasOwnProperty&&t.hasOwnProperty(c)&&(a+="&custom["+p.enc(c)+"]="+p.enc(t[c]));return a},this.set_referrer=function(){var t=(clicky_custom.track_iframe||!top.document.referrer?document:top.document).referrer;t=(t=!t||!t.match(/^https?:/)||RegExp("^https?://[^/]*"+location.host.replace(/^www\./i,"")+"/","i").test(t)?"":t)||p.get_cookie("_referrer_og"),p.ref=t,p.get_href().match(/utm_campaign/)||(p.utm=p.get_cookie("_utm_og"))},this.pageview=function(t){var e=p.get_href();if(!p.facebook_is_lame(e)){p.beacon("pageview","&href="+p.enc(e)+"&title="+p.enc(clicky_custom.title||window.clicky_page_title||(clicky_custom.track_iframe||!top.document.title?document:top.document).title)+(p.ref?"&ref="+p.enc(p.ref):"")+(p.utm?"&utm="+p.enc(p.utm):""),t?1:0);for(var i=0;i<g.length;i++)p.is_pageview_fired(g[i])||c.push(g[i])}},this.get_href=function(t){var e=clicky_custom.href||(clicky_custom.track_iframe?location.pathname+location.search:top.location.pathname+top.location.search);return location.hash.match(/utm_campaign/i)&&(e=e+(location.search?"&":"?")+location.hash.substr(1)),t?p.enc(e):e},this.log=function(t,e,i){t&&!p.facebook_is_lame(t)&&("pageview"==i&&(t=t.replace(/^https?:\/\/([^\/]+)/i,"")),p.beacon({type:i||"click",href:t,title:e||""}))},this.facebook_is_lame=function(t){return t&&t.match&&t.match(/fb_xd_fragment|fb_xd_bust|fbc_channel/i)},this.heatmap_xy=function(t){var e,i;if(t.pageX)e=t.pageX,i=t.pageY;else{if(!t.clientX)return;e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+document.body.scrollTop+document.documentElement.scrollTop}var t=p.doc_wh(),c=p.get_href();clicky_custom.heatmap_disable||p.beacon("heatmap","&heatmap[]="+p.enc(c)+"|"+e+"|"+i+"|"+t.w)},this.doc_wh=function(){var t=document.body,e=document.documentElement;return{w:window.innerWidth||e.clientWidth||1024,h:Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}},this.heatmap=function(t,e,i){window._heatmap_destroy&&_heatmap_destroy(),window.heatmapFactory?p.heatmap_data(t,e,i):(p.inject("//static.getclicky.com/inc/javascript/heatmap.js"),setTimeout('_cgen.heatmap("'+(t||"")+'","'+(e||"")+'","'+(i||"")+'")',1e3))},this.heatmap_data=function(t,e,i){wh=p.doc_wh(),p.inject("//clicky.com/ajax/onsitestats/heatmap?site_id="+g[0]+p.sitekey(g[0])+"&href="+p.get_href(1)+"&domain="+location.hostname+"&w="+wh.w+"&h="+wh.h+(location.hash.match(/^#_heatmap/)?location.hash.replace(/^#_heatmap/,""):"")+(t?"&date="+t:"")+(e?"&sub="+e:"")+(i?"&subitem="+i:"")+"&x="+Math.random())},this.heatmap_override=function(t){if(document.querySelectorAll)for(var e=document.querySelectorAll(t),i=0;i<e.length;i++)p.add_event(e[i],"click",p.heatmap_xy)},this.onsitestats=function(t,e){i?window.jQuery&&window._OSS?(p.jqnc&&(jQuery.noConflict(),p.jqnc=0),o&&!t||(o=1,p.inject("//clicky.com/ajax/onsitestats/?site_id="+g[0]+p.sitekey(g[0])+"&href="+p.get_href(1)+"&domain="+location.hostname+(t?"&refresh=1":"")+(e?"&reset=1":"")+"&x="+Math.random()))):setTimeout(p.onsitestats,200):(i=1,p.inject("//static.getclicky.com/inc/onsitestats.css","css"),p.inject("//static.getclicky.com/inc/javascript/onsitestats.js"),window.jQuery||(p.inject("//static.getclicky.com/inc/javascript/jquery.js"),p.jqnc=1),setTimeout(p.onsitestats,1e3))},this.start_monitors=function(){if(!t&&(t=1,p.hm_monitor(),clicky_custom.html_media_track&&(document.getElementsByTagName("audio").length||document.getElementsByTagName("video").length)&&p.html_media_monitor(),!clicky_custom.history_disable))try{p.pushState=history.pushState,history.pushState=function(){p.pushState.apply(history,arguments),setTimeout(p.pageview,250)},p.add_event(window,"popstate",function(t){t.state&&setTimeout(p.pageview,250)})}catch(t){}},this.hm_monitor=function(){if(document.body){if(p.add_event(document.body,"click",p.heatmap_xy),clicky_custom.heatmap_objects)if("object"==typeof clicky_custom.heatmap_objects)for(var t in clicky_custom.heatmap_objects)p.heatmap_override(clicky_custom.heatmap_objects[t]);else p.heatmap_override(clicky_custom.heatmap_objects)}else setTimeout(p.hm_monitor,1e3)},this.html_media_monitor=function(){window._htmlvid||p.inject("//static.getclicky.com/inc/javascript/video/html.js")},this.video=function(t,e,i,c){if(!i||!t)return!1;p.beacon("video","&video[action]="+t+"&video[time]="+(e||0)+"&href="+p.enc(i)+(c?"&title="+p.enc(c):""))},this.goal=function(t,e){t&&(t="number"==typeof t||t.match(/^[0-9]+$/)?"[id]="+t:"[name]="+p.enc(t),p.beacon({type:"goal",q:"&goal"+t+(e?"&goal[revenue]="+e:"")}))},this.beacon=function(t,e,i){if("object"==typeof t){var c=t;if(!c.type)return!1;if(t=c.type,c.q)e=c.q;else{var o="";for(l in c)"type"!=l&&c.hasOwnProperty&&c.hasOwnProperty(l)&&(o+="&"+l+"="+p.enc(c[l]));e=o,delete o}}else t=t||"pageview",e=e||"";var n="",a="",s="",r=p.get_cookie("_jsuid");if("heatmap"!=t&&"ping"!=t){if(n=p.custom_data(),clicky_custom.goal){if("object"==typeof clicky_custom.goal)for(var l in clicky_custom.goal)clicky_custom.goal.hasOwnProperty&&clicky_custom.goal.hasOwnProperty(l)&&(a+="&goal["+p.enc(l)+"]="+p.enc(clicky_custom.goal[l]));else a="&goal="+p.enc(clicky_custom.goal);clicky_custom.goal=""}if(clicky_custom.split){for(var l in clicky_custom.split)if(clicky_custom.split.hasOwnProperty&&clicky_custom.split.hasOwnProperty(l))if("goal"==l&&"object"==typeof clicky_custom.split.goal)for(var m=0,u=clicky_custom.split.goal.length;m<u;m++)s+="&split[goal][]="+clicky_custom.split.goal[m];else s+="&split["+p.enc(l)+"]="+p.enc(clicky_custom.split[l]);clicky_custom.split=""}}for(var _=0;_<g.length;_++){var h=g[_],d=p.get_cookie("_heatmaps_g2g_"+h)||window["_heatmaps_g2g_"+h]||"";p.get_cookie("_no_tracky_"+h)||"pageview"!=t&&window["unpoco_"+h]||"heatmap"==t&&"yes"!=d||i&&"pageview"==t&&p.is_pageview_fired(h)||p.inject(p.domain+"/in.php?site_id="+h+"&type="+t+e+n+a+s+"&res="+screen.width+"x"+screen.height+"&lang="+(navigator.language||navigator.browserLanguage||"en")+"&tz="+p.enc(window.Intl&&Intl.DateTimeFormat&&Intl.DateTimeFormat().resolvedOptions().timeZone||"")+"&tc="+(navigator.maxTouchPoints||"")+(p.he_platform?"&hep="+p.he_platform:"")+(p.he_model?"&hem="+p.he_model:"")+"&ck="+(navigator.cookieEnabled&&!clicky_custom.cookies_disable?1:0)+(r?"&jsuid="+r:"")+(d?"&hm="+d:"")+(clicky_custom.visitor_consent?"&consent=1":"")+"&mime=js&x="+Math.random(),"pageview"==t?"js":"beacon")}p.ref="",p.utm=""},this.inject=function(t,e){if("beacon"==(e=e||"js")){if(window.navigator.sendBeacon&&navigator.sendBeacon(t))return;e="js"}var i;"js"==e?((i=document.createElement("script")).type="text/javascript",i.async=!0,i.src=t):"css"==e&&((i=document.createElement("link")).type="text/css",i.rel="stylesheet",i.href=t),(document.body||document.getElementsByTagName("head")[0]).appendChild(i)},this.is_pageview_fired=function(t){for(var e=0;e<c.length;e++)if(c[e]==t)return!0;return!1},this.ping_start=function(){clicky_custom.ping_disable||p.pinging||clicky_custom.timeout&&(clicky_custom.timeout<5||240<clicky_custom.timeout)||(p.pinging=1,p.ps_stop=clicky_custom.timeout?60*clicky_custom.timeout-120+5:485,setTimeout(p.ping,3e4),setTimeout(p.ping,6e4),setTimeout(p.ping_set,12e4))},this.ping_set=function(){var t=setInterval(p.ping,12e4);setTimeout(function(){clearInterval(t)},1e3*p.ps_stop),p.ping()},this.ping=function(){p.beacon("ping")},this.get_cookie=function(t){if(clicky_custom.sticky_data_disable&&t.match(/^_(custom|utm|referrer)/))return"";for(var e=document.cookie.split(";"),i=0,c=e.length;i<c;i++)if(e[i].match(new RegExp("\\b"+t+"=")))return decodeURIComponent(e[i].split(t+"=")[1]);return""},this.set_cookie=function(t,e,i,c){if(clicky_custom.cookies_disable&&!c||clicky_custom.sticky_data_disable&&t.match(/^_(custom|utm|referrer)/))return!1;c="session"==i?"":";max-age="+(i||31536e3),i=t+"="+p.enc(e)+c+";path=/;";clicky_custom.cookie_domain?i+="domain="+clicky_custom.cookie_domain+";":location.hostname.match(/\./)&&(i+="domain=."+location.hostname.replace(/^www\./i,"")+";"),document.cookie=i},this.enc=function(t){return(window.encodeURIComponent?encodeURIComponent:escape)(t)},this.add_event=function(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)},this.advanced=function(){for(var t=new RegExp("^(https?|ftp|telnet|mailto|tel):","i"),e=new RegExp("^https?://(.*)"+location.host.replace(/^www\./i,""),"i"),i=new RegExp("\\.(7z|aac|apk|avi|cab|csv|dmg|doc(x|m|b)?|epub|exe|flv|gif|gz|jpe?g|js|m4a|mp(3|4|e?g)|mobi|mov|msi|ods|pdf|phps|png|ppt(x|m|b)?|rar|rtf|sea|sit|svgz?|tar|torrent|txt|vcf|web(m|p)|wma|wmv|xls(x|m|b)?|xml|zip)$","i"),c=document.getElementsByTagName("a"),o=0;o<c.length;o++)if("string"==typeof c[o].className)if(c[o].className.match(/clicky_log/i))c[o].className.match(/clicky_log_download/i)?p.add_event(c[o],"mousedown",p.download):c[o].className.match(/clicky_log_outbound/i)?p.add_event(c[o],"mousedown",p.outbound):p.add_event(c[o],"mousedown",p.click);else if(!(clicky_custom.outbound_disable||clicky_custom.advanced_disable||window.clicky_advanced_disable)&&t.test(c[o].href)&&!c[o].className.match(/clicky_ignore/i))if(i.test(c[o].href))p.add_event(c[o],"mousedown",p.download);else if(e.test(c[o].href)){if(clicky_custom.outbound_pattern){var n=clicky_custom.outbound_pattern;if("object"==typeof n){for(var a=0;a<n.length;a++)if(p.outbound_pattern_match(c[o].href,n[a])){p.add_event(c[o],"mousedown",p.outbound);break}}else"string"==typeof n&&p.outbound_pattern_match(c[o].href,n)&&p.add_event(c[o],"mousedown",p.outbound)}}else p.add_event(c[o],"mousedown",p.outbound)},this.adv_log=function(t,e){t=p.get_target(t);p.log(p.adv_href(t),p.adv_text(t),e)},this.get_target=function(t){t=(t=t||window.event).target||t.srcElement;return t=t.nodeType&&3==t.nodeType?t.parentNode:t},this.adv_href=function(t){do{if(t.href&&!t.src)return t.href}while(t=p.get_parent(t));return""},this.adv_text=function(t){do{var e=t.text||t.innerText;if(e)return e;if(t.title)return t.title;if(t.name)return t.name;if(t.alt)return t.alt;if(t.src)return t.src}while(t=p.get_parent(t));return""},this.get_parent=function(t){return t.parentElement||t.parentNode},this.outbound_pattern_match=function(t,e){return RegExp(e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")).test(t)},this.download=function(t){p.adv_log(t,"download")},this.outbound=function(t){p.adv_log(t,"outbound")},this.click=function(t){p.adv_log(t,"click")}}return new function(){this.getInstance=function(){return null==t&&((t=new e).constructor=null),t}}}(),clicky=clicky_obj.getInstance();if(window.clicky_custom||(clicky_custom={}),self!=top)try{var test=top.document.title}catch(t){clicky_custom.track_iframe=1}window.clicky_goal&&(clicky_custom.goal=clicky_goal),window.clicky_custom_session&&(clicky_custom.session=clicky_custom_session),clicky_custom.session&&(clicky_custom.visitor=clicky_custom.session),clicky_custom.no_cookies&&(clicky_custom.cookies_disable=1);var clicky_site_ids=clicky_site_ids||[],cs=(window.async_site_id&&clicky_site_ids.push(async_site_id),window.clicky_site_id&&clicky_site_ids.push(clicky_site_id),document.currentScript&&document.currentScript.getAttribute("data-id"));for(cs&&clicky_site_ids.push(cs);clicky_site_ids.length;)clicky.init(clicky_site_ids.shift());var _cgen=clicky,_cgen_custom=clicky_custom;