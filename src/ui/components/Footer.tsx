import "./Footer.css"
import {Common} from "../../app/Common";
import { Link } from 'react-router-dom'
import {
TwitterShareButton,
TwitterIcon,
} from "react-share";

export function Footer() {
	// @ts-ignore
	const Web = <div id="footer"  mode="web"  >
		<div  className="footer" >
			<div className="footer-img"  >
				<img   onClick={Common.toTwitter}  className="img-tg img-marg" src={require("../../assets/img/tg.png")} />
				<img   onClick={Common.toDiscord}   className="img-tg img-marg" src={require("../../assets/img/discode.png")} />
				<img   onClick={Common.toGithup} className="img-tg img-marg" src={require("../../assets/img/email.png")} />
				<div  className="footer_Docs" >Docs</div>
			</div>
		</div>
	</div>

	// @ts-ignore
	const Mobile = <div id="footer" mode="mobile"></div>
	return Common.isMobile ? Mobile : Web
}

