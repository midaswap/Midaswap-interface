
const mobileAgents = ["Android", "iPhone", "iPad", "iPod", "Symbian"];

let userAgent = navigator.userAgent;

export const Common = {
	 isMobilex: mobileAgents.some(ag => userAgent.includes(ag)),
	isMobile: false,
	toDiscord() {
		window.open('https://discord.gg/yxNhMAQ5XG', '_block');
	},
	toTwitter() {
		window.open('https://twitter.com/impactopia_net', '_block');
	},
	closeNavigationTab() {
	// 	const el = document.querySelector('.nav-dropdown') as HTMLElement;
    // const navigation = document.querySelector('#navigation') as HTMLElement;
    // el.style.display = 'none';
    // navigation.style.borderColor = '#494951';
	}

}
