if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let s={};const o=e=>i(e,n),r={module:{uri:n},exports:s,require:o};a[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(d(...e),s)))}}define(["./workbox-90aa7b36"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/content/docs/examples/alice/ch_1.html",revision:"7bdba3c49c7bb2e4cc412e7791c6e771"},{url:"app/content/docs/examples/alice/ch_2.html",revision:"ccfe438dd4542451bcdabf93ec332847"},{url:"app/content/docs/examples/alice/ch_3.html",revision:"eb43ef576cd0d1c6a85e2413870f34dc"},{url:"app/content/docs/examples/links.css",revision:"300f68df4ae2415d93a52a566b256dbf"},{url:"app/content/docs/examples/links.html",revision:"cbd247603f5f438b7c760f4fdc77cf50"},{url:"app/controllers/component-test.es5.js",revision:"4315ce75c388c30d6e5b42520e5eb6eb"},{url:"app/examples/custom-elements-01.css",revision:"d9d625f90e36313e16428a7f182dbedb"},{url:"app/examples/custom-elements-01.html",revision:"68a64fc6d107c1ce892ec39a4a079768"},{url:"app/examples/custom-elements-01.js",revision:"3bda6a343eb5a68b88ced3007b4a0072"},{url:"app/examples/custom-elements-02.css",revision:"c3c565061953830904559b9616dea61c"},{url:"app/examples/custom-elements-02.html",revision:"38be43f8d48cbf1dc9cb31300c343ae9"},{url:"app/examples/custom-elements-02.js",revision:"f15a071167478bcdba0420f3f789edf7"},{url:"app/examples/default-component.css",revision:"fab25e621a552f6009b17f494305f723"},{url:"app/examples/default-component.html",revision:"aa5ff0eb86ede6142c6a4f4933a928f8"},{url:"app/examples/default-component.js",revision:"4bd425e89334935df53a1789a4dd6e78"},{url:"app/examples/new-component.css",revision:"2cc0fbc0683255a885678944443c7485"},{url:"app/examples/new-component.html",revision:"613d5e1a637a85199e1fef8017b38ca9"},{url:"app/examples/new-component.js",revision:"f99ff997e1d113ca735299fb5f936553"},{url:"app/templates/mdl_card.css",revision:"9009c7bca80ac31a896cc73e888cc929"},{url:"app/templates/mdl_card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"app/widgets/analog-clock.css",revision:"c14d980e48af8e7dca858e1c80461ce9"},{url:"app/widgets/analog-clock.html",revision:"705d36dcc9859aea3435e71ee51faa9c"},{url:"app/widgets/analog-clock.js",revision:"31f7d503d0db768a3e9d5a1665776365"},{url:"app/widgets/analog-clock.module.js",revision:"1168ab2dc46350ed095029f98eca8f57"},{url:"app/widgets/time-clock.css",revision:"187e7e955c1e4009eb97f280ce082bcc"},{url:"app/widgets/time-clock.html",revision:"921217aece98231bb9b573093065faa2"},{url:"app/widgets/time-clock.js",revision:"6a322e9270fdf2173ee183543e8d9ada"},{url:"app/widgets/time-clock.module.js",revision:"f03d6989378cc1de623d27e6ce885f6e"},{url:"config.js",revision:"757128de230f7e6b3c6e6fcb1b008786"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"8957823dd78e6a4fb2110dd7e605029a"},{url:"index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"index.html",revision:"395e17d04fba45e04d888ea90c97d20a"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/mdl/material.custom-theme.min.css",revision:"28d330007c57b55ad14e78a2dd4c917d"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"fe785a58a595ca9fe99c820ba9b4378a"},{url:"js/zuix/zuix-bundler.min.js",revision:"5f7de14fd0dccf940a7d380274ca2a92"},{url:"js/zuix/zuix-bundler.module.js",revision:"b4582edfe5e0430be498cab361d5443c"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"926edd0cc4eeb749dc1b3ff2b65f189c"},{url:"js/zuix/zuix.js",revision:"be93587fbb672dc6d3214748f1ef521b"},{url:"js/zuix/zuix.min.js",revision:"303ac523b8843fe147d8d2bca258d33d"},{url:"js/zuix/zuix.module.js",revision:"4d242f79a9ce654c52410a36a92fc0d8"},{url:"js/zuix/zuix.module.min.js",revision:"ee737140158ac05be4d4969b7451a3fa"},{url:"js/zuix/zx-context.module.js",revision:"8d5f2cabaa0dd997e0493f1d475daa9a"},{url:"manifest.json",revision:"62a5b876bebcc21a7bccd711f8fc6063"},{url:"pages/documentation/about/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/about/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/about/index.html",revision:"d1ab445d5644dcf853afdedc75003958"},{url:"pages/documentation/active_refresh/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/active_refresh/index.bundle.js",revision:"f09c0a39553268d570e94cda1724b344"},{url:"pages/documentation/active_refresh/index.html",revision:"7d2c77afe2a74b1539305d3aac2a2ccd"},{url:"pages/documentation/api/helpers/Logger/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/Logger/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/Logger/index.html",revision:"e171c8fbe73fe80766f6c385c87c85f0"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/TaskQueue/index.html",revision:"162794b1d7202102e248fe13627defde"},{url:"pages/documentation/api/helpers/Utils_dom/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/Utils_dom/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/Utils_dom/index.html",revision:"e385fdca990ff4ad7b5488db1c7f503c"},{url:"pages/documentation/api/helpers/Utils.dom/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/Utils.dom/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/Utils.dom/index.html",revision:"78a2bc40026b2e30c2917edc0e1f35a2"},{url:"pages/documentation/api/helpers/Utils/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/Utils/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/Utils/index.html",revision:"265bb91683bbd4eb426f50f74659c38d"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/ZxQuery/index.html",revision:"176b631d716f47012fb56d917be6ab64"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.html",revision:"80c4fb623d7b656e2f8ff7855e615b33"},{url:"pages/documentation/api/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/index.html",revision:"11c59fd96f1a9489d859c9e8aeebf119"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/localizer/Localizer/index.html",revision:"f0d269f2aab75fe92010a984dcf4f30f"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObjectObserver/index.html",revision:"37c53b8d1d1008d28e1ac164402d7b50"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObservableListener/index.html",revision:"de39c91995afcb194113768b7e6324e8"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/observable/ObservableObject/index.html",revision:"98e37127f4516161e4b3ac39760dd114"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.html",revision:"1fc422e541bafc98dbb02663bd13b78d"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ComponentContext/index.html",revision:"dd26563c527155e6e83dd799e1cf5a07"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/Componentizer/index.html",revision:"9320a540e077a9cfa4e7fbdb94c883d1"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ContextController/index.html",revision:"f69bfeb9754d042a1f60b1a7dd7eb077"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ControllerInstance/index.html",revision:"ca6258f31bd922c85983d9f81b12a228"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/api/zuix/ViewObserver/index.html",revision:"938d97d13b2199d139b098106f8cc8f9"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.js",revision:"86f465142a769643bf2fce5dc262844c"},{url:"pages/documentation/api/zuix/Zuix/index.html",revision:"b6319b92bb92f2e5a01a54fc1e8c691d"},{url:"pages/documentation/cli/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/cli/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/cli/index.html",revision:"ec5de4e815face0cd5f9ec925589d537"},{url:"pages/documentation/component/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/component/index.bundle.js",revision:"929f41655269f55d4e29a581f54868c5"},{url:"pages/documentation/component/index.html",revision:"2d1b590006fbe960e40771a1637d3770"},{url:"pages/documentation/context_options/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/context_options/index.bundle.js",revision:"5fa352daefdd95d423f13eb29090559d"},{url:"pages/documentation/context_options/index.html",revision:"e01384161baee66a8f5ee90cda8a582d"},{url:"pages/documentation/controller/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/controller/index.bundle.js",revision:"ceeb3f27d3ee82b67d63a27b20c3e9a3"},{url:"pages/documentation/controller/index.html",revision:"e96b3000c98af8b7ef939e8c833b9e6a"},{url:"pages/documentation/getting_started/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/getting_started/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/getting_started/index.html",revision:"b99b9e06330b88c5a568f9a0da0e1c30"},{url:"pages/documentation/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/index.bundle.js",revision:"c077959ab48c60a9daa8a391bcd70afd"},{url:"pages/documentation/index.html",revision:"b33fffdcdfaff88145a87732699c7355"},{url:"pages/documentation/view/CheckValidityBehavior.js",revision:"ab85e19fbf7c513b7d6bf2d2f756eff0"},{url:"pages/documentation/view/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"pages/documentation/view/index.bundle.js",revision:"794c5466cde11c5314ed1101fb2b43fd"},{url:"pages/documentation/view/index.html",revision:"df2735af8ee41f453d3c11c746d61e09"},{url:"pages/documentation/view/ViewSwitchBehavior.js",revision:"6568e13a81727f9347b65a41952a3b84"},{url:"playground/index.bundle.ext.js",revision:"8d71385458c300f2c7847c2de85d29c1"},{url:"playground/index.bundle.js",revision:"ab4b4e85e62fedd1c16196fc6893aed3"},{url:"playground/index.html",revision:"72308406ba457506ccc5b416a88aeb1e"},{url:"search-index.json",revision:"e5742eb3a4232d77e529e968b3a67ca3"},{url:"search-list.json",revision:"ab40e4c40176093e96384dcfaa9513ff"},{url:"search/index.bundle.ext.js",revision:"1dc48636135106d840ca00bc3d7b9329"},{url:"search/index.bundle.js",revision:"3cc60cfceb53d65f250c31efd348a7d0"},{url:"search/index.html",revision:"ef3c8d4a3a431f0131a9880d6ff40b5d"},{url:"app/content/docs/examples/alice/img/ch_1_1.png",revision:"f13e634f4f4767f426a791ddf85ba9b0"},{url:"app/content/docs/examples/alice/img/ch_1_2.png",revision:"a40e24033ce25edb5169d5f50a1783d7"},{url:"app/content/docs/examples/alice/img/ch_1_3.png",revision:"9325671498a60f3e05c6bfdcb6001bac"},{url:"app/content/docs/examples/alice/img/ch_2_1.png",revision:"ffd9b2ce17eb5cf4b6e0c2e88128e7bc"},{url:"app/content/docs/examples/alice/img/ch_2_2.png",revision:"c0aa4864727b53a82614fb098c286bca"},{url:"app/content/docs/examples/alice/img/ch_2_3.png",revision:"45b8f2b32fa463cbbf478693354bb676"},{url:"app/content/docs/examples/alice/img/ch_2_4.png",revision:"5175980071714ec946d815b4180b23bc"},{url:"app/content/docs/examples/alice/img/ch_3_1.png",revision:"0b58afb90669a0c00dd796f64872b141"},{url:"app/content/docs/examples/alice/img/ch_3_2.png",revision:"6f21a396f2c8b7f3a5a884dc9a8932c0"},{url:"app/content/docs/examples/images/avatar_00.png",revision:"1a565667c6cf7310db22762e8385f396"},{url:"app/content/docs/examples/images/avatar_01.png",revision:"8b86e5f8249828163a0d7e9f6d315dce"},{url:"app/content/docs/examples/images/avatar_02.png",revision:"8a011d6e36c3b968241ac4331cd03aad"},{url:"app/content/docs/examples/images/avatar_03.png",revision:"57f804786860e3d1166d0905651efed2"},{url:"app/content/docs/examples/images/card_cover_2.jpg",revision:"36c8155fd8a8504c3c49aecc3a2f1426"},{url:"app/content/docs/examples/images/card_cover_3.jpg",revision:"018aa09363578ced3cac25fc174e2d97"},{url:"app/content/docs/examples/images/card_cover_4.jpg",revision:"17458ae6c0f602d385272776d07e2b79"},{url:"app/content/docs/examples/images/card_cover.jpg",revision:"056b0eb64ac30441bd6aca8e3798286b"},{url:"app/content/docs/examples/images/card_placeholder.jpg",revision:"d4969877fffc05adb98477330588dfb4"},{url:"app/content/docs/examples/images/cover_javascript.jpg",revision:"210c83cdaafae6be05c8fbb4cb4accc3"},{url:"app/content/docs/examples/images/cover_recipes.jpg",revision:"6b19a1781bc4e0ca2d71e843ec7ad38e"},{url:"images/examples/clock.png",revision:"ed8359352f4562f7b229ccc5e544fa4e"},{url:"images/github-mark-light.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/patreon.png",revision:"138534b06fe107c864e576d63273cf75"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
