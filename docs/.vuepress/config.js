module.exports = {
	title: 'Acetone',
	description: '以较快的方式了解 Minecraft 服务端插件开发',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于', link: '/about' }
		],
		sidebar: [createSidebarGroup('入门', 'intro')]
	},
	lastUpdated: '最后更新于',
	markdown: {
		plugins: ['footnote', 'sup', 'sub']
	},
	plugins: {
		'@vuepress/medium-zoom': {
			selector: '.theme-default-content :not(a) > img'
		}
	}
};

function createSidebarGroup(title, name) {
	return {
		title,
		collapsable: false,
		children: getSidebar(name)
	};
}

function getSidebar(name) {
	let sidebar = {
		intro: [
			['/content/1.1', '1.1 插件的概念'],
			['/content/1.2', '1.2 我们的第一个插件']
		]
	};
	return sidebar[name];
}
