if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>c(e,d),r={module:{uri:d},exports:s,require:o};i[d]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(n(...e),s)))}}define(["./workbox-8bc485fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/content/docs/examples/alice/ch_1.html",revision:"7bdba3c49c7bb2e4cc412e7791c6e771"},{url:"app/content/docs/examples/alice/ch_2.html",revision:"ccfe438dd4542451bcdabf93ec332847"},{url:"app/content/docs/examples/alice/ch_3.html",revision:"eb43ef576cd0d1c6a85e2413870f34dc"},{url:"app/content/docs/examples/links.css",revision:"300f68df4ae2415d93a52a566b256dbf"},{url:"app/content/docs/examples/links.html",revision:"cbd247603f5f438b7c760f4fdc77cf50"},{url:"app/templates/mdl_card.css",revision:"9009c7bca80ac31a896cc73e888cc929"},{url:"app/templates/mdl_card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"app/widgets/time-clock.css",revision:"d2bc5743027cc00e34a6674999c56332"},{url:"app/widgets/time-clock.html",revision:"fd7f07e20dbe1f988bb210c7237aee6c"},{url:"app/widgets/time-clock.js",revision:"878cf0cfcf054ee0d6eef370443ec6a2"},{url:"config.js",revision:"0aa404c42b3c505add7f596eaff98b1c"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"343ab6c1b213d253d82d6c7afad86079"},{url:"index.bundle.ext.js",revision:"ed65f6c363426f17adec3af0f8e1301c"},{url:"index.html",revision:"26daeae6243b109d626133f7e0ed9827"},{url:"js/elasticlunr/elasticlunr.js",revision:"9df81143ce5ad0e8b2204da08f547ad4"},{url:"js/elasticlunr/elasticlunr.min.js",revision:"392b3cd0a12183cf87406428d2989e90"},{url:"js/mdl/material.custom-theme.min.css",revision:"aa6fed7a67f1b8aba7de37a329146ae8"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"987551bfd48353b0aed701077d31aab2"},{url:"js/zuix/zuix-bundler.min.js",revision:"46d85f0aa0ed849f60c24cee63e00cbe"},{url:"js/zuix/zuix-bundler.module.js",revision:"c4039f8cfaad5874e8269502e2c4f4c4"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"b844e9c9b4de6aae6dfc8a35b770a20c"},{url:"js/zuix/zuix.js",revision:"af67ac9d32e7f7def445362fe5be8f46"},{url:"js/zuix/zuix.min.js",revision:"78ba2a29023f39dc0d98ed1597373f11"},{url:"js/zuix/zuix.module.js",revision:"0c4dc2c6ae9a7958a26aa36a6083780f"},{url:"js/zuix/zuix.module.min.js",revision:"4ae0214b7e26fdc1ed5a79fe56a3cc42"},{url:"lib/1.1/controllers/drawer-layout.js",revision:"e53bdbd8f8f07400e5fb4e2c44971edb"},{url:"lib/1.1/controllers/gesture-helper.js",revision:"1776574c57c1a6115edfbcb3887ed147"},{url:"lib/1.1/controllers/header-auto-hide.js",revision:"4b6783cbe749df25907f5faa0f92e257"},{url:"lib/1.1/controllers/list-view.js",revision:"fc2930407b29c707ab8bfca33685e9be"},{url:"lib/1.1/controllers/mdl-button.js",revision:"c2a4ac575ee439b1e19beb42ea7d016f"},{url:"lib/1.1/controllers/mdl-checkbox.js",revision:"20911a2c2aec81f9ab42615987b21364"},{url:"lib/1.1/controllers/mdl-menu.js",revision:"8f620c9a13b8c47720b24b46205fc906"},{url:"lib/1.1/controllers/scroll-helper.js",revision:"d35210ea8c416fdad067aedad98c9063"},{url:"manifest.json",revision:"62a5b876bebcc21a7bccd711f8fc6063"},{url:"pages/documentation/about/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/about/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/about/index.html",revision:"972b79105be6ef7427d80cd3eb4fd8bb"},{url:"pages/documentation/active_refresh/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/active_refresh/index.bundle.js",revision:"81f9d7013d911a07e659640bc4a84071"},{url:"pages/documentation/active_refresh/index.html",revision:"5fae18af44c6d8e6c7f217ab8bb8b191"},{url:"pages/documentation/api/helpers/Logger/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/helpers/Logger/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/helpers/Logger/index.html",revision:"5c85037945728f2476fc543ff96bd4a3"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/helpers/TaskQueue/index.html",revision:"28d21bbd55848ffbbcdda5003f34c0e3"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/helpers/ZxQuery/index.html",revision:"63a52600926b03306a8a2b5c214b43e7"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.html",revision:"c68b877066bbb49c40b0fe983ebfd7e7"},{url:"pages/documentation/api/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/index.html",revision:"8d47e5fd3fc4c6b12c2550dcd90f0da6"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/localizer/Localizer/index.html",revision:"b94c792829ee65eea64a1b1765a9648f"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/observable/ObjectObserver/index.html",revision:"8e69b371ecfee8f6cddf2f937025c1fe"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/observable/ObservableListener/index.html",revision:"ddd11baa020840c0d433b3ab13bc9e27"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/observable/ObservableObject/index.html",revision:"9864df6e9bc60b126e12001e79440f24"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.html",revision:"5a18849012111cbdbc19f05d74b0db2a"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/ComponentContext/index.html",revision:"75d8b71348273038079c8967ad5dce51"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/Componentizer/index.html",revision:"2f6cebf6ec1712f7a0996cec40779a59"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/ContextController/index.html",revision:"fc317a673c9ced2f393f80e4164b5612"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/ViewObserver/index.html",revision:"fe033734c05af3bcd8fd2d8512cf34b5"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/api/zuix/Zuix/index.html",revision:"b024b49056c90cb7b8fb21f4a4b861cf"},{url:"pages/documentation/cli/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/cli/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/cli/index.html",revision:"edf5e9e13f35c4d9f9c2642ab40ea329"},{url:"pages/documentation/component/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/component/index.bundle.js",revision:"71d00c83ddf361ab908582553215b276"},{url:"pages/documentation/component/index.html",revision:"2b5ebba5e25627cdfdcbdb79982243d7"},{url:"pages/documentation/controller/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/controller/index.bundle.js",revision:"d4aa0362b15c697fb4a541a8e66c9869"},{url:"pages/documentation/controller/index.html",revision:"e995cbdb7c14a9249ae1f7385c10e701"},{url:"pages/documentation/getting_started/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/getting_started/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/getting_started/index.html",revision:"108685fce7c70150246b5b3fbda3cd0d"},{url:"pages/documentation/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/index.bundle.js",revision:"53d9a23dfecb940680c310b90103ff21"},{url:"pages/documentation/index.html",revision:"c033c1dc15bae7b242baa458368d99a2"},{url:"pages/documentation/view/CheckValidityBehavior.js",revision:"ab85e19fbf7c513b7d6bf2d2f756eff0"},{url:"pages/documentation/view/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"pages/documentation/view/index.bundle.js",revision:"3a6a25c25423d0586d89e275a546dbf3"},{url:"pages/documentation/view/index.html",revision:"ec30cc9fb71e1970ab0325eae938cf0a"},{url:"pages/documentation/view/ViewSwitchBehavior.js",revision:"6568e13a81727f9347b65a41952a3b84"},{url:"search-index.json",revision:"b5ecf6ee09c6460d44a53cf6f0e84fc6"},{url:"search/index.bundle.ext.js",revision:"68616c8ccea4e998ecd61c64e47ddd99"},{url:"search/index.bundle.js",revision:"099ea699b399edbb7864ed91ef513f06"},{url:"search/index.html",revision:"df11f5f0ccaf30abe3d46eb4788e3fb1"},{url:"app/content/docs/examples/alice/img/ch_1_1.png",revision:"f13e634f4f4767f426a791ddf85ba9b0"},{url:"app/content/docs/examples/alice/img/ch_1_2.png",revision:"a40e24033ce25edb5169d5f50a1783d7"},{url:"app/content/docs/examples/alice/img/ch_1_3.png",revision:"9325671498a60f3e05c6bfdcb6001bac"},{url:"app/content/docs/examples/alice/img/ch_2_1.png",revision:"ffd9b2ce17eb5cf4b6e0c2e88128e7bc"},{url:"app/content/docs/examples/alice/img/ch_2_2.png",revision:"c0aa4864727b53a82614fb098c286bca"},{url:"app/content/docs/examples/alice/img/ch_2_3.png",revision:"45b8f2b32fa463cbbf478693354bb676"},{url:"app/content/docs/examples/alice/img/ch_2_4.png",revision:"5175980071714ec946d815b4180b23bc"},{url:"app/content/docs/examples/alice/img/ch_3_1.png",revision:"0b58afb90669a0c00dd796f64872b141"},{url:"app/content/docs/examples/alice/img/ch_3_2.png",revision:"6f21a396f2c8b7f3a5a884dc9a8932c0"},{url:"app/content/docs/examples/images/avatar_00.png",revision:"1a565667c6cf7310db22762e8385f396"},{url:"app/content/docs/examples/images/avatar_01.png",revision:"8b86e5f8249828163a0d7e9f6d315dce"},{url:"app/content/docs/examples/images/avatar_02.png",revision:"8a011d6e36c3b968241ac4331cd03aad"},{url:"app/content/docs/examples/images/avatar_03.png",revision:"57f804786860e3d1166d0905651efed2"},{url:"app/content/docs/examples/images/card_cover_2.jpg",revision:"36c8155fd8a8504c3c49aecc3a2f1426"},{url:"app/content/docs/examples/images/card_cover_3.jpg",revision:"018aa09363578ced3cac25fc174e2d97"},{url:"app/content/docs/examples/images/card_cover_4.jpg",revision:"17458ae6c0f602d385272776d07e2b79"},{url:"app/content/docs/examples/images/card_cover.jpg",revision:"056b0eb64ac30441bd6aca8e3798286b"},{url:"app/content/docs/examples/images/card_placeholder.jpg",revision:"d4969877fffc05adb98477330588dfb4"},{url:"app/content/docs/examples/images/cover_javascript.jpg",revision:"8f19b564cd3724f56dfab6de5fbf2401"},{url:"app/content/docs/examples/images/cover_recipes.jpg",revision:"6b19a1781bc4e0ca2d71e843ec7ad38e"},{url:"images/github-mark-light.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
