export default {
  verifyResultRegressionClassification: '//a[@id="tab-content-tab-prediction" and contains("Prediction", text())]',
  verifyResultDataImpitation: '//div[@class="header"]/span[contains("ProviderNumber", text())]',
  verifyResultSegmentation: '//a[@id="tab-content-tab-chart" and contains("Chart", text())]',
  verifyResultMultivariateUnivariate: '//a[@id="tab-content-tab-chart" and contains("Multi lines chart", text())]',
  verifyResultCorrelational:'(//div[@class="user-select-none svg-container"])[1]',
  tableAnalysis: '//span[@class="label label-default" and contains(text(), "Table")]',
  inputSearch:'//input[@placeholder="Search"]',
  imgClassification: '//img[@alt="Classification"]',
  imgRegression: '//img[@alt="Regression"]',
  imgSegmentationAnalysis: '//img[@alt="Segmentation Analysis"]',
  imgCorrelationalAnalysis: '//img[@alt="Correlational Analysis"]',
  predictedTarget: '(//div[@class="Select-placeholder"])[1]',
  comparedFactors:'(//div[@class="Select-placeholder"])[1]',
  removeId:'(//div[@class="Select-value"]/span[@class="Select-value-icon"])[1]',
  removeSpecies:'(//div[@class="Select-value"]/span[@class="Select-value-icon"])[5]',
  runQueryBtn: '//button[@type="button" and contains(text(), " Run Query")]'
}
