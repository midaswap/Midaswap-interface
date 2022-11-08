import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { useLocation } from "react-router-dom";
import { Network, Alchemy } from 'alchemy-sdk';
import { getErc20Contract, getErc721Contract, getUniswapV3Router, getTokenB } from "../../app/Contract";
import { Progress, message } from 'antd';
import { Modal, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

import {
   ConnectSelectors,
   ConnectTask,
   disconnect,
   SwitchTask,
   updateAddress,
   updateBalance,
   updateChainId
} from "../../slices/ConnectSlice";
import {
   LeftOutlined,
   RightOutlined,
   DownOutlined
} from '@ant-design/icons';
import create from "@ant-design/icons/lib/components/IconFont";
import { url } from "inspector";

interface PoolInfo {
   poolsAddress: any,
   nft_address: any,
   id: any,
   tokenA: any,
   tokenB: any,
   fractionNFTAddress: any
}


interface PoolOrder {
   nft_address: any,
   tokenB: any,
   tokenId: any,
   _amountA: any,
   _amountB: any,
   nftApprove: false,
   tokenBApprove: any,
   tokenAApprove: any
}


export function CPools_add() {
   const dispatch = useAppDispatch();
   const { state } = useLocation();
   let nftaddress = state.address;
   const [poolInfo, setPoolInfo] = useState({} as PoolInfo);
   const [poolOrder, setPoolOrder] = useState({} as PoolOrder);


   const [isModalOpen, setModalOpen] = useState(false);
   const { address, chainId } = useAppSelector(ConnectSelectors.userData);
   const [myNfts, setMyNfts] = useState([] as Array<any>);




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
         if (item.contract.address == nftaddress.toLowerCase()) {
            let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
            data.name = item.contract.name;
            data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
            data.tokenId = item.tokenId
            newArr.push(data);
         }
      }
      setMyNfts(newArr);
   }


   async function initSwap() {
      const uniswapV3Router = await getUniswapV3Router();
      let info = await uniswapV3Router.methods.getPoolInfo(nftaddress, "0xD5e240836E500a099D0504107432C7aC52C82cB8", 0).call();
      console.log(info);
      if (info.length > 0) {
         poolInfo.poolsAddress = info[0];
         poolInfo.nft_address = info[1];
         poolInfo.id = info[2];
         poolInfo.tokenA = info[3];
         poolInfo.tokenB = info[4];
         poolInfo.fractionNFTAddress = info[5];
         setPoolInfo(poolInfo);
         getErc20Approve();
         getErc721Approve();

      }
   }

   async function getErc20Approve() {
      const tokenBContract = await getErc20Contract(poolInfo.tokenB);
      poolOrder.tokenBApprove = await tokenBContract.methods.allowance(address, poolInfo.poolsAddress).call();
      const tokenAContract = await getErc20Contract(poolInfo.tokenA);
      poolOrder.tokenAApprove = await tokenAContract.methods.allowance(address, poolInfo.poolsAddress).call();
      setPoolOrder({ ...poolOrder });
   }

   async function getErc721Approve() {
      const contract = await getErc721Contract(poolInfo.nft_address);
      poolOrder.nftApprove = await contract.methods.isApprovedForAll(address, poolInfo.fractionNFTAddress).call();
      setPoolOrder({ ...poolOrder });
   }

   async function initOrder() {
      const contract = await getUniswapV3Router();
      poolOrder._amountA = web3.utils.toWei("1");
      poolOrder._amountB = await contract.methods.getTokenOut(poolInfo.poolsAddress, poolInfo.tokenB, web3.utils.toWei("1")).call();
      setPoolOrder({ ...poolOrder });
      console.log(poolOrder);
      console.log(poolInfo);
    }

   function fromWei(val: any) {
      return web3.utils.fromWei(val);
   }


   async function approveErc20(_address: any) {
      const contract = await getErc20Contract(_address);
      contract.methods.approve(poolInfo.poolsAddress, web3.utils.toWei("999999999")).send({
         from: address
      }).on('error', (error: any) => {
         message.error(error);
         getErc20Approve();
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
         getErc20Approve();
      })
   }

   async function approve721() {
      const contract = await getErc721Contract(poolInfo.nft_address);
      contract.methods.setApprovalForAll(poolInfo.fractionNFTAddress, true).send({
         from: address
      }).on('error', (error: any) => {
         message.error(error);
         getErc721Approve();
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
         getErc721Approve();
      })
   }


   async function addPool() {
      if (!poolOrder.tokenId) {
         message.error("Please select the NFT to be added");
         return;
      }
      const uniswapV3Router = await getUniswapV3Router();
      await uniswapV3Router.methods.addPool721(nftaddress, await getTokenB(), poolOrder.tokenId, web3.utils.toWei("1"), web3.utils.toWei("80")).send({
         from: address
      }).on('error', (error: any) => {
         message.error(error);
         initSwap();
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
         initSwap();
      })
   }

   async function createPool() {
      const uniswapV3Router = await getUniswapV3Router();
      let scale = web3.utils.toWei("80");
      await uniswapV3Router.methods.createPool(nftaddress, 0, getTokenB(), scale).send({
         from: address
      }).on('error', (error: any) => {
         message.error(error);
         initSwap();
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
         initSwap();
      })
   }

   const onChange = (e: any) => {
      if (!poolOrder.nftApprove) {
         approve721();
      }
      poolOrder.tokenId = e.target.value;
      setPoolOrder({ ...poolOrder });
      initOrder();
   }

   const text = poolInfo.poolsAddress ? <div onClick={addPool} >ADD POOL</div> : <div onClick={createPool}  >CREATE POOL</div>

   const text1 = poolOrder.tokenAApprove == '0' ? <div onClick={e => { approveErc20(poolInfo.tokenA) }}>Approve</div>
      : poolOrder.tokenBApprove == '0' ? <div onClick={e => { approveErc20(poolInfo.tokenB) }}>Approve</div> : text



   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(0);

   function initPrice() {
      setMinPrice(78);
      setMaxPrice(81);
   }

   function changePrice(type: any, orientation: any) {
      if (type == 'min') {
         if (orientation == 'add') {
            let price = minPrice + 1;
            if (maxPrice > price) {
               setMinPrice(price);
            }
         } else {
            setMinPrice(minPrice - 1);
         }
      } else {
         if (orientation == 'add') {
            setMaxPrice(maxPrice + 1);
         } else {
            let price = maxPrice - 1;
            if (minPrice < price) {
               setMaxPrice(price);
            }
         }
      }
   }

   useEffect(() => {
      if (address) {
         getNftsForOwner();
         initSwap();
      }
   }, [address, dispatch]);





   return <div className="pools-content" >
      <div className="pools-add" >
         <div className="pools-add-box" >
            <div className="pools-add-title" >
               <LeftOutlined />
               <div>Add Liquidityool</div>
               <img className="pools-add-setting-img" src={require("../../assets/img/setting.png")} alt="" />
            </div>
            <div className="pools-add-line" ></div>

            <div className="pools-add-pair" >
               <div className="pools-add-text" >Select Pair</div>
               <div className="pools-add-token-td" >
                  <div className="pools-add-token" >
                     <img className="pools-add-setting-img" src={require("../../assets/img/eth.png")} alt="" />
                     <div>ETH</div>
                     <DownOutlined />
                  </div>
                  <div onClick={e => { setModalOpen(true) }} className="pools-add-token-name" >
                     Azuki
                  </div>
               </div>
               <div className="pools-add-token-empty" >
                  <div style={{ width: "100%" }} >0.5%   swap fee</div>
                  <div>5% royalty fee</div>
               </div>
               <div className="pools-add-deposit" >Deposit Amounts</div>
               <div className="pools-add-deposit-amount" >
                  <div>{poolOrder._amountB ? fromWei(poolOrder._amountB) : 0.00}</div>
                  <div className="flex-all-center" >
                     <img className="pools-add-setting-img" src={require("../../assets/img/eth.png")} alt="" />
                     <div className="pools-add-token-erc20"   >ETH</div>
                  </div>
               </div>
               <div className="pools-add-deposit-nft pools-add-deposit-amount" >
                  <div>{poolOrder._amountA ? fromWei(poolOrder._amountA) : 0.00}</div>
                  <div className="pools-add-deposit-nft-name " >
                     Azuki
                  </div>
               </div>
            </div>
            <div className="pools-add-amount" >
               <div className="pools-add-text" >Deposit Amounts</div>
               <div className="pools-add-per" ></div>
               <div className="pools-add-min-max" >
                  <div className="pools-add-section">
                     <div className="flex-center-width-full" >Min Price</div>
                     <div className="flex-center-width-full-between pools-add-padding" >
                        <div onClick={() => { changePrice('min', 'reduce') }}>-</div>
                        <div>{minPrice}</div>
                        <div onClick={() => { changePrice('min', 'add') }}>+</div>
                     </div>

                     <div className="flex-center-width-full" >
                        per ETH
                     </div>
                  </div>
                  <div className="pools-add-section">
                     <div className="flex-center-width-full" >Max Price</div>
                     <div className="flex-center-width-full-between pools-add-padding" >
                        <div onClick={() => { changePrice('max', 'reduce') }}>-</div>
                        <div>{maxPrice}</div>
                        <div onClick={() => { changePrice('max', 'add') }}>+</div>
                     </div>

                     <div className="flex-center-width-full" >
                        per ETH
                     </div>
                  </div>
               </div>
               <div className="pools-add-full-range" onClick={() => { initPrice() }}> Full Range</div>
               <div className="pools-add-but"  >{text1}</div>
            </div>
         </div>



         <div className="pools-add-your-nfts" >
            <div className="pools-add-your-nfts-setting"  >
               <img className="pools-add-setting-img" src={require("../../assets/img/setting.png")} alt="" />
            </div>

            <div className="pools-add-your-nfts-text" >
               <LeftOutlined />
               <div className="pools-add-your-nfts-text-Your"  >Your NFTs</div>

            </div>

            <div className="flex-center-width-full" >
               <div className="pools-add-your-tokens" >
                  Buy Total:
               </div>
            </div>


            <div className="pools-add-your-nft-list" >
               <Radio.Group onChange={e => onChange(e)} style={{ width: "100%" }} >
                  {myNfts.length > 0 ?
                     myNfts.map((item, i) => {
                        return <div key={i} className="pools-add-your-nft-list-item" >
                           <div className="pools-add-your-nft-list-item-img" style={{ backgroundImage: "url(" + item.tokenUrl + ")" }} >
                              <Radio value={item.tokenId}></Radio>
                           </div>

                           <div className="pools-add-your-nft-list-item-name" >
                              <div className="pools-add-your-nft-list-item-name-text">{item.name}</div>
                              <div className="pools-add-your-nft-list-item-id-text" >name #{item.tokenId}</div>
                           </div>
                        </div>
                     })
                     :
                     <div></div>
                  }
               </Radio.Group>
            </div>

            <div className="pools-add-your-nft-cost" >
               TOKEN ID:{poolOrder.tokenId ? '#' + poolOrder.tokenId : ''}
            </div>
            {/* <div className="flex-center-width-full" >
               <div className="pools-add-your-nft-but" >
                 {poolOrder.nftApprove ? <div>TOKEN ID:#{poolOrder.tokenId}</div>:<div onClick={approve721} >Approve</div> }
               </div>
            </div> */}
         </div>
      </div>


      {/* <Modal   style={{backgroundColor:"#141414",color:"wheat"}}  bodyStyle={{backgroundColor:"#141414"}}  open={isModalOpen} footer={null} onCancel={()=>setModalOpen(false)}  >

      </Modal> */}


   </div>

}
