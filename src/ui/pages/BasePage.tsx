import React from "react";
import {Constructor, getMetaData} from "../../utils/TypeUtils";
import {hump2Line} from "../../utils/StringUtils";

import "../css/common.css";
import "./BasePage.css";
import {Common} from "../../app/Common";

export function page(cssName: string, id?: string) {
	return (clazz: Constructor<BasePage>) => {
		const setting = getPageSetting(clazz);
		setting.cssName = cssName;
		setting.id = id || hump2Line(cssName);
		// BasePage.pages.push(clazz);
	}
}

const PageSettingKey = "setting";
export function getPageSetting(type: Constructor<BasePage>) {
	return getMetaData(type, PageSettingKey, {
		cssName: "", id: ""
	})
}

export abstract class BasePage extends React.Component {

	protected get data(): any { return {} }

	protected abstract webContent(): JSX.Element;
	protected abstract mobileContent(): JSX.Element;

	protected get isMobile() { return Common.isMobile; }

	// @ts-ignore
	public get cssName() { return getPageSetting(this.constructor).cssName; }
	// @ts-ignore
	public get id() { return getPageSetting(this.constructor).id; }

	public render() {
		require(`./${this.cssName}.css`)
		return <div id={this.id} className="page" // @ts-ignore
								mode={this.isMobile ? "mobile" : "web"}> {
			this.isMobile ? this.mobileContent() : this.webContent()
		} </div>;
	}
}

export function playVideo(eOrId: any | string) {
	console.log("playVideo", eOrId);
	const isId = typeof eOrId == "string";
	let v = isId ? document.getElementById(eOrId) : eOrId.target;
	if (!v) return;

	const play = () => {
		v.currentTime = 0; v.play();
	}

	if (!isId && eOrId.type != "click")
		setTimeout(play, 3000);
	else play();
}
