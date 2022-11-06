
import { HomePage } from "./home";
import { BasePage, page, playVideo } from "./BasePage";
import { Footer } from "../components/Footer";
import { Common } from '../../app/Common'

@page('FirstPage')
export  class FirstPage extends BasePage {
  protected webContent() {
    return <div onClick={Common.closeNavigationTab}>
      <HomePage   />
    </div>
  }

  protected mobileContent(): JSX.Element {
    return <div> </div>
  }
}