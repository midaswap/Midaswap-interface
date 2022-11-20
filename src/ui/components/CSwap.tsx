import { State, useAppDispatch, useAppSelector } from "../../app/Store";
import { useEffect, useState } from "react";
import { ChainId, ethereum, web3 } from "../../app/Config";
import { useParams, Link } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { Input, InputNumber } from 'antd';
import { getErc20Contract, getErc721Contract, getUniswapV3Router } from "../../app/Contract";
import teamJSON from "../../store/team.json";
import { Progress, message } from 'antd';
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
  id: any,
  tokenA: any,
  tokenB: any,
  fractionNFTAddress: any
}



export function CSwap() {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector(ConnectSelectors.isConnected);
  const isLoading = useAppSelector(ConnectSelectors.isLoading);
  const displayAddress = useAppSelector(ConnectSelectors.displayAddress);
  const { address, chainId } = useAppSelector(ConnectSelectors.userData);

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
    poolsAddress: "",
    nft_address: "",
    tokenA: "",
    tokenB: "  ",
    teams: [{ addres: "", amount: 0, name: '', logo: '', approve: 0 }, { addres: "", amount: 0, name: '', logo: '', approve: 0 }]
  });

  const [poolInfoArray, setPoolInfoArray] = useState([] as Array<PoolInfo>);

  function textTre(text: any) {
    return "SWITCH,CONNECT".indexOf(text) == -1;
  }

  useEffect(() => {
    if (address) {
      initSwap();
    }
  }, [address, dispatch]);

  async function approveErc20(_address: any) {
    debugger;
    const contract = await getErc20Contract(_address);
    contract.methods.approve(swapOrder.poolsAddress, web3.utils.toWei("999999999")).send({
      from: address
    }).on('error', (error: any) => {
      message.error(error);
      getApprove();
    }).on('transactionHash', (txHash: any) => {
      console.warn("transactionHash", txHash)
    }).on('receipt', (receipt: any) => {
      message.success("Success");
      getApprove();
    })
  }

  async function swap() {
    const uniswapV3Router = await getUniswapV3Router();
    uniswapV3Router.methods.swap(swapOrder.poolsAddress, swapOrder.teams[1].addres, web3.utils.toWei(swapOrder.teams[0].amount + "")).send({
      from: address
    }).on('error', (error: any) => {
      message.error(error);
    }).on('transactionHash', (txHash: any) => {
      console.warn("transactionHash", txHash)
    }).on('receipt', (receipt: any) => {
      message.success("Success");
    })
  }



  async function initSwap() {
    
    const uniswapV3Router = await getUniswapV3Router();
    let poolInfoList = await uniswapV3Router.methods.getPoolInfoArray().call();
    for (let index = 0; index < poolInfoList.length; index++) {
      const element = poolInfoList[index];
      let pools: PoolInfo = { poolsAddress: element[0], nft_address: element[1], id: element[2], tokenA: element[3], tokenB: element[4], fractionNFTAddress: element[5] }
      poolInfoArray.push(pools);
    }
    createSwapOrder(poolInfoArray[0])
  }

  async function changeInput(toAddres: any, amount: any, curentIndex: any, index: any) {
    const contract = await getUniswapV3Router();
    swapOrder.teams[curentIndex].amount = amount;
    swapOrder.teams[index].amount = Number(web3.utils.fromWei(await contract.methods.getTokenOut(swapOrder.poolsAddress, toAddres, web3.utils.toWei(amount + "")).call()));
    setSwapOrder({ ...swapOrder });
  }


  async function changeTeams() {
    let tema0 = swapOrder.teams[0];
    let tema1 = swapOrder.teams[1];
    let teams = [] as Array<{ addres: any, amount: any, name: any, logo: any, approve: any }>;
    teams.push(tema1);
    teams.push(tema0);
    swapOrder.teams = teams;
    setSwapOrder({ ...swapOrder });
  }

  async function getApprove() {
    const tokenBContract = await getErc20Contract(swapOrder.tokenB);
    swapOrder.teams[0].approve = await tokenBContract.methods.allowance(address, swapOrder.poolsAddress).call();
    const tokenAContract = await getErc20Contract(swapOrder.tokenA);
    swapOrder.teams[1].approve = await tokenAContract.methods.allowance(address, swapOrder.poolsAddress).call();
    setSwapOrder({ ...swapOrder });
  }

  async function createSwapOrder(poolInfo: PoolInfo) {
    swapOrder.tokenA = poolInfo.tokenA;
    swapOrder.tokenB = poolInfo.tokenB;
    swapOrder.nft_address = poolInfo.nft_address;
    swapOrder.poolsAddress = poolInfo.poolsAddress;
    let teams = [] as Array<{ addres: any, amount: any, name: any, logo: any, approve: any }>
    teams.push({ addres: swapOrder.tokenB, amount: 0, name: teamJSON[poolInfo.tokenB].name, logo: teamJSON[poolInfo.tokenB].logo, approve: "" });
    teams.push({ addres: swapOrder.tokenA, amount: 0, name: teamJSON[poolInfo.nft_address].name, logo: teamJSON[poolInfo.nft_address].logo, approve: "" });
    swapOrder.teams = teams;
    setSwapOrder({ ...swapOrder });
    getApprove();
  }




  return <div className="Swap-content" >
    <div className="swap-box" >
      <div className="swap-td"  >
        <div className="swap-flex-50-left" >Midaswap</div>
        <div className="swap-flex-50-right" >
          <img className="swap-setting" src={require("../../assets/img/setting.png")} alt="" />
        </div>
      </div>
      <div className="swap-line"  >
      </div>


      <div className="swap-token-one"  >
        <div className="swap-flex-50-left" >
          <div className="swap-token-select" >
            {swapOrder.teams[0].logo ? <img className="swap-token-img" src={require("../../assets/img/" + swapOrder.teams[0].logo)} alt="" /> : ""}
            <div>{swapOrder.teams[0].name}</div>
            <DownOutlined />
          </div>
        </div>
        <div className="swap-flex-50-right" >
          <InputNumber bordered={false} controls={false} value={swapOrder.teams[0].amount} onChange={(e) => { changeInput(swapOrder.teams[1].addres, e, 0, 1) }} className="swap-input" />
        </div>
      </div>

      <div className="swap-change"  >
        <div className="swap-line"></div>
        <div className="swap-change-img-bg" onClick={() => { changeTeams() }} >
          <img className="swap-change-img" src={require("../../assets/img/change.png")} alt="" />
        </div>
      </div>

      <div className="swap-token-tow"  >
        <div className="swap-flex-50-left" >
          <div className="swap-token-select" >
            {swapOrder.teams[1].logo ? <img className="swap-token-img" src={require("../../assets/img/" + swapOrder.teams[1].logo)} alt="" /> : ''}

            <div>{swapOrder.teams[1].name}</div>
            <DownOutlined />
          </div>
        </div>
        <div className="swap-flex-50-right" >
          <InputNumber bordered={false} controls={false} value={swapOrder.teams[1].amount} onChange={(e) => { changeInput(swapOrder.teams[0].addres, e, 1, 0) }} className="swap-input" />
        </div>
      </div>
      <div className="swap-text"  >
        Select Collegetions
      </div>


      <div className="swap-but"  >
        {textTre(text) ? swapOrder.teams[0].approve > 0 ? <div onClick={swap}  >Swap</div> : <div onClick={() => { approveErc20(swapOrder.teams[0].addres) }}  >Approval</div> : <div onClick={onClick} >{text}</div>}
      </div>

    </div>
  </div>

}
