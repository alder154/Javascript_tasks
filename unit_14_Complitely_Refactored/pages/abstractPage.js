const { until } = require("selenium-webdriver");

class abstractPage {
  constructor(driver) {
    this.defaultTimeout = 15000;
    this.driver = driver;
  }
  async openURL(url) {
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
  }

  async getElement(locator) {
    await this.driver.wait(until.elementLocated(locator), this.defaultTimeout);
    return this.driver.findElement(locator);
  }

  async sendText(locator, text) {
    const elem = await this.getElement(locator);
    await elem.sendKeys(text);
  }

  async clickElement(locator) {
    const elem = await this.getElement(locator);
    await elem.click();
  }

  async closeBrowser() {
    await this.driver.quit();
  }
}

module.exports = abstractPage;
