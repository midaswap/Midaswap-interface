import { BasePage, page } from "./BasePage";
import { Link } from "react-router-dom";
import { COverview} from "../components/COverview";


@page("Overview")
export class Overview extends BasePage {
   protected webContent() {
      return <COverview></COverview>
   }
   protected mobileContent(): JSX.Element {
      return <div>

      </div>
   }
}
