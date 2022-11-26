import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import up from "../../assets/img/up.png";
import punk from "../../assets/img/punk.avif";
import orm from "../../assets/img/orm.avif";
import bayc from "../../assets/img/bayc.avif";
import eth from "../../assets/img/eth.png";
import down from "../../assets/img/down.png";
import "./Midaswap.css"

export default function Midaswap() {
   return <div className="home-content" >
   <div className="home-the" >The decentralized </div>
   <div className="home-nft" >NFT Marketplace </div>
   <div className="nft-list"  >
     <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
       <div className="nft-list-item">
         <img className="nft-logo" src={logo} alt="" />
         <div className="nft-name">RENGA Black Box</div>
         <div className="nft-zx">
           <img className="nft-up" src={up} alt="" />
           <div className="nft-up-text" >24.00%</div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text" >10.11</div>
           </div>
           <div style={{ width: "50%" }} className="flex-center" >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text"  >12.6</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
             Floor Price
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
             Best Offer
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
             67
           </div>

           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text">4.524</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Listings
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Offer Tvl
           </div>
         </div>
       </div>
     </Link>

     <Link  to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
       <div className="nft-list-item" >
         <img className="nft-logo" src={bayc} alt="" />
         <div className="nft-name">Bored Ape Yacht Club</div>
         <div className="nft-zx">
           <img className="nft-up" src={up} alt="" />
           <div className="nft-up-text" >24.00%</div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text" >2.920</div>
           </div>
           <div style={{ width: "50%" }} className="flex-center" >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text"  >2.920</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
             Floor Price
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
             Best Offer
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
             67
           </div>

           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text">4.524</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Listings
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Offer Tvl
           </div>
         </div>
       </div>
     </Link>

     <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
       <div className="nft-list-item" >
         <img className="nft-logo" src={orm} alt="" />
         <div className="nft-name">ORI by James Merrill</div>
         <div className="nft-zx">
           <img className="nft-up" src={down} alt="" />
           <div className="nft-down-text" >24.00%</div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text" >10.11</div>
           </div>
           <div style={{ width: "50%" }} className="flex-center" >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text"  >12.6</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
             Floor Price
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
             Best Offer
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
             67
           </div>

           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text">4.524</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Listings
           </div>
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Offer Tvl
           </div>
         </div>
       </div>
     </Link>

     <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
       <div className="nft-list-item" >
         <img className="nft-logo" src={punk} alt="" />
         <div className="nft-name">CryptoPunks</div>
         <div className="nft-zx">
           <img className="nft-up" src={down} alt="" />
           <div className="nft-down-text" >24.00%</div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text" >10.11</div>
           </div>
           <div style={{ width: "50%" }} className="flex-center" >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text"  >12.6</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
             Floor Price
           </div>

           <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
             Best Offer
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
             67
           </div>

           <div style={{ width: "50%" }} className="flex-center"  >
             <img className="nft-eth" src={eth} alt="" />
             <div className="nft-eth-text">4.524</div>
           </div>
         </div>
         <div className="nft-zx">
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Listings
           </div>
           <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
             Offer Tvl
           </div>
         </div>
       </div>
     </Link>
   </div>
 </div>

}
