let abstractPage = require("./abstractPage");
const { By } = require("selenium-webdriver");

class resultPage extends abstractPage {
  constructor(driver) {
    super(driver);
    this.validateBashSyntax = By.xpath('//a[text()="Bash"]');
    this.validatePasteText = By.css('.textarea')
  }
}

module.exports = resultPage;
