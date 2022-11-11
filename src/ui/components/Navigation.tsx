import "./Navigation.css";
import "../css/common.css";
import { Constructor } from "../../utils/TypeUtils";
import { BasePage, getPageSetting } from "../pages/BasePage";
import { Common } from "../../app/Common";
import { Link } from 'react-router-dom'
import moreSvg from '../../assets/more.svg'
import { useEffect,useState } from 'react'
import { Connector } from "./Connector";

import {
  DownOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {Menu,Image,Input,Select,AutoComplete} from 'antd';


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
    name: "Overview",  page: '/Overview'
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

const CMenu = {
  menu: "menu",
  opened: false
};
function toggleMenu() {
  CMenu.opened = !CMenu.opened;

  const menu = document.getElementById(CMenu.menu);
  console.log("toggle", menu);
  if (menu) menu.className = CMenu.opened ? "opened" : "";
}


export function Navigation() {
  const { Option } = Select;
  const [changeToken, setChangeToken] = useState(false);



  // @ts-ignore
  const Web = <div id="navigation" mode="web">
    <div className="nav-content" >
          <div className="nav-left">
            <div className="nav-items">
              <Link to={'/'}><div className="nav-item nav-active" onClick={() => jump(NavItems[0])}>{NavItems[0].name}</div></Link>
              <Link to={'/Collections'}><div className="nav-item " onClick={() => jump(NavItems[1])}>{NavItems[1].name}</div></Link>
              <Link to={'/Swap'}><div className="nav-item " onClick={() => jump(NavItems[2])}>{NavItems[2].name}</div></Link>
              <Link to={'/Pools'}><div className="nav-item " onClick={() => jump(NavItems[3])}>{NavItems[3].name}</div></Link>
              <Link to={'/Overview'}><div className="nav-item " onClick={() => jump(NavItems[4])}>{NavItems[4].name}</div></Link>
            </div> 
          </div>
          
          <div  className="nav-search"  >
              <div>
              <Input.Group  >
                <AutoComplete
                  className="nav-search-input"
                  bordered={false}
                  placeholder="Search Collections "
                  options={[{ value: 'text 1' }, { value: 'text 2' }]}
                />
              </Input.Group>
                {/* <input type="text" className="nav-search-input" placeholder="Search Collections " /> */}
              </div>
              <img className="nav-search-img"  src={require("../../assets/img/search.png")}   alt="" />
          </div>
           <div    >
             {changeToken?
              <div  className="nav-token"   onClick={()=>{
                  setChangeToken(!changeToken);
              }} >
                <div className="token_text" >ETH</div>
               <img src={require("../../assets/img/eth.png")}   className="img-search" alt=""  /> 
              </div>:
              <div  className="nav-token"   onClick={()=>{
                setChangeToken(!changeToken);
            }} >
                   <img src={require("../../assets/img/usdc.png")}   className="img-search" alt=""  />
                   <div className="token_text" >USDC</div>
              </div>
            }

               
            </div>

            <div  className="nav-token-select"  >
                <img src={require("../../assets/img/eth.png")}   className="img-search" alt=""  />
                <Menu  theme="dark"  mode="horizontal" >
                <Menu.SubMenu key="SubMenu"  className="token-select-text"  title="Ethereum" >
                  <Menu.Item key="two" className=""  >
                    <div   className="Menuitem">
                    <img src={require("../../assets/img/eth.png")}   className="Icon_img-search" alt=""  />    Ethereum
                    </div>
                  </Menu.Item>
                  <Menu.Item key="three"  >
                  <div   className="Menuitem">
                    <img src={require("../../assets/img/polygon.png")}   className="Icon_img-search" alt=""  />    Polygon
                    </div>    
                  </Menu.Item>
                </Menu.SubMenu>
              </Menu>
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
