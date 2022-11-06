

import impact from "../contracts/impact.json";
import {ChainId, web3} from "./Config";
import {AbiItem} from "web3-utils";
import {Contract} from "web3-eth-contract";

let contract: Contract;
export async function getContract() {
	if (!contract) {
		const networkId = ChainId;
		// @ts-ignore
		contract = new web3.eth.Contract(
			impact.abi as AbiItem[],
			impact.address
		);
		console.log("== contract ==", {contract, networkId});
	}
	return contract;
}
