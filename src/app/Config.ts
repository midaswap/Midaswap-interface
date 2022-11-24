import Web3 from "web3";
export const TestMode = true;
export const MainChainId = 137;
export const TestChainId = 31415;
export const ChainId = TestMode ? TestChainId : MainChainId;
// @ts-ignore
export const ethereum = window["ethereum"] || undefined;

export const web3 = new Web3(new Web3.providers
	.HttpProvider("https://matic-mumbai.chainstacklabs.com"));
export type Chain = {
	chainId: string,
	chainName: string,
	rpcUrls: string[],
	blockExplorerUrls: string[],
	nativeCurrency: {
		name: string,
		symbol: string,
		decimals: number
	}
}


export const TestChainDetail: Chain = {
	chainId: web3.utils.toHex(TestChainId),
	chainName: 'Filecoin — Wallaby testnet',
	rpcUrls: ['https://wallaby.node.glif.io/rpc/v0'],
	blockExplorerUrls:['https://explorer.glif.io/wallaby'],
	nativeCurrency: {
		name: 'tFIL',
		symbol: 'tFIL',
		decimals: 18,
	}
}

export const MainChainDetail =  {
	chainId: web3.utils.toHex(MainChainId),
	chainName: 'Polygon Mainnet',
	rpcUrls: ['https://polygon-rpc.com/'],
	blockExplorerUrls: ['https://polygonscan.com/'],
	nativeCurrency: {
		name: 'MATIC',
		symbol: 'MATIC',
		decimals: 18,
	}
}
export const ChainDetail = TestMode ? TestChainDetail : MainChainDetail

