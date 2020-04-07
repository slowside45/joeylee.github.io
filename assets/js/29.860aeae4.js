(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{338:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"springboot-项目开发常见错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-项目开发常见错误","aria-hidden":"true"}},[t._v("#")]),t._v(" Springboot 项目开发常见错误")]),t._v(" "),s("h2",{attrs:{id:"记一次低级失误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记一次低级失误","aria-hidden":"true"}},[t._v("#")]),t._v(" 记一次低级失误")]),t._v(" "),s("h4",{attrs:{id:"疑象丛生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#疑象丛生","aria-hidden":"true"}},[t._v("#")]),t._v(" 疑象丛生")]),t._v(" "),s("p",[t._v("深夜撸码，也许是因为有点困，随手创建了一个controller后就去改别的地方，改完后一运行，连swagger的页面都无法访问，打断点到我配置的第一个interceptor中，发现preHandle中的object对象是我在运行之前创建的那个controller，遂进入controller类查找错误。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("preHandle")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest httpServletRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HttpServletResponse httpServletResponse"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object object"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"水落石出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水落石出","aria-hidden":"true"}},[t._v("#")]),t._v(" 水落石出")]),t._v(" "),s("p",[t._v("我在创建controller时，将url作为@RestController注解的默认值填了进去。")]),t._v(" "),s("p",[t._v("错误:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/appUser"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AppUserController")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("正确：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/appUser"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("AppUserController")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),s("h4",{attrs:{id:"收获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收获","aria-hidden":"true"}},[t._v("#")]),t._v(" 收获")]),t._v(" "),s("ol",[s("li",[t._v("在interceptor的prehandle方法中，通过查看object的属性，可以知道发生异常访问时url指向的controller。")]),t._v(" "),s("li",[t._v("困了就去睡觉，别瞎jb写")])])])}],!1,null,null,null);e.options.__file="SpringbootErrorFallback.md";a.default=e.exports}}]);