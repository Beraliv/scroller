!function t(e,i,r){function n(o,a){if(!i[o]){if(!e[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=i[o]={exports:{}};e[o][0].call(h.exports,function(t){var i=e[o][1][t];return n(i?i:t)},h,h.exports,t,e,i,r)}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();!function(){Array.from||(Array.from=t("array-from")),function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype]),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||function(t){var e=document.querySelectorAll(t),i=this;return Array.prototype.some.call(e,function(t){return t===i})}),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null});var e=function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=arguments.length<=1||void 0===arguments[1]?document:arguments[1],i=e.querySelectorAll(t);return i?i[0]:null},i=function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=arguments.length<=1||void 0===arguments[1]?document:arguments[1],i=e.querySelectorAll(t);return i||null},s=function(t){return t.changedTouches&&t.changedTouches.length&&t.changedTouches[0].pageX||t.touches&&t.touches.length&&t.touches[0].pageX||t.pageX||0},o=function(t){for(var e=t.childNodes,i=[],r=e.length;r--;)1==e[r].nodeType&&i.unshift(e[r]);return i},a=function(){return navigator.userAgent.toLowerCase().indexOf("android")>-1},l=function(){function t(e){r(this,t);var i=e.align,n=void 0===i?"center":i,s=e.noAnchors,l=void 0===s?!1:s,c=e.noScrollbar,h=void 0===c?!1:c,u=e.hideScrollbar,f=void 0===u?!1:u,d=e.hideAnchors,g=void 0===d?!1:d,v=e.start,m=void 0===v?0:v,b=e.startAnimation,p=void 0===b?!1:b,y=e.el,w=e.onClick;this.config={align:n,noAnchors:g||l,noScrollbar:f||h,onClick:w,start:m,startAnimation:p,prefix:"ab_scroller",draggingClsnm:"is-dragging",leftAlignClsnm:"is-left-align",borderVsblClsnm:"is-visible",noAnchorsClsnm:"is-no-anchors",noScrollbarClsnm:"is-no-scrollbar",easing:function(t){return 1===t?1:-Math.pow(2,-10*t)+1}},this.state={scrolled:0,scrollable:!0,pointerDown:!1,scrollbarPointerDown:!1,mouseScroll:!1,scrollbarWidth:0,scrollbarFactor:0,pageX:[],scrolledDiff:0,downEventTS:0,moveEventTS:0,scrollbarDownPageX:0,scrollClickDisabled:!1,limitLeft:0,limitRight:0,stripWidth:0,swipeDirection:null,touchX:0,touchY:0,let:y.hasChildNodes()&&o(y).length||0,el:y||null,isAndroid:a()},window.raf=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){setTimeout(t,1e3/60)}}(),this.init(y)}return n(t,[{key:"get",value:function(t){return"undefined"!=typeof this.state[t]?this.state[t]:null}},{key:"set",value:function(t,e){this.state[t]=e}},{key:"push",value:function(t,e){this.state[t]&&this.state[t].push(e)}},{key:"clear",value:function(t){var e=this.state[t];e&&e.length&&(e.length=0)}},{key:"getLastMeaningfull",value:function(t){var e=this.state[t],i=e&&e.length&&e.length>3?3:1;return e[e.length-i]||0}},{key:"addClass",value:function(t,e){new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)||(t.className+=" "+e)}},{key:"removeClass",value:function(t,e){t.className=t.className.replace(new RegExp("(\\s+|^)"+e+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"")}},{key:"alignScbToRight",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-scrollbar",i);this.addClass(r,"is-right")}},{key:"releaseScb",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-scrollbar",i);this.removeClass(r,"is-right")}},{key:"setPos",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-strip",r);this.setPosition(n,t)}},{key:"setScbPos",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-scrollbar",r);this.setPosition(n,t)}},{key:"setPosition",value:function(t,e){t.style.webkitTransform="translateX("+e+"px)",t.style.MozTransform=t.style.msTransform=t.style.OTransform=t.style.transform="translateX("+e+"px)"}},{key:"setWidth",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-scrollbar",r);n.style.width=t+"px"}},{key:"init",value:function(t){var r=this;this.createWrapper(),this.wrapItems(),this.createAnchors(),this.setSize(),this.checkScrollable();var n=this.config.prefix,s=this.state.el,o=e("."+n+"-wrapper",s),a=e("."+n+"-strip",s),l=i("a",a),c=e("."+n+"-scrollwrap",s),h=e("."+n+"-scrollbar",s),u=i("."+n+"-anchor",s);("center"!==this.config.align||s.getAttribute("data-leftalign")||s.getAttribute("data-leftAlign")||s.getAttribute("data-leftIfWide")||s.getAttribute("data-leftifwide"))&&this.addClass(s,this.config.leftAlignClsnm),(this.config.noAnchors||s.getAttribute("data-hideAnchors")||s.getAttribute("data-noanchors")||s.getAttribute("data-noAnchors")||s.getAttribute("data-hideanchors"))&&this.addClass(s,this.config.noAnchorsClsnm),(this.config.noScrollbar||s.getAttribute("data-hideScrollbar")||s.getAttribute("data-noscrollbar")||s.getAttribute("data-noScrollbar")||s.getAttribute("data-hidescrollbar"))&&this.addClass(s,this.config.noScrollbarClsnm),s.getAttribute("data-start")&&(this.config.start=s.getAttribute("data-start")),(s.getAttribute("data-startAnimation")||s.getAttribute("data-startanimation"))&&(this.config.startAnimation=!0),a.addEventListener("mousedown",this.onPointerDown.bind(this)),a.addEventListener("touchstart",this.onPointerDown.bind(this)),document.addEventListener("mousemove",this.onPointerMove.bind(this)),document.addEventListener("touchmove",this.onPointerMove.bind(this)),document.addEventListener("mouseup",this.onPointerUp.bind(this)),document.addEventListener("touchend",this.onPointerUp.bind(this)),h.addEventListener("mousedown",this.onScrollbarPointerDown.bind(this)),h.addEventListener("touchstart",this.onScrollbarPointerDown.bind(this)),document.addEventListener("mousemove",this.onScrollbarPointerMove.bind(this)),document.addEventListener("touchmove",this.onScrollbarPointerMove.bind(this)),document.addEventListener("mouseup",this.onScrollbarPointerUp.bind(this)),document.addEventListener("touchend",this.onScrollbarPointerUp.bind(this)),c.addEventListener("click",this.onScrollClick.bind(this));var f=/Firefox/i.test(navigator.userAgent)?"wheel":"mousewheel";a.addEventListener(f,this.onScroll.bind(this)),Array.from(u).forEach(function(t){t.addEventListener("click",r.onAnchorClick.bind(r))}),Array.from(l).forEach(function(t){t.addEventListener("click",r.onClickLink.bind(r),!1)}),window.addEventListener("resize",function(t){r.setSize(),r.checkScrollable()}),window.addEventListener("load",function(t){r.setSize(),r.checkScrollable()});var d=function(){var t=r.findCentralNode(),e=r.config.startAnimation?1e3:0,i=void 0;t?(i=t.offsetLeft-o.offsetWidth/2+t.offsetWidth/2,i=Math.min(t.offsetLeft,i)):i=r.config.start,r.scrollTo(i,e)},g=function(t){return null===t.offsetParent};g(s)&&!function(){var t=setInterval(function(){if(!g(s)){r.get("scrolled");clearInterval(t),r._update(),r._update(),d()}},50)}(),d(),this.checkBorderVisibility()}},{key:"createWrapper",value:function(){var t=this.config.prefix,e=this.state.el,i=e.innerHTML,r='<div class="'+t+'-wrapper">\n        <div class="'+t+"-border "+t+'-border--left"></div>\n        <div class="'+t+"-border "+t+'-border--right"></div>\n        <div class="'+t+'-strip">'+i+'</div>\n\n        <div class="'+t+'-scrollwrap">\n          <div class="'+t+'-scrollbar"></div>\n        </div>\n        <div class="'+t+'-anchors"></div>\n      </div>';e.innerHTML=r,this.addClass(e,t)}},{key:"wrapItems",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-strip",i);Array.from(o(r)).forEach(function(e){var i=document.createElement("div");i.innerHTML=e.outerHTML,i.setAttribute("class",t+"-item"),e.parentNode.insertBefore(i,e),e.remove()})}},{key:"findCentralNode",value:function(){var t=this.config.prefix,e=this.state.el,r=i("[data-central]",e);return r&&r.length?r[r.length-1].closest("."+t+"-item"):null}},{key:"createAnchors",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-strip",i),n=e("."+t+"-anchors",i),s="",a=0;Array.from(o(r)).forEach(function(i){var r=e("[data-anchor]",i),n=r?r.getAttribute("data-anchor"):"";s+='<span data-anchorid="'+a+'" class="'+t+'-anchor"><span>'+n+"</span></span>",i.setAttribute("data-anchororiginid",a),a++}),n.innerHTML=s}},{key:"setSize",value:function(){var t=this.config.prefix,r=this.state.el,n=e("."+t+"-strip",r),s=e("."+t+"-wrapper",r),o=e("."+t+"-scrollbar",r),a=e("."+t+"-scrollwrap",r),l=i("."+t+"-item",r),c=0,h=0;r.setAttribute("style",""),n.setAttribute("style",""),s.setAttribute("style",""),o.setAttribute("style",""),a.setAttribute("style",""),Array.from(l).forEach(function(t){var e=t.offsetHeight;e>c&&(c=e),h+=t.offsetWidth});var u=s.offsetWidth,f=a.offsetWidth,d=h+1-r.offsetWidth,g=f/h,v=Math.min(this.get("scrolled"),d),m=v*g;r.style.height=c+"px",n.style.height=c+"px",n.style.width=h+1+"px",s.style.height=c+"px",o.style.width=u*g+"px",this.setPos(-1*v),this.setScbPos(m),this.set("limitRight",d),this.set("scrollbarFactor",g),this.set("scrollbarWidth",u*g)}},{key:"checkScrollable",value:function(){var t=this.config.prefix,r=this.state.el,n=(e("."+t+"-strip",r),e("."+t+"-wrapper",r)),s=i("."+t+"-item",r),o=e("."+t+"-anchors",r),a=0,l=n.offsetWidth;Array.from(s).forEach(function(t){a+=t.offsetWidth}),l>=a?(this.set("scrollable",!1),this.addClass(r,"is-not-scrollable"),o.setAttribute("style","width: "+a+"px")):(this.set("scrollable",!0),this.removeClass(r,"is-not-scrollable"),o.setAttribute("style","width:auto"))}},{key:"_update",value:function(){var t=(this.config.prefix,this.state.el);if("center"!==this.config.align?this.addClass(t,this.config.leftAlignClsnm):this.removeClass(t,this.config.leftAlignClsnm),this.config.noAnchors?this.addClass(t,this.config.noAnchorsClsnm):this.removeClass(t,this.config.noAnchorsClsnm),this.config.noScrollbar?this.addClass(t,this.config.noScrollbarClsnm):this.removeClass(t,this.config.noScrollbarClsnm),this.setSize(),this.checkScrollable(),this.checkBorderVisibility(),!this.config.noScrollbar){var e=this.get("scrolled");this.animate(e,e,0)}}},{key:"checkElement",value:function(t){return t.target.closest("."+this.config.prefix)==this.state.el}},{key:"onPointerDown",value:function(t){var i=this.get("scrollable");if(t&&i){this.handleTouchStart(t),t.touches||t.changedTouches||t.preventDefault(),this.set("pointerDown",!0),this.set("scrollbarPointerDown",!1),this.set("mouseScroll",!1),this.set("downEventTS",(new Date).getTime());var r=this.get("scrolled")+s(t);this.set("scrolledDiff",r);var n=this.config.prefix,o=this.state.el;e("."+n+"-strip",o);this.addClass(e("html"),this.config.draggingClsnm)}}},{key:"onPointerMove",value:function(t){var e=this.get("scrollable"),i=this.get("pointerDown");if(t&&i&&e&&(this.handleTouchMove(t),"v"!=this.get("swipeDirection"))){t.preventDefault();var r=this.get("scrolledDiff"),n=(this.get("scrolled"),s(t)),o=r-n,a=this.get("limitLeft"),l=this.get("limitRight"),c=this.get("scrollbarFactor"),h=o*c,u=this.get("scrollbarWidth");return a>o?(o=Math.round(.2*o),u+=Math.round(.2*h),h=0,this.setWidth(u)):o>l?(o=Math.round(.2*o+.8*l),u-=Math.round(.8*(o-l)*c),this.alignScbToRight(),this.setWidth(u)):this.releaseScb(),this.setPos(-1*o),this.setScbPos(h),this.set("scrolled",o),this.set("moveEventTS",(new Date).getTime()),this.push("pageX",n),this.checkBorderVisibility(),!1}}},{key:"onPointerUp",value:function(t){var i=this.get("scrollable"),r=this.get("pointerDown");if(t&&r&&i){if("v"==this.get("swipeDirection"))return this.set("pointerDown",!1),this.set("scrollbarPointerDown",!1),this.set("mouseScroll",!1),this.set("swipeDirection",null),void this.clear("pageX");t.preventDefault(),this.set("pointerDown",!1);var n=this.config.prefix,o=this.state.el;e("."+n+"-strip",o);this.removeClass(e("html"),this.config.draggingClsnm);var a=this.get("limitLeft"),l=this.get("limitRight"),c=this.get("scrolled"),h=this.getLastMeaningfull("pageX"),u=s(t),f=u-h,d=((new Date).getTime()-this.get("moveEventTS"))/1.5,g=c-8*f;if(0===h){if(this.config.onClick)return this.config.onClick(t);var v=t.target.closest("a");if(!v)return;var m=v.getAttribute("target"),b=v.getAttribute("href"),p=t.ctrlKey||t.metaKey;if(p)return window.open(b);if(!m&&b)return window.location.href=b;if(m.indexOf("blank")>-1&&b)return window.open(b)}if(a>c)this.animate(c,a,10,!0);else if(a>g)this.animate(c,a,10);else if(c>l)this.animate(c,l,10,!0);else if(g>l)this.animate(c,l,10);else if(150>d&&Math.abs(f)>2){var y=Math.round(Math.abs(f)/d);this.animate(c,Math.round(g),y)}return this.clear("pageX"),!1}}},{key:"onClickLink",value:function(t){var e=this.get("scrollable");return e?(t.preventDefault(),!1):t}},{key:"onScroll",value:function(t){var e=this.get("scrollable");if(t&&t.deltaX&&!(Math.abs(t.deltaY)>Math.abs(t.deltaX))&&e){t.preventDefault();var i=t.deltaX,r=this.get("limitLeft"),n=this.get("limitRight"),s=Math.min(Math.max(this.get("scrolled")+i,r),n),o=this.get("scrollbarWidth"),a=this.get("scrollbarFactor"),l=s*a;return this.setPos(-1*s),s==n?this.alignScbToRight():this.releaseScb(),this.setScbPos(l),this.setWidth(o),this.set("scrolled",s),this.set("mouseScroll",!0),this.checkBorderVisibility(),!1}}},{key:"onScrollClick",value:function(t){var e=this.get("scrollable"),i=this.get("scrollClickDisabled");if(i)return void this.set("scrollClickDisabled",!1);if(t&&t.preventDefault&&e){t.preventDefault();var r=this.get("scrollbarWidth"),n=this.get("scrollbarFactor"),o=this.get("limitLeft"),a=this.get("limitRight"),l=a*n,c=this.get("scrolled"),h=s(t),u=h-r/2,f=u-r/2,d=u+r/2,g=u/n;return o>f?g=o:d>l&&(g=a),this.animate(c,g),!1}}},{key:"onAnchorClick",value:function(t){var i=this.get("scrollable");if(t&&t.target&&i){var r=t.target.closest("[data-anchorid]").getAttribute("data-anchorid");if(r){this.releaseScb();var n=(this.config.prefix,this.state.el),s=e('[data-anchororiginid="'+r+'"]',n),o=this.get("limitLeft"),a=this.get("limitRight"),l=this.get("scrolled"),c=Math.min(Math.max(s.offsetLeft,o),a);return Math.abs(c)<2&&(c=0),this.set("mouseScroll",!1),this.animate(l,c),!1}}}},{key:"onScrollbarPointerDown",value:function(t){if(t){t.preventDefault(),t.stopPropagation(),this.releaseScb();var e=s(t),i=this.get("scrolled"),r=this.get("scrollbarFactor");return this.set("scrollbarPointerDown",!0),this.set("scrollClickDisabled",!0),this.set("pointerDown",!1),this.set("mouseScroll",!1),this.set("scrollbarDownPageX",e-i*r),!1}}},{key:"onScrollbarPointerMove",value:function(t){var e=this.get("scrollbarPointerDown");if(t&&e){t.preventDefault(),t.stopPropagation();var i=this.get("scrollbarFactor"),r=this.get("scrollbarDownPageX"),n=s(t),o=this.get("limitLeft"),a=this.get("limitRight"),l=n-r,c=Math.min(Math.max(l/i,o),a),h=c*i;return this.setPos(-1*c),this.setScbPos(h),this.set("scrolled",c),this.checkBorderVisibility(),!1}}},{key:"onScrollbarPointerUp",value:function(t){var e=this.get("scrollbarPointerDown");if(t&&e)return t.preventDefault(),t.stopPropagation(),this.set("scrollbarPointerDown",!1),!1}},{key:"handleTouchStart",value:function(t){(t.touches||t.changedTouches)&&(this.set("touchX",t.changedTouches[0].clientX||t.touches[0].clientX),this.set("touchY",t.changedTouches[0].clientY||t.touches[0].clientY))}},{key:"handleTouchMove",value:function(t){var e=this.get("touchX"),i=this.get("touchY");if(e&&i&&(t.touches||t.changedTouches)){var r=t.changedTouches[0].clientX||t.touches[0].clientX,n=t.changedTouches[0].clientY||t.touches[0].clientY,s=e-r,o=i-n;Math.abs(s)>Math.abs(o)?this.set("swipeDirection","h"):this.set("swipeDirection","v"),this.set("touchX",0),this.set("touchY",0)}}},{key:"animate",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=this,r=arguments.length<=2||void 0===arguments[2]?10:arguments[2],n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3],s=e-t,o=Math.max(.05,Math.min(Math.abs(s)/r,1)),a=this.get("scrollbarFactor"),l=this.get("limitRight")*a,c=(this.get("limitRight"),0==r?1:0),h=this.get("scrolled"),u=h*a,f=function d(){if(!i.get("pointerDown")&&!i.get("mouseScroll")){if(c+=1/60,h=1>c?t+s*i.config.easing(c/o):e,u=1>c?t*a+s*i.config.easing(c/o)*a:e*a,u=Math.min(u,l),n){var r=i.get("scrollbarWidth");e>t?r-=s*a*(1-i.config.easing(c/o)):r+=s*a*(1-i.config.easing(c/o)),i.setWidth(r)}else u>=l?i.alignScbToRight():i.releaseScb(),i.setScbPos(u);i.setPos(-1*h),i.set("scrolled",h),1>c?raf(d):i.checkBorderVisibility()}};return f()}},{key:"checkBorderVisibility",value:function(){var t=this.get("scrolled"),i=this.get("limitLeft"),r=this.get("limitRight"),n=this.config.prefix,s=this.state.el;if(t>i){var o=e("."+n+"-border--left",s);this.addClass(o,this.config.borderVsblClsnm)}else{var a=e("."+n+"-border--left",s);this.removeClass(a,this.config.borderVsblClsnm)}if(r>t){var l=e("."+n+"-border--right",s);this.addClass(l,this.config.borderVsblClsnm)}else{var c=e("."+n+"-border--right",s);this.removeClass(c,this.config.borderVsblClsnm)}}},{key:"scrollTo",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],i=this.get("limitRight"),r=this.get("limitLeft"),n=isNaN(t)?0:parseInt(t);n=Math.min(Math.max(n,r),i),"end"==t?n=i:"start"==t?n=r:"center"==t&&(n=i/2),this.animate(this.get("scrolled"),n,e)}},{key:"update",value:function(t){var e=t.align,i=void 0===e?this.config.align:e,r=t.noAnchors,n=void 0===r?this.config.noAnchors:r,s=t.hideAnchors,o=void 0===s?this.config.noAnchors:s,a=t.noScrollbar,l=void 0===a?this.config.noScrollbar:a,c=t.hideScrollbar,h=void 0===c?this.config.noScrollbar:c,u=t.onClick,f=void 0===u?this.config.onClick:u,d=t.start,g=void 0===d?this.config.start:d,v=t.startAnimation,m=void 0===v?this.config.startAnimation:v;this.config.align=i,this.config.noAnchors=o||n,this.config.noScrollbar=h||l,this.config.onClick=f,this.config.start=g,this.config.startAnimation=m,this._update()}}]),t}(),c=function(){var t=i(".scroller");Array.from(t).forEach(function(t){new l({el:t})})};document.addEventListener("DOMContentLoaded",function(){return c}),document.onreadystatechange=function(){"interactive"==document.readyState&&c()},window.Scroller=l}()},{"array-from":2}],2:[function(t,e,i){e.exports="function"==typeof Array.from?Array.from:t("./polyfill")},{"./polyfill":3}],3:[function(t,e,i){e.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,r=function(t){var r=e(t);return Math.min(Math.max(r,0),i)},n=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},s=function(e,i){if(null!=e&&null!=i){var r=e[i];if(null==r)return void 0;if(!t(r))throw new TypeError(r+" is not a function");return r}},o=function(t){var e=t.next(),i=Boolean(e.done);return i?!1:e};return function(e){"use strict";var i,a=this,l=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof l){if(!t(l))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}var c,h,u=s(e,n(e));if(void 0!==u){c=t(a)?Object(new a):[];var f=u.call(e);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");h=0;for(var d,g;;){if(d=o(f),!d)return c.length=h,c;g=d.value,l?c[h]=l.call(i,g,h):c[h]=g,h++}}else{var v=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var m=r(v.length);c=t(a)?Object(new a(m)):new Array(m),h=0;for(var b;m>h;)b=v[h],l?c[h]=l.call(i,b,h):c[h]=b,h++;c.length=m}return c}}()},{}]},{},[1]);