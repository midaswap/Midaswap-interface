
import erc20 from "./contracts/erc20.json";
import erc721 from "./contracts/erc721.json";
import MidaswapV3Router from "./contracts/MidaswapV3Router.json";
import INonfungiblePositionManager from "./contracts/INonfungiblePositionManager.json";
import {ChainId, web3} from "./Config";
import {AbiItem} from "web3-utils";
import { useWeb3React } from '@web3-react/core';
import {ethers} from "ethers";

export async function getErc20Contract(address:any) {
		// @ts-ignore
		return  new web3.eth.Contract(
			erc20.abi as AbiItem[],
			address
		);

}

export async function getErc721Contract(address:any) {
		// @ts-ignore
		return new web3.eth.Contract(
			erc721.abi as AbiItem[],
			address
		);
}

export async function getMidaswapV3Router(signer:any) {
		// @ts-ignore
		return new ethers.Contract(MidaswapV3Router.address, MidaswapV3Router.abi, signer);
}


export async function getINonfungiblePositionManager() {
	// @ts-ignore
	return new web3.eth.Contract(
		INonfungiblePositionManager.abi as AbiItem[],
		INonfungiblePositionManager.address
	);
}




