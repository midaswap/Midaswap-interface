import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { useLocation } from "react-router-dom";
import { Network, Alchemy } from 'alchemy-sdk';
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


export function CPools_add() {
   const { state } = useLocation();
   let nftaddress = state.address;

   const { address, chainId } = useAppSelector(ConnectSelectors.userData);
   const [myNfts, setMyNfts] = useState([] as Array<any>);

   useEffect(() => {
      const settings = {
         apiKey: "xG8dip53YYKaskagE0xWN0NkGCNGV66u",
         network: Network.MATIC_MUMBAI,
      };
      const alchemy = new Alchemy(settings);
		alchemy.nft.getNftsForOwner(address).then(e => {
         let newArr = [] as Array<any>;
         for (let index = 0; index < e.ownedNfts.length; index++) {
            let item = e.ownedNfts[index];
            if(item.contract.address == nftaddress){
               let data: { name: any, tokenUrl: any, tokenId: any } = { name: "", tokenUrl: '', tokenId: "" };
               data.name = item.contract.name;
               data.tokenUrl = item.tokenUri ? item.tokenUri.gateway : '';
               data.tokenId = item.tokenId
               newArr.push(data);
            }
         }
         setMyNfts(newArr);
      });
	});



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
                  <div className="pools-add-token-name" >
                     Azuki
                  </div>
               </div>
               <div className="pools-add-token-empty" >

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
               <div className="pools-add-but"  >Connect Wallet</div>
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
                  Connet Wallet
               </div>
            </div>
         </div>
      </div>
   </div>

}
