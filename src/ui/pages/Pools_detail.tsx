import { BasePage, page } from "./BasePage";

import { CPools_detail } from "../components/CPools_detail";


@page("Pools_detail")
export class Pools_detail extends BasePage {

  protected webContent() {

    return  <CPools_detail></CPools_detail>

    
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
