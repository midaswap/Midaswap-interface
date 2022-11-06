// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./ISwapRouter.sol";

contract SwapRouter is ISwapRouter  {

    
    function swap(ExactInputSingleParams calldata params) external payable{

    }

   function  getAddressByNft(address nft_address) external view returns(address){

   }


   function  getPiceCalc(address poolAddress, uint amount)external view returns(uint){

   }

   function  getPools()external view returns(PositionInfo[] memory){

   }
}