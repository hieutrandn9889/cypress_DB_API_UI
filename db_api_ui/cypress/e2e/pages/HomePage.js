import HomePageUI from "../../interfaces/homePageUI";
import BasePage from "../../intergration/basePage";

export default class HomePage extends BasePage {
  static clickSearchTxtBox() {
    this.clickGetElements(HomePageUI.SEARCH_TXTBOX);
  }
  static typeInSearchTxtBox() {
    this.typeElements(HomePageUI.SEARCH_TXTBOX_XPATH);
  }
  static submitSearchQuery() {
    cy.get(HomePageUI.SEARCH_TXTBOX).type("{enter}");
  }
}
