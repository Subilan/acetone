(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"我们的第一个插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我们的第一个插件"}},[t._v("#")]),t._v(" 我们的第一个插件")]),t._v(" "),s("p",[t._v("在 1.1 中我们了解了我们在编写插件时所要知道的一些基本概念和思想，现在，让我们正式展开插件的编写。这部分内容与 Java 本身紧密联系，对于一些特殊的概念将会加粗，然后在文中以插入块的形式具体讲解。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("为了后文的叙述清楚，我们在这里约定：")]),t._v(" "),s("ul",[s("li",[t._v("我们的插件名称叫做 "),s("code",[t._v("MyPlugin")])]),t._v(" "),s("li",[t._v("我们的插件包名为 "),s("code",[t._v("com.example.myPlugin")]),t._v("，因此我们的"),s("strong",[t._v("主类")]),t._v("所在位置应当是 "),s("code",[t._v("/src/main/java/com/example/myPlugin")])]),t._v(" "),s("li",[t._v("我们的所有操作发生在 "),s("code",[t._v("/src/main/java/com/example/myPlugin")]),t._v(" 内，并将此地址简记为 "),s("code",[t._v("@")]),t._v(" "),s("ul",[s("li",[t._v("例如，"),s("code",[t._v("@/MyPlugin.java")]),t._v(" 则代表 "),s("code",[t._v("/src/main/java/com/example/myPlugin/MyPlugin.java")])])])]),t._v(" "),s("li",[t._v("我们的插件使用 Java 11 开发")])]),t._v(" "),s("p",[t._v("除非声明，否则均按照此处所列信息看待。")])]),t._v(" "),s("h2",{attrs:{id:"主类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主类"}},[t._v("#")]),t._v(" 主类")]),t._v(" "),s("p",[s("strong",[t._v("主类")]),t._v("是插件的起点。你也许听说过 C++ 里的 "),s("code",[t._v("int main()")]),t._v(" 吧？那也是一个主类。主类可以认定为是整个程序的入口。那么既然它是主类，就必定有和其它「普通的类」有区别的地方——插件的主类继承了 "),s("code",[t._v("JavaPlugin")]),t._v(" 这个接口（此处的接口为 Java 内部概念，与前文叙述的不一致）。")]),t._v(" "),s("p",[t._v("我们创建 "),s("code",[t._v("@/Main.java")]),t._v("，那么它的包名表达就是 "),s("code",[t._v("com.example.myPlugin.Main")]),t._v("，这就是本项目的主类在项目里的绝对表达，可以用于 "),s("code",[t._v("plugin.yml")]),t._v(" 内对主类的设置。一个主类通常具有以下基本结构。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @/Main.java")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里指定了当前文件所在的包，根据文件所在的位置会有所变化。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bukkit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bukkit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveDefaultConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyPlugin is enabled."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDisable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyPlugin is disabled."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("Java 语言讲堂 #1")])]),t._v(" "),s("p",[t._v("从这里开始，每相隔一两小节将会出现这样一个帮助你理解 Java 语言本身的小块，你可以选择性地阅读。内容不保证权威性，如需学习，请自行寻找专业教材，同时欢迎纠正。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("package <包名>")]),t._v(" 表达了当前文件所在的包，其与路径有关系。由于我们的 "),s("code",[t._v("Main.java")]),t._v(" 放置在 "),s("code",[t._v("@")]),t._v(" 下面，也就是 "),s("code",[t._v("/src/main/java")]),s("strong",[s("code",[t._v("/com/example/myPlugin")])]),t._v(" 这个目录下，所以包名写作 "),s("code",[t._v("com.example.myPlugin")]),t._v("。\n"),s("ul",[s("li",[t._v("想一想：如果我将 "),s("code",[t._v("Main.java")]),t._v(" 放置在 "),s("code",[t._v("@/Utils")]),t._v(" 这个文件夹下面，包名应该写作什么？类比即可得出答案："),s("code",[t._v("com.example.myPlugin.Utils")]),t._v("。"),s("strong",[t._v("包名写错也是错。")])])])]),t._v(" "),s("li",[s("code",[t._v("import <包名>")]),t._v(" 导入了相应包下的类、接口等元素。例如，"),s("code",[t._v("org.bukkit")]),t._v(" 是 "),s("code",[t._v("Bukkit")]),t._v(" 这个类的包名，如果我们要导入 "),s("code",[t._v("Bukkit")]),t._v("，我们就可以用 "),s("code",[t._v("org.bukkit.Bukkit")]),t._v(" 来代表它，然后 "),s("code",[t._v("import")]),t._v(" 它即可使用。")]),t._v(" "),s("li",[s("code",[t._v("public final class <类名>")]),t._v(" 声明了一个终极公共类（其实不应该翻译成中文的😅）。其中 "),s("code",[t._v("public")]),t._v(" 代表是「可以被外界访问的」，除此之外还有 "),s("code",[t._v("protected")]),t._v(" 和 "),s("code",[t._v("private")]),t._v(" 两种。主类只能为 "),s("code",[t._v("public")]),t._v("。而 "),s("code",[t._v("final")]),t._v(" 则表示「最终的」，代表当前类不能被"),s("strong",[t._v("继承")]),t._v("。实际上，如果没有相关需求，"),s("code",[t._v("final")]),t._v(" 是否加上是没有影响的。我们一般把用这类形容词关键字 "),s("code",[t._v("public")]),t._v("、"),s("code",[t._v("final")]),t._v(" 加上一个名词关键字例如 "),s("code",[t._v("class")]),t._v(" 的行为称为"),s("strong",[t._v("修饰")]),t._v("。例如我们可以说，这个类是被 "),s("code",[t._v("public final")]),t._v(" 修饰的。不是什么高级概念，只是一种叫法。")]),t._v(" "),s("li",[s("code",[t._v("extends <类/接口/...>")]),t._v(" 继承指定的对象。这是面向对象编程的特色，具体的含义不在这里详细讲解。但你可以尝试从字面意义上理解，「继承」即代表享有被继承对象所具有的项目。而上面的 "),s("code",[t._v("final")]),t._v(" 关键字可以防止某个对象被继承。")]),t._v(" "),s("li",[s("code",[t._v("@Override")]),t._v(" 是一个 Java Annotation（注解），除此之外还有 "),s("code",[t._v("@Deprecated")]),t._v(" 等。它们相当于是可以影响编译行为的「小工具」。Override 单词本意是「覆盖」，在这里的意思是「覆盖父类的相关方法」。因为 "),s("code",[t._v("Main")]),t._v(" 这个类继承了 "),s("code",[t._v("JavaPlugin")]),t._v("，加上 "),s("code",[t._v("@Override")]),t._v(" 代表着在 "),s("code",[t._v("Main")]),t._v(" 里面写的这个方法，"),s("code",[t._v("JavaPlugin")]),t._v(" 里面也有同名的方法。如果父类中不存在被 "),s("code",[t._v("@Override")]),t._v(" 标注的方法，编译器将报错。")]),t._v(" "),s("li",[s("code",[t._v("void")]),t._v(" 是一种数据类型，它代表「无返回值」。Java 中用数据类型来表达一个函数，它表示这个函数的返回值类型。对于 "),s("code",[t._v("void")]),t._v(" 类函数来说，它们只负责「执行操作」而不返回任何值。")])]),t._v(" "),s("p",[t._v("ps: 我们一般将放置在对象里的函数称为这个对象的"),s("strong",[t._v("方法（method）")]),t._v("。")])]),t._v(" "),s("p",[t._v("一个标准的插件，应当拥有一个继承了 "),s("code",[t._v("JavaPlugin")]),t._v(" 的主类，并且这个主类里有带有 "),s("code",[t._v("@Override")]),t._v(" 注解的两个方法："),s("code",[t._v("void onEnable")]),t._v(" 和 "),s("code",[t._v("void onDisable")]),t._v("。其中 "),s("code",[t._v("onEnable")]),t._v(" 这个函数在插件被启用的时候会被调用，而 "),s("code",[t._v("onDisable")]),t._v(" 则会在插件被禁用的时候被调用。如果一个插件本身没有问题，那么服务端在启动的时候就会自动启用这个插件，于是 "),s("code",[t._v("onEnable")]),t._v(" 也可以理解为在服务器启动的时候被调用。")]),t._v(" "),s("p",[t._v("那么现在我们该如何写一个 Hello World 呢？其实上面的代码已经实现了这一点。根据上一段的解释，该插件在服务器启动的时候，会调用服务器的 Logger 输出一句 "),s("code",[t._v("MyPlugin is enabled.")]),t._v("；在服务器关闭的时候，会调用服务器的 Logger 输出一句 "),s("code",[t._v("MyPlugin is disabled.")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果插件内部出现错误，服务端会强行禁用它，并显示出报错。此时，"),s("code",[t._v("onDisable")]),t._v(" 也会被调用。")])]),t._v(" "),s("p",[t._v("具体的表现，大概是这样的：")]),t._v(" "),s("div",{staticClass:"language-log extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-log"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("Preparing spawn area:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("Time elapsed:")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3849")]),t._v(" ms\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Enabling MyPlugin "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("v1.0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SNAPSHOT\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" MyPlugin is enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 这里就是你的 Hello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Running delayed init tasks\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Done "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.970s")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" For help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token level info keyword"}},[t._v("INFO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Timings Reset\n")])])]),s("p",[t._v("我们 Hello World 算是写出来了，可是插件开发的思路呢？其实已经很显然了。主类作为整个插件的入口，由服务端主动调用，自然是要重点看待的。我们一般在主类里面做的事情有如下几种")]),t._v(" "),s("ul",[s("li",[t._v("一些初始化的工作\n"),s("ul",[s("li",[t._v("配置文件")]),t._v(" "),s("li",[t._v("需要用到的动态类")]),t._v(" "),s("li",[t._v("与数据库的连接")])])]),t._v(" "),s("li",[t._v("显示一个「被启用」的信息")]),t._v(" "),s("li",[t._v("其它工作")])]),t._v(" "),s("p",[t._v("也许你会想：这不全是在初始化吗？该怎样实现插件的内容呢？别着急，在后面我们介绍了一些基本功能以后，自然就会有思路了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);