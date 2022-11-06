import {State, useAppDispatch, useAppSelector} from "../../app/Store";
import {useEffect} from "react";
import {ChainId, ethereum, web3} from "../../app/Config";
import { useParams ,Link} from "react-router-dom";


import {
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';

export function CPools_detail() {

  const params = useParams();


	return <div className="Pools_detail_content" >
  <div className="Pools_detail_token_add"  >
    <img  className="Pools_detail_logo_img" src={require("../../assets/img/azuki.png")} alt=""  />
    <img className="Pools_detail_logo_img" src={require("../../assets/img/eth.png")}  alt=""  />
    <div className="Pools_detail_token_name" >
     Azuki/ETH
    </div>
    <Link to={'/PoolsAdd/'+params.address} >
        <div  className="Pools_detail_add" >
          + Add Liquidity
        </div>
    </Link>
  </div>

  <div className="Pools_detail_tokens" >
      <div className="Pools_detail_tokens_locked_num" >
          <div  className="Pools_detail_tokens_locked_box" >
            <div className="Pools_detail_tokens_locked_box_text" >Total Tokens Locked</div>
           
           <div className="Pools_detail_tokens_locked_box_total" >
            <div  className="Pools_detail_tokens_locked_box_total_1" >
                <img  className="Pools_detail_logo_img" src={require("../../assets/img/azuki.png")} alt=""  />
                <div>
                Azuki
                </div>
                <div>20</div>
              </div>

              <div  className="Pools_detail_tokens_locked_box_total_2" >
                <img  className="Pools_detail_logo_img" src={require("../../assets/img/eth.png")} alt=""  />
                <div>
                Azuki
                </div>
                <div>20</div>
              </div>
           </div>
          </div>



          <div className="Pools_detail_tokens_locked_box_text1" >
            24h Volume
          </div>
          <div className="Pools_detail_tokens_locked_box_text2">$10.53m</div>
          <div  className="Pools_detail_tokens_locked_box_text3" >↑231.28%</div>
          <div className="Pools_detail_tokens_locked_box_text4">24h Fees</div>
          <div className="Pools_detail_tokens_locked_box_text5" >$10.53k</div>
      </div>
  </div>

  <div className="Pools_detail_tokens_charts" >
    <div  className="Pools_detail_tokens_charts_text" >
        <div className="Pools_detail_tokens_charts_money" >
            $10.53m
        </div>
        <div className="Pools_detail_tokens_charts_but_box">
          <div  className="Pools_detail_tokens_charts_but_box_bt"  >Volume</div>
          <div className="Pools_detail_tokens_charts_but_box_bt" >Liquidity</div>
          <div className="Pools_detail_tokens_charts_but_box_bt" >Fees</div>
        </div>
    </div>

    <div  className="Pools_detail_tokens_chart" >
      
    </div>
  </div>

  <div className="Pools_detail_token_transactions" >
     Transactions
  </div>


  <div  className="Pools_detail_token_transactions_list" >
      <div className="Pools_detail_token_transactions_list_header"  >
          <div    style={{width:"20.9896vw"}}  >  All Swaps Adds Removes   </div>
          <div  style={{width:"11.4583vw"}} > Total Value </div>
          <div style={{width:"11.7708vw"}} > Token Amount  </div>
          <div style={{width:"11.7708vw"}} > Token Amount  </div>
          <div style={{width:"12.9167vw"}} >  Account </div>
          <div  >  Time </div>
      </div>

      <div className="Pools_detail_token_transactions_list_item"  >
          <div   style={{width:"20.9896vw"}}  > Swap Azukis for ETH  </div>
          <div  style={{width:"11.4583vw"}}> $807.30m   </div>
          <div style={{width:"11.7708vw"}}  > 371.46mDAI </div>
          <div style={{width:"11.7708vw"}}  > 435.84m USDC  </div>
          <div style={{width:"12.9167vw"}}>  0x5037...9d1e  </div>
          <div  >  23 days ago </div>
      </div>

      <div className="Pools_detail_token_transactions_list_item"  >
          <div   style={{width:"20.9896vw"}}  > Swap Azukis for ETH  </div>
          <div  style={{width:"11.4583vw"}}> $807.30m   </div>
          <div style={{width:"11.7708vw"}}  > 371.46mDAI </div>
          <div style={{width:"11.7708vw"}}  > 435.84m USDC  </div>
          <div style={{width:"12.9167vw"}}>  0x5037...9d1e  </div>
          <div  >  23 days ago </div>
      </div>


      <div className="Pools_detail_token_transactions_list_item"  >
          <div   style={{width:"20.9896vw"}}  > Swap Azukis for ETH  </div>
          <div  style={{width:"11.4583vw"}}> $807.30m   </div>
          <div style={{width:"11.7708vw"}}  > 371.46mDAI </div>
          <div style={{width:"11.7708vw"}}  > 435.84m USDC  </div>
          <div style={{width:"12.9167vw"}}>  0x5037...9d1e  </div>
          <div  >  23 days ago </div>
      </div>
  
  <div className="Pools_detail_token_transactions_list_page" >
    <LeftOutlined />
    <div className="Pools_detail_token_transactions_list_page_text" >Page 1 of 30</div>
    <RightOutlined />
  </div>

  </div>



</div>
}
