import {State, useAppDispatch, useAppSelector} from "../../app/Store";
import {useEffect,useState} from "react";
import {ChainId, ethereum, web3} from "../../app/Config";
import { useParams ,Link} from "react-router-dom";
import { Button, Drawer } from 'antd';


import {
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';

export function CNft_trade() {

  const [open, setOpen] = useState(false);


  const params = useParams();

  function addNft(){
     setOpen(true);
  }

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
<div className="Nft_trade_tabs"  >
  <div className="Nft_trade_tabs_td" >
  <div className="Nft_trade_tab Nft_trade_tab_active" >
          Buy
          <div className="Nft_trade_tabs_tag">12</div>
    </div>
    <div className="Nft_trade_tab" >
    Sell
    </div>
    
    <Link to={'/Swap'}   state={{ address: '0x1c08236D38ea33977981A9B66fCC4dB1724E5DD6' }}   >
    <div className="Nft_trade_tab" >
       Swap
     </div>
    </Link>
       

    
  </div>
</div>
<div className="Nft_trade_nft_list"  >
    <div  onClick={()=>{
      addNft()
    }} className="Nft_trade_nft_list_item" >
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

    <div  onClick={()=>{
      addNft()
    }} className="Nft_trade_nft_list_item" >
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


    <div   onClick={()=>{
      addNft()
    }} className="Nft_trade_nft_list_item" >
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


    <div  onClick={()=>{
       addNft()
    }} className="Nft_trade_nft_list_item" >
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


    <div  onClick={()=>{
        addNft()
    }} className="Nft_trade_nft_list_item" >
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

    <div  onClick={()=>{
       addNft()
    }}  className="Nft_trade_nft_list_item" >
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

    <div  onClick={()=>{
       addNft()
    }} className="Nft_trade_nft_list_item" >
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

    <div   onClick={()=>{
     addNft()
    }} className="Nft_trade_nft_list_item" >
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

    <Drawer headerStyle={{backgroundColor:"#141414",color:"wheat"}}  bodyStyle={{backgroundColor:"#141414"}}  className="nft_drawer"   mask={false}  width={'26.0521vw'} closable={true}  onClose={()=>{ setOpen(false)}} open={open}>
        <div className="nft_trade-add-your-nfts" >
              <div className="nft_trade-add-your-nfts-setting"  > 
                 <img   className="nft_trade-add-setting-img"  src={require("../../assets/img/setting.png")}  alt="" />
              </div>
              <div  className="nft_trade-add-your-nfts-text" > 
               <LeftOutlined />
               <div className="nft_trade-add-your-nfts-text-Your"  >Buy 1NFTs</div>
                <div className="nft_trade-add-your-nfts-text-Clear"  >Clear</div>
              </div>

              <div className="flex-center-width-full" >
                    <div className="nft_trade-add-your-tokens" >
                       Buy Total:
                    </div>
              </div>


              <div className="nft_trade-add-your-nft-list" >
                 <div  className="nft_trade-add-your-nft-list-item" >
                       <img  className="nft_trade-add-your-nft-list-item-img"   src={require("../../assets/img/nft.png")}  alt="" />
                       <div className="nft_trade-add-your-nft-list-item-name" >
                          <div className="nft_trade-add-your-nft-list-item-name-text">Azuki </div>
                          <div className="nft_trade-add-your-nft-list-item-id-text" >Azuki #7073</div>
                       </div>
                       <img className="nft_trade-add-x-img" src={require("../../assets/img/x.png")}   alt=""  />
                 </div>

                 <div  className="nft_trade-add-your-nft-list-item" >
                       <img  className="nft_trade-add-your-nft-list-item-img"   src={require("../../assets/img/nft.png")}  alt="" />
                       <div className="nft_trade-add-your-nft-list-item-name" >
                          <div className="nft_trade-add-your-nft-list-item-name-text">Azuki </div>
                          <div className="nft_trade-add-your-nft-list-item-id-text" >Azuki #7073</div>
                       </div>
                       <img className="nft_trade-add-x-img" src={require("../../assets/img/x.png")}   alt=""  />
                 </div>
              </div>

              <div className="nft_trade-add-your-nft-cost" >
              Net Cost:
              </div>
              <div className="flex-center-width-full" >

              <div  className="nft_trade-add-your-nft-but" >
                    BUY
              </div>
              </div>
        </div>
    </Drawer>


</div>

}