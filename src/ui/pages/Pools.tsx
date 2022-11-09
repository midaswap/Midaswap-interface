import { BasePage, page } from "./BasePage";
import { Link } from "react-router-dom";
import { CPools} from "../components/CPools";


@page("Pools")
export class Pools extends BasePage {
   protected webContent() {
      return <CPools></CPools>
   }
   protected mobileContent(): JSX.Element {
      return <div>

      </div>
   }
}
