import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {connectReducer} from "../slices/ConnectSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {mintReducer} from "../slices/MintSlice";

export const Store = configureStore({
	reducer: {
		connect: connectReducer,
		mint: mintReducer
	}
})

export type AppDispatch = typeof Store.dispatch;
export type State = ReturnType<typeof Store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
