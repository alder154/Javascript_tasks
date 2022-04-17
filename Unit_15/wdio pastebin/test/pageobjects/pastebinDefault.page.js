const pastebinPage = require("./pastebin.page");

class pastebinDefaultPage extends pastebinPage {
  get newPasteTextArea() {
    return $("#postform-text");
  }

  get newPasteName() {
    return $("#postform-name");
  }

  get clickDropDown() {
    return $("#select2-postform-expiration-container");
  }

  get setExpirationTime() {
    return $("//li[text()='10 Minutes']");
  }

  get clickDropDownBash() {
    return $("#select2-postform-format-container");
  }

  get clickBash() {
    return $("//li[text()='Bash']");
  }

  get saveButton() {
    return $("button");
  }

  async pasteInfo(pasteText, pasteTitle) {
    await this.newPasteTextArea.setValue(pasteText);
    await this.clickDropDown.click();
    await this.setExpirationTime.click();
    await this.newPasteName.setValue(pasteTitle);
  }

  async savePaste() {
    await this.saveButton.click();
  }

  async chooseBash() {
    await this.newPasteTextArea.scrollIntoView();
    await this.clickDropDownBash.click();
    await this.clickBash.click();
  }

  open(link) {
    return super.open(link);
  }
}

module.exports = new pastebinDefaultPage();
