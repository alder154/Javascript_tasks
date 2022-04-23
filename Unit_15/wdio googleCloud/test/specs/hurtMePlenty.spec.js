const googleCalcPage = require("../pageobjects/googleCalc.page");
const GCloudSetupPage = require("../pageobjects/googleCalc.page");

describe("Hurt-me-plenty task", async () => {
  let link = "https://cloud.google.com/";
  let cost = " 4,026.13";

  before(async () => {
    await GCloudSetupPage.open(link);
    await GCloudSetupPage.navigateToComputeEngine();
    await GCloudSetupPage.switchToCalcFrame();
    await GCloudSetupPage.setParamToCalc();
  });

  it("validate total cost", async () => {
    let price = await GCloudSetupPage.price;
    await expect(price).toHaveTextContaining(cost);
  });

  it("validate VMClass", async () => {
    let VMClass = await GCloudSetupPage.VMClass;
    await expect(VMClass).toHaveTextContaining("regular");
  });

  it("validate instance type", async () => {
    let instType = await GCloudSetupPage.instType;
    await expect(instType).toHaveTextContaining("n1-standard-8");
  });

  it("validate region", async () => {
    let region = await GCloudSetupPage.region;
    await expect(region).toHaveTextContaining("Frankfurt");
  });

  it("validate SSD setup", async () => {
    let SSD = await GCloudSetupPage.SSD;
    await expect(SSD).toHaveTextContaining("2x375");
  });

  it("validate commitment term", async () => {
    let term = await GCloudSetupPage.term;
    await expect(term).toHaveTextContaining("1 Year");
  });
});
