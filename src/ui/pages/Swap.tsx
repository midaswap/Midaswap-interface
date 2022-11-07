import { BasePage, page } from "./BasePage";
import { CSwap} from "../components/CSwap";

@page("Swap")
export class Swap extends BasePage {
  protected webContent() {
    return <CSwap></CSwap>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
