import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { useParams, Link } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { Network, Alchemy } from 'alchemy-sdk';
import copy from 'copy-to-clipboard';

import {
  ConnectSelectors,
} from "../../slices/ConnectSlice";

import {
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';


export function CNft_trade() {
  const [contractAddress, setContractAddress] = useState("0x4AD9607e706e99Bc6E4D5FDF72f322aa26730300");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector(ConnectSelectors.isConnected);
  const { address, chainId } = useAppSelector(ConnectSelectors.userData);
  const [checkLabel, setCheckLabel] = useState("Buy");
  const [myNfts, setMyNfts] = useState([] as Array<any>);
  const [buyNftList, setBuyNftList] = useState([] as Array<any>);
  const [sellNftList, setSellNftList] = useState([] as Array<any>);
  const [nftList, setNftList] = useState([] as Array<any>);

  const params = useParams();

  function switckLabel(tabName: string) {
    setCheckLabel(tabName);
  }

  function copyText(val: any){
    copy(val);
  }

  function addNft(item: any) {
    let rel = true;
    for (let index = 0; index < buyNftList.length; index++) {
      let nft = buyNftList[index];
      if (nft.tokenId == item.tokenId) {
        rel = false;
      }
    }
    if (rel) {
      let newArr = [] as Array<any>;
      for (let index = 0; index < buyNftList.length; index++) {
        let nft = buyNftList[index];
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = nft.name;
        data.tokenUrl = nft.tokenUrl;
        data.tokenId = nft.tokenId
        newArr.push(data);
      }
      newArr.push(item);
      setBuyNftList(newArr);
    }
    setOpen(true);
  }

  function addSellNft(item: any) {
    let rel = true;
    for (let index = 0; index < sellNftList.length; index++) {
      let nft = sellNftList[index];
      if (nft.tokenId == item.tokenId) {
        rel = false;
      }
    }
    if (rel) {
      let newArr = [] as Array<any>;
      for (let index = 0; index < sellNftList.length; index++) {
        let nft = sellNftList[index];
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = nft.name;
        data.tokenUrl = nft.tokenUrl;
        data.tokenId = nft.tokenId
        newArr.push(data);
      }
      newArr.push(item);
      setSellNftList(newArr);
    }
    setOpen(true);
  }

  function clearBuy() {
    setBuyNftList([] as Array<any>);
  }

  function clearSell(){
    setSellNftList([] as Array<any>);
  }

  function clearBuySingle(tokenId: any) {
    let newArr = [] as Array<any>;
    for (let index = 0; index < buyNftList.length; index++) {
      let nft = buyNftList[index];
      if (nft.tokenId != tokenId) {
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = nft.name;
        data.tokenUrl = nft.tokenUrl;
        data.tokenId = nft.tokenId
        newArr.push(data);
      }
    }
    setBuyNftList(newArr);
  }

  function clearSellSingle(tokenId: any) {
    let newArr = [] as Array<any>;
    for (let index = 0; index < sellNftList.length; index++) {
      let nft = sellNftList[index];
      if (nft.tokenId != tokenId) {
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = nft.name;
        data.tokenUrl = nft.tokenUrl;
        data.tokenId = nft.tokenId
        newArr.push(data);
      }
    }
    setSellNftList(newArr);
  }

  async function getNftsForContract() {
    const settings = {
      apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
      network: Network.MATIC_MUMBAI,
    };
    const alchemy = new Alchemy(settings);
    let e = await alchemy.nft.getNftsForOwner(contractAddress);
    let newArr = [] as Array<any>;
    for (let index = 0; index < e.ownedNfts.length; index++) {
      let item = e.ownedNfts[index];
      if (item.contract.address == "0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F".toLowerCase()) {
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = item.contract.name;
        data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
        data.tokenId = item.tokenId
        newArr.push(data);
      }
    }
    setNftList(newArr);
  }

  async function getNftsForOwner() {
    if (!address) {
      return;
    }
    const settings = {
      apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
      network: Network.MATIC_MUMBAI,
    };
    const alchemy = new Alchemy(settings);
    let e = await alchemy.nft.getNftsForOwner(address);
    let newArr = [] as Array<any>;
    for (let index = 0; index < e.ownedNfts.length; index++) {
      let item = e.ownedNfts[index];
      if (item.contract.address == "0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F".toLowerCase()) {
        let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
        data.name = item.contract.name;
        data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
        data.tokenId = item.tokenId
        newArr.push(data);
      }
    }
    setMyNfts(newArr);
  }

  useEffect(() => {
    getNftsForContract();
    getNftsForOwner();
  }, [address, dispatch]);


  return <div className="Nft_trade_content" >
    <div className="Nft_trade_banner" >
      <img className="Nft_trade_banner_logo" src={require("../../assets/img/logo_r.png")} alt="" />
      <div className="Nft_trade_banner_name" >Azuki</div>
    </div>
    <div className="Nft_trade_banner_title" >
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
        <div>0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F</div>
        <img className="Nft_trade_copy" src={require("../../assets/img/copy.png")} alt="" onClick={() => { copyText("0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F") }}/>
      </div>
      <div className="share-logo" >
        <img className="share-logo-img" src={require("../../assets/img/logo-etherscan.png")} alt="" />
        <img className="share-logo-img" src={require("../../assets/img/web.png")} alt="" />
        <img className="share-logo-img" src={require("../../assets/img/discode.png")} alt="" />
        <img className="share-logo-img" src={require("../../assets/img/email.png")} alt="" />
        <img className="share-logo-img" src={require("../../assets/img/tg_r.png")} alt="" />
      </div>
    </div>
    <div className="Nft_trade_tabs"  >
      <div className="Nft_trade_tabs_td" >
        <div className={checkLabel == 'Buy' ? "Nft_trade_tab Nft_trade_tab_active" : "Nft_trade_tab"} onClick={() => { switckLabel('Buy') }}>
          Buy
          <div className="Nft_trade_tabs_tag">{nftList.length}</div>
        </div>
        <div className={checkLabel == 'Sell' ? "Nft_trade_tab Nft_trade_tab_active" : "Nft_trade_tab"} onClick={() => { switckLabel('Sell') }}>
          Sell
          <div className="Nft_trade_tabs_tag">{myNfts.length}</div>
        </div>

        <Link to={'/Swap'} state={{ address: '0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F' }}   >
          <div className="Nft_trade_tab" >
            Swap
          </div>
        </Link>



      </div>
    </div>
    {checkLabel == 'Buy' ?
      < div className="Nft_trade_nft_list"  >
        {nftList.length > 0 ?
          nftList.map((item, i) => {
            return <div key={i} onClick={() => { addNft(item) }} className="Nft_trade_nft_list_item" >
              <div className="Nft_trade_nft_list_item_img_box" >
                <img className="Nft_trade_nft_list_item_img" src={item.tokenUrl} alt="" />
              </div>
              <div className="Nft_trade_nft_list_item_id" > #{item.tokenId} </div>
              <div className="Nft_trade_nft_list_item_name" > {item.name} #{item.tokenId} </div>
              <div className="Nft_trade_nft_price_items"  >
                <div>Items 10</div>
                <img className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                <div>46.686</div>
              </div>
            </div>
          })
          :
          <div></div>
        }
      </div>
      :
      < div className="Nft_trade_nft_list"  >
        {myNfts.length > 0 ?
          myNfts.map((item, i) => {
            return <div key={i} onClick={() => { addSellNft(item) }} className="Nft_trade_nft_list_item" >
              <div className="Nft_trade_nft_list_item_img_box" >
                <img className="Nft_trade_nft_list_item_img" src={item.tokenUrl} alt="" />
              </div>
              <div className="Nft_trade_nft_list_item_id" > #{item.tokenId} </div>
              <div className="Nft_trade_nft_list_item_name" > {item.name} #{item.tokenId} </div>
              <div className="Nft_trade_nft_price_items"  >
                <div>Items 10</div>
                <img className="Nft_trade_nft_price_items_eth_img" src={require("../../assets/img/eth.png")} alt="" />
                <div>46.686</div>
              </div>
            </div>
          })
          :
          <div></div>
        }
      </div>
    }

    {checkLabel == 'Buy' ?
      <Drawer headerStyle={{ backgroundColor: "#141414", color: "wheat" }} bodyStyle={{ backgroundColor: "#141414" }} open={open} className="nft_drawer" mask={false} width={'26.0521vw'} closable={true} onClose={() => { setOpen(false) }}>
        <div className="nft_trade-add-your-nfts" >
          <div className="nft_trade-add-your-nfts-setting"  >
            <img className="nft_trade-add-setting-img" src={require("../../assets/img/setting.png")} alt="" />
          </div>
          <div className="nft_trade-add-your-nfts-text" >
            <LeftOutlined />
            <div className="nft_trade-add-your-nfts-text-Your"  >Buy {buyNftList.length}NFTs</div>
            <div className="nft_trade-add-your-nfts-text-Clear" onClick={() => { clearBuy() }}>Clear</div>
          </div>
          <div className="flex-center-width-full" >
            <div className="nft_trade-add-your-tokens" >
              Buy Total:
            </div>
          </div>
          <div className="nft_trade-add-your-nft-list" >
            {buyNftList.length > 0 ?
              buyNftList.map((item, i) => {
                return <div key={i} className="nft_trade-add-your-nft-list-item" >
                  <img className="nft_trade-add-your-nft-list-item-img" src={item.tokenUrl} alt="" />
                  <div className="nft_trade-add-your-nft-list-item-name" >
                    <div className="nft_trade-add-your-nft-list-item-name-text">{item.name} </div>
                    <div className="nft_trade-add-your-nft-list-item-id-text" >{item.name} #{item.tokenId}</div>
                  </div>
                  <img className="nft_trade-add-x-img" src={require("../../assets/img/x.png")} alt="" onClick={() => { clearBuySingle(item.tokenId) }} />
                </div>
              })
              :
              <div></div>
            }
          </div>

          <div className="nft_trade-add-your-nft-cost" >
            Net Cost:
          </div>
          <div className="flex-center-width-full" >

            <div className="nft_trade-add-your-nft-but" >
              BUY
            </div>
          </div>
        </div>
      </Drawer>
      :
      <Drawer headerStyle={{ backgroundColor: "#141414", color: "wheat" }} bodyStyle={{ backgroundColor: "#141414" }} open={open} className="nft_drawer" mask={false} width={'26.0521vw'} closable={true} onClose={() => { setOpen(false) }}>
        <div className="nft_trade-add-your-nfts" >
          <div className="nft_trade-add-your-nfts-setting"  >
            <img className="nft_trade-add-setting-img" src={require("../../assets/img/setting.png")} alt="" />
          </div>
          <div className="nft_trade-add-your-nfts-text" >
            <LeftOutlined />
            <div className="nft_trade-add-your-nfts-text-Your"  >Sell {sellNftList.length}NFTs</div>
            <div className="nft_trade-add-your-nfts-text-Clear" onClick={() => { clearSell() }}>Clear</div>
          </div>
          <div className="flex-center-width-full" >
            <div className="nft_trade-add-your-tokens" >
              Sell Total:
            </div>
          </div>
          <div className="nft_trade-add-your-nft-list" >
            {sellNftList.length > 0 ?
              sellNftList.map((item, i) => {
                return <div key={i} className="nft_trade-add-your-nft-list-item" >
                  <img className="nft_trade-add-your-nft-list-item-img" src={item.tokenUrl} alt="" />
                  <div className="nft_trade-add-your-nft-list-item-name" >
                    <div className="nft_trade-add-your-nft-list-item-name-text">{item.name} </div>
                    <div className="nft_trade-add-your-nft-list-item-id-text" >{item.name} #{item.tokenId}</div>
                  </div>
                  <img className="nft_trade-add-x-img" src={require("../../assets/img/x.png")} alt="" onClick={() => { clearSellSingle(item.tokenId) }} />
                </div>
              })
              :
              <div></div>
            }
          </div>

          <div className="nft_trade-add-your-nft-cost" >
            Net Cost:
          </div>
          <div className="flex-center-width-full" >

            <div className="nft_trade-add-your-nft-but" >
              SELL
            </div>
          </div>
        </div>
      </Drawer>
    }



  </div >

}
