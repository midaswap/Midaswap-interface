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
        <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
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

        <Link  to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/bayc.avif")} alt="" />
            <div className="nft-name">Bored Ape Yacht Club</div>
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

        <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/orm.avif")} alt="" />
            <div className="nft-name">ORI by James Merrill</div>
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

        <Link to={'/Nft_trade/0xcBF0C718a28e904b4f3101E29AEb44193F0C6340'}  >
          <div className="nft-list-item" >
            <img className="nft-logo" src={require("../../assets/img/punk.avif")} alt="" />
            <div className="nft-name">CryptoPunks</div>
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
