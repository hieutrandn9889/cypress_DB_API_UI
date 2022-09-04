var elements = require("./elements");
class ResultPage {
  verifyFirstResult(search_keyword) {
    //matches partial text of result string
    // return cy
    //   .get(elements.RESULTPAGE.SEARCH_RESULT_FIRST)
    //   .text()
    //   .then((value) => {
    //     cy.log("Text is :", value);
    //     expect(value).to.include(search_keyword);
    //   });
    return cy.get(elements.RESULTPAGE.SEARCH_RESULT_FIRST).should("be.visible");
  }
}
export default ResultPage;
