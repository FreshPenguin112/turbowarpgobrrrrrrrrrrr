var GUI=function(e){function n(n){for(var a,o,c=n[0],l=n[1],s=n[2],i=0,b=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(f&&f(n);b.length;)b.shift()();return d.push.apply(d,s||[]),t()}function t(){for(var e,n=0;n<d.length;n++){for(var t=d[n],a=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(a=!1)}a&&(d.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={69:0},d=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=a);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"js/"+({1:"addon-settings~addons~editor~fullscreen~player",4:"addon-default-entry",5:"addon-entry-2d-color-picker",6:"addon-entry-better-img-uploads",7:"addon-entry-block-count",8:"addon-entry-block-palette-icons",9:"addon-entry-blocks2image",10:"addon-entry-cat-blocks",11:"addon-entry-clones",12:"addon-entry-columns",13:"addon-entry-custom-block-shape",14:"addon-entry-custom-block-text",15:"addon-entry-custom-zoom",16:"addon-entry-data-category-tweaks-v2",17:"addon-entry-debugger",18:"addon-entry-default-costume-editor-color",19:"addon-entry-disable-paste-offset",20:"addon-entry-disable-stage-drag-select",21:"addon-entry-editor-buttons-reverse-order",22:"addon-entry-editor-colored-context-menus",23:"addon-entry-editor-extra-keys",24:"addon-entry-editor-sounds",25:"addon-entry-editor-stage-left",26:"addon-entry-editor-stepping",27:"addon-entry-editor-theme3",28:"addon-entry-fullscreen",29:"addon-entry-gamepad",30:"addon-entry-hide-delete-button",31:"addon-entry-hide-flyout",32:"addon-entry-hide-new-variables",33:"addon-entry-hide-stage",34:"addon-entry-initialise-sprite-position",35:"addon-entry-load-extensions",36:"addon-entry-mediarecorder",37:"addon-entry-mouse-pos",38:"addon-entry-no-script-bumping",39:"addon-entry-paint-by-default",40:"addon-entry-remove-curved-stage-border",41:"addon-entry-remove-sprite-confirm",42:"addon-entry-script-snap",43:"addon-entry-search-sprites",44:"addon-entry-swap-local-global",45:"addon-entry-transparent-orphans",46:"addon-entry-tw-disable-compiler",47:"addon-entry-tw-remove-backpack",48:"addon-entry-tw-remove-feedback",49:"addon-entry-tw-straighten-comments",50:"addon-entry-variable-manager",51:"addon-l10n-de",52:"addon-l10n-es",53:"addon-l10n-fr",54:"addon-l10n-hu",55:"addon-l10n-it",56:"addon-l10n-ja",57:"addon-l10n-ko",58:"addon-l10n-nl",59:"addon-l10n-pl",60:"addon-l10n-pt",61:"addon-l10n-ro",62:"addon-l10n-ru",63:"addon-l10n-sl",64:"addon-l10n-tr",66:"addons",71:"iframe-extension-worker",72:"library-backdrops",73:"library-costumes",74:"library-sounds",75:"library-sprites",77:"sb"}[e]||e)+"."+{1:"ea2fd7598fcaaee6ed6f",4:"46d0608192d01ed25e76",5:"9656470864f873b9f813",6:"4bba0381d0baa791cf5b",7:"27defa6718ca83ee09e1",8:"10538d2fda8d88158c65",9:"fb3120ee50387eca2078",10:"d7e22d3cbe1a23f0a518",11:"40fe98de701816764b66",12:"13b42a279e3938afde6e",13:"a3071b058c00a3a6f4b2",14:"01735e74f24b3abf2e8d",15:"c66fcecfdf74a81638c6",16:"8885653120ff0c151223",17:"ef63567369b6bd50567d",18:"afaa241392388db3b3b8",19:"4deac36f2ba273098f82",20:"2ee4287702d54ca0bbbc",21:"6e7a0241fef913a6116f",22:"d09d2f1f6bcfcbb62204",23:"2f94fea823dbb6642882",24:"11a22ebca4fa03db3930",25:"30bbfba596b3cde5a4b3",26:"0065b4b0c4fcae872c92",27:"369326fd03335d0d3f38",28:"aaee78e0842e1146d704",29:"ddb8d12f4450c71a931c",30:"eaa4541c1a67312f7e63",31:"23ba0e6f2b13c6d0e9b9",32:"33de2195643e1e89051b",33:"619f11817ca4a4105a91",34:"b2805f745f04f3ffc339",35:"09c4dcf43f6a3c7171e8",36:"ca2b741fd970f99a386b",37:"f886f93871232eed1311",38:"aff8f9a09dbe556c8786",39:"b3273b7d3875fd2b3d38",40:"cdfb30fa960cf321cfae",41:"452ce2e17595cbbef4d0",42:"b68781b0686d59beef52",43:"8d516e1956d6a3431b3d",44:"3a817b67aa824f1b888b",45:"2581519c91faa16163b1",46:"b6cace30879ed9736599",47:"5b0ae6701bb3b3b4d042",48:"6435de8610d30ae63ac3",49:"4883a46afc4d808e0040",50:"bf2801920f01272760c9",51:"45b1af24ee0ffc370025",52:"8c7c51a70410906fd859",53:"108423d3bd05affc2d48",54:"50c52636d7aab0440e22",55:"033136e9b5d45b47ff7d",56:"1031fe935e3045b95904",57:"d6fea7edc1d7e08e6bed",58:"6565d11eecd169f502c5",59:"b09fc957bc64d09f8ac8",60:"6c4434be0a8ca823703b",61:"24f440e7333497af7b4e",62:"6c7cd5d94b81a0dbbb07",63:"6c703613db9ce3885d58",64:"690a5751f96098db85a8",66:"d201fee6df715b13e577",71:"e365856aea657f2fa1e8",72:"947dffc1509fde2a262d",73:"3773c4454715b1bff0b1",74:"0213ca511b4799ef7570",75:"a0ae539c7c66d9b11bd8",77:"d15c2713d7120fb83f3d"}[e]+".js"}(e);var l=new Error;d=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+d+")",l.name="ChunkLoadError",l.type=a,l.request=d,t[1](l)}r[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(n)},o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonpGUI=window.webpackJsonpGUI||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var f=l;return d.push([1464,0,3,2]),t()}({1464:function(e,n,t){"use strict";t.r(n);t(287);var a=t(51),r=t.n(a),d=t(1),o=t.n(d),c=t(37),l=t(64),s=t(157),f=t(5),i=t.n(f),b=t(0),u=t.n(b),p=t(6),y=t(72),h=t(26),m=t(174);const g=["isFullScreen","onSetIsFullScreen","onSetWindowIsFullScreen"];function v(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var S=t(159),w=t(168),F=t(169),O=t(68);const j=(()=>{const e=location.hash.match(/#(\d+)/);if(null!==e)return e[1];const n=location.pathname.match(/(\d+)\/embed/);return null!==n?n[n.length-1]:"0"})(),k=new URLSearchParams(location.search);let I;const x=Object(c.d)(s.a,S.a,(function(e){class n extends o.a.Component{constructor(e){super(e),i()(this,["handleFullScreenChange"])}componentDidMount(){document.addEventListener("fullscreenchange",this.handleFullScreenChange),document.addEventListener("webkitfullscreenchange",this.handleFullScreenChange)}shouldComponentUpdate(e){return this.props.isFullScreen!==e.isFullScreen}componentDidUpdate(){m.a.available()&&(this.props.isFullScreen?m.a.request():m.a.enabled()&&m.a.exit())}componentWillUnmount(){document.removeEventListener("fullscreenchange",this.handleFullScreenChange),document.removeEventListener("webkitfullscreenchange",this.handleFullScreenChange)}handleFullScreenChange(){const e=m.a.enabled();this.props.onSetWindowIsFullScreen(e),this.props.onSetIsFullScreen(e)}render(){const n=this.props,{isFullScreen:t,onSetIsFullScreen:a,onSetWindowIsFullScreen:r}=n,d=v(n,g);return o.a.createElement(e,d)}}n.propTypes={isFullScreen:u.a.bool,onSetIsFullScreen:u.a.func,onSetWindowIsFullScreen:u.a.func};return Object(p.b)(e=>({isFullScreen:e.scratchGui.mode.isFullScreen}),e=>({onSetIsFullScreen:n=>e(Object(y.c)(n)),onSetWindowIsFullScreen:n=>e(Object(h.n)(n))}))(n)}))(F.a);Object(l.setAppElement)(O.a),r.a.render(o.a.createElement(x,{isEmbedded:!0,projectId:j,onVmInit:e=>{I=e,I.runtime.renderer.setPrivateSkinAccess(!1)},onProjectLoaded:()=>{k.has("autoplay")&&(I.start(),I.greenFlag())},routingStyle:"none"}),O.a),k.has("addons")&&Object(w.a)()}});