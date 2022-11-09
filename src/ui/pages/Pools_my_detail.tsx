import { BasePage, page } from "./BasePage";

import { CPools_my_detail } from "../components/CPools_my_detail";


@page("Pools_my_detail")
export class Pools_my_detail extends BasePage {

  protected webContent() {

    return  <CPools_my_detail></CPools_my_detail>

  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
