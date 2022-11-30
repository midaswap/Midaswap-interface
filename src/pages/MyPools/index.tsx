import teamJSON from "../../store/team.json";
import {
   LeftOutlined,
   RightOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./MyPools.css";
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from "react";
import eth from '../../assets/img/eth.png';
import azuki from '../../assets/img/azuki.png';
import poolBox from '../../assets/img/pool-box.png';
import myChange from '../../assets/img/my_change.png';



import { getErc20Contract, getErc721Contract, getMidaswapV3Router } from "../../app/Contract";
export default function MyPools() {
   const { account, chainId,provider } = useWeb3React()
   const [myPools, setMyPools] = useState([] as Array<any>);
   async function getMyAddPoolArr() {
      if (!account) {
         return;
      }
      const uniswapV3Router = await getMidaswapV3Router(provider?.getSigner());
      let info = await uniswapV3Router.methods.getMyAddPoolArr(account).call();
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
      if (account) {
        // getMyAddPoolArr();
      }
   }, [account]);

   return (
      <div className="pools-div">
            <div className="pools-content" >
         <div>
         <div className="pools-td" >
            <div className="pools-td-text" > Pools</div>
            <Link to={'/MAddiquidity'} state={{ address: '0xcBF0C718a28e904b4f3101E29AEb44193F0C6340' }}>
               <div className="pools-td-Create" > + New Position</div>
            </Link>
         </div>
         <div className="pool-box" >
            {myPools.length == 0 ?
               <div className="pool-box-e" >
                  <div className="pool-box-td  pool-box-mrgin " >
                     <img className="pool-box-img" src={poolBox} alt="" />
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
                              <img className="pool-box-item-1_img" src={azuki} alt="" />
                              <img className="pool-box-item-1_img" src={eth} alt="" />
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
                              <img className="pool-box-item_img" src={myChange} alt="" />
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
   </div>

      </div>
      

   )


}
