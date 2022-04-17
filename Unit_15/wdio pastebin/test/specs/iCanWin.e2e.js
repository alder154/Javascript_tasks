const pastebinDefaultPage = require("../pageobjects/pastebinDefault.page");

describe("I-can-win task", async () => {
  it("paste content", async () => {
    let pasteText = "Hello from Webdriver";
    let pasteTitle = "helloweb";
    await pastebinDefaultPage.open("https://pastebin.com/");
    await pastebinDefaultPage.pasteInfo(pasteText, pasteTitle);
    await browser.pause(5000);
  });
});
