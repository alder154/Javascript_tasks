const gCloudPage = require("./gCloud.page");

class yopmailPage extends gCloudPage {
  get acceptCookies() {
    return $("#accept");
  }
  get chooseMail() {
    return $("#login");
  }
  get emailEstimate() {
    return $("#email_quote");
  }
  get myEmail() {
    return $('//*[@id="input_535"]');
  }
  get sendEmailButton() {
    return $('//*[@id="dialogContent_541"]/form/md-dialog-actions/button[2]');
  }
  get price() {
    return $('//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/h2/b');
  }
  get computeEngine() {
    return $('//*[text()="Compute Engine"]');
  }
  get mailPriceFarme() {
    return $("/html/body/md-content");
  }
  get priceFromGoogle() {
    return $('//*[@id="resultBlock"]/md-card/md-card-content/div/div/div/h2/b');
  }

  get mailPrice() {
    return $('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/h2');
  }
  get mailResultFrame() {
    return $("#ifmail");
  }

  async getPriceToYopmail(mailLink, mailLogin) {
    const tabGoogle = String(await browser.getWindowHandle());
    await browser.newWindow(mailLink);
    await this.acceptCookies.click(); //how to skip if no element?
    const tabYopmail = String(await browser.getWindowHandle());

    await this.chooseMail.setValue(mailLogin + "\uE007");
    await browser.switchToWindow(tabGoogle);
    await this.emailEstimate.click();
    await this.myEmail.setValue(mailLogin + "@yopmail.com");
    await this.sendEmailButton.click();
    await browser.switchToWindow(tabYopmail);
    await browser.pause(3000);
    browser.refresh();
    await this.mailResultFrame.waitForExist({ timeout: 3000 });

    let resultMail = await this.mailResultFrame; //missing 'ELEMENT' - можно как то в одну строку?
    await browser.switchToFrame(resultMail); //missing 'ELEMENT' - можно как то в одну строку?
    let priceFromMail = await await this.mailPrice.getText();
    await browser.switchToWindow(tabGoogle);
    await expect(this.priceFromGoogle).toHaveTextContaining(
      priceFromMail.slice(-8)
    );
    await browser.pause(1000);
  }
}
module.exports = new yopmailPage();
