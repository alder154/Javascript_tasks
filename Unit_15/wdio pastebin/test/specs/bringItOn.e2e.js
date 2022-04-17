const pastebinDefaultPage = require("../pageobjects/pastebinDefault.page");
const pastebinResultPage = require("../pageobjects/pastebinResult.page");
describe("Bring-it-on task", async () => {
  let pasteText = `git config --global user.name  "New Sheriff in Town" \ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code") \ngit push origin master --force`;
  let pasteTitle = "how to gain dominance among developers";
  let link = "https://pastebin.com/"

  it("open browser", async () => {
    await pastebinDefaultPage.open(link);
  });

  it("paste content", async () => {
    await pastebinDefaultPage.pasteInfo(pasteText, pasteTitle);
  });

  it("choose bash", async () => {
    await pastebinDefaultPage.chooseBash();
    await browser.pause(3000);
  });

  it("save paste", async () => {
    await pastebinDefaultPage.savePaste();
  });

  it("validate Bash syntax", async () => {
    await expect(pastebinResultPage.bashSyntax).toHaveText("Bash");
  });

  it("validate tab title", async () => {
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(pasteTitle);
  });

  it("validate paste text itself", async () => {
    await expect(pastebinResultPage.pasteText).toHaveText(pasteText);
  });
});
