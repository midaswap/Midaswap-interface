export function line2Hump(str: string) {
	return str.replace(/\-(\w)/g,
		(all, letter) => letter.toUpperCase());
}
export function hump2Line(str: string) {
	return str.replace(/([A-Z])/g,"-$1")
		.toLowerCase().substring(1);
}
