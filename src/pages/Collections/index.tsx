import teamJSON from "../../store/team.json";
import {
   LeftOutlined,
   RightOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import "./Collections.css"

import eth from '../../assets/img/eth.png';
import azuki from '../../assets/img/azuki.png';

export default function Collections() {
   return (<div className="Collections_div" >
      <div className="collections-content" >
         <div className="Collections-text" >Collections</div>
         <div className="Collections-text-1">
            Don't see a collection you want?
         </div>
         <div className="Collections-text-1">
            Directly list your NFTs, or create a new pool to buy and sell in bulk.
         </div>
         <div className="Collections-table" >
            <div className="Collections-table-header Collections-table-font" >
               <div style={{ width: "17.6563vw" }} >Collegetions</div>
               <div style={{ width: "12.3958vw" }}> 24h Volume </div>
               <div style={{ width: "9.0625vw" }} > 24h% </div>
               <div style={{ width: "11.3542vw" }} > Floor Price </div>
               <div style={{ width: "11.5104vw" }} > Best Offer  </div>
               <div style={{ width: "11.5104vw" }} > Offer TVL </div>
               <div> Listings </div>
            </div>
            <Link to={'/Nft_trade/' + teamJSON.nftAddrees}  >
               <div className="Collections-table-td-list" >
                  <div className="Collections-table-font Collections-table-td">
                     <div className="flex_align_center" style={{ width: "17.6563vw" }} >
                        <img className="Collections-table-td-img" src={azuki} />
                        Azuki
                     </div>
                     <div className="flex_align_center" style={{ width: "12.3958vw" }}>
                        <img className="Collections-table-td-img" src={eth} />
                        1826.93
                     </div>

                     <div className="flex_align_center" style={{ width: "9.0625vw" }}>
                        +9.8%
                     </div>
                     <div className="flex_align_center" style={{ width: "11.3542vw" }}>
                        <img className="Collections-table-td-img" src={eth} />
                        11.053
                     </div>
                     <div className="flex_align_center" style={{ width: "11.5104vw" }}>
                        <img className="Collections-table-td-img" src={eth} />
                        10.043
                     </div >
                     <div className="flex_align_center" style={{ width: "11.5104vw" }}>
                        <img className="Collections-table-td-img" src={eth} />
                        307.30
                     </div>
                     <div className="flex_align_center" >
                        #15
                     </div>
                  </div>

               </div>
            </Link>

            <div className="Collections-table-page Collections-table-font" >
               <LeftOutlined />
               <div className="Collections-table-page-text" >Page 1 of 30</div>
               <RightOutlined />
            </div>
         </div>
      </div>

   </div>
   )


}
