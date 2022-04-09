const PastebinDefaultPage = require("../pages/pastebinDefaultPage");
const PastebinResultPage = require("../pages/pastebinResultPage");
const { getChromeInstance, getFirefoxInstance } = require("../utils/getDriver");
const {expect} = require ('chai');

describe("Bring-it-on", async () => {
  const driver = getChromeInstance();
  const pastebinDefaultPage = new PastebinDefaultPage(driver);
  const pastebinResultPage = new PastebinResultPage(driver);
  const textPaste = `git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force`
  const textTitle = "how to gain dominance among developers"

  before(async function () {
    this.timeout(15000);
    await pastebinDefaultPage.openURL("https://pastebin.com");

  });

  it("paste text to main form", async () => {
    await pastebinDefaultPage.sendText(
      pastebinDefaultPage.newPasteTextArea,
      textPaste
    );
  });

  it("choose Bash highlight", async () => {
      await pastebinDefaultPage.clickElement(pastebinDefaultPage.clickDropDownBash);
      await pastebinDefaultPage.clickElement(pastebinDefaultPage.clickBash)
  })

  it("choose time expiration 10 min", async () => {
    await pastebinDefaultPage.clickElement(pastebinDefaultPage.clickDropDown);
    await pastebinDefaultPage.clickElement(
      pastebinDefaultPage.setExpirationTime
    );
  });

  it("send text to paste area", async () => {
    await pastebinDefaultPage.sendText(
      pastebinDefaultPage.newPasteName,
      textTitle
    );
  });

  it.skip("click submit button", async () => {
      await pastebinDefaultPage.clickElement(pastebinDefaultPage.saveButton)
  })

  it("validate Bash syntax", async () => {
      const actualSyntax = await pastebinDefaultPage.getElement(pastebinResultPage.validateBashSyntax)
      expect(await actualSyntax.getText()).to.be.equal("Bash")
  })

  it("validate paste text", async () =>{
      const actualPasteText = await pastebinDefaultPage.getElement(pastebinResultPage.validatePasteText)
      PasteText = await actualPasteText.getText()
      console.log(PasteText)
      expect(await actualPasteText.getText()).to.be.equal(textPaste)
  })

  it("validate tab title", async () => {
    const actualTitle = await driver.getTitle();
    expect(actualTitle).to.include(textTitle)
})

  after(async () => {
    await pastebinDefaultPage.closeBrowser();
  });
});
