const PastebinDefaultPage = require("../pages/pastebinDefaultPage");
const { getChromeInstance, getFirefoxInstance } = require("../utils/getDriver");

describe("I-can-win-task", async () => {
  const driver = getChromeInstance();
  const pastebinDefaultPage = new PastebinDefaultPage(driver);

  before(async function () {
    this.timeout(15000);
    await pastebinDefaultPage.openURL("https://pastebin.com");
  });

  it("paste text to main form", async () => {
    await pastebinDefaultPage.sendText(
      pastebinDefaultPage.newPasteTextArea,
      "Hello from Webdriver"
    );
  });

  it("choose time expiration 10 min", async () => {
    await pastebinDefaultPage.clickElement(pastebinDefaultPage.clickDropDown);
    await pastebinDefaultPage.clickElement(
      pastebinDefaultPage.setExpirationTime
    );
  });

  it("send text to paste area", async () => {
    await pastebinDefaultPage.sendText(
      pastebinDefaultPage.newPasteName,
      "helloweb"
    );
  });

  after(async () => {
    await pastebinDefaultPage.closeBrowser();
  });
});
