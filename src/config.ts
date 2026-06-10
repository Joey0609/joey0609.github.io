import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Joey's Blog",
	subtitle: "Welcome to my personal blog!",
	lang: "en", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题色默认色相，范围 0 到 360。例如：红色: 0, 青色: 200, 蓝色: 250, 粉色: 345
		fixed: false, // 隐藏主题色选择器，访客无法更改
	},
	banner: {
		enable: false,
		src: "assets/images/Vulcan-2.jpg", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 相当于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的版权文字
			text: "", // 要显示的版权文字
			url: "", // （可选）指向原图或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅当深浅模式使用不同 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 的尺寸，仅当有不同尺寸的 favicon 时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/joey0609", // 内部链接不应包含基础路径，因为会自动添加
			external: true, // 显示外部链接图标，并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "Joey0609",
	bio: "Per aspera ad astra.寻此苦旅，终抵群星。",
	links: [
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:muzz2023@mails.jlu.edu.cn",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/joey0609",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）会被覆盖，请参阅 astro.config.mjs 文件
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
