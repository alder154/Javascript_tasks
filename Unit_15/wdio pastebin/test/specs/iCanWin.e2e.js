const PastebinDefaultPage = require("../pageobjects/pastebinDefault.page");

describe("I-can-win task", async () => {
  it("paste content", async () => {
    let pasteText = "Hello from Webdriver";
    let pasteTitle = "helloweb";
    await PastebinDefaultPage.open("https://pastebin.com/");
    await PastebinDefaultPage.pasteInfo(pasteText, pasteTitle);
  });
});
