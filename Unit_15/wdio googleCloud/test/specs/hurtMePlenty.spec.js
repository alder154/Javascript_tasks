const gCloudSetupPage = require("../pageobjects/googleCalc.page");

describe("Hurt-me-plenty task", async () => {
  //let link = 'https://cloud.google.com/';
  let link = "https://cloudpricingcalculator.appspot.com/";
  let price = "1,082";

  it("open browser", async () => {
    await gCloudSetupPage.open(link);
  });

  it.skip("navigate to COMPUTE ENGINE", async () => {
    await gCloudSetupPage.navigateToComputeEngine();
  });

  it.skip("switch to proper iFrame", async () => {
    await gCloudSetupPage.switchToCalcFrame();
  })

  it("calculate the price", async () => {
    await gCloudSetupPage.setParamToCalc();
  });

  it("validate total cost", async () => {
    await gCloudSetupPage.validatePrice(price);
  });

  it("validate VMClass", async () => {
    await gCloudSetupPage.validateVMClass();
  });

  it("validate instance type", async () => {
    await gCloudSetupPage.validateInstType();
  });

  it("validate region", async () => {
    await gCloudSetupPage.validateRegion();
  });

  it("validate SSD setup", async () => {
    await gCloudSetupPage.validateSSD();
  });

  it("validate commitment term", async () => {
    await gCloudSetupPage.validateTerm();
  });
});
