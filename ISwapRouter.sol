// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

interface ISwapRouter {
     struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
    }

     struct PositionInfo {
        // the amount of liquidity owned by this position
        uint128 liquidity;
        int24 tickLower;
        int24 tickUpper;
        uint128 tokensOwed0;
        uint128 tokensOwed1;
    }

   function swap(ExactInputSingleParams calldata params) external payable;
   function  getAddressByNft(address nft_address) external view returns(address);
   function  getPiceCalc(address poolAddress, uint amount)external view returns(uint);
   function  getPools()external view returns(PositionInfo[] memory);


}