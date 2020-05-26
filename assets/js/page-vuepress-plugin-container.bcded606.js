(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{596:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[e._v("#")]),e._v(" vuepress-plugin-container")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("请注意，markdown 增强中的自适应对齐应用了该插件，因此如果你禁用本插件，你将无法使用自定义对齐与提示框。")])]),e._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[e._v("#")]),e._v(" 配置项")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("必填: 是")])]),e._v(" "),a("p",[e._v("容器的类型。举个例子，如果 "),a("code",[e._v("type")]),e._v(" 被设置为 "),a("code",[e._v("foo")]),e._v("，则仅有下面的语法会被解析为 markdown 容器：")]),e._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[e._v("::: foo bar\n随便写点啥 ~\n:::\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("string | Record<string, string>")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("type")]),e._v(" 的大写形式")])]),e._v(" "),a("p",[e._v("容器的默认标题。如果没有提供标题，则会使用 "),a("code",[e._v("defaultTitle")]),e._v(" 作为容器的标题。")]),e._v(" "),a("p",[e._v("提供一个对象作为多语言配置，则默认标题将会基于当前 "),a("code",[e._v("locale")]),e._v(" 选取。")]),e._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[e._v("#")]),e._v(" before")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("要插入在容器前的 HTML。")]),e._v(" "),a("p",[e._v("如果设置为一个函数，将传入当前的 "),a("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),a("code",[e._v("info")]),e._v(" 的值为 "),a("code",[e._v("bar")]),e._v("。）")]),e._v(" "),a("p",[e._v("如果设置了 "),a("code",[e._v("before")]),e._v(" 的值， "),a("code",[e._v("defaultTitle")]),e._v(" 将会被忽略。")]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" after")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("要插入在容器后的 HTML。")]),e._v(" "),a("p",[e._v("如果设置为一个函数，将传入当前的 "),a("code",[e._v("info")]),e._v(" 作为第一个参数。（在上面的例子中，"),a("code",[e._v("info")]),e._v(" 的值为 "),a("code",[e._v("bar")]),e._v("。）")]),e._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" validate")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("((params: string) => boolean)")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("一个用于判定容器是否结束的函数。当认定容器范围结束时应返回一个 "),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("blockquote",[a("p",[e._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" render")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("容器开头和结束 token 的渲染函数。如果设置了这个值， "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("after")]),e._v(" 和 "),a("code",[e._v("defaultTitle")]),e._v(" 都将被忽略。")]),e._v(" "),a("blockquote",[a("p",[e._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker"}},[e._v("#")]),e._v(" marker")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("':'")])])]),e._v(" "),a("p",[e._v("用于分隔符的字符。")]),e._v(" "),a("blockquote",[a("p",[e._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports},625:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[e._v("#")]),e._v(" vuepress-plugin-container "),a("MyBadge",{attrs:{text:"improve"}})],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Please note that this plugin is applied to alignment in markdown enhancements, so if you disable this plugin, you will not be able to use custom alignment and the prompt boxes provided by the default theme.")])]),e._v(" "),a("h2",{attrs:{id:"configuration-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-item"}},[e._v("#")]),e._v(" Configuration Item")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("required: true")])]),e._v(" "),a("p",[e._v("The type for the container. For example, if type is set to foo, only the following syntax will be parsed as a container:")]),e._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[e._v("::: foo bar\nwrite something here ~\n:::\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | Record<string, string>")])]),e._v(" "),a("li",[e._v("default: the upper case of type")])]),e._v(" "),a("p",[e._v("The default title for the container. If no title is provided, "),a("code",[e._v("defaultTitle")]),e._v(" will be shown as the title of the container.")]),e._v(" "),a("p",[e._v("Provide an object as locale config, and the default title will depend on current "),a("code",[e._v("locale")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[e._v("#")]),e._v(" before")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed before the block.")]),e._v(" "),a("p",[e._v("If specified as a function, an argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".)")]),e._v(" "),a("p",[e._v("If specified value for "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("defaultTitle")]),e._v(" will be ignored.")]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[e._v("#")]),e._v(" after")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string | ((info: string) => string)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed after the block.")]),e._v(" "),a("p",[e._v("If specified as a function, an argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".)")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[e._v("#")]),e._v(" validate")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("((params: string) => boolean)")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("A function to validate tail after opening marker, should return true on success.")]),e._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[e._v("#")]),e._v(" render")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("The renderer function for opening/closing tokens. If specified, "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("after")]),e._v(" and "),a("code",[e._v("defaultTitle")]),e._v(" will be ignored.")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker"}},[e._v("#")]),e._v(" marker")]),e._v(" "),a("ul",[a("li",[e._v("type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("default: "),a("code",[e._v("':'")])])]),e._v(" "),a("p",[e._v("The character to use as a delimiter.")]),e._v(" "),a("blockquote",[a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-container API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);