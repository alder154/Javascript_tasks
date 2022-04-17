const gCloudPage = require("./gCloud.page");
class gCloudSetupPage extends gCloudPage {
  async open(link) {
    return super.open(link);
  }

  get goSearch() {
    return $(".devsite-search-container");
  }
  get searchLine() {
    return $(".devsite-search-field");
  }
  get clickSearchRes() {
    return $('//b[text()="Google Cloud Pricing Calculator"]');
  }
  async navigateToComputeEngine() {
    await this.goSearch.click();
    await this.searchLine.setValue(
      "Google Cloud Platform Pricing Calculator\uE007"
    );
    await this.clickSearchRes.click();
  }

  get frame1() {
    return $('//*[@id="cloud-site"]/devsite-iframe/iframe');
  }
  get calcFrame() {
    return $("#myFrame");
  }
  async switchToCalcFrame() {
    const element1 = await this.frame1;
    await browser.switchToFrame(element1);
    const element2 = await this.calcFrame;
    await browser.switchToFrame(element2);
    await $('//*[text()="Compute Engine"]').click();
    await browser.switchToFrame(element1);
  }

  get computeEngine() {
    return $('//*[text()="Compute Engine"]');
  }
  get numberInstances() {
    return $("#input_81");
  }
  get setOSDropDown() {
    return $("#select_value_label_73");
  }
  get setFreeOS() {
    return $("#select_option_83");
  }
  get machineClassDropDown() {
    return $("#select_value_label_74");
  }
  get machineClassRegular() {
    return $('//*[@id="select_option_96"]/div[1]');
  }
  get instSeriesDropDown() {
    return $("#select_value_label_76");
  }
  get instSeriesN1() {
    return $("#select_option_221");
  }
  get mashTypeDropDown() {
    return $("#select_value_label_77");
  }
  get mashTypeN130Gb() {
    return $("#select_option_424");
  }
  get addGPU() {
    return $(
      '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[11]/div[1]/md-input-container/md-checkbox'
    );
  }
  get GPUDropDown() {
    return $("#select_457");
  }
  get TeslaV100() {
    return $("#select_option_464");
  }
  get GPUNumberDropDown() {
    return $("#select_value_label_456");
  }
  get addOneGpu() {
    return $("#select_option_468");
  }
  get SSDDropDown() {
    return $("#select_value_label_418");
  }
  get SSD2x375() {
    return $("#select_option_445");
  }
  get locationDropDown() {
    return $("#select_value_label_79");
  }
  get locationFrankfurt() {
    return $("#select_option_242");
  }
  get usageDropDown() {
    return $("#select_value_label_80");
  }
  get usage1Year() {
    return $("#select_option_119");
  }
  get estimateButton() {
    return $(
      '//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[18]/button'
    );
  }
  async setParamToCalc() {
    await this.computeEngine.click();
    await this.numberInstances.setValue("4");

    await this.setOSDropDown.click(); //ways to validate through expect??
    await this.setFreeOS.click(); //ways to validate through expect??

    await this.machineClassDropDown.click(); //ways to validate through expect??
    await this.machineClassRegular.click(); //ways to validate through expect??

    await this.instSeriesDropDown.click();
    await this.instSeriesN1.click();

    await this.instSeriesDropDown.click();
    await this.instSeriesN1.click();

    await this.mashTypeDropDown.click();
    await this.mashTypeN130Gb.click();

    await this.addGPU.click();

    await this.GPUDropDown.click();
    await this.TeslaV100.click();

    await this.GPUNumberDropDown.click();
    await this.addOneGpu.click();

    await this.SSDDropDown.click();
    await this.SSD2x375.click();

    await this.locationDropDown.click();
    await this.locationFrankfurt.click();

    await this.usageDropDown.click();
    await this.usage1Year.click();
    // await browser.switchToParentFrame()
    // await browser.switchToFrame(null)
    // const element1 = await $('//*[@id="cloud-site"]/devsite-iframe/iframe');
    // await browser.switchToFrame(element1)
    // const element2 = await $('//*[@id="myFrame"]');
    // await browser.switchToFrame(element2) 

    await this.estimateButton.click();
  }

  //VALIDATIONS:
  get price() {
    return $('//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/h2/b');
  }
  async validatePrice(cost) {
    await expect(this.price).toHaveTextContaining(cost);
  }

  get VMClass() {
    return $('//*[@id="compute"]/md-list/md-list-item[4]');
  }
  async validateVMClass() {
    await expect(this.VMClass).toHaveTextContaining("regular");
  }

  get instType() {
    return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]');
  }
  async validateInstType() {
    await expect(this.instType).toHaveTextContaining("n1-standard-8");
  }

  get region() {
    return $('//*[@id="compute"]/md-list/md-list-item[1]');
  }
  async validateRegion() {
    await expect(this.region).toHaveTextContaining("Frankfurt");
  }

  get SSD() {
    return $('//*[@id="compute"]/md-list/md-list-item[7]/div[1]');
  }
  async validateSSD() {
    await expect(this.SSD).toHaveTextContaining("2x375");
  }

  get term() {
    return $('//*[@id="compute"]/md-list/md-list-item[3]');
  }
  async validateTerm() {
    await expect(this.term).toHaveTextContaining("1 Year");  
  }
}

module.exports = new gCloudSetupPage();
