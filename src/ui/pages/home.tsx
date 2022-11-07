import { BasePage, page, playVideo } from "./BasePage";
import { Common } from "../../app/Common";
import { Link } from 'react-router-dom'


@page('HomePage')
export class HomePage extends BasePage {



  protected webContent() {
    return <div className="home-content" >
      <div className="home-the" >The decentralized </div>
      <div className="home-nft" >NFT Marketplace </div>

      <div className="nft-list"  >
        <Link to={'/Nft_trade/0x1c08236d38ea33977981a9b66fcc4db1724e5dd6'} >
          <div className="nft-list-item">
            <img className="nft-logo" src={require("../../assets/img/logo.png")} alt="" />
            <div className="nft-name">RENGA Black Box</div>
            <div className="nft-zx">
              <img className="nft-up" src={require("../../assets/img/up.png")} alt="" />
              <div className="nft-up-text" >24.00%</div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text" >10.11</div>
              </div>
              <div style={{ width: "50%" }} className="flex-center" >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text"  >12.6</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
                Floor Price
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
                Best Offer
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
                67
              </div>

              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text">4.524</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Listings
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Offer Tvl
              </div>
            </div>
          </div>
        </Link>

        <Link  to={'/Nft_trade/0x1c08236D38ea33977981A9B66fCC4dB1724E5DD6'} >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/sudo.png")} alt="" />
            <div className="nft-name">Sudo Inu</div>
            <div className="nft-zx">
              <img className="nft-up" src={require("../../assets/img/up.png")} alt="" />
              <div className="nft-up-text" >24.00%</div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text" >2.920</div>
              </div>
              <div style={{ width: "50%" }} className="flex-center" >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text"  >2.920</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
                Floor Price
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
                Best Offer
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
                67
              </div>

              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text">4.524</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Listings
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Offer Tvl
              </div>
            </div>
          </div>
        </Link>

        <Link to={'/Nft_trade/0x1c08236D38ea33977981A9B66fCC4dB1724E5DD6'} >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/0xmons.png")} alt="" />
            <div className="nft-name">0xmons</div>
            <div className="nft-zx">
              <img className="nft-up" src={require("../../assets/img/down.png")} alt="" />
              <div className="nft-down-text" >24.00%</div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text" >10.11</div>
              </div>
              <div style={{ width: "50%" }} className="flex-center" >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text"  >12.6</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
                Floor Price
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
                Best Offer
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
                67
              </div>

              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text">4.524</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Listings
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Offer Tvl
              </div>
            </div>
          </div>
        </Link>

        <Link to={'/Nft_trade/0x1c08236D38ea33977981A9B66fCC4dB1724E5DD6'} >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/based.png")} alt="" />
            <div className="nft-name">Based Ghouls</div>
            <div className="nft-zx">
              <img className="nft-up" src={require("../../assets/img/down.png")} alt="" />
              <div className="nft-down-text" >24.00%</div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text" >10.11</div>
              </div>
              <div style={{ width: "50%" }} className="flex-center" >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text"  >12.6</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text-b"  >
                Floor Price
              </div>

              <div style={{ width: "50%" }} className="flex-center nft-eth-text2"  >
                Best Offer
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center  nft-eth-text"  >
                67
              </div>

              <div style={{ width: "50%" }} className="flex-center"  >
                <img className="nft-eth" src={require("../../assets/img/eth.png")} alt="" />
                <div className="nft-eth-text">4.524</div>
              </div>
            </div>
            <div className="nft-zx">
              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Listings
              </div>
              <div style={{ width: "50%" }} className="flex-center nft-eth-text2" >
                Offer Tvl
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  }

  protected mobileContent(): JSX.Element {
    return <div>
    </div>
  }
}
