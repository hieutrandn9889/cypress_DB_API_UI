import ResultPageUI from "../interfaces/resultPageUI";
import BasePage from "../intergration/basePage";

export default class ResultGooglePage extends BasePage {
  static resultSearch() {
    this.verifyGetElements(ResultPageUI.SEARCH_RESULT_FIRST);
  }
}
