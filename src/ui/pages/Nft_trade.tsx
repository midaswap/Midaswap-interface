import { BasePage, page } from "./BasePage";
import { Tabs } from 'antd';
import { CNft_trade } from "../components/CNft_trade";

import {
   LeftOutlined,
   RightOutlined,
   DownOutlined
 } from '@ant-design/icons';

@page("Nft_trade")
export class   Nft_trade   extends BasePage {
  protected webContent() {
    return <CNft_trade></CNft_trade>
  }

  protected mobileContent(): JSX.Element {
    return <div>
      
    </div>
  }
}
