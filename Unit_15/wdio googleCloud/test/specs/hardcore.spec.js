const GCloudSetupPage = require("../pageobjects/googleCalc.page");
const yopmailPage = require("../pageobjects/yopmail.page");
const { generateMail } = require("../../utils/generateMail");

describe("Hardcore", async () => {
  let link = "https://cloud.google.com/";
  let yopmailLInk = "https://yopmail.com/";
  const mailLogin = generateMail();

  it("open browser", async () => {
    await GCloudSetupPage.open(link);
  });

  it("navigate to COMPUTE ENGINE", async () => {
    await GCloudSetupPage.navigateToComputeEngine();
  });

  it("switch to calc frame", async () => {
    await GCloudSetupPage.switchToCalcFrame();
  });

  it("calculate the price", async () => {
    await GCloudSetupPage.setParamToCalc();
  });

  it("get price email", async () => {
    await yopmailPage.getPriceToYopmail(yopmailLInk, mailLogin);
  });
});
