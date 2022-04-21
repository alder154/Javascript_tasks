const PastebinDefaultPage = require("../pageobjects/pastebinDefault.page");
const PastebinResultPage = require("../pageobjects/pastebinResult.page");
describe("Bring-it-on task", async () => {
  let pasteText = `git config --global user.name  "New Sheriff in Town" \ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code") \ngit push origin master --force`;
  let pasteTitle = "how to gain dominance among developers";
  let link = "https://pastebin.com/"

  it("open browser", async () => {
    await PastebinDefaultPage.open(link);
  });

  it("paste content", async () => {
    await PastebinDefaultPage.pasteInfo(pasteText, pasteTitle);
  });

  it("choose bash", async () => {
    await PastebinDefaultPage.chooseBash();
  });

  it("save paste", async () => {
    await PastebinDefaultPage.savePaste();
  });

  it("validate Bash syntax", async () => {
    await expect(PastebinResultPage.bashSyntax).toHaveText("Bash");
  });

  it("validate tab title", async () => {
    await expect(browser).toHaveTitleContaining(pasteTitle);
  });

  it("validate paste text itself", async () => {
    await expect(PastebinResultPage.pasteText).toHaveText(pasteText);
  });
});
