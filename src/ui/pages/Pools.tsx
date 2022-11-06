import { BasePage, page } from "./BasePage";

import {
   LeftOutlined,
   RightOutlined,
   
   DownOutlined
 } from '@ant-design/icons';




@page("Pools")
export class Pools extends BasePage {
  protected webContent() {
    return <div className="pools-content" >

      {/* <div>
      <div className="pools-td" >
         <div className="pools-td-text" > Pools</div>
         <div className="pools-td-Create" > + Create Pool</div>
         <div className="pools-td-NEW"> + New Position</div>
      </div>
      <div className="pool-box" >
        <div className="pool-box-td  pool-box-mrgin " > 
           <img className="pool-box-img" src={require("../../assets/img/pool-box.png")}  alt=""  />
        </div>

         <div className="pool-box-td  pool-box-mrgin" >Your active  liquidity positions </div>
         <div className="pool-box-td"  > will appear here.</div>
         <div  className="pool-but pool-box-mrgin" >
         Connect a wallet
         </div>
      </div>

      <div className="pools-td-fotter" >
         <div className="pools-td-Learn" >
            <div className="pools-td-Learn-text" >Learn about providing liquidity ↗</div>
            <div>Check out our LP walkthrough and migration guides.</div>
         </div>
         <div className="pools-td-Top"  >
            <div   className="pools-td-Learn-text" style={{width:"100%"}}>Top pools ↗</div>
            <div>Explore Midaswap Analytics.</div>
         </div>
      </div>
      </div> */}

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
         </div>
      </div> */}


      <div className="pools-add" >
            <div className="pools-add-box" >
               <div  className="pools-add-title" >
                   <LeftOutlined />
                  <div>Add Liquidityool</div>
                  <img className="pools-add-setting-img" src={require("../../assets/img/setting.png")} alt=""  />
               </div>
               <div className="pools-add-line" ></div>


               <div className="pools-add-pair" >
                  <div  className="pools-add-text" >Select Pair</div>
                  <div  className="pools-add-token-td" >
                     <div  className="pools-add-token" >
                        <img  className="pools-add-setting-img" src={require("../../assets/img/eth.png")}  alt="" />
                        <div>ETH</div>
                        <DownOutlined />
                     </div>
                     <div className="pools-add-token-name" >
                           Azuki
                     </div>
                  </div>
                  <div  className="pools-add-token-empty" >
                     
                  </div>
                  <div  className="pools-add-deposit" >Deposit Amounts</div>
                  <div  className="pools-add-deposit-amount" >
                     <div>0.00</div>
                     <div className="flex-all-center" >
                        <img  className="pools-add-setting-img"  src={require("../../assets/img/eth.png")}  alt="" />
                        <div  className="pools-add-token-erc20"   >ETH</div>
                     </div>
                  </div>
                  <div  className="pools-add-deposit-nft pools-add-deposit-amount" >
                     <div>0.00</div>
                     <div className="pools-add-deposit-nft-name " >
                     Azuki
                     </div>
                  </div>
               </div>
               <div className="pools-add-amount" >
                      <div  className="pools-add-text" >Deposit Amounts</div>
                      <div  className="pools-add-per" ></div>
                      <div  className="pools-add-min-max" >
                        <div className="pools-add-section">
                            <div className="flex-center-width-full" >Min Price</div>
                            <div  className="flex-center-width-full-between pools-add-padding" >
                              <div>-</div>
                              <div>0</div>
                              <div>+</div>
                            </div>

                            <div  className="flex-center-width-full" >
                               per ETH
                            </div>
                        </div>
                        <div className="pools-add-section">
                            <div className="flex-center-width-full" >Max Price</div>
                            <div  className="flex-center-width-full-between pools-add-padding" >
                              <div>-</div>
                              <div>0</div>
                              <div>+</div>
                            </div>

                            <div  className="flex-center-width-full" >
                               per ETH
                            </div>
                        </div>
                      </div>
                      <div  className="pools-add-full-range"  > Full Range</div>
                      <div  className="pools-add-but"  >Connect Wallet</div>
               </div>
            </div>



            <div className="pools-add-your-nfts" >
                  <div className="pools-add-your-nfts-setting"  > 
                     <img   className="pools-add-setting-img"  src={require("../../assets/img/setting.png")}  alt="" />
                  </div>

                  <div  className="pools-add-your-nfts-text" > 
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
                     <div  className="pools-add-your-nft-list-item" >
                           <img  className="pools-add-your-nft-list-item-img"   src={require("../../assets/img/nft.png")}  alt="" />
                           <div className="pools-add-your-nft-list-item-name" >
                              <div className="pools-add-your-nft-list-item-name-text">Azuki </div>
                              <div className="pools-add-your-nft-list-item-id-text" >Azuki #7073</div>
                           </div>
                           <img className="pools-add-x-img" src={require("../../assets/img/x.png")}   alt=""  />
                     </div>

                     <div  className="pools-add-your-nft-list-item" >
                           <img  className="pools-add-your-nft-list-item-img"   src={require("../../assets/img/nft.png")}  alt="" />
                           <div className="pools-add-your-nft-list-item-name" >
                              <div className="pools-add-your-nft-list-item-name-text">Azuki </div>
                              <div className="pools-add-your-nft-list-item-id-text" >Azuki #7073</div>
                           </div>
                           <img className="pools-add-x-img" src={require("../../assets/img/x.png")}   alt=""  />
                     </div>
                     
                  </div>

                  <div className="pools-add-your-nft-cost" >
                  Net Cost:
                  </div>
                  <div className="flex-center-width-full" >

                  <div  className="pools-add-your-nft-but" >
                        Connet Wallet
                  </div>
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
