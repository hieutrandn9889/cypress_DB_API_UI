import HomePageUI from "../interfaces/homePageUI";
import BasePage from "../intergration/basePage";

export default class HomeGooglePage extends BasePage {
  static clickSearchTxtBox() {
    this.clickGetElements(HomePageUI.SEARCH_TXTBOX);
  }
  static typeInSearchTxtBox(query) {
    this.typeElements(HomePageUI.SEARCH_TXTBOX_XPATH, query);
  }
  static submitSearchQuery() {
    cy.get(HomePageUI.SEARCH_TXTBOX).type("{enter}");
  }
}
