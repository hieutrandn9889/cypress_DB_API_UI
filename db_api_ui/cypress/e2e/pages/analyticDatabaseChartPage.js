import AnalyticDatabaseChartUI from "../interfaces/analyticDatabaseChartUI";
import BasePage from "../intergration/basePage";

export default class AnalyticDatabaseChartPage extends BasePage {
  static enterUrlToAnalytic(url) {
    this.enterUrl(url);
  }

  static showUrl(url) {
    this.logUrl(url);
  }

  static inputSearch(valueSearch) {
    this.typeElements(AnalyticDatabaseChartUI.inputSearch, valueSearch);
    cy.wait(1000);
  }

  static inputPredictedTarget(valuePredictedTarget) {
    this.typeElementsEnter(
      AnalyticDatabaseChartUI.predictedTarget,
      valuePredictedTarget
    );
    cy.wait(1000);
  }

  static inputComparedFactors(valuePredictedTarget) {
    this.typeElementsEnter(
      AnalyticDatabaseChartUI.comparedFactors,
      valuePredictedTarget
    );
    cy.wait(1000);
  }

  static clickTableAnalysis() {
    this.clickElements(AnalyticDatabaseChartUI.tableAnalysis);
  }

  static clickClassificationAnalysis() {
    this.clickElements(AnalyticDatabaseChartUI.imgClassification);
  }

  static clickRegressionAnalysis() {
    this.clickElements(AnalyticDatabaseChartUI.imgRegression);
  }

  static clickSegmentationAnalysis() {
    this.clickElements(AnalyticDatabaseChartUI.imgSegmentationAnalysis);
  }

  static clickCorrelationalAnalysis() {
    this.clickElements(AnalyticDatabaseChartUI.imgCorrelationalAnalysis);
  }

  static removeId() {
    this.clickElements(AnalyticDatabaseChartUI.removeId);
  }

  static removeSpecies() {
    this.clickElements(AnalyticDatabaseChartUI.removeSpecies);
  }

  static runQueryBtn() {
    this.clickElements(AnalyticDatabaseChartUI.runQueryBtn);
  }

  static verifyResultCorrelational() {
    this.verifyXpathVisibleElement(
      AnalyticDatabaseChartUI.verifyResultCorrelational,
      5000
    );
  }

  static verifyResultDataImpitation() {
    this.verifyXpathVisibleElement(
      AnalyticDatabaseChartUI.verifyResultDataImpitation,
      500000
    );
  }

  static verifyResultRegressionClassification() {
    this.verifyXpathVisibleElement(
      AnalyticDatabaseChartUI.verifyResultRegressionClassification,
      5000
    );
  }

  static verifyResultSegmentation() {
    this.verifyXpathVisibleElement(
      AnalyticDatabaseChartUI.verifyResultSegmentation,
      500000
    );
  }

  static verifyResultMultivariateUnivariate() {
    this.verifyXpathVisibleElement(
      AnalyticDatabaseChartUI.verifyResultMultivariateUnivariate,
      500000
    );
  }
}
