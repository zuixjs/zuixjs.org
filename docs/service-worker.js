if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>a(e,d),r={module:{uri:d},exports:s,require:o};i[d]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(n(...e),s)))}}define(["./workbox-15047ba7"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app/content/docs/examples/alice/ch_1.html",revision:"7bdba3c49c7bb2e4cc412e7791c6e771"},{url:"app/content/docs/examples/alice/ch_2.html",revision:"ccfe438dd4542451bcdabf93ec332847"},{url:"app/content/docs/examples/alice/ch_3.html",revision:"eb43ef576cd0d1c6a85e2413870f34dc"},{url:"app/content/docs/examples/links.css",revision:"300f68df4ae2415d93a52a566b256dbf"},{url:"app/content/docs/examples/links.html",revision:"cbd247603f5f438b7c760f4fdc77cf50"},{url:"app/controllers/component-test.es5.js",revision:"4315ce75c388c30d6e5b42520e5eb6eb"},{url:"app/examples/custom-elements-01.css",revision:"d9d625f90e36313e16428a7f182dbedb"},{url:"app/examples/custom-elements-01.html",revision:"68a64fc6d107c1ce892ec39a4a079768"},{url:"app/examples/custom-elements-01.js",revision:"3bda6a343eb5a68b88ced3007b4a0072"},{url:"app/examples/custom-elements-02.css",revision:"c3c565061953830904559b9616dea61c"},{url:"app/examples/custom-elements-02.html",revision:"38be43f8d48cbf1dc9cb31300c343ae9"},{url:"app/examples/custom-elements-02.js",revision:"f15a071167478bcdba0420f3f789edf7"},{url:"app/examples/default-component.css",revision:"fab25e621a552f6009b17f494305f723"},{url:"app/examples/default-component.html",revision:"aa5ff0eb86ede6142c6a4f4933a928f8"},{url:"app/examples/default-component.js",revision:"4bd425e89334935df53a1789a4dd6e78"},{url:"app/examples/new-component.css",revision:"2cc0fbc0683255a885678944443c7485"},{url:"app/examples/new-component.html",revision:"613d5e1a637a85199e1fef8017b38ca9"},{url:"app/examples/new-component.js",revision:"f99ff997e1d113ca735299fb5f936553"},{url:"app/templates/mdl_card.css",revision:"e3fe0daa1c045731171a498dc922f092"},{url:"app/templates/mdl_card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"app/templates/mdl-card.css",revision:"e3fe0daa1c045731171a498dc922f092"},{url:"app/templates/mdl-card.html",revision:"8f4162c548d4eb34d2e592c499f31aa0"},{url:"app/widgets/analog-clock.css",revision:"c14d980e48af8e7dca858e1c80461ce9"},{url:"app/widgets/analog-clock.html",revision:"705d36dcc9859aea3435e71ee51faa9c"},{url:"app/widgets/analog-clock.js",revision:"31f7d503d0db768a3e9d5a1665776365"},{url:"app/widgets/analog-clock.module.js",revision:"b2931cb52a3efcecea449b51e636ac7e"},{url:"app/widgets/time-clock.css",revision:"187e7e955c1e4009eb97f280ce082bcc"},{url:"app/widgets/time-clock.html",revision:"921217aece98231bb9b573093065faa2"},{url:"app/widgets/time-clock.js",revision:"6a322e9270fdf2173ee183543e8d9ada"},{url:"app/widgets/time-clock.module.js",revision:"f5e1725788c2a89c8ccb4be0921f77ae"},{url:"config.js",revision:"fd12f789d7bdc02c57a5de658862294c"},{url:"css/animate.min.css",revision:"c0be8e53226ac34833fd9b5dbc01ebc5"},{url:"css/fla/flex-layout-attribute.css",revision:"c9bc58fccb5b4c9d1d7a6e76edddffa7"},{url:"css/fla/flex-layout-attribute.min.css",revision:"c55488315343d9afb4d13ebf9cc8f97b"},{url:"css/prism.css",revision:"8957823dd78e6a4fb2110dd7e605029a"},{url:"index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"index.html",revision:"87a3cb7716592cac0f0c8b6c319b187a"},{url:"js/fuse/fuse.basic.common.js",revision:"ab3ef0028c8992d0098b5b836874291a"},{url:"js/fuse/fuse.basic.esm.js",revision:"0cd240af452625e49deed3ee2445aba6"},{url:"js/fuse/fuse.basic.esm.min.js",revision:"f79f602fa4572cd580786923ce942b6c"},{url:"js/fuse/fuse.basic.js",revision:"6c4923a67225dd64e42600c578d8ff0f"},{url:"js/fuse/fuse.basic.min.js",revision:"62465d50492b6d1bfbbd0e5f9a09b222"},{url:"js/fuse/fuse.common.js",revision:"ddbe097989e19bf1872f533cbc363f1b"},{url:"js/fuse/fuse.esm.js",revision:"82bbf2ed8ece715c58afe6c75977795f"},{url:"js/fuse/fuse.esm.min.js",revision:"589223b029350d512db61a8f323ce0fe"},{url:"js/fuse/fuse.js",revision:"7e19f88c4b2a7c038943bf3b4a17986f"},{url:"js/fuse/fuse.min.js",revision:"de7d60e4a6881074275feca14b84a49d"},{url:"js/mdl/material.custom-theme.min.css",revision:"2225850a6b445fd37acf50466f50c4b5"},{url:"js/mdl/material.min.css",revision:"9ab85b48144d24908b4e455c2afb648c"},{url:"js/mdl/material.min.js",revision:"8dbb84e1d015cd5c2f5be1064eb924b3"},{url:"js/zuix/zuix-bundler.js",revision:"00ed03895f615ebd2fb0b3f0bec994d8"},{url:"js/zuix/zuix-bundler.min.js",revision:"df3c39916f2fe1f0fab80b2f5c479695"},{url:"js/zuix/zuix-bundler.module.js",revision:"134de25f07b5a2fb77bd9a963e86b163"},{url:"js/zuix/zuix-bundler.module.min.js",revision:"654a4693e5471230795a0fbbfdab68c7"},{url:"js/zuix/zuix.js",revision:"2d6f8180b7c355b2c86be58bbf0a16c4"},{url:"js/zuix/zuix.min.js",revision:"2894acdf05ed5e20dcfb25bb8281ea6a"},{url:"js/zuix/zuix.module.js",revision:"ce65c583131528332c7e928d1b0dacd8"},{url:"js/zuix/zuix.module.min.js",revision:"33370a07f10a6afd26ee774ad214a334"},{url:"js/zuix/zx-context.module.js",revision:"8d5f2cabaa0dd997e0493f1d475daa9a"},{url:"manifest.json",revision:"62a5b876bebcc21a7bccd711f8fc6063"},{url:"pages/documentation/about/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/about/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/about/index.html",revision:"62080b805147693b22b7e6b028aedc25"},{url:"pages/documentation/active_refresh/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/active_refresh/index.bundle.js",revision:"5da77ec8c5ba0e4ea8f73e7a54ce42d5"},{url:"pages/documentation/active_refresh/index.html",revision:"ec0d212080105127a4f4498aee4b21cf"},{url:"pages/documentation/api/helpers/Logger/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/Logger/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/Logger/index.html",revision:"8232cc557885d59c364363455395ef4f"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/TaskQueue/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/TaskQueue/index.html",revision:"f815d86eb6d6dbf5d1893538efd4681d"},{url:"pages/documentation/api/helpers/Utils_dom/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/Utils_dom/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/Utils_dom/index.html",revision:"d7aeba0f0a505096a8e65bdd90e95de6"},{url:"pages/documentation/api/helpers/Utils.dom/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/Utils.dom/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/Utils.dom/index.html",revision:"940f0ea734ccc8a9c878ba4c4147006f"},{url:"pages/documentation/api/helpers/Utils/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/Utils/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/Utils/index.html",revision:"2de648834b67ad47ccde838f36970381"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/ZxQuery/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/ZxQuery/index.html",revision:"a13fd4045f97efa1f7d043a8ea76638a"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/helpers/ZxQueryStatic/index.html",revision:"1cc9f08c98af4c0103628e0d7fcac66a"},{url:"pages/documentation/api/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/index.html",revision:"3ac23d18a9d5c4abae336661c4105b27"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/localizer/Localizer/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/localizer/Localizer/index.html",revision:"8424ed1c6288c05cb6a1a40871ad56be"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/observable/ObjectObserver/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/observable/ObjectObserver/index.html",revision:"70030e6370b363e81ce3c9358d7a54dd"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/observable/ObservableListener/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/observable/ObservableListener/index.html",revision:"5c2b7d09c82a3e7c36e8c01163aefdaf"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/observable/ObservableObject/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/observable/ObservableObject/index.html",revision:"fdbb751104fb7311337daa826b5199ee"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/ActiveRefresh/index.html",revision:"dcb7230af521de953bf2f338af6a3fc6"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/ComponentContext/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/ComponentContext/index.html",revision:"097a8e42e02586aca0e4f64d15bc3a11"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/Componentizer/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/Componentizer/index.html",revision:"2566670dcfc888aba9bdbe31a66c0dd2"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/ContextController/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/ContextController/index.html",revision:"08f157fce02d05fffc6c05122520a318"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/ControllerInstance/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/ControllerInstance/index.html",revision:"898a0e8bf78217713dd9836e0e3c2d77"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/ViewObserver/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/api/zuix/ViewObserver/index.html",revision:"c3cb356924991d0e5bb005af2fd6b148"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/api/zuix/Zuix/index.bundle.js",revision:"ca0e03f95e17178eb6e880324fc79124"},{url:"pages/documentation/api/zuix/Zuix/index.html",revision:"bf6436d8be4ff26b079bf30cd2d858a8"},{url:"pages/documentation/basic_concepts/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/basic_concepts/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/basic_concepts/index.html",revision:"35f73904bb1079573d6b485a52fdbc77"},{url:"pages/documentation/cli/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/cli/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/cli/index.html",revision:"ce2dc3864d4c1977ec6796a6fd74a19f"},{url:"pages/documentation/component/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/component/index.bundle.js",revision:"a04a536692ef1c77c49124c772a62c73"},{url:"pages/documentation/component/index.html",revision:"c74a896d5e2cb1b7eb6be697ba0ac6e9"},{url:"pages/documentation/context_options/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/context_options/index.bundle.js",revision:"27881f7c5b192f1f8f19bd164fd85fce"},{url:"pages/documentation/context_options/index.html",revision:"63c0821bc19832bc01fec59d7df710b8"},{url:"pages/documentation/controller/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/controller/index.bundle.js",revision:"7b426c745ae0d77a5acca1649b37cda5"},{url:"pages/documentation/controller/index.html",revision:"3cd8edc88f1245b45ba21de6b030ecc4"},{url:"pages/documentation/getting_started/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/getting_started/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/getting_started/index.html",revision:"23456ab954a8883d59df457e4fff4402"},{url:"pages/documentation/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/index.bundle.js",revision:"093e6602e60179ecba282cbca46d9b68"},{url:"pages/documentation/index.html",revision:"d76cc6ed62091d1fa706d58577b8a5c9"},{url:"pages/documentation/view/CheckValidityBehavior.js",revision:"ab85e19fbf7c513b7d6bf2d2f756eff0"},{url:"pages/documentation/view/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"pages/documentation/view/index.bundle.js",revision:"85c38c2041f7f75785ad5209aedb30b7"},{url:"pages/documentation/view/index.html",revision:"f8610fccf57b210ec3e9eabd678a5bab"},{url:"pages/documentation/view/ViewSwitchBehavior.js",revision:"6568e13a81727f9347b65a41952a3b84"},{url:"playground/index.bundle.ext.js",revision:"92edb169cbafe67f2f6ab0e89b2b8e6b"},{url:"playground/index.bundle.js",revision:"12005f5d3fbfc1a05ec39fdfd3db2d1b"},{url:"playground/index.html",revision:"4208d38437750b1af8837fd531bb2963"},{url:"search-index.json",revision:"bc1b7013cc1a1b34ba3bca01a61941bb"},{url:"search-list.json",revision:"460d6b0e70a942d9e79b898e7fcbf8e1"},{url:"search/index.bundle.ext.js",revision:"e33bf1677e14020c47d86cd6d04156f5"},{url:"search/index.bundle.js",revision:"92329ec58632a4d18110265a9a696d05"},{url:"search/index.html",revision:"ac4830c0bdf6c4dde964813483e6f48d"},{url:"app/content/docs/examples/alice/img/ch_1_1.png",revision:"f13e634f4f4767f426a791ddf85ba9b0"},{url:"app/content/docs/examples/alice/img/ch_1_2.png",revision:"a40e24033ce25edb5169d5f50a1783d7"},{url:"app/content/docs/examples/alice/img/ch_1_3.png",revision:"9325671498a60f3e05c6bfdcb6001bac"},{url:"app/content/docs/examples/alice/img/ch_2_1.png",revision:"ffd9b2ce17eb5cf4b6e0c2e88128e7bc"},{url:"app/content/docs/examples/alice/img/ch_2_2.png",revision:"c0aa4864727b53a82614fb098c286bca"},{url:"app/content/docs/examples/alice/img/ch_2_3.png",revision:"45b8f2b32fa463cbbf478693354bb676"},{url:"app/content/docs/examples/alice/img/ch_2_4.png",revision:"5175980071714ec946d815b4180b23bc"},{url:"app/content/docs/examples/alice/img/ch_3_1.png",revision:"0b58afb90669a0c00dd796f64872b141"},{url:"app/content/docs/examples/alice/img/ch_3_2.png",revision:"6f21a396f2c8b7f3a5a884dc9a8932c0"},{url:"app/content/docs/examples/images/avatar_00.png",revision:"1a565667c6cf7310db22762e8385f396"},{url:"app/content/docs/examples/images/avatar_01.png",revision:"8b86e5f8249828163a0d7e9f6d315dce"},{url:"app/content/docs/examples/images/avatar_02.png",revision:"8a011d6e36c3b968241ac4331cd03aad"},{url:"app/content/docs/examples/images/avatar_03.png",revision:"57f804786860e3d1166d0905651efed2"},{url:"app/content/docs/examples/images/card_cover_2.jpg",revision:"36c8155fd8a8504c3c49aecc3a2f1426"},{url:"app/content/docs/examples/images/card_cover_3.jpg",revision:"018aa09363578ced3cac25fc174e2d97"},{url:"app/content/docs/examples/images/card_cover_4.jpg",revision:"17458ae6c0f602d385272776d07e2b79"},{url:"app/content/docs/examples/images/card_cover.jpg",revision:"056b0eb64ac30441bd6aca8e3798286b"},{url:"app/content/docs/examples/images/card_placeholder.jpg",revision:"d4969877fffc05adb98477330588dfb4"},{url:"app/content/docs/examples/images/cover_javascript.jpg",revision:"210c83cdaafae6be05c8fbb4cb4accc3"},{url:"app/content/docs/examples/images/cover_recipes.jpg",revision:"6b19a1781bc4e0ca2d71e843ec7ad38e"},{url:"images/examples/clock.png",revision:"ed8359352f4562f7b229ccc5e544fa4e"},{url:"images/github-mark-light.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"images/github-mark.png",revision:"add1026fb07009c6879400cbcf145301"},{url:"images/icons/desktop/android-chrome-192x192.png",revision:"93d5e77e9ee1e9c6975f3c0bd1a21574"},{url:"images/icons/desktop/android-chrome-512x512.png",revision:"6df83c6c13be17a2ea70d29e340c5ddb"},{url:"images/icons/desktop/apple-touch-icon.png",revision:"2b78ed332644d19d9779c069c5842538"},{url:"images/icons/desktop/favicon-16x16.png",revision:"6c047cdbd3d5c4c962a3a692a5025d27"},{url:"images/icons/desktop/favicon-32x32.png",revision:"7413528d5e59c22af1ccf38187bc950b"},{url:"images/icons/desktop/mstile-150x150.png",revision:"540caa78f56655281b2d4b17ad52f2ce"},{url:"images/icons/desktop/safari-pinned-tab.svg",revision:"a0ab2c612c6a5019b3e4ae7c38043b98"},{url:"images/icons/icon-128x128.png",revision:"69f3f1f3f956bb71f35ce66b7717e1a0"},{url:"images/icons/icon-144x144.png",revision:"45e24db8671c41ca95c440df0cadf2a3"},{url:"images/icons/icon-152x152.png",revision:"e0867fd6e9bc25afd831b1eabdd83f8d"},{url:"images/icons/icon-192x192.png",revision:"cf383c3d4500d31884326cc9d53a8c3a"},{url:"images/icons/icon-384x384.png",revision:"31fd304cf6c5ff72928b7a91fbd68343"},{url:"images/icons/icon-512x512.png",revision:"47d9af0508ab29138dcb8ca6a4664cf2"},{url:"images/icons/icon-72x72.png",revision:"919cb6b3e8a1b5d0c963921dba0e4388"},{url:"images/icons/icon-96x96.png",revision:"5547ad1a33334c0f5c04f6de1f6d2c52"},{url:"images/patreon.png",revision:"138534b06fe107c864e576d63273cf75"},{url:"images/profile-icon.png",revision:"b4e6fa3d09388123298958c47aeb13ca"},{url:"images/rss-feed.png",revision:"fa5663a3878814bb9820de6b29005169"},{url:"images/zuix-logo.svg",revision:"48e6defd57440a6d0f0d12241ff9d6c5"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/\.(?:html|json|js|css)$/,new e.CacheFirst({cacheName:"default",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
