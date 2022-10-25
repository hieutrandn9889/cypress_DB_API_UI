import HomePage from "../../../pages/homeGooglePage";
import ResultPage from "../../../pages/resultGooglePage";

Given("I open the Google web url", () => {
  cy.visit("/");
});

Then("I verify title of web page as {string}", (title) => {
  cy.title().should("include", title);
});

When("I provide search query as {string}", (query) => {
  HomePage.clickSearchTxtBox();
  HomePage.typeInSearchTxtBox(query);
  HomePage.submitSearchQuery();
});

Then(
  "Verify first search result to match {string} keyword",
  (search_keyword) => {
    let result = ResultPage.resultSearch(search_keyword);
  }
);
