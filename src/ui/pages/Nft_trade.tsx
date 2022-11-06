import { BasePage, page } from "./BasePage";
import { Tabs } from 'antd';
import {
   LeftOutlined,
   RightOutlined,
   DownOutlined
 } from '@ant-design/icons';

@page("Nft_trade")
export class   Nft_trade   extends BasePage {
  protected webContent() {
    return <div className="Nft_trade_content" >
        <div className="Nft_trade_banner" >
            <img   className="Nft_trade_banner_logo" src={require("../../assets/img/logo.png")} alt="" />
            <div className="Nft_trade_banner_name" >Axie</div>
        </div> 
      <div  className="Nft_trade_banner_title" >
            <div className="Nft_trade_banner_Category"  >
                <div>Category</div> 
                <div>7</div> 
              </div>
            <div className="Nft_trade_banner_Listings" >
                <div>Listings</div> 
                <div>7</div> 
            </div>

            <div className="Nft_trade_banner_TVL" >
                <div>Offer TVL</div> 
                <div>
                <img src="" alt="" />
                  11.686
                </div> 
              </div>
            <div className="Nft_trade_banner_Volume" >
                <div>Volume</div> 
                <div>
                <img src="" alt="" />
                  11.686
                </div> 
            </div>
      </div>

      <div className="Nft_trade_address_td" >
        <div className="Nft_trade_address" >
           <div>0xED5AF388653567Af2F388E6224dC7C4b3241C544</div>  
           <img  className="Nft_trade_copy"  src={require("../../assets/img/copy.png")}  alt=""  />
        </div>
        <div  className="share-logo" >
          <img  className="share-logo-img" src={require("../../assets/img/logo-etherscan.png")}  alt="" />
          <img  className="share-logo-img" src={require("../../assets/img/web.png")}  alt="" />
          <img  className="share-logo-img" src={require("../../assets/img/discode.png")}  alt="" />
          <img  className="share-logo-img" src={require("../../assets/img/email.png")}  alt="" />
          <img  className="share-logo-img" src={require("../../assets/img/tg_r.png")}  alt="" />
        </div>
      </div>
      <div  className="Nft_trade_Maker" >
          Maker Collections Offer
      </div>
      <div className="Nft_trade_tabs"  >
        <div className="Nft_trade_tabs_td" >
        <div className="Nft_trade_tab Nft_trade_tab_active" >
                Buy
                <div className="Nft_trade_tabs_tag">12</div>
          </div>
          <div className="Nft_trade_tab" >
          Sell
          </div>
          <div className="Nft_trade_tab" >
          Swap
          </div>
          <div className="Nft_trade_tab" >
          Actiyity
          </div>
        </div>
          
      </div>

      <div className="Nft_trade_nft_list"  >
          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>

          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>


          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>


          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>


          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>

          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>

          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>

          <div className="Nft_trade_nft_list_item" >
                <div className="Nft_trade_nft_list_item_img_box" >
                  <img   className="Nft_trade_nft_list_item_img" src={require("../../assets/img/nft1.png")}   alt="" />
                </div>
                <div className="Nft_trade_nft_list_item_id" > #7073 </div>
                <div className="Nft_trade_nft_list_item_name" > Axie #7073 </div>
                <div className="Nft_trade_nft_price_items"  >
                    <div>Items 10</div>
                    <img  className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                   <div>46.686</div>
                </div>
          </div>

          
      </div>



    
    </div>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
