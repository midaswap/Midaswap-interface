import { BasePage, page } from "./BasePage";
import { Input } from 'antd';

import {
  DownOutlined
} from '@ant-design/icons';

@page("Swap")
export class Swap extends BasePage {
  protected webContent() {
    return <div className="Swap-content" >
            
            <div  className="swap-box" >
              <div className="swap-td"  >
                <div className="swap-flex-50-left" >Midaswap</div>
                <div  className="swap-flex-50-right" >
                  <img className="swap-setting" src={require("../../assets/img/setting.png")}  alt="" />
                </div>
              </div>
              <div className="swap-line"  >
              </div>


              <div className="swap-token-one"  >
                 <div className="swap-flex-50-left" >
                    <div className="swap-token-select" >
                        <img  className="swap-token-img"  src={require("../../assets/img/eth.png")} alt="" />
                        <div>ETH</div>
                        <DownOutlined />
                    </div>
                 </div>
                 <div  className="swap-flex-50-right" >
                    <Input  bordered={false} type="text" step={3} value={0.00} className="swap-input"  />
                </div>
              </div>



              <div className="swap-change"  >
                  <div className="swap-line"></div>
                  <div className="swap-change-img-bg" >
                    <img  className="swap-change-img"  src={require("../../assets/img/change.png")} alt="" />
                  </div>
              </div>


              <div className="swap-token-tow"  >
              <div className="swap-flex-50-left" >
                    <div className="swap-token-select" >
                        <img  className="swap-token-img"  src={require("../../assets/img/eth.png")} alt="" />
                        <div>ETH</div>
                        <DownOutlined />
                    </div>
                 </div>
                 <div  className="swap-flex-50-right" >
                    <Input  bordered={false} type="text" step={3} value={0.00} className="swap-input"  />
                </div>
              </div>

              

              <div className="swap-text"  >
                 Select Collegetions
              </div>


              <div className="swap-but"  >
                     Connect Wallet
              </div>

            </div>
    </div>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
