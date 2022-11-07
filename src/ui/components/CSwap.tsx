import {State, useAppDispatch, useAppSelector} from "../../app/Store";
import {useEffect,useState} from "react";
import {ChainId, ethereum, web3} from "../../app/Config";
import { useParams ,Link} from "react-router-dom";
import { Button, Drawer } from 'antd';
import { Input } from 'antd';
import { getErc20Contract,getErc721Contract,getUniswapV3Router } from "../../app/Contract";
import erc20 from "../../store/team.json";

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



interface PoolInfo {
  poolsAddress: any,
  nft_address: any,
  tokenA:any,
  tokenB:any
}



export function CSwap() {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector(ConnectSelectors.isConnected);
  const isLoading = useAppSelector(ConnectSelectors.isLoading);
  const displayAddress = useAppSelector(ConnectSelectors.displayAddress);
  const {address, chainId} = useAppSelector(ConnectSelectors.userData);
  
  function connect() {
    !isConnected && !isLoading && dispatch(ConnectTask());
  }
  function switch_() {
    dispatch(SwitchTask())
  }


  function Disconnect() {
    dispatch(disconnect())
  }
  const text = isLoading ? "CONNECTING..." :
  isConnected ? chainId === ChainId ?
    displayAddress : "SWITCH" : "CONNECT";


const onClick = isLoading ? undefined :
   isConnected ? chainId === ChainId ?
  undefined : switch_ : connect;

const [swapOrder, setSwapOrder] = useState({
  nft_address:"",
  tokenA:"",
  tokenB:"  ",
  _amountA:"",
  _amountB:"",
  approveAmontB:"",
  approveAmontA:"",
  poolsAddress:""
 });

 const [poolInfoArray, setPoolInfoArray] = useState([]as Array<PoolInfo>);
 
 function textTre(text:any){
    return "SWITCH,CONNECT".indexOf(text) == -1;
  }
  

  async function initSwap() {
     const uniswapV3Router = await getUniswapV3Router();
     let  poolInfoList =await uniswapV3Router.methods.getPoolInfoArray();
     for (let index = 0; index < poolInfoList.length; index++) {
       const element = poolInfoList[index];
       let pools:PoolInfo ={poolsAddress:element[0],nft_address:element[1],tokenA:element[2],tokenB:element[3]}
       poolInfoArray.push(pools);
     }
  }

  async function changeHandler(){
    const tokenAContract = await getErc20Contract(swapOrder.tokenA);
    swapOrder.approveAmontB=await tokenAContract.methods.allowance().call({ owner: address,spender: swapOrder.poolsAddress});
    const tokenBContract = await getErc20Contract(swapOrder.tokenB);
    swapOrder.approveAmontA=await tokenBContract.methods.allowance().call({ owner: address,spender: swapOrder.poolsAddress});
    setSwapOrder(swapOrder);
  }

  

	return  <div className="Swap-content" >
  <div  className="swap-box" >
    <div className="swap-td"  >
      <div className="swap-flex-50-left" >Midaswap</div>
      <div  className="swap-flex-50-right" >
        <img className="swap-setting" src={require("../../assets/img/setting.png")}  alt="" />
      </div>
    </div>
    <div className="swap-line"  >
    </div>


    <div className="swap-token-one"  >
       <div className="swap-flex-50-left" >
          <div className="swap-token-select" >
              <img  className="swap-token-img"  src={require("../../assets/img/eth.png")} alt="" />
              <div>ETH</div>
              <DownOutlined />
          </div>
       </div>
       <div  className="swap-flex-50-right" >
          <Input  bordered={false} type="text" step={3} value={0.00} className="swap-input"  />
      </div>
    </div>

    <div className="swap-change"  >
        <div className="swap-line"></div>
        <div className="swap-change-img-bg" >
          <img  className="swap-change-img"  src={require("../../assets/img/change.png")} alt="" />
        </div>
    </div>

    <div className="swap-token-tow"  >
    <div className="swap-flex-50-left" >
          <div className="swap-token-select" >
              <img  className="swap-token-img"  src={require("../../assets/img/logo_r.png")} alt="" />
              <div>Azuki</div>
              <DownOutlined />
          </div>
       </div>
       <div  className="swap-flex-50-right" >
          <Input  bordered={false} type="text" step={3} value={0.00} className="swap-input"  />
      </div>
    </div>
    <div className="swap-text"  >
       Select Collegetions
    </div>


    <div className="swap-but"  >
       {textTre(text)?'Approval':<div  onClick={onClick} >{text}</div>} 
    </div>

  </div>
</div>

}
