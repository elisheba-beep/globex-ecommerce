(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{9749:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,l=void 0!==r&&r,c=t.priority,u=void 0!==c&&c,p=t.loading,y=t.lazyRoot,O=void 0===y?null:y,E=t.lazyBoundary,k=void 0===E?"200px":E,C=t.className,P=t.quality,R=t.width,L=t.height,N=t.style,_=t.objectFit,q=t.objectPosition,M=t.onLoadingComplete,W=t.placeholder,D=void 0===W?"empty":W,B=t.blurDataURL,U=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=s.useContext(m.ImageConfigContext),F=s.useMemo((function(){var t=v||T||f.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return h({},t,{allSizes:e,deviceSizes:n})}),[T]),H=U,V=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(V=H.layout),delete H.layout);var G=x;if("loader"in H){if(H.loader){var J=H.loader;G=function(t){t.config;var e=b(t,["config"]);return J(e)}}delete H.loader}var $="";if(function(t){return"object"===typeof t&&(j(t)||function(t){return void 0!==t.src}(t))}(e)){var Q=j(e)?e.default:e;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(B=B||Q.blurDataURL,$=Q.src,(!V||"fill"!==V)&&(L=L||Q.height,R=R||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}e="string"===typeof e?e:$;var K=z(R),X=z(L),Y=z(P),Z=!u&&("lazy"===p||"undefined"===typeof p);(e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,Z=!1);w.has(e)&&(Z=!1);var tt,et=o(s.useState(!1),2),nt=et[0],rt=et[1],it=o(g.useIntersection({rootRef:O,rootMargin:k,disabled:!Z}),3),ot=it[0],at=it[1],lt=it[2],ct=!Z||at,ut={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},st={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},dt=!1,ft={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:q};0;0;var gt=Object.assign({},N,"raw"===V?{}:ft),mt="blur"!==D||nt?{}:{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)ut.display="block",ut.position="absolute",ut.top=0,ut.left=0,ut.bottom=0,ut.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var pt=X/K,yt=isNaN(pt)?"100%":"".concat(100*pt,"%");"responsive"===V?(ut.display="block",ut.position="relative",dt=!0,st.paddingTop=yt):"intrinsic"===V?(ut.display="inline-block",ut.position="relative",ut.maxWidth="100%",dt=!0,st.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(ut.display="inline-block",ut.position="relative",ut.width=K,ut.height=X)}else 0;var ht={src:S,srcSet:void 0,sizes:void 0};ct&&(ht=A({config:F,src:e,unoptimized:l,layout:V,width:K,quality:Y,sizes:n,loader:G}));var bt=e;0;var vt,wt="imagesrcset",St="imagesizes";wt="imageSrcSet",St="imageSizes";var Ot=(i(vt={},wt,ht.srcSet),i(vt,St,ht.sizes),vt),jt=s.default.useLayoutEffect,At=s.useRef(M),zt=s.useRef(e);s.useEffect((function(){At.current=M}),[M]),jt((function(){zt.current!==e&&(lt(),zt.current=e)}),[lt,e]);var xt=h({isLazy:Z,imgAttributes:ht,heightInt:X,widthInt:K,qualityInt:Y,layout:V,className:C,imgStyle:gt,blurStyle:mt,loading:p,config:F,unoptimized:l,placeholder:D,loader:G,srcString:bt,onLoadingCompleteRef:At,setBlurComplete:rt,setIntersection:ot,isVisible:ct},H);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(I,Object.assign({},xt)):s.default.createElement("span",{style:ut},dt?s.default.createElement("span",{style:st},tt?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,s.default.createElement(I,Object.assign({},xt))),u?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ht.src+ht.srcSet+ht.sizes,rel:"preload",as:"image",href:ht.srcSet?void 0:ht.src},Ot))):null)};var c,u,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),d=(c=n(3121))&&c.__esModule?c:{default:c},f=n(139),g=n(9246),m=n(8730),p=(n(670),n(2700));function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){y(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}function b(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var O=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(k(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(t){return void 0!==t.default}function A(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,o=t.width,l=t.quality,c=t.sizes,u=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,e,n,r){var i=t.deviceSizes,o=t.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(t){return t>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,i,c),d=s.widths,f=s.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(t,r){return"".concat(u({config:e,src:n,quality:l,width:t})," ").concat("w"===f?t:r+1).concat(f)})).join(", "),src:u({config:e,src:n,quality:l,width:d[g]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=O.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(t,e,n,r,i,o){t&&t.src!==S&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.parentNode&&(w.add(e),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=t.naturalWidth,a=t.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var I=function(t){var e=t.imgAttributes,n=t.heightInt,r=t.widthInt,i=t.qualityInt,o=t.layout,a=t.className,l=t.imgStyle,c=t.blurStyle,u=t.isLazy,d=t.placeholder,f=t.loading,g=t.srcString,m=t.config,p=t.unoptimized,y=t.loader,v=t.onLoadingCompleteRef,w=t.setBlurComplete,S=t.setIntersection,O=t.onLoad,j=t.onError,z=(t.isVisible,b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,e,"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,className:a,style:h({},l,c),ref:s.useCallback((function(t){S(t),(null===t||void 0===t?void 0:t.complete)&&E(t,g,0,d,v,w)}),[S,g,o,d,v,w]),onLoad:function(t){E(t.currentTarget,g,0,d,v,w),O&&O(t)},onError:function(t){"blur"===d&&w(!0),j&&j(t)}})),(u||"blur"===d)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},z,A({config:m,src:g,unoptimized:p,layout:o,width:r,quality:i,sizes:e.sizes,loader:y}),"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function k(t){return"/"===t[0]?t.slice(1):t}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!l,s=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],m=i(o.useState(e?e.current:null),2),p=m[0],y=m[1],h=o.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||f||t&&t.tagName&&(s.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=u.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=c.get(r):(e=c.get(n),u.push(n));if(e)return e;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(n,e={id:n,observer:o,elements:i}),e}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){if(a.delete(t),o.unobserve(t),0===a.size){o.disconnect(),c.delete(i);var e=u.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&u.splice(e,1)}}}(t,(function(t){return t&&g(t)}),{root:p,rootMargin:n}))}),[r,p,n,f]),b=o.useCallback((function(){g(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var t=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[f]),o.useEffect((function(){e&&y(e.current)}),[e]),[h,f,b]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),t.exports=e.default)},5675:function(t,e,n){t.exports=n(9749)},1163:function(t,e,n){t.exports=n(880)},8357:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var n,i=t.attr,o=t.size,c=t.title,u=l(t,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,u,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}}}]);