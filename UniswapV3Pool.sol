// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './UniswapV3Factory.sol';
contract UniswapV3Pool {
    address public   factory;
    address public   token0;
    address public   token1;
    uint24 public   fee;

    constructor() {
        (factory, token0, token1, fee) = UniswapV3Factory(msg.sender).parameters();
    }

 
    

}