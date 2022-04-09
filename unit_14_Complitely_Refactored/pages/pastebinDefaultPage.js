//место для прописывания локаторов

let abstractPage = require("./abstractPage");
const { By } = require("selenium-webdriver");

class defaultPage extends abstractPage {
  constructor(driver) {
    super(driver);
    this.newPasteTextArea = By.id("postform-text");
    this.newPasteName = By.id("postform-name");
    this.clickDropDown = By.id("select2-postform-expiration-container");
    this.setExpirationTime = By.xpath("//li[text()='10 Minutes']");
    this.saveButton = By.css("button");
    this.clickDropDownBash = By.id("select2-postform-format-container")
    this.clickBash = By.xpath("//li[text()='Bash']")
  }
}

module.exports = defaultPage;
