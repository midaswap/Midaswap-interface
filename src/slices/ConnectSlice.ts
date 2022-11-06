import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ChainDetail, ChainId, ethereum, web3} from "../app/Config";
import {State} from "../app/Store";

export interface ConnectState {
	status: "idle" | "loading" | "connected",
	address: string,
	balance: number,
	chainId?: number
}

const initialState: ConnectState = {
	status: "idle",
	address: "",
	balance: 0,
	chainId: ChainId
}

export const ConnectTask = createAsyncThunk(
	"connect/connectRequest",
	async (_, {rejectWithValue}) => {
		try {
			console.log("Connect", ethereum)
			if (!ethereum) window.location.href = "https://metamask.io/download/";

			const accounts: Array<string> = await ethereum?.request({method: 'eth_requestAccounts'});
			const address = accounts[0];
			const chainId: number = await web3.eth.getChainId();
			const balance: number = Number(await web3.eth.getBalance(address));

			return {address, chainId, balance};
		} catch (e: any) {
			return rejectWithValue(
				e?.code === 4001 ? "user rejected" : e?.reason
			);
		}
	})

export const SwitchTask = createAsyncThunk(
	"connect/switchNetwork",
	async (_,{rejectWithValue})=>{
	try {
		await ethereum?.request({
			method: 'wallet_switchEthereumChain',
			params: [{chainId: web3.utils.toHex(ChainId)}],
		});
	} catch (switchError) {
		try {
			await ethereum?.request({
				method: 'wallet_addEthereumChain',
				params: ChainDetail,
			});
		} catch (addError) {
			return rejectWithValue(addError);
		}
	}
})

export const ConnectSlice = createSlice({
	name: "connect",
	initialState,
	reducers: {
		updateAddress: (state, action)=>{
			state.address = action.payload;
		},
		updateBalance: (state, action)=>{
			state.balance = Number(action.payload);
		},
		updateChainId: (state, action)=>{
			state.chainId = Number(action.payload);
		},
		disconnect:() => {
			return initialState;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(ConnectTask.pending,(state)=>{
				state.status = "loading";
			})
			.addCase(ConnectTask.fulfilled,(state, action)=>{
				const {balance, chainId, address} = action.payload;
				state.status = "connected";
				state.balance = balance;
				state.address = address;
				state.chainId = chainId;
			})
			.addCase(ConnectTask.rejected,(state, action)=>{
				state.status = "idle";
				console.log(action.payload);
			})
			.addCase(SwitchTask.rejected, (_, action)=>{
				console.log(action.payload);
			})
	}
})

export const {
	updateAddress,
	updateBalance,
	updateChainId,
	disconnect
} = ConnectSlice.actions;

export const ConnectSelectors = {
	isConnected: (state: State) => state.connect.status == "connected",
	isLoading: (state: State) => state.connect.status == "loading",
	displayAddress: (state: State) =>
		`${state.connect.address.slice(0,6)}...${state.connect.address.slice(-5,-1)}`,

	userData: (state: State) => state.connect,
}

export const connectReducer = ConnectSlice.reducer;
