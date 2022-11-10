import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { getErc20Contract, getErc721Contract, getUniswapV3Router, getTokenB } from "../../app/Contract";
import { Link } from "react-router-dom";
import {
   ConnectSelectors,
} from "../../slices/ConnectSlice";



export function COverview() {
   const dispatch = useAppDispatch();
   const { address, chainId } = useAppSelector(ConnectSelectors.userData);
   const [myPools, setMyPools] = useState([] as Array<any>);


   async function getMyAddPoolArr() {
      if (!address) {
         return;
      }
      const uniswapV3Router = await getUniswapV3Router();
      let info = await uniswapV3Router.methods.getMyAddPoolArr(address).call();
      let newArr = [] as Array<any>;
      if (info.length > 0) {
         for (let index = 0; index < info.length; index++) {
            let item = info[index];
            let data: { nftAddress: any, poolsAddress: any, tokenB: any } = { nftAddress: "", poolsAddress: '', tokenB: "" };
            data.nftAddress = item.nft_address;
            data.poolsAddress = item.poolsAddress;
            data.tokenB = item.tokenB;
            newArr.push(data);
         }
      }
      setMyPools(newArr);
   }

   useEffect(() => {
      if (address) {
         getMyAddPoolArr();
      }
   }, [address, dispatch]);


   return <div className="pools-content" >

      <div className="pools-list" >
   <div  className="pools-list-box"  >
      <div className="pools-list-box-img-bg" >
           <img  className="pools-list-box-img" src={require("../../assets/img/pools-list-box.png")} alt="" />
      </div>

      <div className="pools-list-box-text" >
      <div style={{width:"100%"}}    className="flex-center" >You will deposit both NFTs and tokens and earn trading</div>
      <div style={{width:"100%"}}  className="flex-center" > fees as people buy orsell NFTs using your pool.</div>
      </div>
   </div>

   <div  className="pools-list-all-text">All Pools</div>

   <div  className="pools-list-tale-header" >
         <div style={{width:"18.3854vw"}} >Collegetions</div> 
         <div style={{width:"11.7708vw"}}> 24h Volume </div>    
         <div style={{width:"13.5937vw"}} > 24h Fees</div>               
         <div style={{width:"12.5vw"}} > Floor Price </div>       
         <div style={{width:"12.9167vw"}} > Offer TVL </div>                           
         <div> Listings </div>
   </div>

   <div  className="pools-list-tale-list" >
   <Link to={'/Pools_detail/0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F'} >
      <div className="pools-list-tale-list-item">
         <div style={{width:"18.3854vw"}} >
                  <img  className="pools-list-tale-list-logo"  src={require("../../assets/img/azuki.png")} />
                     Azuki         
            </div> 
            <div style={{width:"11.7708vw"}}>
                  <img className="pools-list-tale-list-img"  src={require("../../assets/img/eth.png")}  />
                     1826.93      
            </div>    
            <div style={{width:"13.5937vw"}} >
                  <img className="pools-list-tale-list-img"  src={require("../../assets/img/eth.png")}  />
                  11.053       
            </div>               
            <div style={{width:"12.5vw"}} >
            
                     <img className="pools-list-tale-list-img"  src={require("../../assets/img/eth.png")}  />
                     10.043       
               
               </div>       
            <div style={{width:"12.9167vw"}} > 
            
                  <img className="pools-list-tale-list-img"  src={require("../../assets/img/eth.png")}  />
                  307.30       
            </div>                           
            <div> #15 </div>
      </div>
      </Link>
   </div>
</div>

   </div>

}
