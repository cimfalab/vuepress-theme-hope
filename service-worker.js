if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"8006667b423bafea5152d7d6e9260a1f"},{url:"article/index.html",revision:"94338f902193beecd970be4527d6f452"},{url:"assets/css/0.styles.0e85bf53.css",revision:"9dd229389e8e86db375a9c2e38eb74cc"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/102.9eb0bd0d.js",revision:"39ed92499d7839d657f38a8712eca220"},{url:"assets/js/app.c2d7855d.js",revision:"62c57efc1e3c44294d51e672262aa27c"},{url:"assets/js/layout-Blog.a40a3c71.js",revision:"4aaf8b1a9e143fe928e32337f3820508"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.08a91b36.js",revision:"a1931ae680942e6aeea787c923baa455"},{url:"assets/js/layout-Layout.b30be5b6.js",revision:"bc704f35216ffc2f64258683b49376aa"},{url:"assets/js/layout-NotFound.e86d7fb9.js",revision:"6040745a6fc94d6a0b5cf35d4890ba2b"},{url:"assets/js/page--051692f2.575e3892.js",revision:"500129e0c0ca286e716c4e33d6eba870"},{url:"assets/js/page--0ab466d2.9ca4ccb6.js",revision:"f890100af23a55effa438debeb35ae7e"},{url:"assets/js/page--1c9738b4.a2a9c850.js",revision:"2f6994096b3846c752445d0b675346de"},{url:"assets/js/page--5dafe67a.ae4764d9.js",revision:"104f8fe912896b705fe887f77d0ba803"},{url:"assets/js/page--6426a252.8d030994.js",revision:"8d0cbe234621878567dd7148b664cc98"},{url:"assets/js/page--cde16ddc.0a0ce4e8.js",revision:"e05ee94c6598b4a7ad4ffea658c8d97b"},{url:"assets/js/page-About Vuepress.67675e76.js",revision:"168a2f0579c7fa1ebf263af7456c0bda"},{url:"assets/js/page-Basic.b18e020d.js",revision:"9420e82aebb755135c7b75589e0ecd93"},{url:"assets/js/page-Blog homepage.2eb07c8e.js",revision:"36d6d80f0b785dd270ba08625bdc7238"},{url:"assets/js/page-Blog related.626763e7.js",revision:"81fefdc4a6d4049195cfdecffb03478b"},{url:"assets/js/page-Comment Function.9bf2ea29.js",revision:"6e3a1b7e29718998cf127842ec6ad127"},{url:"assets/js/page-Common problems.d1eaf0f9.js",revision:"0d0d80851f3582173cfd943c32af7a6b"},{url:"assets/js/page-Config Docs.61a257d9.js",revision:"4c78b0995efce4d8ad43095c7e0d2067"},{url:"assets/js/page-Custom alignment.cf5a52bc.js",revision:"daeae81e6bb82b360649e9f124f3cb58"},{url:"assets/js/page-Darkmode and Theme color.a8496c7c.js",revision:"b2af72c9c89ba70bea7f01ee2da1a506"},{url:"assets/js/page-Default Theme Config.f623cbf2.js",revision:"82c1cab26b98b6d8e38573aa3f0633fd"},{url:"assets/js/page-Demos.5fbf953b.js",revision:"747d9f2be2435870f75b75857a1f1fc8"},{url:"assets/js/page-Emoji List.1c968bf5.js",revision:"0301b49a35b6adcdec0e2db82b80283b"},{url:"assets/js/page-Emoji 列表.def1dcc5.js",revision:"b88d8ac2f19145fb4e4b66471d56a437"},{url:"assets/js/page-Encryption function.93162283.js",revision:"f37301d3aa9772d6f4f5b5c705288aeb"},{url:"assets/js/page-File Structure.49e3333e.js",revision:"6a812ee771dee66e9afea07115d8c739"},{url:"assets/js/page-Flowchart.27fd2cc2.js",revision:"a60c6a8cab24738b2e13626774b533f4"},{url:"assets/js/page-Footnote.313c0d83.js",revision:"d088a084c37e267375bf34bd51de9c55"},{url:"assets/js/page-Home Page.b61c8153.js",revision:"7d6999cdf70df03b7b05e8a3b19aa044"},{url:"assets/js/page-Home.2d167ea2.js",revision:"89121e63f67d55e2de1f4487fa293f46"},{url:"assets/js/page-Introduction.a7853141.js",revision:"5470de641d4a7fe97920948d4f7a4213"},{url:"assets/js/page-Layout.3bfc16a2.js",revision:"c6ec44470d4d0d302777602cdd85987d"},{url:"assets/js/page-Markdown DEMO.346df69f.js",revision:"9bec5a40c8383fde464589e9318bbefb"},{url:"assets/js/page-Markdown Introduction.aa3de142.js",revision:"af62e9f46d5fef50259f702011d3c3a6"},{url:"assets/js/page-Markdown 介绍.ac19dc23.js",revision:"4efb7caf46cab3b7103499479bfac655"},{url:"assets/js/page-Markdown 新语法.f85c637c.js",revision:"172becf755e6e1b2efcea958e1cf5e10"},{url:"assets/js/page-Markdown示例.1b230e1e.js",revision:"e5279e108e3030391abf007d3538f607"},{url:"assets/js/page-Markup.f3ff096b.js",revision:"d3b086850446eb5bc8b18ba6f18d3f3a"},{url:"assets/js/page-NavBar.681d1bf7.js",revision:"485126551d599dce8f2f75e43f65f4b6"},{url:"assets/js/page-New Component.06c91c2f.js",revision:"33e4ee7dd9710cac9978e6843f1275c8"},{url:"assets/js/page-New feature.3b04d1b4.js",revision:"1232d53c67da25cec76bb09e899a9b67"},{url:"assets/js/page-New syntax in Markdown.29dc802b.js",revision:"6d0b614a744dfd15e5541f4848d81101"},{url:"assets/js/page-Page Configuration.7eba2d55.js",revision:"706cd0e6a92eaac6d5057490f478cc37"},{url:"assets/js/page-Page information.a02f56aa.js",revision:"3070a0fbd082b9e314eb95d9234c3ec9"},{url:"assets/js/page-Page.b8e452d2.js",revision:"025946ae371095d7bff735cb758aad53"},{url:"assets/js/page-Plugin Description.85aa8f04.js",revision:"003e49c5d0b96f98ba421b97d8861092"},{url:"assets/js/page-Plugins.dafce3db.js",revision:"b63722bf2b9bacc05a90f33ec02f74d6"},{url:"assets/js/page-Sidebar.6e11f338.js",revision:"5c945dd4c5936516673bad9c6c3568b1"},{url:"assets/js/page-stylus configuration.c2474fdb.js",revision:"165b0a1780e80acd867f62a4004a5d39"},{url:"assets/js/page-stylus 配置.abf05cde.js",revision:"9dabb4f09c6ba8afa85a46a6c0e78bbc"},{url:"assets/js/page-Superscript and Subscript.76213779.js",revision:"12bfc9ed250061dc42f7f5ba1bc90220"},{url:"assets/js/page-Tex Support.81c89ac3.js",revision:"c5ef2c37f40f626e885654043fa145f4"},{url:"assets/js/page-Tex 语法支持.39f9cb98.js",revision:"3e2612e850fcecd5b7d3def76caf386b"},{url:"assets/js/page-Theme Config.9bb2a0c7.js",revision:"7efbd046783aafea2a7b17c374f2604a"},{url:"assets/js/page-TS support.919cd3e7.js",revision:"36f8664b74b9578e80058a1acad7ba66"},{url:"assets/js/page-TS 支持.3f4f55ee.js",revision:"df3ca2eff66d2385b75029ed2c393941"},{url:"assets/js/page-Vuepress Cases.57c0b7c6.js",revision:"7edbbc30ab3e5c97e8d32d0f0d3b459c"},{url:"assets/js/page-Vuepress commands.beeed5eb.js",revision:"4326d25ebd0eba5a85c6789ef7c66552"},{url:"assets/js/page-Vuepress 案例.54521e10.js",revision:"95b0ab103776ffd9b4f2d5c18c675a43"},{url:"assets/js/page-vuepress-plugin-container.4991b6aa.js",revision:"d35d6a93c0e88bc3d16bbffe84621c0f"},{url:"assets/js/page-vuepress-plugin-copyright.74c4f522.js",revision:"e7df66a680d83295673d005383d3db84"},{url:"assets/js/page-Vuepress.04ae138e.js",revision:"210fe63504f7e955443bf363735f63e1"},{url:"assets/js/page-Writing a theme.0f12b3f2.js",revision:"6ba3e41e65889eb2577e1e19af1f9ce9"},{url:"assets/js/page-上下角标.8d615baf.js",revision:"ba424a8982c66377b32d2fcef6b1a366"},{url:"assets/js/page-主题配置.eb34c441.js",revision:"c2122259aae68cdb86e22427ed29eea7"},{url:"assets/js/page-人物.88ce6fcb.js",revision:"0bf4da6978e05cb4fccddefff7351cef"},{url:"assets/js/page-介绍.a4d1967e.js",revision:"70579e904ca6ced1c17e68ba5afe013a"},{url:"assets/js/page-侧边栏.c862b0cb.js",revision:"e8376869ee3900f7a45749a4940ded2c"},{url:"assets/js/page-加密功能.df59dc2a.js",revision:"82f789581abdb3227ff38bddbb4b8a24"},{url:"assets/js/page-博客相关.4a542947.js",revision:"95fb0000257356cb1fe0b2a33167197c"},{url:"assets/js/page-博客首页.aa2fc9de.js",revision:"315fcf28d468dc44de4cbeb710f5e8a1"},{url:"assets/js/page-地点.cb525ba3.js",revision:"59b50daf8385fabfc1ca09513f301784"},{url:"assets/js/page-基础知识.58ec8448.js",revision:"ff9ab420fa4d38468f57d15e0d5ec1e4"},{url:"assets/js/page-对象.34a6ed86.js",revision:"fdaf9cfd8edcf4f36c95589c89f5f8ed"},{url:"assets/js/page-导航栏.a843f36b.js",revision:"b8f031ef382cced2ebd4ff6bad6c72b9"},{url:"assets/js/page-布局.480ed6f7.js",revision:"6ebcf006ad0586164ec11f5aadfbd89d"},{url:"assets/js/page-常见问题.f5eec278.js",revision:"3307942f2ecababd75bfc9cb641e41e2"},{url:"assets/js/page-开发主题.d99fbeb5.js",revision:"d2851a03a51c5510784f0c73d1a8d05d"},{url:"assets/js/page-插件.39f05f21.js",revision:"330315f0fd896d2a83a000b44047f4b9"},{url:"assets/js/page-插件说明.1fbf9949.js",revision:"cee0b11b708b645c0c32df6cf14564c7"},{url:"assets/js/page-文件结构介绍.1ae46f75.js",revision:"78655d3fe4c8a10062e40a5e858941e7"},{url:"assets/js/page-新增特性.6ee5d8ef.js",revision:"b28d74422e574a16246ec56046c3e506"},{url:"assets/js/page-新增组件.ee4e5626.js",revision:"e00ee98628f59df7833203cd59a58653"},{url:"assets/js/page-标记.d34c521a.js",revision:"4253ab54ea615b02aaeb33a36aa077d6"},{url:"assets/js/page-流程图支持.8a23f211.js",revision:"02b543452e58fe7eaa368d86794ac1b0"},{url:"assets/js/page-深色模式与主题色.1590c955.js",revision:"15ac66b01646c9bb0330892e70909bab"},{url:"assets/js/page-符号.957ed08f.js",revision:"de39c9cf56b0c7d886b226a94cedf972"},{url:"assets/js/page-脚注.a76f729b.js",revision:"7eee5731368bef2c1bae024479b039e1"},{url:"assets/js/page-自定义对齐.dc3373b0.js",revision:"c02acd97d08cd008c09a03fe7013b791"},{url:"assets/js/page-自然.480c264d.js",revision:"56e1c188194b280d35914afb6b6cfef3"},{url:"assets/js/page-评论功能.bf6407a4.js",revision:"c4ab539ff30be9610c10c96f33de93fd"},{url:"assets/js/page-配置文档.4d5784ee.js",revision:"301091f00fd64c56a54dc21b46254d1b"},{url:"assets/js/page-页面.2ecfe1e4.js",revision:"2cc727d31d8489c8cda567bf0e62975d"},{url:"assets/js/page-页面信息.4f88fdfe.js",revision:"c85a83109175750a0132d8325fc226c4"},{url:"assets/js/page-页面配置.325d00a0.js",revision:"1deeba424c462752e477353b4df675db"},{url:"assets/js/page-项目指令.f5a072c0.js",revision:"7a480623e66cb94634a780574874d838"},{url:"assets/js/page-项目案例.b8820b12.js",revision:"9a39d9bc32ef3158e9a45ad53a8d9eb5"},{url:"assets/js/page-首页.6bafc637.js",revision:"b32a76d729305c92be6288b568b282c1"},{url:"assets/js/page-默认主题配置.7547318c.js",revision:"e46b7219ac7ad39ab80f1090abb93bf4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.78faace7.js",revision:"444207a472ac1080efe4d829d2897462"},{url:"assets/js/vendors~layout-Layout.3a1a8abe.js",revision:"46d4e17418a55580e151ff8678f8d0fa"},{url:"basic/index.html",revision:"2f084ff7225cae7fc581a5f7dc0451dc"},{url:"basic/markdown/demo.html",revision:"23ef0eac178b680bd865376f6b34632d"},{url:"basic/markdown/emoji/index.html",revision:"a5f22a06c8eedfb87897c78f232edba3"},{url:"basic/markdown/emoji/locate.html",revision:"e49f905ced5ae87315b8309df5640e97"},{url:"basic/markdown/emoji/nature.html",revision:"cd00f6657eefd4307ecfd462e6551b4c"},{url:"basic/markdown/emoji/object.html",revision:"2bda0ae2823fc578a449383ff1be861f"},{url:"basic/markdown/emoji/people.html",revision:"e0633f066a1b172770106a23307591d4"},{url:"basic/markdown/emoji/symbol.html",revision:"2cd9e77cd7a19e6a8ad85094012ed6bc"},{url:"basic/markdown/index.html",revision:"5f87c1c8f3e30bd9383f58269e935548"},{url:"basic/vuepress/case.html",revision:"51192c29f050722e7a16da764cf3b193"},{url:"basic/vuepress/command.html",revision:"2da346c30f4ecda4dd22b6bb0da7c23d"},{url:"basic/vuepress/file.html",revision:"732cc2e948ebcadc54a29715a6bc67f2"},{url:"basic/vuepress/index.html",revision:"2e714d9f95caa0482e324a6e8d5d4b95"},{url:"basic/vuepress/plugin.html",revision:"7516da9ff03cff73a1331a5c4d293d0e"},{url:"basic/vuepress/theme/config.html",revision:"89b1d3c8842fd9c3fe4fe8a9b8eaca6d"},{url:"basic/vuepress/theme/dev.html",revision:"a94869d8c029c60e21384e1d1eb20fbf"},{url:"basic/vuepress/theme/index.html",revision:"2b35d77134c1de4a1fc5014ca0cf8877"},{url:"category/aconfigpi/index.html",revision:"7f613756223e60ce0a29968a5eabbc27"},{url:"category/config/index.html",revision:"50862e4624f7a8c790b7ac3868c35a56"},{url:"category/config/page/2/index.html",revision:"37d8ddcc8187814fb64c6fa3e263c488"},{url:"category/FAQ/index.html",revision:"d434b7275b779f16875e121fca594f99"},{url:"category/feature/index.html",revision:"2527010766a75927b180987a9a59f3aa"},{url:"category/feature/page/2/index.html",revision:"4e680864b60ae24010a7b4e13630894d"},{url:"category/index.html",revision:"6c94d69615922af5cd9d06956c847916"},{url:"category/instruction/index.html",revision:"9fc1e975a4e7bea64a88d01679416d6c"},{url:"category/layout/index.html",revision:"29fc35ef499a5950cca615a8ea9b1cd4"},{url:"category/layout/page/2/index.html",revision:"648dc2d4dd1dcb177e7d3346d06ddce2"},{url:"category/markdown/index.html",revision:"ddbb4d279d9db42a3247fd9c23c10373"},{url:"config/index.html",revision:"b1b6f257170e8012e938709de1134849"},{url:"config/page.html",revision:"aa30713512810f0d9de32bc4bd7e579c"},{url:"config/plugin/container.html",revision:"703f6846ece19f41658f7373104ed4de"},{url:"config/plugin/copyright.html",revision:"26313c5d3430daddef10df5b65f4e10e"},{url:"config/plugin/index.html",revision:"807676b8dbf4b78e63d67b42742c3f8f"},{url:"config/plugin/medium-zoom.html",revision:"4f16589a0f38b7bebcac880811b14830"},{url:"config/plugin/pwa.html",revision:"e68852a92a43203b20ad90798eb3713c"},{url:"config/stylus.html",revision:"937c83dd80892aeae94a5164d56c01ca"},{url:"config/themeConfig.html",revision:"acc0406442a1be8f8fae92c3c3054827"},{url:"demo/index.html",revision:"3b0831949fe508d92c24b2f4ad5f0021"},{url:"en/basic/index.html",revision:"b448e81866b6a5e8cbb5b08e39e840cb"},{url:"en/basic/markdown/demo.html",revision:"6d37c16b97f26ffafdbc00d19e9a47f8"},{url:"en/basic/markdown/emoji.html",revision:"befa4f7c93824243ce51cc5ee73c40f7"},{url:"en/basic/markdown/index.html",revision:"2130227354244d238543ccff5a3675db"},{url:"en/basic/vuepress/case.html",revision:"054c518d910e9b80abab32e864ce4955"},{url:"en/basic/vuepress/command.html",revision:"40d2f95870368c2128ac74bd14fdd84d"},{url:"en/basic/vuepress/file.html",revision:"1c62a4ed8df341fea8fd9c14dc432b8b"},{url:"en/basic/vuepress/index.html",revision:"ba1cb75c77934815cabc831652f569be"},{url:"en/basic/vuepress/plugin.html",revision:"96cd3296f4caa5d80791e72b8641e3cf"},{url:"en/basic/vuepress/theme/config.html",revision:"7fbd111e43d5b792b080138b0c2b3416"},{url:"en/basic/vuepress/theme/dev.html",revision:"423b05e2706859565f204b5056e93dd6"},{url:"en/basic/vuepress/theme/index.html",revision:"ef4f2b09e7a321c79e73320f6b7d57a1"},{url:"en/config/index.html",revision:"0801e88b650aa526642f8c63f679abf0"},{url:"en/config/page.html",revision:"c49525de2a5f3e37fe0684e077d855ca"},{url:"en/config/plugin/container.html",revision:"c9bfb049c0c2ba516ecf4f2920621d1f"},{url:"en/config/plugin/copyright.html",revision:"449cf813302e5553f099a98a20b6add3"},{url:"en/config/plugin/index.html",revision:"787f4b65c53f6e15bcebbcc346d35bc3"},{url:"en/config/plugin/medium-zoom.html",revision:"9ceb433379b46c04c76f043a302f45f5"},{url:"en/config/plugin/pwa.html",revision:"413f6109a61bc58f155c3ce07746006e"},{url:"en/config/stylus.html",revision:"98f1395a04f896eae146d8a22021f777"},{url:"en/config/themeConfig.html",revision:"5559b5a6005edd3170b6dc20df87abb1"},{url:"en/demo/index.html",revision:"e7044b2494eac8b5951790c33ac28886"},{url:"en/FAQ/index.html",revision:"5175e738a4af7d0aa6213709b42e6107"},{url:"en/guide/feature/blog.html",revision:"9e9ebf58490ad6ae2d473d689e0edcc4"},{url:"en/guide/feature/comment.html",revision:"57e908a7c4c14a5de5e7d260867b8070"},{url:"en/guide/feature/component.html",revision:"4ecaa7230287529f312b03f70a93d305"},{url:"en/guide/feature/encrypt.html",revision:"d3c7cca2315c51e65e8478620ee9d5ef"},{url:"en/guide/feature/index.html",revision:"783cc8a1c69d9061023b6baa70e53b01"},{url:"en/guide/feature/markdown/align.html",revision:"688bdfd250aa8a46705b81894798c137"},{url:"en/guide/feature/markdown/flowchart.html",revision:"25d4133efd3dbed0fe8cf639d5807410"},{url:"en/guide/feature/markdown/footnote.html",revision:"bd803b92d9175e1a4557196e43179291"},{url:"en/guide/feature/markdown/index.html",revision:"fe22f35ed2faac41c3fbf4a71129f17c"},{url:"en/guide/feature/markdown/mark.html",revision:"61260d5eb2398261561409d7d8cebc79"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"b270483f270145ee76652c7d524f10d9"},{url:"en/guide/feature/markdown/tex.html",revision:"52ffae853209f0940684a5b3efdffdea"},{url:"en/guide/feature/page-info.html",revision:"11747bcd8cdb55bcd681533dccb87dad"},{url:"en/guide/feature/theme.html",revision:"44645b1030f1d21cb6fe23d15aa2e3bf"},{url:"en/guide/feature/typescript.html",revision:"4fc4c006211189d8389907344f9f315e"},{url:"en/guide/index.html",revision:"92504ce0d204c267a5367318bf62b3e0"},{url:"en/guide/install.html",revision:"d682708f827d97aea7bd29facde21e1b"},{url:"en/guide/layout/blog.html",revision:"2a5154929cc360b1a71ec7423e890724"},{url:"en/guide/layout/home.html",revision:"d21cfb06ebf01a20712d9dad2f2f5cc9"},{url:"en/guide/layout/index.html",revision:"e2aaf973f92bc05a88b00ef2c8dadebe"},{url:"en/guide/layout/navbar.html",revision:"fac8b47d63568640d14c12a614f3df76"},{url:"en/guide/layout/page.html",revision:"0b5a3c3c2dc21182990803c4c2f5edc6"},{url:"en/guide/layout/sidebar.html",revision:"933a1550d06f1ff2e30fa45c97969a86"},{url:"en/index.html",revision:"043165114628585da880d374c0066304"},{url:"FAQ/index.html",revision:"fdb30510babd5dd84efcbfa31b0b6ed2"},{url:"guide/feature/blog.html",revision:"d14082b4d1065d458217330795c38bed"},{url:"guide/feature/comment.html",revision:"1e3b882e3b0a0149d9f6cf88bb6cc82c"},{url:"guide/feature/component.html",revision:"28ecb5c7c1d6c04577986a29ca323de8"},{url:"guide/feature/encrypt.html",revision:"cca70876ca106caeb52e695136c04919"},{url:"guide/feature/index.html",revision:"3649c28a2ce766a692bce84176d83415"},{url:"guide/feature/markdown/align.html",revision:"c916f0df1c4d6bae48fb61cc4e4ff1ac"},{url:"guide/feature/markdown/flowchart.html",revision:"1f132bce17cf3403f330eb702c80b058"},{url:"guide/feature/markdown/footnote.html",revision:"982d26c20e6068385d0278de7bdf666e"},{url:"guide/feature/markdown/index.html",revision:"cca740b9554d47f0dfb04388111654b1"},{url:"guide/feature/markdown/mark.html",revision:"b3a641017ac7c474410b4188863c6dee"},{url:"guide/feature/markdown/sup-sub.html",revision:"68f0e1620873891d12df9d8f8b9c6c38"},{url:"guide/feature/markdown/tex.html",revision:"9ab7b6b75403c1da4488694cd26b239c"},{url:"guide/feature/page-info.html",revision:"39d2e49e37fa79affc412a886b42af1d"},{url:"guide/feature/theme.html",revision:"531f716f764440213f47477f4cb4fca1"},{url:"guide/feature/typescript.html",revision:"265ba3b6de97b9f643a9d224fe22b511"},{url:"guide/index.html",revision:"84dba983c29a3fceaa3a04039d422fa6"},{url:"guide/install.html",revision:"4ea3825f63e6647514fa1c2f781cf08f"},{url:"guide/layout/blog.html",revision:"e9ccb26f0338fb636627a1c2797ea784"},{url:"guide/layout/home.html",revision:"8eac2c0b9759d0d99095c48223ee932e"},{url:"guide/layout/index.html",revision:"78441a6b807cc40911275c0f67d2de99"},{url:"guide/layout/navbar.html",revision:"b53efad72797e6d0eac9f0a6e2054220"},{url:"guide/layout/page.html",revision:"080312cfb6467cc2438339c045dd9b57"},{url:"guide/layout/sidebar.html",revision:"2fe0cb5ca432300f9e86fc0ff000e8e9"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"b8e97cc26aed3f36c70e6d00cff0f778"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"ee7b85a81a8ef94a97c7724b3f47e6af"},{url:"tag/comment/index.html",revision:"62b569d3809048b16ef4aa0afceb1e36"},{url:"tag/components/index.html",revision:"9195b95f9ecfc9524ce303262586004a"},{url:"tag/config/index.html",revision:"3fbe587d25f5ab225a75d6a63c09fa2e"},{url:"tag/config/page/2/index.html",revision:"18e8adb3fe36e62c5352cb0c2015b5c3"},{url:"tag/emoji/index.html",revision:"85197278ec8ca38952e6ac048da359b9"},{url:"tag/encrypt/index.html",revision:"6ba256a41dcb54a8ce593da2b9672ce9"},{url:"tag/feature/index.html",revision:"eee756388da84fd1f665f282769cac74"},{url:"tag/feature/page/2/index.html",revision:"ae4c4188972ca5e6937935da05fec568"},{url:"tag/frontmatter/index.html",revision:"18d0e0e5a74212520dba3b3a4af16570"},{url:"tag/function/index.html",revision:"e39444a8df0705625d830c9e739cab57"},{url:"tag/function/page/2/index.html",revision:"bd15ad2dfb48ab81b1156c53406539d6"},{url:"tag/home/index.html",revision:"d8631e63a974a6bc75462f9a59708ecb"},{url:"tag/index.html",revision:"9bf22b3bfe112612dc3187ae48fa74f8"},{url:"tag/intro/index.html",revision:"759205b87c5197995f4c7082e185ddc9"},{url:"tag/layout/index.html",revision:"5db0c7323ea198dc9b72dec4f6da3726"},{url:"tag/layout/page/2/index.html",revision:"25127844db4ff68d403a0d6aa3c54336"},{url:"tag/markdown/index.html",revision:"ed1a78423bd40a61ab172a0f13ea1c87"},{url:"tag/markdown/page/2/index.html",revision:"231095414fba5cdf8ec0c89e85a7972b"},{url:"tag/markdown/page/3/index.html",revision:"99756ffb4228da466bb444dd14c036bd"},{url:"tag/navbar/index.html",revision:"aa3edf328293d0b0f5d1d6546de62737"},{url:"tag/page-info/index.html",revision:"64bf16a8ebf36386db38d4d4d4f4a7fa"},{url:"tag/plugin/index.html",revision:"1a47d6ddbed8d70d05842e6f6dc0934a"},{url:"tag/sidebar/index.html",revision:"b2cb51d6508895b1a575b72495dad3ab"},{url:"tag/style/index.html",revision:"885a3d8f280a7d23d88d6b41719eeb37"},{url:"tag/themeConfig/index.html",revision:"70154e1423694b8a3530ee89c70556de"},{url:"tag/typescript/index.html",revision:"420db2f2fce0939b9025c9a8bf1c0809"},{url:"tag/vuepress/index.html",revision:"abed9594689b016355c438dea7026b19"},{url:"timeline/index.html",revision:"113185b2849d006b4ea7b9bfb82f6c25"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
