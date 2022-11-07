import "./Navigation.css";
import "../css/common.css";
import { Constructor } from "../../utils/TypeUtils";
import { BasePage, getPageSetting } from "../pages/BasePage";
import { Common } from "../../app/Common";
import { Link } from 'react-router-dom'
import moreSvg from '../../assets/more.svg'
import { useEffect } from 'react'
import { Connector } from "./Connector";
import { Network, Alchemy } from 'alchemy-sdk';

import {
  DownOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import {
  TwitterShareButton,
  TwitterIcon,
  } from "react-share";

type NavItem = {
  name: string, clazz?: Constructor<BasePage>, page: string
}
const NavItems: NavItem[] = [
  {
    name: "Midaswap", page: '/'
  },
  {
    name: "Collections", page: '/Collections'
  },
  {
    name: "Swap",  page: '/Swap'
  },
  {
    name: "Pool", page: '/Pools'
  },
  {
    name: "Analytics",  page: '/Analytics'
  },
];

function jump(nav: NavItem) {
  toggleMenu();
  if (nav.page) {
  }

  if (!nav.clazz) return;
  const setting = getPageSetting(nav.clazz);

  let dom = document.getElementById(setting.id);
  dom?.scrollIntoView({ behavior: "smooth", block: "start" })
}

const Menu = {
  menu: "menu",
  opened: false
};
function toggleMenu() {
  Menu.opened = !Menu.opened;

  const menu = document.getElementById(Menu.menu);
  console.log("toggle", menu);
  if (menu) menu.className = Menu.opened ? "opened" : "";
}

const settings = {
  apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings); 




alchemy.nft.getNftsForContract('vitalik.eth').then(e=>{


});



export function Navigation() {
  // @ts-ignore
  const Web = <div id="navigation" mode="web">
    <div className="nav-content" >
          <div className="nav-left">
            <div className="nav-items">
              <Link to={'/'}><div className="nav-item nav-active" onClick={() => jump(NavItems[0])}>{NavItems[0].name}</div></Link>
              <Link to={'/Collections'}><div className="nav-item " onClick={() => jump(NavItems[1])}>{NavItems[1].name}</div></Link>
              <Link to={'/Swap'}><div className="nav-item " onClick={() => jump(NavItems[2])}>{NavItems[2].name}</div></Link>
              <Link to={'/Pools'}><div className="nav-item " onClick={() => jump(NavItems[3])}>{NavItems[3].name}</div></Link>
              {/* <Link to={'/NfPoolt'}><div className="nav-item " onClick={() => jump(NavItems[4])}>{NavItems[4].name}</div></Link> */}
            </div> 
          </div>
          
          <div  className="nav-search"  >
              <div>
                <input type="text" className="nav-search-input" placeholder="Search Collections " />
              </div>
              <img className="nav-search-img"  src={require("../../assets/img/search.png")}   alt="" />
          </div>
           <div  className="nav-token"  >
               <div className="token_text" >ETH</div>
               <img src={require("../../assets/img/eth.png")}   className="img-search" alt=""  />
            </div>

            <div  className="nav-token-select"  >
               <img src={require("../../assets/img/eth.png")}   className="img-search" alt=""  />
                <div  className="token-select-text" >Ethereum</div>
                <DownOutlined />
            </div>
             <Connector/>
             <div  className="nav-car" >
               <img src={require("../../assets/img/car.png")}   className="img-search" alt=""  />
             </div>
    </div>
  
  </div>

  // @ts-ignore
  const Mobile = <div id="navigation" mode="mobile">

  </div>

  useEffect(() => {
    const navItems = document.querySelector('.nav-items')?.querySelectorAll('.nav-item');
    navItems?.forEach((item) => {
      item.addEventListener('click', () => {
        navItems.forEach((itm,index) => {
            itm.className = 'nav-item ';
        })
        item.className = 'nav-item nav-active ';
      })
    })
  }, [])

  return Common.isMobile ? Mobile : Web
}
