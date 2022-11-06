// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./UniswapV3Pool.sol";

interface FractionNFT {
    function exchange721(address nftAddress,uint256 tokenId ) external payable;
    function exchange1155(address nftAddress,uint256 id, uint256 amount)external payable;
    function getVtokenAddress721(address nftAddress)external view returns(address);
    function getVtokenAddress1155(address nftAddress)external view returns(address);
}

contract UniswapV3Factory {

mapping(address => mapping(address => mapping(uint24 => address))) public  getPool;

function addPool721(address nft_address ,uint256 tokenId,) public (){
    

}


function addPool1155()public payable{
    

}






}