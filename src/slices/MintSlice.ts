import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ChainDetail, ChainId, ethereum, web3} from "../app/Config";
import {State} from "../app/Store";

// export type MintStateType = "hidden" | "pending" | "whiteList" | "publicSale";
export enum MintingState {
	start,
	notStart,
}

export interface MintState {
	state: MintingState,
	price: number,
	min: number, max: number,
	count: number
}

const initialState: MintState = {
	state: MintingState.notStart,
	price: 0,
	min: 1, max: 5,
	count: 1
}

export const MintTask = createAsyncThunk(
	"mint/mintRequest",
	async (_, {rejectWithValue}) => {
		try {
			if (!ethereum) window.location.href = "https://metamask.io/download/";

			const accounts: Array<string> = await ethereum.request({method: 'eth_requestAccounts'});
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

export const MintSlice = createSlice({
	name: "mint",
	initialState,
	reducers: {
		setState: {
			reducer(state, {payload}){
				state.state = payload.val;
			},
			prepare(val: MintingState) {
				return { payload: {val}, meta: undefined, error: undefined }
			}
		},
		setCount: {
			reducer(state, {payload}){
				const val = Math.round(payload.val);
				state.count = val > state.max ? state.max :
					val < state.min ? state.min : val;
			},
			prepare(val: number) {
				return { payload: {val}, meta: undefined, error: undefined }
			}
		},
		setPrice: {
			reducer(state, {payload}){
				state.price = payload.val;
			},
			prepare(val: number) {
				return { payload: {val}, meta: undefined, error: undefined }
			}
		},
		setMin: {
			reducer(state, {payload}){
				state.min = payload.val;
			},
			prepare(val: number) {
				return { payload: {val}, meta: undefined, error: undefined }
			}
		},
		setMax: {
			reducer(state, {payload}){
				state.max = payload.val;
			},
			prepare(val: number) {
				return { payload: {val}, meta: undefined, error: undefined }
			}
		},
	}
})

export const MintSelectors = {
	state: (state: State) => state.mint.state,
	price: (state: State) => state.mint.price,
	count: (state: State) => state.mint.count,
	min: (state: State) => state.mint.min,
	max: (state: State) => state.mint.max,
	totalPrice: (state: State) => state.mint.count * state.mint.price
}

export const { setState, setCount, setPrice, setMin, setMax } = MintSlice.actions;
export const mintReducer = MintSlice.reducer;
