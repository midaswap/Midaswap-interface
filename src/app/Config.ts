import Web3 from "web3";

export const TestMode = true;

export const MainChainId = 137;
export const TestChainId = 80001;
export const ChainId = TestMode ? TestChainId : MainChainId;

// @ts-ignore
export const ethereum = window["ethereum"] || undefined;
export const web3 = new Web3(ethereum);

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
	chainName: 'Mumbai',
	rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
	blockExplorerUrls:[''],
	nativeCurrency: {
		name: 'Mumbai',
		symbol: 'MATIC',
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

