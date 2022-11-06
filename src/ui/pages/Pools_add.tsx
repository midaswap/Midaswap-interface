import { BasePage, page } from "./BasePage";
import { CPools_add } from "../components/CPools_add";

@page("Pools")
export class PoolsAdd extends BasePage {
  protected webContent() {
    return <CPools_add></CPools_add>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
