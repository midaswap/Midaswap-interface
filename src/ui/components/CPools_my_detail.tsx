import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { getErc20Contract, getErc721Contract, getUniswapV3Router } from "../../app/Contract";
import {
  ConnectSelectors,
  ConnectTask,
  disconnect,
  SwitchTask,
  updateAddress,
  updateBalance,
  updateChainId
} from "../../slices/ConnectSlice";

export function CPools_my_detail() {

  const dispatch = useAppDispatch();
  const params = useParams();
  let poolsAddress = params.address;
  const { address, chainId } = useAppSelector(ConnectSelectors.userData);

  async function getLpToken() {
    const uniswapV3Router = await getUniswapV3Router();
    let info = await uniswapV3Router.methods.getLpToken(poolsAddress, address).call();
    setTokenA(web3.utils.fromWei(info[0]));
    setTokenB(web3.utils.fromWei(info[1]));
  }

  const [tokenA, setTokenA] = useState("0");
  const [tokenB, setTokenB] = useState("0");

  useEffect(() => {
    getLpToken()
  }, [poolsAddress, dispatch]);


  return <div className="CPools_my_detail" >
    <div className="CPools_my_detailc_content" >
      <div className="CPools_my_detailc_content_1">
        <img className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")} alt="" />
        <img className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")} alt="" />
        <div className="CPools_my_detailc_content_1_text" >Auzik/ETH</div>
        <div className="CPools_my_detailc_content_1_text2">0.5%</div>
        <div className="CPools_my_detailc_content_1_but" >Increase Liquidity</div>
        <div className="CPools_my_detailc_content_1_but" >Remove Liquidity</div>
      </div>

      <div className="CPools_my_detailc_content_2">
        <div className="CPools_my_detailc_content_2_box_1">
          <img className="CPools_my_detailc_content_2_position" src={require("../../assets/img/position.png")} alt="" />
        </div>

        <div className="CPools_my_detailc_content_2_box_2">
          <div className="CPools_my_detailc_content_2_Liquidity" >Liquidity</div>
          <div className="CPools_my_detailc_content_2_moeny" >$-</div>
          <div className="CPools_my_detailc_content_2_box_2_box" >
            <div className="CPools_my_detailc_content_2_box_2_1">
              <img className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")} alt="" />
              <div  className="CPools_my_detailc_text" >{tokenA}</div>
            </div>
            <div className="CPools_my_detailc_content_2_box_2_1" >
              <img className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")} alt="" />
              <div className="CPools_my_detailc_text" >{tokenB}</div>
            </div>
          </div>
          <div className="CPools_my_detailc_content_Unclaimed" >Unclaimed fees</div>
          <div className="CPools_my_detailc_content_2_moeny">$-</div>

          <div className="CPools_my_detailc_content_2_box_2_box" >
            <div className="CPools_my_detailc_content_2_box_2_1">
              <img className="CPools_my_detailc_img" src={require("../../assets/img/AZUKE.png")} alt="" />
              <div  className="CPools_my_detailc_text" >{tokenA}</div>
            </div>
            <div className="CPools_my_detailc_content_2_box_2_1" >
              <img className="CPools_my_detailc_img" src={require("../../assets/img/eth.png")} alt="" />
              <div  className="CPools_my_detailc_text" >{tokenB}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="CPools_my_detailc_content_3" >
        <div className="CPools_my_detailc_content_3_1" >Selected Range</div>
        <div className="CPools_my_detailc_content_3_2" >
          <div className="CPools_my_detailc_content_3_2_1"  >
            <div  >AUZIK</div>
            <div>ETH</div>
          </div>

        </div>

      </div>

      <div className="CPools_my_detailc_content_4" >
        <div className="CPools_my_detailc_content_4_min" >
          <div>Min Pric</div>
          <div style={{ fontSize: "20px" }} >78</div>
          <div style={{ fontSize: "16px" }} >ETH per Auzik</div>
          <div style={{ marginTop: "10px" }} >Your position will be 100% ETH at this prise</div>
        </div>

        <img className="CPools_my_detailc_content_4_img" src={require("../../assets/img/my_change.png")} alt="" />
        <div className="CPools_my_detailc_content_4_min" >
          <div>Max Pric</div>
          <div style={{ fontSize: "20px" }} >81</div>
          <div style={{ fontSize: "16px" }} >ETH per Auzik</div>
          <div style={{ marginTop: "10px" }} >Your position will be 100% ETH at this prise</div>
        </div>
      </div>

      <div className="CPools_my_detailc_content_5" >
        <div>Current price</div>
        <div style={{ fontSize: "1.275vw" }} >80</div>
      </div>

    </div>
  </div>
}
