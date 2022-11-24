
const mobileAgents = ["Android", "iPhone", "iPad", "iPod", "Symbian"];

let userAgent = navigator.userAgent;

export const Common = {
	 isMobilex: mobileAgents.some(ag => userAgent.includes(ag)),
	isMobile: false,
	toDiscord() {
		window.open('https://discord.gg/FNkFwBQNaT', '_block');
	},
	toTwitter() {
		window.open('https://twitter.com/Midaswap_', '_block');
	},
	toGithup() {
		window.open('https://github.com/midaswap', '_block');
	},
	toDocs() {
		window.open('https://midaswap.gitbook.io/untitled/', '_block');
	},
	closeNavigationTab() {
	}

}
