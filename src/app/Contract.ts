
import erc20 from "../contracts/erc20.json";
import erc721 from "../contracts/erc721.json";
import UniswapV3Router from "../contracts/UniswapV3Router.json";

import INonfungiblePositionManager from "../contracts/INonfungiblePositionManager.json";
import {ChainId, web3} from "./Config";
import {AbiItem} from "web3-utils";
import {Contract} from "web3-eth-contract";



export async function getErc20Contract(address:any) {
		// @ts-ignore
		return  new web3.eth.Contract(
			erc20.abi as AbiItem[],
			address
		);

}

export async function getErc721Contract(address:any) {
		const networkId = ChainId;
		// @ts-ignore
		return new web3.eth.Contract(
			erc721.abi as AbiItem[],
			address
		);
}

export async function getUniswapV3Router() {
		// @ts-ignore
		return new web3.eth.Contract(
			UniswapV3Router.abi as AbiItem[],
			UniswapV3Router.address
		);
}


export async function getINonfungiblePositionManager() {
	// @ts-ignore
	return new web3.eth.Contract(
		INonfungiblePositionManager.abi as AbiItem[],
		INonfungiblePositionManager.address
	);
}






export async function getTokenB() {
	// @ts-ignore
	return '0xD5e240836E500a099D0504107432C7aC52C82cB8';
}


