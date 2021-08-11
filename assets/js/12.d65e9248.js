(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{374:function(a,t,s){"use strict";s.r(t);var v=s(45),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_2-1-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置文件"}},[a._v("#")]),a._v(" 2.1 配置文件")]),a._v(" "),s("p",[a._v("**配置文件（configuration）**是大部分面向用户的程序在运行中所需要依赖的指导性文件。假设我们的插件有一个功能 A，但是这个功能 A 在不同的服务器上表现不一样，在一些不好的情况下它有可能导致服务器无法正常运行，但是有些人却需要它，这该怎样实现？不难想到，我们需要给这个功能加上一个「开关」，而这个开关所牵涉到的就是配置文件。")]),a._v(" "),s("p",[a._v("本节内容将详细介绍 "),s("code",[a._v("plugin.yml")]),a._v(" 的内容及其作用以及处理插件配置文件的方法及相关介绍。")]),a._v(" "),s("h2",{attrs:{id:"配置文件的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的意义"}},[a._v("#")]),a._v(" 配置文件的意义")]),a._v(" "),s("p",[a._v("配置文件本质上是程序向外部所开放的可配置部分。配置文件为用户提供了一个简易的、稳定的直接影响程序表现的途径。如果没有配置文件，用户想要禁用掉功能 A 来让自己的服务器正常运行，必须得去自己改代码，否则就啥也干不了。改代码就比较麻烦了，修改代码得先知道代码，然后把功能 A 的相关代码去掉，再调试是否对其它的功能有所影响，再编译一份属于自己的插件······")]),a._v(" "),s("p",[a._v("如果作为开发者的我们提前将这一部分逻辑处理好，将「启用 A」放到一个布尔值，比如 "),s("code",[a._v("aEnabled")]),a._v(" 里，然后在实现功能 A 的时候加入 "),s("code",[a._v("if (aEnabled) {} else {}")]),a._v(" 部分，那么用户只需要改变 "),s("code",[a._v("aEnabled")]),a._v(" 这个值便可以改变其运行情况，十分方便。")]),a._v(" "),s("p",[a._v("所以，配置文件所提供给用户的就是修改程序内部分数据的能力。我们放在配置文件中的不一定是上面例子中的开关，而可以是程序需要向用户询问的一切东西：")]),a._v(" "),s("ul",[s("li",[a._v("不允许进入服务器的玩家名字有哪些？")]),a._v(" "),s("li",[a._v("服务器开了多久关？")]),a._v(" "),s("li",[a._v("服务器的密码是多少？")]),a._v(" "),s("li",[a._v("启用不启用这个功能？")]),a._v(" "),s("li",[a._v("...")])]),a._v(" "),s("p",[a._v("通过配置文件，用户可以轻松修改插件所开放给他们的配置项目，插件也可以根据这些项目合理地运行来达到用户想要的效果。")]),a._v(" "),s("h2",{attrs:{id:"配置文件的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的实现"}},[a._v("#")]),a._v(" 配置文件的实现")]),a._v(" "),s("p",[a._v("配置文件可以用多种数据形式来实现。首先，我们需要理解键（key）—值（value）思想，这在大多数编程语言中是通用的。")]),a._v(" "),s("h3",{attrs:{id:"键-值概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#键-值概述"}},[a._v("#")]),a._v(" 键—值概述")]),a._v(" "),s("p",[a._v("键—值是一种通用的数据存储模式，在主流语言中都可以见到它的身影。")]),a._v(" "),s("p",[s("strong",[a._v("键")]),a._v("是一个值的标识符（identifier），简而言之就是一个值独一无二的标志。"),s("strong",[a._v("值")]),a._v("是一个具有实际意义的字段。键与值一一对应，知道了键，就可以找到值。一个键对应一个值的整体称为"),s("strong",[a._v("键—值对")]),a._v("。如下结构表达了一个简单的"),s("strong",[a._v("键—值对")]),a._v("集合：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("a: 1, b: 2, c: 3\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[s("strong",[a._v("键—值对集合的另外几种说法")])]),a._v(" "),s("p",[a._v("还可以叫做"),s("strong",[a._v("字典（dictionaries）"),s("strong",[a._v("或者")]),a._v("映射（mappings）")]),a._v("，因为键—值对实际上是在将键映射到值上（可以想象存在一个键域和一个值域，一个函数 f(k) 将键 "),s("code",[a._v("k")]),a._v(" 对应的值返回）。")]),a._v(" "),s("p",[a._v("需要注意的是，叫法只是叫法，它们代指的并不仅仅是「键值对集合」这样一个简单的东西。不同（或同一）编程语言中键值对集合的形式可能有很多种，它们具有各自的独特性质，这需要从编程语言的设计方面进行了解。例如 Python 中有字典这种数据类型，Java 中有映射（"),s("code",[a._v("Map<U,T>")]),a._v("）这种数据类型。")])]),a._v(" "),s("p",[a._v("这里我们可以说，键 "),s("code",[a._v("a")]),a._v(" 对应值 "),s("code",[a._v("1")]),a._v("，键 "),s("code",[a._v("b")]),a._v(" 对应值 "),s("code",[a._v("2")]),a._v("，键 "),s("code",[a._v("c")]),a._v(" 对应值 "),s("code",[a._v("3")]),a._v("。上面只是一个模式性的表达，实际上遵循键—值表达模式的有专门的数据表达语言，例如 JSON、YAML 等。在 Bukkit 开发中，我们大部分时间都会用到 YAML 这种格式。上述结构在 JSON 中的表达是这样的：")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"a"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"b"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"c"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("如果将它变为一个对象 "),s("code",[a._v("obj")]),a._v("，那么我们可以通过 "),s("code",[a._v(".")]),a._v(" 号来访问该对象下的键从而获取对应的值。在这个例子中，"),s("code",[a._v("obj.a")]),a._v(" 为 "),s("code",[a._v("1")]),a._v("，"),s("code",[a._v("obj.b")]),a._v(" 为 "),s("code",[a._v("2")]),a._v("，"),s("code",[a._v("obj.c")]),a._v(" 为 3。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("在这里的 "),s("code",[a._v(".")]),a._v(" 与包名中的 "),s("code",[a._v(".")]),a._v(" 泛指含义相同，都是指所属关系，但在编程上的含义完全不同。我们不能说 "),s("code",[a._v("com.example.myplugin.Main")]),a._v(" 中的任何一部分是「键」，它们更没有值。但值得注意的是，包名的表达方式和键在本质上是相同的，都一个数据主体的独一无二标识。")])]),a._v(" "),s("p",[a._v("上述结构在 YAML 中的表达是这样的：")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),s("p",[a._v("可见，不同的数据表达语言对数据的表达方式并不一样，但是并不会改变最初的键—值模式，更不会改变数据本身的键和值。所以它们本质上只是写法和解析方式不同，属于同一组数据的不同记法而已。但是不同的数据表达语言之间又有很大的差异，你将在其它类型的开发工作中感受到这一点。")]),a._v(" "),s("h3",{attrs:{id:"yaml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-文件"}},[a._v("#")]),a._v(" YAML 文件")]),a._v(" "),s("p",[a._v("接下来我们详细介绍我们随后会经常接触到的 YAML 文件。YAML 是一个缩写，在发布后的全称是 "),s("strong",[a._v("Y")]),a._v("AML Ain't a Markup Language（YAML 不是一种标记语言）。注意 YAML 的全称中仍然有 YAML 这个缩写（这种缩写形式称为巡回缩写），所以可以认定 YAML 是个单纯的名字。")]),a._v(" "),s("p",[a._v("YAML 文件的扩展名为 "),s("code",[a._v(".yml")]),a._v("，创建以后可直接在里面写 YAML 内容。")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),s("p",[a._v("和 JSON 一样，YAML 中的值是有数据类型的。对于上面例子中的 "),s("code",[a._v("1")]),a._v("，实际上是整数（Integer）"),s("code",[a._v("1")]),a._v("。如果我们要把它表达为字符串 "),s("code",[a._v("1")]),a._v("，可以将其加上引号："),s("code",[a._v('a: "1"')]),a._v("（单引号也可）。对于那些可以直接被看作数字的值，例如 "),s("code",[a._v("1")]),a._v("、"),s("code",[a._v("1.2")]),a._v(" 等，会被直接解析为相应的数字数据类型。而那些不能被看作数字的值，例如 "),s("code",[a._v("1A")]),a._v("、"),s("code",[a._v("2021/08/11")]),a._v("、"),s("code",[a._v("'1'")]),a._v("，则会被看作是字符串。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("如果 "),s("code",[a._v("a: 1A")]),a._v("，此时无论 "),s("code",[a._v("1A")]),a._v(" 是否打引号都是一个字符串。")])]),a._v(" "),s("p",[a._v("如字符串、数字这种不可再分的值，在 YAML 中称为纯量。YAML 中还有另外两类可再分的值，一种叫做"),s("strong",[a._v("对象")]),a._v("，一种叫做"),s("strong",[a._v("数组")]),a._v("。对象和数组都是可以嵌套的，这也是为什么它们可以再分。下面来分别简单介绍对象和数组。")])])}),[],!1,null,null,null);t.default=_.exports}}]);