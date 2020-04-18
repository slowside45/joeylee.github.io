(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{347:function(a,t,s){"use strict";s.r(t);var e=s(1),l=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"基本混淆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本混淆","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本混淆")]),a._v(" "),s("p",[a._v("两个常用的混淆命令，注意一颗星表示只是保持该包下的类名，而子包下的类名还是会被混淆；而两颗星表示把本包和所包含的子包下的类名都保留。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-keep class cn.hadcn.test.**\n-keep class cn.hadcn.test.*\n")])])]),s("p",[a._v("如果既想保持类名，又想保持里面的内容不被混淆，就执行以下方法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-keep class com.example.bean.* { ; }\n")])])]),s("p",[a._v("在此基础上，我们也可以使用Java的基本规则来保护特定类不被混淆，比如我们可以用extend，implement等这些Java规则。如下例子就避免所有继承Activity的类被混淆")]),a._v(" "),s("h2",{attrs:{id:"特殊混淆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊混淆","aria-hidden":"true"}},[a._v("#")]),a._v(" 特殊混淆")]),a._v(" "),s("ol",[s("li",[a._v("代码混淆压缩比，在0~7之间，默认为5，一般不做修改")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-optimizationpasses 5\n\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("混合时不使用大小写混合，混合后的类名为小写")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-dontusemixedcaseclassnames\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("指定不去忽略非公共库的类")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-dontskipnonpubliclibraryclasses\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("指定不去忽略非公共库的类成员")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-dontskipnonpubliclibraryclassmembers\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("不做预校验，加快速度")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-dontpreverify\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("保留Annotation")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-keepattributes Annotation,InnerClasses\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("避免混淆泛型")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-keepattributes Signature\n\n")])])])])}],!1,null,null,null);l.options.__file="Android开发学习笔记（五）混淆.md";t.default=l.exports}}]);