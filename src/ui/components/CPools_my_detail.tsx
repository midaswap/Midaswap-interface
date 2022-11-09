import {State, useAppDispatch, useAppSelector} from "../../app/Store";
import {useEffect} from "react";
import {ChainId, ethereum, web3} from "../../app/Config";
import { useParams ,Link} from "react-router-dom";
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';

export function CPools_my_detail() {

  const params = useParams();


	return <div className="CPools_my_detail" >
      <div className="CPools_my_detailc_content" >
                  <div className="CPools_my_detailc_content_1">
                     <img  className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")}  alt="" />
                     <img  className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")}  alt="" />
                     <div className="CPools_my_detailc_content_1_text" >Auzik/ETH</div>
                     <div className="CPools_my_detailc_content_1_text2">0.5%</div>
                      <div className="CPools_my_detailc_content_1_but" >Increase Liquidity</div>
                      <div  className="CPools_my_detailc_content_1_but" >Remove Liquidity</div>
                  </div>

                  <div className="CPools_my_detailc_content_2">
                    <div className="CPools_my_detailc_content_2_box_1">
                        <img className="CPools_my_detailc_content_2_position" src={require("../../assets/img/position.png")}  alt="" />
                    </div>

                    <div className="CPools_my_detailc_content_2_box_2">
                          <div className="CPools_my_detailc_content_2_Liquidity" >Liquidity</div>
                          <div  className="CPools_my_detailc_content_2_moeny" >$-</div>
                          <div className="CPools_my_detailc_content_2_box_2_box" >
                                <div className="CPools_my_detailc_content_2_box_2_1">
                                 <img  className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")}  alt="" />
                                 <div>12</div>
                                </div>
                                <div className="CPools_my_detailc_content_2_box_2_1" >
                                 <img  className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")}  alt="" />
                                 <div>12</div>
                                </div>
                          </div>
                          <div  className="CPools_my_detailc_content_Unclaimed" >Unclaimed fees</div>
                          <div className="CPools_my_detailc_content_2_moeny">$-</div>

                          <div className="CPools_my_detailc_content_2_box_2_box" >
                                <div className="CPools_my_detailc_content_2_box_2_1">
                                 <img  className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")}  alt="" />
                                 <div>12</div>
                                </div>
                                <div className="CPools_my_detailc_content_2_box_2_1" >
                                 <img  className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")}  alt="" />
                                 <div>12</div>
                                </div>
                          </div>
                    </div>
                  </div>

                  <div  className="CPools_my_detailc_content_3" >
                    <div className="CPools_my_detailc_content_3_1" >Selected Range</div>
                    <div  className="CPools_my_detailc_content_3_2" >
                      <div className="CPools_my_detailc_content_3_2_1"  >
                        <div>AUZIK</div>
                        <div>ETH</div>
                      </div>

                    </div>
                    
                  </div>

                  <div className="CPools_my_detailc_content_4" >
                      <div  className="CPools_my_detailc_content_4_min" >
                            <div>Min Pric</div>
                           <div style={{fontSize:"20px"}} >0</div>
                           <div style={{fontSize:"16px"}} >ETH per Auzik</div>
                           <div style={{marginTop:"10px"}} >Your position will be 100% ETH at this prise</div>
                      </div>

                      <img className="CPools_my_detailc_content_4_img" src={require("../../assets/img/my_change.png")}  alt="" />
                      <div  className="CPools_my_detailc_content_4_min" >
                            <div>Max Pric</div>
                           <div style={{fontSize:"20px"}} >0</div>
                           <div style={{fontSize:"16px"}} >ETH per Auzik</div>
                           <div style={{marginTop:"10px"}} >Your position will be 100% ETH at this prise</div>
                      </div>
                  </div>

                  <div  className="CPools_my_detailc_content_5" >
                          <div>Current price</div>
                          <div style={{fontSize:"1.275vw"}} >0.00854353</div>
                  </div>

      </div>
  </div>
}
