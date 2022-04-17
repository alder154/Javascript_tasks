const gCloudSetupPage = require("../pageobjects/googleCalc.page");
const yopmailPage = require("../pageobjects/yopmail.page")
const { geterateMail } = require("../pageobjects/generateMail");


describe('Hardcore', async () => {
  //let link = 'https://cloud.google.com/';
  let link = "https://cloudpricingcalculator.appspot.com/";
  let yopmailLInk = "https://yopmail.com/"
  const mailLogin = geterateMail()

  it("open browser", async () => {
    await gCloudSetupPage.open(link);
  });

  it.skip("navigate to COMPUTE ENGINE", async () => {
    await gCloudSetupPage.navigateToComputeEngine();
  });

  it("calculate the price", async () => {
    await gCloudSetupPage.setParamToCalc();
  });

  it("get price email", async() => {    
    await yopmailPage.getPriceToYopmail(yopmailLInk, mailLogin)
  })
});
