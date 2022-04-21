const GCloudSetupPage = require("../pageobjects/googleCalc.page");

describe("Hurt-me-plenty task", async () => {
  let link = "https://cloud.google.com/";
  let price = " 4,026.13";

  it("open browser", async () => {
    await GCloudSetupPage.open(link);
  });

  it("navigate to COMPUTE ENGINE", async () => {
    await GCloudSetupPage.navigateToComputeEngine();
  });

  it("switch to proper iFrame", async () => {
    await GCloudSetupPage.switchToCalcFrame();
  });

  it("calculate the price", async () => {
    await GCloudSetupPage.setParamToCalc();
  });

  it("validate total cost", async () => {
    await GCloudSetupPage.validatePrice(price);
  });

  it("validate VMClass", async () => {
    await GCloudSetupPage.validateVMClass();
  });

  it("validate instance type", async () => {
    await GCloudSetupPage.validateInstType();
  });

  it("validate region", async () => {
    await GCloudSetupPage.validateRegion();
  });

  it("validate SSD setup", async () => {
    await GCloudSetupPage.validateSSD();
  });

  it("validate commitment term", async () => {
    await GCloudSetupPage.validateTerm();
  });
});
