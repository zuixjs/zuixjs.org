if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const o=e=>i(e,s),r={module:{uri:s},exports:d,require:o};a[s]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(n(...e),d)))}}define(["./workbox-90aa7b36"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/content/docs/examples/alice/ch_1.html",revision:"7bdba3c49c7bb2e4cc412e7791c6e771"},{url:"app/content/docs/examples/alice/ch_2.html",revision:"ccfe438dd4542451bcdabf93ec332847"},{url:"app/content/docs/examples/alice/ch_3.html",revision:"eb43ef576cd0d1c6a85e2413870f34dc"},{url:"app/content/docs/examples/links.css",revision:"300f68df4ae2415d93a52a566b256dbf"},{url:"app/content/docs/examples/links.html",revision:"cbd247603f5f438b7c760f4fdc77cf50"},{url:"app/controllers/component-test.es5.js",revision:"4315ce75c388c30d6e5b42520e5eb6eb"},{url:"app/examples/custom-elements-01.css",revision:"d9d625f90e36313e16428a7f182dbedb"},{url:"app/examples/custom-elements-01.html",revision:"c3f276969279d6f36bf1da7c980a3935"},{url:"app/examples/custom-elements-01.js",revision:"3bda6a343eb5a68b88ced3007b4a0072"},{url:"app/examples/custom-elements-02.css",revision:"c3c565061953830904559b9616dea61c"},{url:"app/examples/custom-elements-02.html",revision:"38be43f8d48cbf1dc9cb31300c343ae9"},{url:"app/examples/custom-elements-02.js",revision:"f15a071167478bcdba0420f3f789edf7"},{url:"app/examples/default-component.css",revision:"fab25e621a552f6009b17f494305f723"},{url:"app/examples/default-component.html",revision:"aa5ff0eb86ede6142c6a4f4933a928f8"},{url:"app/examples/default-component.js",revision:"4bd425e89334935df53a1789a4dd6e78"},{url:"app/examples/new-component.css",revision:"2cc0fbc0683255a885678944443c7485"},{url:"app/examples/new-component.html",revision:"613d5e1a637a85199e1fef8017b38ca9"},{url:"app/examples/new-component.js",revision:"f99ff997e1d113ca735299fb5f936553"},{url:"app/templates/mdl_card.css",revision:"9009c7bca80ac31a896cc73e888cc929"},{url:"app/templates/mdl_card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"app/widgets/analog-clock.css",revision:"642d6b657e6aa1fd1624013f5d497096"},{url:"app/widgets/analog-clock.html",revision:"705d36dcc9859aea3435e71ee51faa9c"},{url:"app/widgets/analog-clock.js",revision:"31f7d503d0db768a3e9d5a1665776365"},{url:"app/widgets/analog-clock.module.js",revision:"b2ae21c339acb6ec7897fbf457677f2c"},{url:"app/widgets/time-clock.css",revision:"187e7e955c1e4009eb97f280ce082bcc"},{url:"app/widgets/time-clock.html",revision:"921217aece98231bb9b573093065faa2"},{url:"app/widgets/time-clock.js",revision:"6a322e9270fdf2173ee183543e8d9ada"},{url:"app/widgets/time-clock.module.js",revision:"13a758659df261b8e45f9bff3112c0b6"},{url:"config.js",revision:"6f9e3eddb73488b771c93a495c365262"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"9e0e13f82a40b6cb0e841c3cd522dc03"},{url:"index.bundle.ext.js",revision:"c03f4e81b014932677b104ef1a0fdac8"},{url:"index.html",revision:"b8121190b60fc6c436b5db63ba0ec1db"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/mdl/material.custom-theme.min.css",revision:"aa6fed7a67f1b8aba7de37a329146ae8"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"ab3b39c9f6f0bfc7aeb368d269bd8826"},{url:"js/zuix/zuix-bundler.min.js",revision:"0617543514fcfb44c497ff8f18c2fad2"},{url:"js/zuix/zuix-bundler.module.js",revision:"1fe646474df83c5f76a99f1001625e14"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"19edfe8c179716b37276f5e0fc7a33fe"},{url:"js/zuix/zuix.js",revision:"b4e2129f246c40b0478229c448c29aa4"},{url:"js/zuix/zuix.min.js",revision:"755a9d477a93a5e0c1492e71e89da176"},{url:"js/zuix/zuix.module.js",revision:"13738e748d423b00b0b5a41a05d9cd27"},{url:"js/zuix/zuix.module.min.js",revision:"e9692f0fc7ef4f09fc0b9ab5ae1a8f6d"},{url:"js/zuix/zx-context.module.js",revision:"8d5f2cabaa0dd997e0493f1d475daa9a"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"e53bdbd8f8f07400e5fb4e2c44971edb"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"12e17d2abecb09746b9afcec36a12820"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4c37892f2cdd9dcc2a36eeed115835b2"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"8fa79023bf83a50f1a6fc6b4807ee88d"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"c52442256ca65a4fe8e5f2d09253821b"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"007125caadfa0db21ac20636d692888b"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"manifest.json",revision:"62a5b876bebcc21a7bccd711f8fc6063"},{url:"pages/documentation/about/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/about/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/about/index.html",revision:"fec72898bf7b0017fe1eea9c32bbd7ea"},{url:"pages/documentation/active_refresh/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/active_refresh/index.bundle.js",revision:"f09c0a39553268d570e94cda1724b344"},{url:"pages/documentation/active_refresh/index.html",revision:"4ec3907077b87b9985ad5bd284d64b00"},{url:"pages/documentation/api/helpers/Logger/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/helpers/Logger/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/Logger/index.html",revision:"d5e7a45fe4c4675f21c6f93ebf69bef7"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/TaskQueue/index.html",revision:"74dce71288f5f879a7bb6320ff1f9085"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/ZxQuery/index.html",revision:"5b5c38852908cb90493840de7b5effcd"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.html",revision:"7eff9c89b6bf272c968145afc295ebfa"},{url:"pages/documentation/api/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/index.html",revision:"0dbb2e7d66c5a9833f7b8744fe8a8cbe"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/localizer/Localizer/index.html",revision:"cbeab603d5422ae34183baa80b1f97f7"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObjectObserver/index.html",revision:"0038ce46b5c7dd5165f366a3faad02b0"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObservableListener/index.html",revision:"9699a8ced575746a0959981361917fc2"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObservableObject/index.html",revision:"556a13eeb5b1f4e163f92f15f76aeb3a"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.html",revision:"fb14d3a7d9b302cd1c0566e522ad90d6"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ComponentContext/index.html",revision:"6b8efeca8c09a1ef8f654b20811af175"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/Componentizer/index.html",revision:"0ce93807dbcfcfcc21d4a5d5fa03a6e9"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ContextController/index.html",revision:"28046615c2d1f11227a820201ba8b946"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ControllerInstance/index.html",revision:"09da0893b4e64bda9bfe065df93eec3f"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ViewObserver/index.html",revision:"9094d683b9c0d9e3c7dfedd598cfde11"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.js",revision:"86f465142a769643bf2fce5dc262844c"},{url:"pages/documentation/api/zuix/Zuix/index.html",revision:"68edaf19d98d612817a5fe59207350b1"},{url:"pages/documentation/cli/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/cli/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/cli/index.html",revision:"2c823968068d3ba15234c406f043c7cf"},{url:"pages/documentation/component/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/component/index.bundle.js",revision:"929f41655269f55d4e29a581f54868c5"},{url:"pages/documentation/component/index.html",revision:"585ecb8bdb9373e5896eef4985d664aa"},{url:"pages/documentation/context_options/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/context_options/index.bundle.js",revision:"5fa352daefdd95d423f13eb29090559d"},{url:"pages/documentation/context_options/index.html",revision:"e4ffacf9394079d55bb7964de729e354"},{url:"pages/documentation/controller/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/controller/index.bundle.js",revision:"ceeb3f27d3ee82b67d63a27b20c3e9a3"},{url:"pages/documentation/controller/index.html",revision:"ce0c1e05d575645e50ec9805301e4a0e"},{url:"pages/documentation/getting_started/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/getting_started/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/getting_started/index.html",revision:"f9231e3d6c64769304b789663d62fcca"},{url:"pages/documentation/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/index.html",revision:"b14a695631f6f74c5bf124f42aef08f8"},{url:"pages/documentation/view/CheckValidityBehavior.js",revision:"ab85e19fbf7c513b7d6bf2d2f756eff0"},{url:"pages/documentation/view/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"pages/documentation/view/index.bundle.js",revision:"794c5466cde11c5314ed1101fb2b43fd"},{url:"pages/documentation/view/index.html",revision:"6ec4d8613dda25e4bc247f4a3f18d960"},{url:"pages/documentation/view/ViewSwitchBehavior.js",revision:"6568e13a81727f9347b65a41952a3b84"},{url:"playground/index.bundle.ext.js",revision:"d3537be1489b5c55e5120a84970b15f2"},{url:"playground/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"playground/index.html",revision:"1b4be49ae6dcf99328c157ead638894d"},{url:"search-index.json",revision:"407cd334bda4e62147b17e1efae28bf3"},{url:"search-list.json",revision:"b229cf16e7edbee3c6969a82633caf36"},{url:"search/index.bundle.ext.js",revision:"a834b504e9d2bac16fa41609cd335b53"},{url:"search/index.bundle.js",revision:"3cc60cfceb53d65f250c31efd348a7d0"},{url:"search/index.html",revision:"c63b1c2d803ff72f7bb52392cc486f97"},{url:"app/content/docs/examples/alice/img/ch_1_1.png",revision:"f13e634f4f4767f426a791ddf85ba9b0"},{url:"app/content/docs/examples/alice/img/ch_1_2.png",revision:"a40e24033ce25edb5169d5f50a1783d7"},{url:"app/content/docs/examples/alice/img/ch_1_3.png",revision:"9325671498a60f3e05c6bfdcb6001bac"},{url:"app/content/docs/examples/alice/img/ch_2_1.png",revision:"ffd9b2ce17eb5cf4b6e0c2e88128e7bc"},{url:"app/content/docs/examples/alice/img/ch_2_2.png",revision:"c0aa4864727b53a82614fb098c286bca"},{url:"app/content/docs/examples/alice/img/ch_2_3.png",revision:"45b8f2b32fa463cbbf478693354bb676"},{url:"app/content/docs/examples/alice/img/ch_2_4.png",revision:"5175980071714ec946d815b4180b23bc"},{url:"app/content/docs/examples/alice/img/ch_3_1.png",revision:"0b58afb90669a0c00dd796f64872b141"},{url:"app/content/docs/examples/alice/img/ch_3_2.png",revision:"6f21a396f2c8b7f3a5a884dc9a8932c0"},{url:"app/content/docs/examples/images/avatar_00.png",revision:"1a565667c6cf7310db22762e8385f396"},{url:"app/content/docs/examples/images/avatar_01.png",revision:"8b86e5f8249828163a0d7e9f6d315dce"},{url:"app/content/docs/examples/images/avatar_02.png",revision:"8a011d6e36c3b968241ac4331cd03aad"},{url:"app/content/docs/examples/images/avatar_03.png",revision:"57f804786860e3d1166d0905651efed2"},{url:"app/content/docs/examples/images/card_cover_2.jpg",revision:"36c8155fd8a8504c3c49aecc3a2f1426"},{url:"app/content/docs/examples/images/card_cover_3.jpg",revision:"018aa09363578ced3cac25fc174e2d97"},{url:"app/content/docs/examples/images/card_cover_4.jpg",revision:"17458ae6c0f602d385272776d07e2b79"},{url:"app/content/docs/examples/images/card_cover.jpg",revision:"056b0eb64ac30441bd6aca8e3798286b"},{url:"app/content/docs/examples/images/card_placeholder.jpg",revision:"d4969877fffc05adb98477330588dfb4"},{url:"app/content/docs/examples/images/cover_javascript.jpg",revision:"210c83cdaafae6be05c8fbb4cb4accc3"},{url:"app/content/docs/examples/images/cover_recipes.jpg",revision:"6b19a1781bc4e0ca2d71e843ec7ad38e"},{url:"images/examples/clock.png",revision:"ed8359352f4562f7b229ccc5e544fa4e"},{url:"images/github-mark-light.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/patreon.png",revision:"138534b06fe107c864e576d63273cf75"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
