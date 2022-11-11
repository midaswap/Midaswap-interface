import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { getErc20Contract, getErc721Contract, getUniswapV3Router, getTokenB } from "../../app/Contract";
import { Link } from "react-router-dom";
import {
   ConnectSelectors,
   ConnectTask,
   disconnect,
   SwitchTask,
   updateAddress,
   updateBalance,
   updateChainId
} from "../../slices/ConnectSlice";



export function CPools() {
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
      <div>
         <div className="pools-td" >
            <div className="pools-td-text" > Pools</div>
            <Link to={'/PoolsAdd'} state={{ address: '0xcBF0C718a28e904b4f3101E29AEb44193F0C6340' }}>
               <div className="pools-td-Create" > + New Position</div>
            </Link>
         </div>
         <div className="pool-box" >
            {myPools.length == 0 ?
               <div className="pool-box-e" >
                  <div className="pool-box-td  pool-box-mrgin " >
                     <img className="pool-box-img" src={require("../../assets/img/pool-box.png")} alt="" />
                  </div>
                  <div className="pool-box-td  pool-box-mrgin" >Your active  liquidity positions </div>
                  <div className="pool-box-td"  > will appear here.</div>
               </div>
               :
               <div className="pool-list" >
                  {myPools.map((item, i) => {
                     return <Link to={'/Pools_my_detail/' + item.poolsAddress}>
                        <div key={i} className="pool-box-item" >
                           <div className="pool-box-item-1" >
                              <img className="pool-box-item-1_img" src={require("../../assets/img/AZUKE.png")} alt="" />
                              <img className="pool-box-item-1_img" src={require("../../assets/img/eth.png")} alt="" />
                              <div className="pool-box-item-1-text">Auzik/ETH</div>
                              <div className="pool-box-item-1-bt" >0.5%</div>
                              <div className="pool-box-item-1-bt"  >5%</div>
                           </div>
                           <div className="pool-box-item-2" >
                              <div className="pool-box-item-2-title" >
                                 Min：
                              </div>
                              <div className="pool-box-item-2-text" >
                                 1AUZIK per ETH
                              </div>
                              <img className="pool-box-item_img" src={require("../../assets/img/my_change.png")} alt="" />
                              <div className="pool-box-item-2-title" >
                                 Min：
                              </div>
                              <div className="pool-box-item-2-text" >
                                 1AUZIK per ETH
                              </div>
                           </div>
                        </div>
                     </Link>
                  })}
               </div>
            }
         </div>

         <div className="pools-td-fotter" >
            <div className="pools-td-Learn" >
               <div className="pools-td-Learn-text" >Learn about providing liquidity ↗</div>
               <div>Check out our LP walkthrough and migration guides.</div>
            </div>
            <div className="pools-td-Top"  >
               <div className="pools-td-Learn-text" style={{ width: "100%" }}>Top pools ↗</div>
               <div>Explore Midaswap Analytics.</div>
            </div>
         </div>
      </div>

      {/* <div className="pools-list" >
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
   <Link to={'/Pools_detail/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'} >
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
</div> */}

   </div>

}
