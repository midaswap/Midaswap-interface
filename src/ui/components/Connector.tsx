import {State, useAppDispatch, useAppSelector} from "../../app/Store";
import {useEffect} from "react";
import {ChainId, ethereum, web3} from "../../app/Config";
import { Button, Dropdown, Menu } from 'antd';


import {
	ConnectSelectors,
	ConnectTask,
	disconnect,
	SwitchTask,
	updateAddress,
	updateBalance,
	updateChainId
} from "../../slices/ConnectSlice";
import "./Connector.css";

export function Connector() {

	const dispatch = useAppDispatch();

	const isConnected = useAppSelector(ConnectSelectors.isConnected);
	const isLoading = useAppSelector(ConnectSelectors.isLoading);
	const displayAddress = useAppSelector(ConnectSelectors.displayAddress);
	const {address, chainId} = useAppSelector(ConnectSelectors.userData);

	console.log({dispatch,
		isConnected, isLoading, displayAddress, address, chainId
	})

	useEffect(() => {
		window.onload = async () => {
			const accounts = await web3.eth.getAccounts();
			accounts.length !== 0 && dispatch(ConnectTask());
		}

		ethereum?.on("disconnect", (e: any) => {
			console.error("disconnect", e);
		})
		ethereum?.on("accountsChanged", async (accounts: string[]) => {
			if (accounts.length === 0)
				dispatch(disconnect());
			else {
				dispatch(updateAddress(accounts[0]));
				const balance = await web3.eth.getBalance(accounts[0]);
				dispatch(updateBalance(balance));
			}
		})
		ethereum?.on("chainChanged", async (chainId: string) => {
			dispatch(updateChainId(chainId));
			const balance = await web3.eth.getBalance(address);
			dispatch(updateBalance(balance));
		});
	}, [address, dispatch]);

	function connect() {
		console.log("connect", ConnectTask())
		!isConnected && !isLoading && dispatch(ConnectTask());
	}
	function switch_() {
		dispatch(SwitchTask())
	}


	function Disconnect() {
		dispatch(disconnect())
	}


	const menu = (
		<Menu
		  items={[
			{
			  key: '1',
			  label: (
				<div className="label" onClick={Disconnect}  >
					  Disconnect
				</div>
			  ),
			},
		  ]}
		/>
	  );

	  function textTre(text:any){
		return "SWITCH,CONNECT".indexOf(text) == -1;
	  }

	

	const text = isLoading ? "CONNECTING..." :
		isConnected ? chainId === ChainId ?
			displayAddress : "SWITCH" : "CONNECT";

	const onClick = isLoading ? undefined :
		isConnected ? chainId === ChainId ?
			undefined : switch_ : connect;

	return <div>
			<div className="connector-box">
				<div className="connector">
					{textTre(text)? 
                           <Dropdown overlay={menu} placement="bottomLeft" arrow>
								<div  className="label">{text}</div>
						 </Dropdown>
						:<div  onClick={onClick} className="label">{text}</div>
				    }
				</div>
				
			</div>
		</div>

}
