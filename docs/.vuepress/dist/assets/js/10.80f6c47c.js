(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{373:function(t,a,e){"use strict";e.r(a);var s=e(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-1-插件的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-插件的概念"}},[t._v("#")]),t._v(" 1.1 插件的概念")]),t._v(" "),e("h2",{attrs:{id:"接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),e("p",[t._v("你是否思考过什么叫做"),e("strong",[t._v("插件（plugin）")]),t._v("？")]),t._v(" "),e("p",[t._v("从英文角度来理解，"),e("code",[t._v("plugin")]),t._v(" 实际上是一个合成词，它原本指的是一个动作，即 "),e("code",[t._v("plug in")]),t._v("，因而该名词也可以写成复合形式 "),e("code",[t._v("plug-in")]),t._v("。Plug in 这个动作，可以理解为把插头插进插座里；将这个动作抽象化、名词化以后，就出现了「插件」的概念——它是一个半路插入的中间物件。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("下文中的插件均指 Minecraft 服务端插件。")])]),t._v(" "),e("p",[t._v("插件作为半路插入的东西，游戏本身并没有它。开发者通过向插件内添加代码，来使它对游戏起到一定的拓展与改变作用。你是否想过，究竟是什么能让一个不是游戏原作者写的程序控制这款游戏？那就是"),e("strong",[t._v("应用程序接口（application programming interface, "),e("em",[t._v("abbr.")]),t._v(" API）")]),t._v("，在本文中简称"),e("strong",[t._v("接口（interface）")]),t._v("。接口有很多种，它们相互之间的概念也并不重合。在本文中，我们的接口都是指「将 Minecraft 本体与插件衔接起来的中间体」。")]),t._v(" "),e("p",[t._v("接口是凭空产生的吗？并不是，接口是需要人为编写的。接口本质上是一种约定，约定你应该以怎样的方式与主程序沟通。只要在学会 Java 语言的基础上了解接口，就可以顺利地写插件。接口就好比语言中的方言，你到达了一个小地方，想要和那里的人沟通，就必须了解当地的方言——而如果你只会普通话，有可能根本无法和他们沟通。")]),t._v(" "),e("p",[t._v("Minecraft 的接口并不是由官方所创造的。也许你早已听说过官服与「水桶服」的区别——一个不能加插件，一个可以加插件，道理也就在这里。水桶服是由开发者自行拓展出来的一份接口所形成的服务器，它是在官服的基础上加以修改的结果。这些「修改的结果」就是形形色色的服务端，它们的源头都是官服，下面我们来详细介绍一下服务端的概念。")]),t._v(" "),e("h2",{attrs:{id:"服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),e("p",[t._v("接口是由"),e("strong",[t._v("服务端")]),t._v("所提供的（更严格地说，是由服务端和插件共同实现的），如果你按照接口的规定写代码，并且按照约定放在了服务端生成的 "),e("code",[t._v("plugins")]),t._v(" 文件夹下面，那么你的插件就可以与服务端建立沟通，服务端就可以将你的插件应用到玩家所看到的世界里。服务端究竟是一个怎样的存在？")]),t._v(" "),e("p",[t._v("一个完整的服务器游戏体验，分为"),e("strong",[t._v("客户端")]),t._v("和"),e("strong",[t._v("服务端")]),t._v("两个部分，在许多计算机软件中也是这样。客户端就是 Minecraft 游戏本体，你可以在客户端中选择「多人游戏」去连接一个服务器。所谓「服务器」本质指的就是服务端。服务端是一个「请求处理者」，本质上它提供的只是对玩家在服务器中几乎所有的行为的反应，而游戏本身的体验依然是由客户端决定。")]),t._v(" "),e("p",[t._v("这句话的意思是，游戏本身的所有体验都是由客户端提供的，玩家在多人模式下的所有行为本应和单人模式下的一致，而多人模式与单人模式的本质区别就是多人模式会将玩家的一举一动都发送给服务器，这个发送的对象就是服务端，服务端根据这些数据返回相应的回应数据，这样多人游戏体验就建立了。")]),t._v(" "),e("p",[t._v("于是我们可以归纳出，"),e("strong",[t._v("进入服务器进行游戏的本质是客户端发送请求、服务端处理请求和发送回应、客户端接收回应并处理回应的过程")]),t._v("，这里的请求指的是某种形式的数据。")]),t._v(" "),e("p",[t._v("例如，进入服务器首先需要加载地形，地形的数据就是由服务端发来的（因为地图存档并不在你的电脑上，这是一个服务器的基本特征）。客户端依据发来的数据开始加载本地的地形以让玩家看到，这样一个世界就形成了。玩家的每一次移动、每一句聊天指令等，均会发往服务端，服务端也会将结果发送回来。细心的读者可以想到，在这里服务端和客户端之间一定也存在着某种「约定」，因为只有这样客户端才能读懂服务端发回的数据以及发送服务端可以读懂的数据。")]),t._v(" "),e("p",[t._v("于是这里我们引用 tdiant 大佬在 "),e("a",{attrs:{href:"https://bdn.tdiant.net/#/unit/2-2?id=%e7%90%86%e8%a7%a3%e5%ae%a2%e6%88%b7%e7%ab%af%e4%b8%8e%e6%9c%8d%e5%8a%a1%e7%ab%af%e7%9a%84%e5%85%b3%e7%b3%bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bukkit Development Note"),e("OutboundLink")],1),t._v(" 中提到的一个例子。为什么领地插件在禁止你走动的时候，你往往是动了以后又回到原位，而不是根本不能动呢？这是因为「走动」是一种客户端行为（任何游戏本体的操作都是客户端行为），在服务器这个特殊环境里，客户端需要将玩家的一举一动都发往服务端，而在客户端发往服务端，并未收到请求的时候，这些行为并不会被处理（按照本地游戏的方式表现出来，走了就是走了），而当服务端通过插件的代码得出结论，返回一个「禁止走动」的回应时，客户端就会取消「走动」这个动作，玩家也就会回到原本的地方，"),e("strong",[t._v("相当于没有走动")]),t._v("。")]),t._v(" "),e("p",[t._v("我们应该可以给服务端下定义了："),e("strong",[t._v("Minecraft 服务端是处理 Minecraft 多人游戏的远程终端，它负责控制整个多人模式下的游戏，根据客户端发送的数据进行处理并返回对应的结果")]),t._v("。我们要理解的重点是，不同的服务端提供了不同的插件运行载体，也向插件提供了不同的接口。")]),t._v(" "),e("p",[t._v("下面，我们就来简单地认识不同的服务端及其对应的接口。")]),t._v(" "),e("h3",{attrs:{id:"官服"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官服"}},[t._v("#")]),t._v(" 官服")]),t._v(" "),e("p",[t._v("官方只推出过一种服务端，一般称之为官服，在英文中习惯称之为 "),e("strong",[t._v("Vanilla")]),t._v("。官服不提供对外的接口，意思是你没有办法把插件放到官服里去运行。在运行的时候你会发现，目录下并没有生成名为 "),e("code",[t._v("plugins")]),t._v(" 的文件夹。")]),t._v(" "),e("h3",{attrs:{id:"bukkit-spigot-和-paper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bukkit-spigot-和-paper"}},[t._v("#")]),t._v(" Bukkit，Spigot 和 Paper")]),t._v(" "),e("p",[t._v("这三者是"),e("strong",[t._v("插件服务器")]),t._v("中的主流服务端，但 Bukkit 考虑性能问题已经很少有人使用。这三者是 Acetone 所要讲述的重点，他们彼此之间存在着密切的联系。到底是什么联系呢？")]),t._v(" "),e("p",[t._v("实际上，Spigot 是 Bukkit 的 "),e("strong",[t._v("fork（派生）")]),t._v("，Paper（也叫 Paper Spigot）是 Spigot 的 fork。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("Fork")]),t._v(" 这个动作可以通俗地理解为「在原有的基础上再开发」。也就是说，Spigot 是在 Bukkit 的代码上进行额外的开发得出的一个分支版本，Paper 和 Spigot 也是这种关系。Paper 和 Spigot 诞生的初衷都是性能改善。")])]),t._v(" "),e("p",[t._v("它们这种关系的特点为「后者可以继承前者所有属性」。也就是说，Spigot 上可以运行所有 Bukkit 的插件，Paper 上可以运行所有 Spigot 的插件。")]),t._v(" "),e("p",[t._v("由于后者是前者的分支，那么后者就有可能包含前者不含的内容，而前者却不可能包含后者没有的内容（因为「派生」的关系已经确定了）。因此这三者中的两者（Spigot，Paper）有它们自己的插件支持范畴。即存在一种插件只能在 Spigot 上运行而无法在 Bukkit 上运行，也存在一种插件只能在 Paper 上运行而无法在 Spigot 上运行，但不存在插件只能在 Bukkit 上运行。然而，我们通常接触的插件一般没有这些特点。这些特点是由接口的特性来决定的。")]),t._v(" "),e("p",[t._v("这三种服务端均有各自的接口，即 Bukkit API、Spigot API 和 Paper API，它们之间的关系就是这三者之间的派生关系。")]),t._v(" "),e("h3",{attrs:{id:"sponge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sponge"}},[t._v("#")]),t._v(" Sponge")]),t._v(" "),e("p",[t._v("Sponge 是一个统称，分为 SpongeVanilla 和 SpongeForge。SpongeVanilla 属于插件服务器服务端，拥有一个独特的 API——Sponge API，使得它完完全全从 Bukkit 生态圈中脱离出来。虽然它叫做「插件」，但并不是用 Bukkit 类接口写的。")]),t._v(" "),e("p",[t._v("SpongeForge 是模组服务器服务端，算是主流。它实现了对 Sponge API 的支持，同时也实现了对 Forge API 的支持，因而兼容 Sponge API 实现的插件和 Forge API 实现的模组。本文不会提及任何有关 Mod 开发的知识，"),e("s",[t._v("因为我不会。")])]),t._v(" "),e("h3",{attrs:{id:"mohist、catserver、arclight-等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mohist、catserver、arclight-等"}},[t._v("#")]),t._v(" Mohist、Catserver、Arclight 等")]),t._v(" "),e("p",[t._v("这类服务端是模组服务器服务端，支持模组的同时也支持 Bukkit 类插件的安装。它们既实现了对 Forge API 的支持，也实现了对 Bukkit API 的支持。")]),t._v(" "),e("p",[t._v("Forge API 和 Fabric API 是 "),e("strong",[t._v("客户端（client）")]),t._v(" 流行的两种模组开发接口，服务端需要实现它们才能把模组带到服务端。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("模组和插件的本质区别是一个修改客户端，一个修改服务端，是两个不同的领域。由于客户端与游戏体验紧密挂钩，因此模组通常用于拓展游戏，也可用于客户端优化。插件也可以用于拓展游戏，但使用的均为服务端方法。将模组带入服务端是为了让模组也能进入多人游戏中来。")])]),t._v(" "),e("p",[t._v("以下是一份关于服务端与 API 的关系的简表。")]),t._v(" "),e("p",[e("c",[t._v("表 1.1")])],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("服务端")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支持的插件与 Mod 类型")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Vanilla")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bukkit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Bukkit API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Bukkit API 的插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Spigot")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Spigot API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Bukkit 或 Spigot API 的插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Paper")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Paper API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Bukkit 或 Spigot 或 Paper API 的插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SpongeForge")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Sponge API, Forge API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Sponge API 的插件和实现了 Forge API 的 Mod")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SpongeVanilla")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Sponge API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Sponge API 的插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Mohist 等")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Bukkit 等 API, Forge API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("实现了 Bukkit 等 API 的插件和实现了 Forge API 的 Mod")])])])]),t._v(" "),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),e("p",[t._v("通过上文的阅读，我们应该可以给插件下一个定义了。"),e("strong",[t._v("Minecraft 服务端插件是一种以特定服务端对应的 API 为实现标准，通过代码上对 API 的实现来对服务端处理客户端请求的过程发挥拓展和改变作用的 Java 应用程序")]),t._v("。通俗来讲，就是通过影响服务端来影响客户端，从而塑造游戏体验或者创造功能的程序。Acetone 主要讲述 Bukkit 类 API 的开发方式，这些方式和思想在不同的 API 下是可以通用的。以下我们就来进行插件开发的第一步。")]),t._v(" "),e("h3",{attrs:{id:"环境部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境部署"}},[t._v("#")]),t._v(" 环境部署")]),t._v(" "),e("p",[t._v("环境部署可以说简单也可以说复杂，实际上取决于自己的需求。本文中介绍的是 Gradle Wrapper 和 Visual Studio Code 来部署针对于 Minecraft 服务端插件的开发环境，也有例如 IntelliJ IDEA 的 IDE 解决方案。")]),t._v(" "),e("h4",{attrs:{id:"_1-java-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-环境"}},[t._v("#")]),t._v(" 1. Java 环境")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Ubuntu 若要安装 Java（推荐 OpenJDK）可直接在终端执行指令")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openjdk-版本-jdk-headless "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e.g. openjdk-11-jdk-headless")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# headless 代表没有图形界面相关支持，适用于命令行系统")]),t._v("\n")])])])]),t._v(" "),e("p",[t._v("Java 是 Minecraft 的基础，也是插件的基础。要安装 Java，请先到"),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("下载 Java 的安装程序。请确保下载到的是 JDK（Java Development Kit，Java 开发包）而不是 JRE（Java Runtime Environment，Java 运行时环境），后者只能运行 Java 程序而不能用来编写。")]),t._v(" "),e("p",[t._v("在开发过程中，我们要了解的关于 Java 本体的只有一个参数，就是它的"),e("strong",[t._v("发行版本")]),t._v("。关于平台版本，作为普通开发者，我们只使用 Java SE（Standard Edition 标准版），而发行版本要依据实际情况而定。通常我们接触到的发行版本有三个，Java 8、Java 11 和 Java 16。通过下表你可以了解到这三个版本之间的区别以及在开发过程中的特点。")]),t._v(" "),e("p",[e("c",[t._v("表 1.1-2")])],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("版本")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://help.minecraft.net/hc/en-us/articles/360035131371-Minecraft-Java-Edition-System-Requirements-",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 1.12.2 开始"),e("OutboundLink")],1),t._v("，Minecraft 要求的最低版本 Java 为 Java 8。目前许多插件的编写仍然可以使用 Java 8 来完成。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Java 11 是一个 LTS（Long Term Support，长期支持）版本，之前是 Java 8。Java 11 提供了很多 8 没有的特性，同样可以用来运行 Minecraft 客户端和服务端。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("从 1.17 开始，Minecraft 要求的最低 Java 版本为 Java 16，插件从此也必须至少使用 Java 16 来编写。")])])])])]),t._v(" "),e("p",[t._v("在 Minecraft 本体支持的前提下，不同的 Java 版本之间最主要的区别是其提供的 Java 本体方法不一样。例如 Java 11 加入了 "),e("code",[t._v("String.isBlank()")]),t._v(" 用来判断一个字符串是否为空，这在之前的 Java 版本中均无法使用。如果你用不到这些 API，则可以随性选择。")]),t._v(" "),e("p",[t._v("下载完安装程序后安装即可。安装完毕后，在命令行中键入 "),e("code",[t._v("java --version")]),t._v("（Java 8 请使用 "),e("code",[t._v("java -v")]),t._v("）。如果出现版本号，代表安装成功。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/07/31/IK29V31M6btunrd.png",alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如果显示找不到 "),e("code",[t._v("java")]),t._v(" 这个指令，则有可能是环境变量出现问题。")]),t._v(" "),e("p",[t._v("在命令行或者 "),e("kbd",[t._v("Win")]),t._v("+"),e("kbd",[t._v("R")]),t._v(" 弹出的运行窗口键入执行")]),t._v(" "),e("div",{staticClass:"language-batch extra-class"},[e("pre",{pre:!0,attrs:{class:"language-batch"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rundll32")]),t._v(" sysdm.cpl,EditEnvironmentVariables")]),t._v("\n")])])]),e("p",[t._v("可快速打开环境变量控制面板。接下来编辑环境变量 "),e("code",[t._v("Path")]),t._v("，添加一个项指向 "),e("code",[t._v("java.exe")]),t._v(" 所在位置即可。")]),t._v(" "),e("p",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://i.loli.net/2021/07/31/UQk6H8BRdbTh94q.png"}})]),t._v(" "),e("p",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://i.loli.net/2021/07/31/wXsHTkUWBKpg74l.png"}})])]),t._v(" "),e("h4",{attrs:{id:"_2-开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-开发环境"}},[t._v("#")]),t._v(" 2. 开发环境")]),t._v(" "),e("p",[t._v("Java 安装好了以后只是奠定了基础，我们还需要搭建我们日常写代码的地方。一个插件需要写代码、测试、编译、发布，这个地方应当满足我们这些需求。")]),t._v(" "),e("p",[t._v("首先，我们要找到一个写代码的地方，也就是编辑器。在本文我们使用 Visual Studio Code（简称 VSC）。如果对 IntelliJ IDEA 感兴趣，可以转到"),e("a",{attrs:{href:"https://github.com/guobinhit/intellij-idea-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇教程"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("下载和安装 Visual Studio Code 就不多解释，官网链接为 "),e("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com"),e("OutboundLink")],1),t._v("。安装以后打开，在拓展程序里面安装 Java 相关插件（这里的「插件」是用来拓展 VSC 功能的）。本文推荐使用的插件是 "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=redhat.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Red Hat 的 Language Support for Java(TM)"),e("OutboundLink")],1),t._v("，直接在拓展程序里搜索 "),e("code",[t._v("java")]),t._v(" 即可找到它。")]),t._v(" "),e("p",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://i.loli.net/2021/07/31/ZUyhvlk4gf8EiVq.png"}})]),t._v(" "),e("p",[t._v("安装好以后，基本上不需要设置。只要之前的 Java 安装没有出现问题，开发环境就已经可以算作搭建完毕。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Visual Studio Code 能提供的功能远远少于 IntelliJ IDEA 等专业 IDE，但是对于学习代码来说却显得十分轻量。")]),t._v(" "),e("p",[t._v("不同的人可以根据自己的需求来选择不同的 IDE，如果只是写插件用作学习、小作品而不牵涉大项目时，VSC 也是可以接受的。IntelliJ IDEA 的学习成本稍高，但并不属于劝退类型，且大多数特性基本上用不到。")])]),t._v(" "),e("h4",{attrs:{id:"_3-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目"}},[t._v("#")]),t._v(" 3. 项目")]),t._v(" "),e("p",[t._v("接下来我们要创建我们的代码存放地。在一个 Java 项目中，一个项目的结构是十分重要的。它相当于一个模板，以后所有的项目基本上均按照该模板或者与该模板相似的结构来组织（本文只是示例，不一定要按照这样来）。一个 Java 项目至少要含有一个 "),e("code",[t._v("src")]),t._v(" 目录，其内部为包路径形成的结构以及在特定位置放置的源代码和相关文件，在后文会详细解释。但只有 "),e("code",[t._v("src")]),t._v(" 是远远不够的，下文为你介绍了一个 Gradle 项目的基本结构。")]),t._v(" "),e("p",[t._v("新建一个文件夹，叫做 "),e("code",[t._v("my-plugin")]),t._v("。在这个文件夹里，我们应当有如下结构")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("my-plugin\n│  build.gradle\n│  settings.gradle\n│  gradlew\n│  gradlew.bat\n│  settings.gradle\n├─.gradle\n├─gradle\n│  └─wrapper\n└─src\n    └─main\n        ├─java\n        └─resources\n")])])]),e("p",[t._v("下表解释了每个文件夹、文件的意义和作用。")]),t._v(" "),e("p",[e("c",[t._v("表 1.1-3")])],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("文件或文件夹")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("build.gradle")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用于指定该项目的构建信息，例如该项目的版本、兼容性等。最重要的是，该文件可以用来添加"),e("strong",[t._v("依赖")]),t._v("。API 本身也是一种依赖，因此该文件不可或缺")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("settings.gradle")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用于配置项目，功能不大")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("gradlew")]),t._v(" 和 "),e("code",[t._v("gradlew.bat")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用来调用 gradle 本体的两个脚本，功能完全相同，支持的系统有别。没有加 "),e("code",[t._v(".bat")]),t._v(" 的用于 bash，加了 "),e("code",[t._v(".bat")]),t._v(" 的用于 Windows 的 cmd")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".gradle")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用于存放 gradle 相关文件，如不同版本的 gradle 等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("gradle")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用于存放 gradle 包装器 "),e("code",[t._v("gradle-wrapper")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("src")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("项目所有代码以及相关文件的存放地")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("src/main")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主程序代码以及相关文件的存放地。我们在开发插件时必须将代码放在 "),e("code",[t._v("main")]),t._v(" 文件夹内")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("src/main/java")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主程序代码的存放地。其内部存在一个嵌套的目录，目录的结构反映了"),e("strong",[t._v("包名")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("src/main/resources")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主程序相关文件的存放地。该文件夹内必须包含一个 "),e("code",[t._v("plugin.yml")]),t._v(" 用于声明该插件本身的一些信息，如版本、指令、权限等")])])])]),t._v(" "),e("p",[t._v("以下是一些基本问题的解释。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Gradle 是什么？它有什么作用吗？")]),t._v(" Gradle 是一个"),e("strong",[t._v("包管理程序")]),t._v("，你可以通俗地认为它是用来管理你项目本身的编译（构建）和发布事项，同时提供一个将其它需要的依赖引入本地项目的途径的第三方程序。除了 Gradle 以外还有 Maven 等，你也可以选择 Maven 作为包管理程序，它们的作用大同小异。本文仅介绍 Gradle。")]),t._v(" "),e("li",[e("strong",[t._v("Gradle Wrapper 又是什么？Gradle 不需要下载安装就可以使用吗？")]),t._v(" Gradle 本身更新的很频繁，且对外的接口经常改，为了方便使用，出现了 Wrapper（包装器）的概念。包装器对 Gradle 进行包装，包装的结果就是一个具有统一调用方式的程序，这样就可以有效避免 Gradle 本身迭代过快造成的不便。Gradle Wrapper 在我们的项目中起到的作用是调用 Gradle 本体进行构建等操作。Gradle 可以"),e("a",{attrs:{href:"https://gradle.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("，也可以直接通过文件来调用 Gradle Wrapper，本文考虑后者。")]),t._v(" "),e("li",[e("strong",[t._v("依赖是什么？")]),t._v(" 插件作为一个 Java 应用程序，包含其本身的一些特点。我们一般把我们自己在本项目中写的代码称为本地代码，任何非本地代码均为依赖。在编写过程中如果需要引用别人（或者自己其它项目）的代码功能，按照一般的思路，需要将它先下载到本地，放入我们的项目中，再进行导入，这是很麻烦且不优雅的，在更新迭代的时候也会出现一些问题。包管理程序提供了优雅的解决方式，网上的一些平台（如 "),e("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MVN Repository"),e("OutboundLink")],1),t._v("）让开发者们把自己的「作品」发在上面，如果有人有需要则可以直接通过一个链接将其作为"),e("strong",[t._v("依赖")]),t._v("通过包管理程序导入自己的项目里。Bukkit 类 API 均是外部的代码，因而我们必须要把它作为依赖「导入」，才能正常编写和调用它的内容。")]),t._v(" "),e("li",[e("strong",[t._v("包名是什么？")]),t._v(" 这是 Java 的知识。通俗来讲，如果你想要写一个 Java 程序，它必须有自己的包名。如果只是自己写，包名则可以随便定。例如 "),e("code",[t._v("animal")]),t._v("、"),e("code",[t._v("animal.mammal")]),t._v("。但是对于插件这种一般都会发布到外界的项目来说，为了互相区分，包名一般由域名+本地包名组成。域名用于将自己的项目与他人的隔开。例如如果我自己的网站是 "),e("code",[t._v("subilan.win")]),t._v("，我写了程序叫做 PerfectApplication，经过组合它的包名就是 "),e("code",[t._v("win.subilan.PerfectApplication")]),t._v("，对应的目录结构就是 "),e("code",[t._v("win/subilan/PerfectApplication/")]),t._v("，放在本项目中，我的代码就应该全部放在 "),e("code",[t._v("src/main/java/win/subilan/PerfectApplication")]),t._v(" 下面。当然，包名是自由的，这和你有没有自己的网站没有必然联系，但域名依然很重要，你也可以自己创造一个域名。例如很有可能有另外一个人也写了一个 PerfectApplication，如果彼此拥有不一样的域名，就不会产生冲突。")]),t._v(" "),e("li",[e("strong",[t._v("我该从哪里搞到这些我没有的文件？")]),t._v(" 对于 gradle 一系列的文件，如果你对 gradle 不甚了解，我建议你直接从"),e("a",{attrs:{href:"#"}},[t._v("这里")]),t._v("下载，然后复制到你的项目里面。如果你对 gradle 有了解或者有意向学习，请前往"),e("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("查看相关内容，有关 Gradle Wrapper 的文档在"),e("a",{attrs:{href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。对于目录，需要自己创建。你也可以通过"),e("a",{attrs:{href:"#"}},[t._v("这个小程序")]),t._v("来帮助你创建。")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("上文提供的直接下载链接指向的是我一直使用的版本，它们并不支持 Java 16 的开发。")])]),t._v(" "),e("p",[t._v("接下来介绍 "),e("code",[t._v("plugin.yml")]),t._v("、"),e("code",[t._v("build.gradle")]),t._v(" 和 "),e("code",[t._v("settings.gradle")]),t._v("。这些文件共同决定了整个项目的基本性质。先说最简单的 "),e("code",[t._v("settings.gradle")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("rootProject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'项目名称'")]),t._v("\n")])])]),e("p",[t._v("只有这一行内容。填写你的项目名称即可。如需了解更多可以放在这个文件里面的项目，可以查看"),e("a",{attrs:{href:"https://docs.gradle.org/current/userguide/build_lifecycle.html#sec:settings_file",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("对于 "),e("code",[t._v("build.gradle")]),t._v("，请先参考以下结构和注解。")]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("plugins "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ngroup "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.example'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包前面的域名部分")]),t._v("\nversion "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0.0'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目的版本")]),t._v("\next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minecraftVersion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.16.5'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个变量，填当前插件所使用的 API 对应的版本。")]),t._v("\nmainClassName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.example.MyPlugin.Main'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主类地址。前面的 com.example.MyPlugin 是包名，Main 是类名")]),t._v("\n\njar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    manifest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        attributes "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Main-Class"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("mainClassName")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里引用了上面的变量，用来指定主类。")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    from "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        configurations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtimeClasspath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" it"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zipTree")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nsourceCompatibility "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码的兼容版本（Java）")]),t._v("\n\nrepositories "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里写的都是仓库的地址，仓库就是上文中所说的「平台」。这里相当于是在引入这些仓库")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    maven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Spigot'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://hub.spigotmc.org/nexus/content/repositories/snapshots/'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个就是 Spigot 自己的仓库，引入以后才能获取到 Spigot API")]),t._v("\n    maven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sonatype'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://oss.sonatype.org/content/groups/public'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndependencies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    compileOnly "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"org.spigotmc:spigot-api:'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("minecraftVersion")]),t._v('-R0.1-SNAPSHOT"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入 Spigot API 相应版本作为依赖。注意此处用到了上面的版本变量")]),t._v("\n    testImplementation "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit:junit:4.13'")]),t._v("\n    testImplementation "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.google.code.findbugs:jsr305:3.0.2'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntasks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JavaCompile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定编译时的编码")]),t._v("\n    options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encoding "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"UTF-8"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("突出的两行如果出现问题，将导致插件无法开发，因为 API 没有被正常导入。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("实际上 "),e("code",[t._v("build.gradle")]),t._v(" 和 "),e("code",[t._v("settings.gradle")]),t._v(" 都是用一种叫做 Groovy 的语言写的，相当于比较随意的 Java。")])]),t._v(" "),e("p",[e("code",[t._v("build.gradle")]),t._v(" 内需要着重掌握的地方，只有 "),e("code",[t._v("dependencies")]),t._v(" 和 "),e("code",[t._v("repository")]),t._v(" 环节和开头的 "),e("code",[t._v("group")]),t._v("、"),e("code",[t._v("version")]),t._v(" 等量。若在编写插件时需要引入依赖，通常的流程是找到依赖的发布地址然后加入到 "),e("code",[t._v("dependencies")]),t._v(" 里面。以要加入 "),e("a",{attrs:{href:"https://github.com/neko-craft/NekoCommander",target:"_blank",rel:"noopener noreferrer"}},[t._v("NekoCommander"),e("OutboundLink")],1),t._v(" 为依赖为例，作者在 "),e("code",[t._v("README.md")]),t._v(" 里面写了如下内容")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/07/31/7qxCQ3T4gtSzXmM.png",alt:""}})]),t._v(" "),e("p",[t._v("意思是让你到 "),e("code",[t._v("build.gradle")]),t._v(" 的相应部分添加相关内容。添加完毕以后，等待片刻（或者重启 VSC 的窗口，"),e("kbd",[t._v("Ctrl")]),t._v("+"),e("kbd",[t._v("Shift")]),t._v("+"),e("kbd",[t._v("P")]),t._v("，输入 Reload Window 后 "),e("kbd",[t._v("enter")]),t._v("），项目中即可直接 "),e("code",[t._v("import")]),t._v(" 相关包。这就完成了依赖的导入，大部分依赖的导入流程均是如此，十分快速。")]),t._v(" "),e("p",[t._v("关于 "),e("code",[t._v("plugin.yml")]),t._v("，请参考以下结构和注解")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyPlugin "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的名称")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.example.MyPlugin.Main "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的主类地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Myself "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的作者，如果有多个可以写成 [A, B, C, ...]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api-version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.16"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件所使用的 API 版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("softdepend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("website")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的指令")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("myplugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指令名称")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aliases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指令别名，此时 /my 和 /myplugin 等价")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Myplugin command "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指令介绍")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permission")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myplugin.command "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指令对应的权限")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permission-message")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You do not have the permission to use the command."')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有权限时要显示的信息")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("usage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" The command is invalid or you don't have the permission to use it. "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指令的用法信息")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 插件的权限")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("myplugin.use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 权限名称")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认给予所有玩家")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("myplugin.admin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" op "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认给予 OP 玩家")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("myplugin.never")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认不给予玩家")]),t._v("\n")])])]),e("p",[t._v("该文件内的信息决定了插件在服务端内的最终表现。如果没有正常填写，无论其它文件是否正常填写，服务端均无法处理。例如如果主类填写错误，那么服务端将无法 enable 该插件。服务端内显示的该插件的版本号也是由该文件所控制。有关 "),e("code",[t._v("plugin.yml")]),t._v(" 完整的解释，可以查看 "),e("a",{attrs:{href:"https://www.spigotmc.org/wiki/plugin-yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spigot 官方 Wiki"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("以上就是环境部署部分。")]),t._v(" "),e("h3",{attrs:{id:"插件编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件编写"}},[t._v("#")]),t._v(" 插件编写")])])}),[],!1,null,null,null);a.default=n.exports}}]);