import { Then } from "cypress-cucumber-preprocessor/steps";
import AnalyticDatabaseChartPage from "../../../pages/analyticDatabaseChartPage";

Then("I enter url {string} to check", (url) => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.enterUrlToAnalytic(url);
});

Then("I show url {string}", (url) => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.showUrl(url);
});

Then("I input {string} in search textbox", (valueSearch) => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.inputSearch(valueSearch);
});

Then("I input {string} in predicted target", (valuePredictedTarget) => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.inputPredictedTarget(valuePredictedTarget);
});

Then("I input {string} in compared factors", (valueComparedFactors) => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.inputComparedFactors(valueComparedFactors);
});

Then("I click on table in analysis", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.clickTableAnalysis();
});

Then("I click on classification image", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.clickClassificationAnalysis();
});

Then("I click on regression image", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.clickRegressionAnalysis();
});

Then("I click on segmentation image", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.clickSegmentationAnalysis();
});

Then("I click on correlational image", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.clickCorrelationalAnalysis();
});

Then("I remove id", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.removeId();
});

Then("I remove species", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.removeSpecies();
});

Then("I click on run query button", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.runQueryBtn();
});

Then("I verify the result of dataImpitation", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.verifyResultDataImpitation();
});

Then("I verify the result of regressionClassification", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.verifyResultRegressionClassification();
});

Then("I verify the result of segmentation", () => {
  cy.wait(7000);
  AnalyticDatabaseChartPage.verifyResultSegmentation();
});

Then("I verify the result of correlational", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.verifyResultCorrelational();
});

Then("I verify the result of multivariateUnivariate", () => {
  cy.wait(1000);
  AnalyticDatabaseChartPage.verifyResultMultivariateUnivariate();
});
