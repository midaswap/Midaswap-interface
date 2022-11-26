import teamJSON from "../../store/team.json";
import {
   LeftOutlined,
   RightOutlined,
   DownOutlined
} from '@ant-design/icons';
import { Link,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import eth from '../../assets/img/eth.png';
import azuki from '../../assets/img/azuki.png';
import copyImg from "../../assets/img/copy.png";
import logoEtherscan from "../../assets/img/logo-etherscan.png";
import web from "../../assets/img/web.png";
import discode from "../../assets/img/discode.png";
import email from "../../assets/img/email.png";
import tg from "../../assets/img/tg_r.png";
import x from "../../assets/img/x.png";
import setting from "../../assets/img/setting.png";



import {ChainId, web3} from "../../app/Config";
import { Network, Alchemy } from 'alchemy-sdk';
import { useWeb3React } from '@web3-react/core';
import { Progress, message,InputNumber } from 'antd';
import { Modal, Radio } from 'antd';
import "./MAddiquidity.css";
import { getErc20Contract, getErc721Contract, getUniswapV3Router ,getINonfungiblePositionManager} from "../../app/Contract";
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


export default function MAddiquidity() {
   const { account, chainId } = useWeb3React()
   const parms = {
      token0:"0x3DEA4c82210c66050d0C1818530740b5Ece108E8",
      token1:"0x94ecC3f84e12D586B0741E87CaA6c140b76A2938",
      fee:500,tickLower:-24850,tickUpper:-20800,
      amount0Desired:web3.utils.toWei("12.108117954131814004"),
      amount1Desired:web3.utils.toWei("1"),
      amount0Min: web3.utils.toWei("11.822034484697754124"),
      amount1Min:web3.utils.toWei("0.971251300382961695"),
      recipient:"0x6bcA71b551c388533fb24f8981fB212253F9db6a",
      deadline: 1668889728
   }

   let nftaddress = teamJSON.nftAddrees;
   const [poolInfo, setPoolInfo] = useState({} as PoolInfo);
   const [poolOrder, setPoolOrder] = useState({} as PoolOrder);


   const [addPoolModalOpen, setAddPoolModalOpen] = useState(false);
   const [myNfts, setMyNfts] = useState([] as Array<any>);

   async function getNftsForOwner() {
      if (!account) {
         return;
      }
      const settings = {
         apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
         network: Network.MATIC_MUMBAI,
      };
      const alchemy = new Alchemy(settings);
      let e = await alchemy.nft.getNftsForOwner(account);
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
      poolOrder.tokenBApprove = await tokenBContract.methods.allowance(account, poolInfo.poolsAddress).call();
      const tokenAContract = await getErc20Contract(poolInfo.tokenA);
      poolOrder.tokenAApprove = await tokenAContract.methods.allowance(account, poolInfo.poolsAddress).call();
      setPoolOrder({ ...poolOrder });
   }

   async function getErc721Approve() {
      const contract = await getErc721Contract(poolInfo.nft_address);
      poolOrder.nftApprove = await contract.methods.isApprovedForAll(account, poolInfo.fractionNFTAddress).call();
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
         from: account
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
         from: account
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

   function addHandle(){
      if (!poolOrder.tokenId) {
         message.error("Please select the NFT to be added");
         return;
      }
      setAddPoolModalOpen(true);
   }

  async  function mintPool(){
      const iNonfungiblePositionManager = await getINonfungiblePositionManager();
      const parms = {
      token0:"0x3DEA4c82210c66050d0C1818530740b5Ece108E8",
      token1:"0x94ecC3f84e12D586B0741E87CaA6c140b76A2938",
      fee:500,tickLower:-24850,tickUpper:-20800,
      amount0Desired:web3.utils.toWei("12.108117954131814004"),
      amount1Desired:web3.utils.toWei("10"),
      amount0Min: web3.utils.toWei("11.822034484697754124"),
      amount1Min:web3.utils.toWei("0.971251300382961695"),
      recipient:"0x6bcA71b551c388533fb24f8981fB212253F9db6a",
      deadline: 1668889728
      }
      await iNonfungiblePositionManager.methods.mint(parms).send({
         from: account
      }).on('error', (error: any) => {
         message.error(error);
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
      })

   }



   async function addPool() {
      const uniswapV3Router = await getUniswapV3Router();
      await uniswapV3Router.methods.addPool721(nftaddress, teamJSON.tokenB, poolOrder.tokenId, web3.utils.toWei("1"), web3.utils.toWei("80"),parms).send({
         from: account
      }).on('error', (error: any) => {
         message.error(error);
         initSwap();
      }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
      }).on('receipt', (receipt: any) => {
         message.success("Success");
         getNftsForOwner();
         initSwap();
         setAddPoolModalOpen(false);
      })
   }

   async function createPool() {
      const uniswapV3Router = await getUniswapV3Router();
      let scale = web3.utils.toWei("80");
      await uniswapV3Router.methods.createPool(nftaddress, 0, teamJSON.tokenB, scale).send({
         from: account
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
      // if(minPrice == 0){
      //    initPrice();
      // }
   }

   

   const text = poolInfo.poolsAddress ? <div onClick={addHandle} >ADD POOL</div> : <div onClick={createPool}  >CREATE POOL</div>

   const text1 = poolOrder.tokenAApprove == '0' ? <div onClick={e => { approveErc20(poolInfo.tokenA) }}>Approve</div>
      : poolOrder.tokenBApprove == '0' ? <div onClick={e => { approveErc20(poolInfo.tokenB) }}>Approve</div> : text



   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(0);
   const [initPrice, setInitPrice] = useState(0);

   function initPriceChange(e:any){
      setInitPrice(e);
   }

   function initPriceRange() {
      setMinPrice(Number(web3.utils.fromWei(parms.amount1Desired)));
      setMaxPrice(Number(Number(web3.utils.fromWei(parms.amount0Desired)).toFixed(2)));
   }

   function  full(){
      setMinPrice(initPrice-1 == 0 ? 0:initPrice-1);
      setMaxPrice(initPrice+1);
   }

   function changePrice(type: any, orientation: any) {
      if (type == 'min') {
         if (orientation == 'add') {
            let price = minPrice + 1;
            if (maxPrice > price) {
               setMinPrice(price);
            }
         } else {
            if(minPrice - 1 > 0){
               setMinPrice(minPrice - 1);
            }
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
      if (account) {
         getNftsForOwner();
         initSwap();
      }
   }, [account]);





   return <div className="pools-content" >
      <div className="pools-add" >
         <div className="pools-add-box" >
            <div className="pools-add-title" >
               <LeftOutlined />
               <div onClick={()=>{mintPool()}} >Add Liquidityool</div>
               <img className="pools-add-setting-img" src={setting} alt="" />
            </div>
            <div className="pools-add-line" ></div>

            <div className="pools-add-pair" >
               <div className="pools-add-text" >Select Pair</div>
               <div className="pools-add-token-td" >
                  <div className="pools-add-token" >
                     <img className="pools-add-setting-img" src={eth} alt="" />
                     <div>ETH</div>
                     <DownOutlined />
                  </div>
                  <div  className="pools-add-token-name" >
                     Azuki
                  </div>
               </div>


{/*                
               <div className="pools-add-token-empty" >
                  <div style={{ width: "100%" }} >0.5%   swap fee</div>
                  <div>5% royalty fee</div>
               </div> */}


               <div className="pools-add-token-free" >
                  <div className="pools-add-token-free-min" >
                        <div style={{width:"200px",textAlign:"center"}}>
                         1%
                        </div>
                        <div>
                        SWAP FEE
                        </div>
                  </div>

                  <div className="pools-add-token-free-min" >
                         <div style={{width:"200px",textAlign:"center"}} >
                         5% 
                        </div>
                        <div style={{width:"100%",textAlign:"center"}}  >
                         ROYALTY FEE
                        </div>
                  </div>
               </div>




               <div className="pools-add-deposit" >Deposit Amounts</div>
               <div className="pools-add-deposit-amount" >
                  <div  style={{width:"50%"}} >{initPrice ? initPrice : 0.00}</div>
                  <div  className="pools-add-deposit-amount-2" >
                     <div className=" pools-add-deposit-box" >
                        <img className="pools-add-setting-img" src={eth} alt="" />
                        <div className="pools-add-token-erc20"   >ETH</div>
                     </div>
                  </div>
                  <div  className="pools-add-deposit-banlace" >
                        <div   className="pools-add-deposit-banlace-text"  >Balance:10</div>
                        <div  className="pools-add-deposit-max" >MAX</div>
                  </div>
               </div>

               <div className=" pools-add-deposit-amount" >
                  <div  style={{width:"50%"}} >{poolOrder._amountA ? fromWei(poolOrder._amountA) : 0.00}</div>
                  <div  className="pools-add-deposit-amount-2" >
                     <div className=" pools-add-deposit-box" >
                        <img className="pools-add-setting-img" src={azuki} alt="" />
                        <div className="pools-add-token-erc20"   >Azuki</div>
                     </div>
                  </div>
                  {/* <div  className="pools-add-deposit-banlace" >
                        <div   className="pools-add-deposit-banlace-text"  >Balance:2.78</div>
                        <div  className="pools-add-deposit-max" >MAX</div>
                  </div> */}
               </div>

            </div>



            <div className="pools-add-amount" >
               {/* <div className="pools-add-text" >Deposit Amounts</div> */}
               <div className="pools-add-text" >Set Starting Price</div>
               {/* <div className="pools-add-per" ></div> */}

               <div  className="pools-add-per-text" >
                 This pool must be initialized before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount. Gas fees will be higher than usual due to the initialization transaction.
               </div>
               <div  className="pools-add-per-input" >
                 <InputNumber width={"100%"} bordered={false} controls={false} onChange={initPriceChange} className="pools-input" />
               </div>

               <div  className="pools-add-per-current-text" >
                   Current AZUKI Price 
               </div>
               
               <div className="pools-add-text" >Set Price Range</div>
               <div className="pools-add-min-max" >
                  <div className="pools-add-section">
                     <div className="flex-center-width-full flex-all-center" >Min Price</div>
                     <div className="flex-center-width-full-between pools-add-padding " >
                        <div onClick={() => { changePrice('min', 'reduce') }}>-</div>
                        <div>{minPrice}</div>
                        <div onClick={() => { changePrice('min', 'add') }}>+</div>
                     </div>

                     <div className="flex-center-width-full " >
                        per ETH
                     </div>
                  </div>
                  <div className="pools-add-section">
                     <div className="flex-center-width-full flex" >Max Price</div>
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
               <div className="pools-add-full-range" onClick={() => { full() }}> Full Range</div>
               <div className="pools-add-but"  >{text1}</div>
            </div>
         </div>



         <div className="pools-add-your-nfts" >
            <div className="pools-add-your-nfts-setting"  >
               <img className="pools-add-setting-img" src={setting} alt="" />
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

      <Modal  width={578}   style={{backgroundColor:"#141414",width:"578px", color:"wheat",height:"827px",borderRadius:"20px"}}  bodyStyle={{backgroundColor:"#141414"}}  open={addPoolModalOpen} footer={null} onCancel={()=>setAddPoolModalOpen(false)}  >
            <div className="modal_content">
                  <div className="modal_content_1">
                     <img  className="modal_img" src={azuki}  alt="" />
                     <img  className="modal_img" src={eth}  alt="" />
                     <div className="modal_content_1_text" >Auzik/ETH</div>
                  </div>
                  
                  <div  className="model_box" >
                        <div className="model_box_1" >
                               <img  className="modal_img" src={azuki} alt="" />
                               <div  style={{marginRight:"290px",marginLeft:"10px"}} >Auzik</div>
                               <div style={{width:"100px",textAlign:"right"}} >1</div>
                        </div>
                        <div className="model_box_1" >
                              <img  className="modal_img" src={require("../../assets/img/eth.png")} alt="" />
                               <div   style={{marginRight:"300px",marginLeft:"10px"}}  >ETH</div>
                               <div  style={{width:"100px",textAlign:"right"}} >10</div>
                        </div>

                        <div className="model_box_1 model_box_line" ></div>

                         <div className="model_box_1 model_box_1_text" >
                              <div style={{marginRight:"290px",color:"#FDFDFD"}} >Swap Fee</div>
                              <div  style={{width:"100px",textAlign:"right"}} >1% </div>
                         </div>


                         <div className="model_box_1 model_box_1_text" >
                              <div style={{marginRight:"270px"}}>Royalty Fee</div>
                              <div  style={{width:"100px",textAlign:"right"}} >5%</div>
                         </div>
                  </div>

                  <div className="model_Range" >
                     <div className="" >Selected Range</div>
                     <div className="model_Range_but" >
                        <div style={{width:"50%",textAlign:"center"}} >Auzik</div>
                        <div  style={{width:"50%",textAlign:"center"}}>ETH</div>
                     </div>
                  </div>

                  <div  className="model_min_max" >
                     <div  className="model_min" >
                           <div>Min Pric</div>
                           <div style={{fontSize:"24px"}} >{minPrice}</div>
                           <div style={{fontSize:"20px"}} >ETH per Auzik</div>
                           <div>Your position will be 100%</div>
                           <div>composed of Auzik at this prise</div>
                     </div>
                     <div  className="model_max" >
                           <div>Max Pric</div>
                           <div  style={{fontSize:"24px"}} >{maxPrice}</div>
                           <div  style={{fontSize:"24px"}} >ETH per Auzik</div>
                           <div>Your position will be 100%</div>
                           <div>composed of Auzik at this prise</div>
                      </div>
                  </div>
                  <div  className="model_price" >
                      <div className="model_price_1" >Current price</div>
                      <div className="model_price_2">0.0125</div>
                      <div className="model_price_3" >ETH per Auzik</div>
                  </div>
                  <div  className="model_but" onClick={()=>{addPool()}}>
                            Add
                   </div>
            </div>

      </Modal>


   </div>


}
