if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-d8a0345e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"23972c13eb409c616dc13c615577e85d"},{url:"api/page.html",revision:"dccb66cc04bc6fd96c6dbf85deda82cb"},{url:"api/plugin/container.html",revision:"8406a036cf294fd986eefe3a8aef615a"},{url:"api/plugin/copyright.html",revision:"aab5672aa5f53bc7c3bfb8c96c11cac3"},{url:"api/plugin/index.html",revision:"61287cc419d9606ecaf909c253ce8473"},{url:"api/plugin/medium-zoom.html",revision:"171393d8de38dcc6a7935d8c3dfa878e"},{url:"api/plugin/pwa.html",revision:"fbb25e3b1b65ff3a563cb88dd7313932"},{url:"api/stylus.html",revision:"12d6a3213e8dd31446ba4521cf62a72f"},{url:"api/themeConfig.html",revision:"bf30691d9dcf903bc16b587d8bc5dd56"},{url:"assets/css/0.styles.9e389be9.css",revision:"84f61b4e40df0f324cbe131e577aea87"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/nightmode.73215ae2.png",revision:"73215ae22b72654917bb26f315d7d47c"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/92.76e5425d.js",revision:"e1a8cd2767f09e8eec30385a0d545267"},{url:"assets/js/app.8cc9cb72.js",revision:"360a5fbb2cc19a4c9d01d7c1277a7a65"},{url:"assets/js/layout-BlogEntry.8fb7ae2f.js",revision:"8a50ab8f0088750ad94ec2ededeb911a"},{url:"assets/js/layout-BlogEntry~layout-Layout.972ede3d.js",revision:"386895454b6b59b122f7f50f55e080f0"},{url:"assets/js/layout-Layout.f388331c.js",revision:"64821cc7a7758636e7ac580a951ed64c"},{url:"assets/js/layout-NotFound.6bb1fba3.js",revision:"750470ba5344a829ce95f0d15c21f471"},{url:"assets/js/page--1b278726.b0f6e7d1.js",revision:"1c6b76a56feb4d6c1a4e7a13367c23a3"},{url:"assets/js/page--24b68849.5f84f006.js",revision:"d5d4d04ca50e0c678a9fbfac862c5f9f"},{url:"assets/js/page--298eb4e9.85cb84aa.js",revision:"4a38f36ba5b269e585f8107cc52abccd"},{url:"assets/js/page--33732ef1.97d05565.js",revision:"719f4f1145878a03aee5b67a8fa2001e"},{url:"assets/js/page--608d80cf.5cf71212.js",revision:"f8607ead4106bd7a16b1a1615956b745"},{url:"assets/js/page--b64dd6ee.e822c0e2.js",revision:"a5c927ad77bd988ac6b7025137aae7b4"},{url:"assets/js/page-About Vuepress.ad251f51.js",revision:"7b6cf3c80dfd2ed0eab2113a83c505ab"},{url:"assets/js/page-API Docs.3ef879b6.js",revision:"b1229b827d27a52e00b2b291cc352081"},{url:"assets/js/page-API 文档.a567e2eb.js",revision:"780fe513a9e847c1d8205dc383175e0e"},{url:"assets/js/page-Basic.312f879c.js",revision:"e4db5b586b247dd3c7743c6b258f5ded"},{url:"assets/js/page-Breadcrumb.3a9e29c2.js",revision:"acbcb4d22ff8d90bb72c23d6abd68a2f"},{url:"assets/js/page-Comment Function.8ec89686.js",revision:"72e54626f60c50b877c2272f0bb1927b"},{url:"assets/js/page-Default Theme Config.72dc408a.js",revision:"8cfa4613cf394334ec8fb453038332ef"},{url:"assets/js/page-Emoji List.53f59615.js",revision:"d52f9ed9eb148acfc43a3913f1ae98a8"},{url:"assets/js/page-Emoji列表.bc80db0d.js",revision:"5b1a02ba1c3be55e0d0e939fc45f365c"},{url:"assets/js/page-File Structure.39648c88.js",revision:"6b9425e39989cbdf879a106773e29f70"},{url:"assets/js/page-flowchart.0877ffd7.js",revision:"65f1fb53449690ba02cbdd1257f72c55"},{url:"assets/js/page-Footnote.1c45a6d3.js",revision:"0ff5d68731c551ca32bc379ddc979a8d"},{url:"assets/js/page-Fullscreen Button.a54bf266.js",revision:"62b5a6ed9105fb6907ffd7a0ece54d2c"},{url:"assets/js/page-Home Page.0c10a70c.js",revision:"6722834024fc4ac50540e8667d74ee64"},{url:"assets/js/page-Home.ba0939c9.js",revision:"c7391b23bf87173b24db163579145dc0"},{url:"assets/js/page-Introduction.9bc044a5.js",revision:"b1e77a57c05c6c4468cc0fa3a26ef169"},{url:"assets/js/page-Markdown DEMO.869bc48c.js",revision:"c87e6bb9cb7ddeeed09a64eb5dc04d21"},{url:"assets/js/page-Markdown Introduction.b6b9cb25.js",revision:"d8f92d9118b92095bc79b7c21494d707"},{url:"assets/js/page-Markdown 新语法.b43e9cc1.js",revision:"967c93cd1efba46f2c99045a210617aa"},{url:"assets/js/page-Markdown介绍.0db0e8a3.js",revision:"2078dafea054fcf1e8402620f4d6eace"},{url:"assets/js/page-Markdown示例.da3d843a.js",revision:"344503e1fa2e49a2bb1f9bdeff2f78fa"},{url:"assets/js/page-NavBar.580a6702.js",revision:"22190971f6b4766518432d26c15e33c7"},{url:"assets/js/page-New Component.15bc1855.js",revision:"3aa090667aa909c549bdebed0491fdf0"},{url:"assets/js/page-New syntax in Markdown.95a0b5d0.js",revision:"14c3e4fef4e589c8f0b7ea11d978ec2f"},{url:"assets/js/page-Page Configuration.75023969.js",revision:"12c08bfd4d444ebaa11cfa3fd0e3fa2c"},{url:"assets/js/page-Page.1d19f955.js",revision:"cce16cda11a482f5332f68ed0458b000"},{url:"assets/js/page-Plugin Description.87f4afdf.js",revision:"4e870a89d183cb63edc0b9b5290c2328"},{url:"assets/js/page-Plugins.ef61f378.js",revision:"0db0ad79be94403ab9ee7e7241d1a6d1"},{url:"assets/js/page-Sidebar.7ccec003.js",revision:"5c5de114455f4215da5a790efb7b6e65"},{url:"assets/js/page-stylus configuration.94a993f3.js",revision:"c534da6dfb5c3fc29136b08f05d59090"},{url:"assets/js/page-stylus 配置.c800a4d5.js",revision:"1fffc1049f588d1f576499ccc238d466"},{url:"assets/js/page-Superscript and Subscript.f40c1cc2.js",revision:"f71ea6482b6de27737a2e6ff0204e3b4"},{url:"assets/js/page-Tex Support.0bd9e77f.js",revision:"e76bde666efcd79ec62f61f8f030cdc1"},{url:"assets/js/page-Tex 语法支持.2c952ade.js",revision:"18314c5f2a5896675c86eae284c6249e"},{url:"assets/js/page-Theme color and Night mode.d3683760.js",revision:"9cc539d37e1b8e2f8d415f72364019b8"},{url:"assets/js/page-Theme Config.c468aeb6.js",revision:"f6c3ae4fba97df0b6da2ab17f7a4509e"},{url:"assets/js/page-TS 支持.71a9043d.js",revision:"4be8eb4c7ae958adce9198b9c05af9f6"},{url:"assets/js/page-Vuepress Cases.995f9991.js",revision:"5fe81d6733c9a1b91fc870dddafcfa28"},{url:"assets/js/page-Vuepress commands.d13f113b.js",revision:"6394a1a96a7bd48d9a405f0c17a66798"},{url:"assets/js/page-Vuepress 案例.6ddc21fe.js",revision:"78a4294ea20997994cc7974fa35f01c1"},{url:"assets/js/page-vuepress-plugin-container.e83e09b2.js",revision:"4a6f829691ec46a121f8525aa59b82c5"},{url:"assets/js/page-vuepress-plugin-copyright.5754ff6f.js",revision:"6a098bfce18377f5be65f69931e10ebd"},{url:"assets/js/page-vuepress-plugin-name-chunks.ac4e9439.js",revision:"0b2289f0357c1a3dec63da18dea597f8"},{url:"assets/js/page-Vuepress.d4a4bcf8.js",revision:"b8722dface69f9da144a7e4f12a4cb9f"},{url:"assets/js/page-Writing a theme.3586888d.js",revision:"6d2650caa3a8566d3fdfac786343fca1"},{url:"assets/js/page-上下角标.19061615.js",revision:"8933bd999698d8b9ab363232b2337baa"},{url:"assets/js/page-主页.da65ac9e.js",revision:"17461f48b2648893a64d1efc98f55399"},{url:"assets/js/page-主题色与夜间模式.3b6b43f1.js",revision:"ea33485209e8878324db8843cf0f9020"},{url:"assets/js/page-主题配置.d88403e8.js",revision:"0739d507e64a0ac053da767550c1ab98"},{url:"assets/js/page-人物.1038ef16.js",revision:"3193c9eed24f21d984cd5175017b8721"},{url:"assets/js/page-介绍.9544819c.js",revision:"b665d29fc3c68c0de78515f1d16798d2"},{url:"assets/js/page-侧边栏.5603c032.js",revision:"8ebcdeca340ee4f4f19eadd84bd300ac"},{url:"assets/js/page-全屏按钮.4f389430.js",revision:"d42e51b92937c83cfc8d8530f864538c"},{url:"assets/js/page-加密功能.3d2ea67c.js",revision:"c42be02b2c608dd3dc3ba3ba068ca4a5"},{url:"assets/js/page-图标支持.bdb77082.js",revision:"7f5c1c6095838a1425292e6c1a0b49fb"},{url:"assets/js/page-地点.b31b5452.js",revision:"387cc68abe59d78a89b691ccb0a55005"},{url:"assets/js/page-基础知识.4b41a6be.js",revision:"81cf233b4ec4795be82103e0a1f694ab"},{url:"assets/js/page-对象.c2e05998.js",revision:"917df5645cb0f78b4509a0b7f67b3461"},{url:"assets/js/page-导航栏.2cc5db42.js",revision:"a8ef52d40bf1e3b0e5f2e971fc1c852e"},{url:"assets/js/page-布局.a3ddbeaa.js",revision:"efec095a32d6b0d8035b8ae7528e9ecf"},{url:"assets/js/page-常见问题.9ea2855b.js",revision:"ca3718dc76173461ac192e0e5aa297bb"},{url:"assets/js/page-开发主题.e7d4083f.js",revision:"bec7999e2687c36709c54ec088d883ff"},{url:"assets/js/page-插件.2760a232.js",revision:"8f9a6ce0c6cf87a065cfc168602c61ef"},{url:"assets/js/page-插件说明.e905bc2e.js",revision:"097a768a29911864d5ea520e0a12cd8a"},{url:"assets/js/page-文件结构介绍.11b98db7.js",revision:"67d0e496e5ae93310384b6fb08e56d9d"},{url:"assets/js/page-新增特性.8effbe0d.js",revision:"4022b2ec299ca564979209b8c6848442"},{url:"assets/js/page-新增组件.e27f3563.js",revision:"d82491836884b183db61944022e09762"},{url:"assets/js/page-流程图支持.c7acf856.js",revision:"5f803c95c0de9b4c2285d171b26d163b"},{url:"assets/js/page-符号.2b45d591.js",revision:"956cc5596a4a480972c5d194bdcfb497"},{url:"assets/js/page-脚注.ec4f0c3c.js",revision:"36a356fb85ad5d2546be519bb26ec3b9"},{url:"assets/js/page-自定义对齐.5ba66955.js",revision:"4a3073f82433065e58dcd2e73cf783a6"},{url:"assets/js/page-自然.10a14aea.js",revision:"0258fa00465f0586513b9da350e30ba2"},{url:"assets/js/page-评论功能.bdb7dfcf.js",revision:"2c8dc62f0cbcfd4dd6730e66f79a3307"},{url:"assets/js/page-路径导航.eb1dbef5.js",revision:"975f71a11ef677c47ee9c7203203031c"},{url:"assets/js/page-页面.658c2461.js",revision:"76de8804c2a0c9d6b9c478ece7305c89"},{url:"assets/js/page-页面配置.e8bed95d.js",revision:"63c526f90cee6a41dbc6c65886321c79"},{url:"assets/js/page-项目指令.b2656fbb.js",revision:"4275fd07f88773b7441bc65eee7b6d33"},{url:"assets/js/page-默认主题配置.6b1f4029.js",revision:"7d214091f7c1782f2fd698c33df34842"},{url:"assets/js/vendors~docsearch.577f2b9c.js",revision:"1f3577766d808706ad6233b6b88f0a03"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.b3660238.js",revision:"e389d7abed8f6bb1b0c39c91da85ce1a"},{url:"basic/index.html",revision:"8093aeb772e71d1b8b30240ea6c9e237"},{url:"basic/markdown/demo.html",revision:"4536137ba50beeaec4fb71fd5bf8cf38"},{url:"basic/markdown/emoji/index.html",revision:"5b45a36419c166f8567199c3c6c1450d"},{url:"basic/markdown/emoji/locate.html",revision:"bf6d51205001c49813cc7ed8acbb7f9b"},{url:"basic/markdown/emoji/nature.html",revision:"db6ff114126b656b761c824930f97b82"},{url:"basic/markdown/emoji/object.html",revision:"e20c1492760098b0fb55219be5cf8317"},{url:"basic/markdown/emoji/people.html",revision:"7fffbb3602c2310ebb8e972c8154eca7"},{url:"basic/markdown/emoji/symbol.html",revision:"a7399b4ccbadc56941332df81bd6f102"},{url:"basic/markdown/index.html",revision:"75c23ac1ae32903e91383ca416003c82"},{url:"basic/vuepress/case.html",revision:"855c5250884d06ada21d476836fcd284"},{url:"basic/vuepress/command.html",revision:"79453ce813bb53e2f83704c6d6fd2b99"},{url:"basic/vuepress/file.html",revision:"f1011aa0d023a51bb0e2ff982ac6526d"},{url:"basic/vuepress/index.html",revision:"8cbd138a12abb10c4388be2e59f73a61"},{url:"basic/vuepress/plugin.html",revision:"0d8184af01838743848abe2be067e858"},{url:"basic/vuepress/theme/config.html",revision:"30614b9f671374c1bad8c7aa8ee04ce9"},{url:"basic/vuepress/theme/dev.html",revision:"f63b25eadc17858b73a0107d1e6080c1"},{url:"basic/vuepress/theme/index.html",revision:"598479d6fafd89e67efc47df92cc713d"},{url:"category/api/index.html",revision:"a25584e367f8bf33267665466d636412"},{url:"category/function/index.html",revision:"37a6ff3d0ead6c40d76ff72e54533195"},{url:"category/index.html",revision:"c6371271504a1ed71eb6e5640c6f7485"},{url:"category/instruction/index.html",revision:"8c623a0751c7f9776a51f4960a8a79bb"},{url:"category/layout/index.html",revision:"046c90ed045dcbeed1ced3d01a549cf3"},{url:"category/markdown/index.html",revision:"35f2c217962c6d9ec9473df45c93ddb4"},{url:"category/style/index.html",revision:"c73a3009568b8f513c18fe6c88ac4560"},{url:"en/api/index.html",revision:"45ed600b49edd1d9ade6814b87b47757"},{url:"en/api/page.html",revision:"14398ec2f46732abeaf9c9355f495167"},{url:"en/api/plugin/container.html",revision:"74b99fe252640dfd1be48d697c1a0e41"},{url:"en/api/plugin/copyright.html",revision:"37a821899027a90bc0bc87b0d746f3ad"},{url:"en/api/plugin/index.html",revision:"347cfa05b78db6c48f856955438d5036"},{url:"en/api/plugin/medium-zoom.html",revision:"d93308cd84ccbfc12b36f2f6b3e9d181"},{url:"en/api/plugin/name-chunks..html",revision:"9a4f878fba15b797e89084f1009f9e4f"},{url:"en/api/plugin/pwa.html",revision:"2a8551acf6f2c7d50f4bb58ddf3a04e7"},{url:"en/api/stylus.html",revision:"fc1e7b1e664f9ccd074b240cce1e90aa"},{url:"en/api/themeConfig.html",revision:"b4e2ca13e7d5514eb7d59d53eaab00d2"},{url:"en/basic/index.html",revision:"7f852c7a23ce369507ed1d49cd708a2e"},{url:"en/basic/markdown/demo.html",revision:"26a26e47f5b6825b1167a8e5d98db914"},{url:"en/basic/markdown/emoji.html",revision:"9f63f1bc736e77cdb434614e509aeb68"},{url:"en/basic/markdown/index.html",revision:"51c47501ac4eacbf286a31a29c3ab632"},{url:"en/basic/vuepress/case.html",revision:"1a82e69087ae39a30e7c5d942af5f549"},{url:"en/basic/vuepress/command.html",revision:"09bf34fb028810221c53eb2c9bfd0843"},{url:"en/basic/vuepress/file.html",revision:"e57eb9d523b3f544bb63171cc76ff53e"},{url:"en/basic/vuepress/index.html",revision:"83b4eb27b6b1117e753e16c68a16e5eb"},{url:"en/basic/vuepress/plugin.html",revision:"070592b82143fda24edf888999a9f318"},{url:"en/basic/vuepress/theme/config.html",revision:"38d216164a6f77ab4fd23d8666bd0c54"},{url:"en/basic/vuepress/theme/dev.html",revision:"6979de7e6b260d8ec11aa8916075cdba"},{url:"en/basic/vuepress/theme/index.html",revision:"fe3cf7dfae6fb145c682106ebfceac80"},{url:"en/guide/breadcrumb.html",revision:"cf90d679590df6cced41014d1e58914c"},{url:"en/guide/comment.html",revision:"a459c0a8227f920b0d1e3ee14b176b2d"},{url:"en/guide/component.html",revision:"75436a02b0a48563fe0aad3c6ec953ed"},{url:"en/guide/fullscreen.html",revision:"30715664ecaf57d962ab40390e11202e"},{url:"en/guide/home.html",revision:"7e8cb56e918e0954e6e8e1f4b9782baf"},{url:"en/guide/index.html",revision:"b89dab927c0fb1d1a7217458baf8e3f9"},{url:"en/guide/install.html",revision:"5a16a56a1947c8274cc043dd8fd949be"},{url:"en/guide/markdown/flowchart.html",revision:"47d7600bb58435ceaebbc76255956fff"},{url:"en/guide/markdown/footnote.html",revision:"3463397c6e6bc50137bb80e257754ecf"},{url:"en/guide/markdown/index.html",revision:"171e22c9773f5516b56d041f7f7d3b34"},{url:"en/guide/markdown/sup-sub.html",revision:"0a60f198608d07cfeb7bf46694a7d01e"},{url:"en/guide/markdown/tex.html",revision:"0c444da31a0f9247066a400ba6655aaf"},{url:"en/guide/navbar.html",revision:"40f5bafd49fa6871ac2f39b544bda1d0"},{url:"en/guide/page.html",revision:"7010133fcef8936315bd4f8c850362db"},{url:"en/guide/sidebar.html",revision:"0ec2350421fa75c131b5cf560645e732"},{url:"en/guide/themecolor.html",revision:"81e4dec52ed7d47dab01c634bac7c4c9"},{url:"en/index.html",revision:"bc4439f410e64b00c921fa0c7165ada7"},{url:"FAQ/index.html",revision:"8f23ac1a5bcb31190844d9e09271e098"},{url:"guide/feature/comment.html",revision:"a96759009075dbf26256b9ae93a2f7be"},{url:"guide/feature/component.html",revision:"bdbf2bbc92186f82c27c6c221695a14f"},{url:"guide/feature/encrypt.html",revision:"4bbdc20be27e85314bee1d67b5957ad2"},{url:"guide/feature/fullscreen.html",revision:"2558ec1b9c2c4ea6eadedb3f5f3a0fd1"},{url:"guide/feature/icon.html",revision:"ae2211abdb8ec00f318d62621fd202b3"},{url:"guide/feature/index.html",revision:"9cd9af44ba147e65bdcb6229ef68506b"},{url:"guide/feature/themecolor.html",revision:"64440a7cdbbae6802ec0f1c1bbb26fc7"},{url:"guide/feature/typescript.html",revision:"ca9bd5f0b37a0e12e9a11d293f7aef41"},{url:"guide/index.html",revision:"5279e740a28b80ec1318098f2a0375ab"},{url:"guide/install.html",revision:"a68ba781633e6b2ce30e664f52387e23"},{url:"guide/layout/breadcrumb.html",revision:"319e2632f6414c1337e44042eeb62c52"},{url:"guide/layout/home.html",revision:"6205070421986f59a23f6e597065133a"},{url:"guide/layout/index.html",revision:"ac9cc25293f72bf0de69cf37d2fcf0d1"},{url:"guide/layout/navbar.html",revision:"8ab7567f6497251f5fb8b60ae92ebdcc"},{url:"guide/layout/page.html",revision:"6ed5f9d34486cb53f702e0e3da608acf"},{url:"guide/layout/sidebar.html",revision:"0505871dbd9d3ba383c39e1972e0b97f"},{url:"guide/markdown/align.html",revision:"1761c91fcd0ee5a0b00ffba502872f3c"},{url:"guide/markdown/flowchart.html",revision:"ff2db6c2e3e8e590c7ad4399bee5fb1a"},{url:"guide/markdown/footnote.html",revision:"93a53ebce492bf07c6466a96e4a49e51"},{url:"guide/markdown/index.html",revision:"3687dbb22fb625b116d89d7bb03884de"},{url:"guide/markdown/sup-sub.html",revision:"1afabfb36c1985f46ea0a93c7a541568"},{url:"guide/markdown/tex.html",revision:"6c2a25099e57939dbf2aeef8c2bcfc9f"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"8603e0aa3dda19e450c7ff013b44bafa"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"4d5429eda7370f71d287663203096878"},{url:"tag/comment/index.html",revision:"1a7f1cf6f35ae48715b7e82e33c89d20"},{url:"tag/component/index.html",revision:"6e4fd36fc3c36df118bac809e8af2136"},{url:"tag/components/index.html",revision:"c93143139632e943ce261576f292258f"},{url:"tag/emoji/index.html",revision:"450d58d461d8fabc893179252c488ae3"},{url:"tag/encrypt/index.html",revision:"11ad84f27387057f323691424c36f492"},{url:"tag/enhance/index.html",revision:"ce8a7968d19bcc5a124e32b668b55f7e"},{url:"tag/frontmatter/index.html",revision:"402500adf76ff9bcab5aa08860f40981"},{url:"tag/fullscreen/index.html",revision:"c3618ca6b2d860f3fb877ff074ce4c6b"},{url:"tag/function/index.html",revision:"370d81a62b663c7149b9cdb0ed514962"},{url:"tag/home/index.html",revision:"0761137d919c93271598ca76c38bed32"},{url:"tag/icon/index.html",revision:"2a9b7849838aa330dd416b53d115c6bf"},{url:"tag/index.html",revision:"f14be3fe5c431e550fed0861df045f77"},{url:"tag/intro/index.html",revision:"e76a9081323460cd9fe993d744cf7017"},{url:"tag/layout/index.html",revision:"fae9c842861db4e53188e15c87ac67f0"},{url:"tag/markdown/index.html",revision:"cad42f28dc717294f11ae9ce3d2ef07b"},{url:"tag/plugin/index.html",revision:"6f066a0af378b99270337aa78113aa2d"},{url:"tag/style/index.html",revision:"345e2dd455bdea5536de67007b369757"},{url:"tag/themeConfig/index.html",revision:"e3fb26d27f2cfcaa21a9759ee2b0742c"},{url:"tag/typescript/index.html",revision:"e898f0f82eefaecadadadcbcce3d4569"},{url:"tag/vuepress/index.html",revision:"9542e696e9bbe4f002600e62645071c3"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});