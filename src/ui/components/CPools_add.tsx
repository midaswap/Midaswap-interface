import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { useLocation } from "react-router-dom";
import { Network, Alchemy } from 'alchemy-sdk';
import { getErc20Contract,getErc721Contract,getUniswapV3Router,getTokenB } from "../../app/Contract";
import { Progress,message } from 'antd';
import {  Modal } from 'antd';

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

interface PoolInfo {
   poolsAddress: any,
   nft_address: any,
   tokenA:any,
   tokenB:any
 }


 interface PoolOrder {
   nft_address: any,
   tokenB:any,
   tokenId:any,
   _amountA:any,
   _amountB:any,
   nftApprove:any,
   tokenBApprove:any,
   tokenAApprove:any
 }


export function CPools_add() {
   const dispatch = useAppDispatch();
   const { state } = useLocation();
   let nftaddress = state.address;
   const [poolInfo,setPoolInfo] = useState({} as PoolInfo);
   const [poolOrder,setPoolOrder] = useState({} as PoolOrder);
   

   const [isModalOpen, setModalOpen] = useState(false);
   const { address, chainId } = useAppSelector(ConnectSelectors.userData);
   const [myNfts, setMyNfts] = useState([] as Array<any>);
    

   async function initSwap() {
      const uniswapV3Router = await getUniswapV3Router();
      let  info =await uniswapV3Router.methods.getPoolInfo(nftaddress,"0x56223BAe67e6B26E6d1FC8B10431536235eD5B18",0);
      if(info.length > 0 ){
         poolInfo.poolsAddress=info[0];
         poolInfo.nft_address=info[1];
         poolInfo.tokenA=info[2];
         poolInfo.tokenB=info[3];
         setPoolInfo(poolInfo);
      }
   }

   async function getNftsForOwner(){
      if(!address){
         return;
      }
      const settings = {
         apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
         network: Network.MATIC_MUMBAI,
      };
      const alchemy = new Alchemy(settings);
	   let 	e = await alchemy.nft.getNftsForOwner(address);
      let newArr = [] as Array<any>;
         for (let index = 0; index < e.ownedNfts.length; index++) {
            let item = e.ownedNfts[index];
            if(item.contract.address == nftaddress.toLowerCase()){
               let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
               data.name = item.contract.name;
               data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
               data.tokenId = item.tokenId
               newArr.push(data);
            }
         }
         setMyNfts(newArr);
   }

   async function getApprove(){
      const tokenBContract = await getErc20Contract(poolInfo.tokenA);
      poolOrder.tokenBApprove=await tokenBContract.methods.allowance().call({ owner: address,spender: poolInfo.poolsAddress});
      const tokenAContract = await getErc20Contract(poolInfo.tokenA);
      poolOrder.tokenAApprove=await tokenAContract.methods.allowance().call({ owner: address,spender: poolInfo.poolsAddress});
    }


    async function approveErc20(address:any){
        const contract= await getErc20Contract(address);
        contract.methods.approve(poolInfo.poolsAddress,web3.utils.toWei("999999999")).send({
         from: address
       }).on('error', (error: any) =>{
         message.error(error);
          getApprove();
       }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
       }).on('receipt', (receipt: any) => {
           message.success("Success");
           getApprove();
       })
    }

   
   async function addPool(){
      const uniswapV3Router = await getUniswapV3Router();
      await uniswapV3Router.methods.addPool721(nftaddress,getTokenB(),12,web3.utils.toWei("1"),web3.utils.toWei("80")).send({
         from: address
       }).on('error', (error: any) =>{
         message.error(error);
         initSwap();
       }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
       }).on('receipt', (receipt: any) => {
           message.success("Success");
           initSwap();
       })
    }

    async function createPool(){
      const uniswapV3Router = await getUniswapV3Router();
       let  scale =web3.utils.toWei("80");
      await uniswapV3Router.methods.createPool(nftaddress,0,getTokenB(),scale).send({
         from: address
       }).on('error', (error: any) =>{
         message.error(error);
         initSwap();
       }).on('transactionHash', (txHash: any) => {
         console.warn("transactionHash", txHash)
       }).on('receipt', (receipt: any) => {
           message.success("Success");
           initSwap();
       })
    }





   const text = poolInfo.poolsAddress ? <div onClick={addPool} >ADD POOL</div> : <div  onClick={createPool}  >CREATE POOL</div> 
	
   useEffect(() => {
      getNftsForOwner();
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
                  <div  onClick={e=>{setModalOpen(true)}} className="pools-add-token-name" >
                      Azuki
                  </div>
               </div>
               <div className="pools-add-token-empty" >
                  <div  style={{width:"100%"}} >0.5%   swap fee</div> 
                  <div>5% royalty fee</div> 
               </div>
               <div className="pools-add-deposit" >Deposit Amounts</div>
               <div className="pools-add-deposit-amount" >
                  <div>0.00</div>
                  <div className="flex-all-center" >
                     <img className="pools-add-setting-img" src={require("../../assets/img/eth.png")} alt="" />
                     <div className="pools-add-token-erc20"   >ETH</div>
                  </div>
               </div>
               <div className="pools-add-deposit-nft pools-add-deposit-amount" >
                  <div>0.00</div>
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
                        <div>-</div>
                        <div>0</div>
                        <div>+</div>
                     </div>

                     <div className="flex-center-width-full" >
                        per ETH
                     </div>
                  </div>
                  <div className="pools-add-section">
                     <div className="flex-center-width-full" >Max Price</div>
                     <div className="flex-center-width-full-between pools-add-padding" >
                        <div>-</div>
                        <div>0</div>
                        <div>+</div>
                     </div>

                     <div className="flex-center-width-full" >
                        per ETH
                     </div>
                  </div>
               </div>
               <div className="pools-add-full-range"  > Full Range</div>
               <div className="pools-add-but"  >{text}</div>
            </div>
         </div>



         <div className="pools-add-your-nfts" >
            <div className="pools-add-your-nfts-setting"  >
               <img className="pools-add-setting-img" src={require("../../assets/img/setting.png")} alt="" />
            </div>

            <div className="pools-add-your-nfts-text" >
               <LeftOutlined />
               <div className="pools-add-your-nfts-text-Your"  >Your NFTs</div>
               <div className="pools-add-your-nfts-text-Clear"  >Clear</div>
            </div>

            <div className="flex-center-width-full" >
               <div className="pools-add-your-tokens" >
                  Buy Total:
               </div>
            </div>


            <div className="pools-add-your-nft-list" >
               { myNfts.length > 0 ?
                  myNfts.map(item => {
                     return <div className="pools-add-your-nft-list-item" >
                        <img className="pools-add-your-nft-list-item-img" src={item.tokenUrl} alt="" />
                        <div className="pools-add-your-nft-list-item-name" >
                           <div className="pools-add-your-nft-list-item-name-text">{item.name}</div>
                           <div className="pools-add-your-nft-list-item-id-text" >name #{item.tokenId}</div>
                        </div>
                        <img className="pools-add-x-img" src={require("../../assets/img/x.png")} alt="" />
                     </div>
                  })
                  :
                  <div></div>
               }
            </div>

            <div className="pools-add-your-nft-cost" >
               Net Cost:
            </div>
            <div className="flex-center-width-full" >

               <div className="pools-add-your-nft-but" >
                  {text}
               </div>
            </div>
         </div>
      </div>


      {/* <Modal   style={{backgroundColor:"#141414",color:"wheat"}}  bodyStyle={{backgroundColor:"#141414"}}  open={isModalOpen} footer={null} onCancel={()=>setModalOpen(false)}  >
             
      </Modal> */}


   </div>

}
