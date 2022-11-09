import { BasePage, page } from "./BasePage";

import {
   LeftOutlined,
   RightOutlined
 } from '@ant-design/icons';

 import {Link} from "react-router-dom";


@page("Collections")
export class Collections extends BasePage {

 
  protected webContent() {
    return <div className="collections-content" >
        <div  className="Collections-text" >Collections</div>
        <div  className="Collections-text-1">
         Don't see a collection you want?
        </div>
        <div className="Collections-text-1">
          Directly list your NFTs, or create a new pool to buy and sell in bulk.
        </div>
        <div className="Collections-table" >
            <div className="Collections-table-header Collections-table-font" >
               <div style={{width:"17.6563vw"}} >Collegetions</div> 
               <div style={{width:"12.3958vw"}}> 24h Volume </div>    
               <div style={{width:"9.0625vw"}} > 24h% </div>               
               <div style={{width:"11.3542vw"}} > Floor Price </div>       
               <div style={{width:"11.5104vw"}} > Best Offer  </div>                           
               <div style={{width:"11.5104vw"}} > Offer TVL </div>                    
               <div> Listings </div>
            </div>

            <Link to={'/Nft_trade/0x7b105443a0f176dF53FB5CBA5A0AecB8A61C468F'}  >

          <div className="Collections-table-td-list" >
                  <div    className="Collections-table-font Collections-table-td">
                     <div style={{width:"17.6563vw"}} >
                        <img  className="Collections-table-td-img"  src={require("../../assets/img/azuki.png")} />
                        Azuki                                 
                     </div>
                     <div style={{width:"12.3958vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        1826.93                                 
                     </div>

                     <div style={{width:"9.0625vw"}}>
                     +9.8%                     
                     </div>
                     <div style={{width:"11.3542vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        11.053                             
                     </div>
                     <div style={{width:"11.5104vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        10.043                          
                     </div >
                     <div style={{width:"11.5104vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        307.30                          
                     </div>
                     <div >
                        #15                          
                     </div>
                  </div> 

                 
                        <div   className="Collections-table-font Collections-table-td">
                           <div style={{width:"17.6563vw"}} >
                              <img  className="Collections-table-td-img"  src={require("../../assets/img/azuki.png")} />
                              Azuki                                 
                           </div>
                           <div style={{width:"12.3958vw"}}>
                              <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                              1826.93                                 
                           </div>

                           <div style={{width:"9.0625vw"}}>
                           +9.8%                     
                           </div>
                           <div style={{width:"11.3542vw"}}>
                              <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                              11.053                             
                           </div>
                           <div style={{width:"11.5104vw"}}>
                              <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                              10.043                          
                           </div >
                           <div style={{width:"11.5104vw"}}>
                              <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                              307.30                          
                           </div>
                           <div >
                              #15                          
                           </div>
                        </div> 
                  <div   className="Collections-table-font Collections-table-td">
                     <div style={{width:"17.6563vw"}} >
                        <img  className="Collections-table-td-img"  src={require("../../assets/img/azuki.png")} />
                        Azuki                                 
                     </div>
                     <div style={{width:"12.3958vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        1826.93                                 
                     </div>

                     <div style={{width:"9.0625vw"}}>
                     +9.8%                     
                     </div>
                     <div style={{width:"11.3542vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        11.053                             
                     </div>
                     <div style={{width:"11.5104vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        10.043                          
                     </div >
                     <div style={{width:"11.5104vw"}}>
                        <img className="Collections-table-td-img"  src={require("../../assets/img/eth.png")}  />
                        307.30                          
                     </div>
                     <div >
                        #15                          
                     </div>
                  </div> 
          </div>
            </Link>



          <div className="Collections-table-page Collections-table-font" >
          <LeftOutlined />
           <div className="Collections-table-page-text" >Page 1 of 30</div>
          <RightOutlined />
         </div>




        </div>
        


        
        

    </div>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
