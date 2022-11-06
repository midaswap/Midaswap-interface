import React from 'react';
import ReactDOM from 'react-dom/client';
import './ui/css/index.css';
import { Navigation } from "./ui/components/Navigation";
import { Provider } from "react-redux";
import { Store } from "./app/Store";
import { HomePage } from './ui/pages/home';
import { Pools } from './ui/pages/Pools';
import { PoolsAdd } from './ui/pages/Pools_add';


import { Swap } from './ui/pages/Swap';
import { Pools_detail } from './ui/pages/Pools_detail';



import { Nft_trade } from './ui/pages/Nft_trade';



import { Collections } from './ui/pages/Collections';
import { Footer } from "./ui/components/Footer";
import 'antd/dist/antd.css';
import 'swiper/css';
import {
  HashRouter as Router, 
  Route,
  Routes
} from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <div className='indexBox'>
          <div  className='indexContent' >
            <Navigation />
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/Collections' element={<Collections />}></Route>
              <Route path='/Pools' element={<Pools />}></Route>
              <Route path='/PoolsAdd/:address' element={<PoolsAdd />}></Route>
              <Route path='/Swap' element={<Swap />}></Route>
              <Route path='/Pools_detail/:address' element={<Pools_detail />}></Route>
              <Route path='/Nft_trade' element={<Nft_trade />}></Route>
            </Routes>
          </div>
        </div>

         <Footer></Footer>
        </Provider>
        
    </Router>
  </React.StrictMode>
)
