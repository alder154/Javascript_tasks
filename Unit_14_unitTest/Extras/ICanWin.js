const { Builder, By } = require("selenium-webdriver");

async function exampleFF() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://pastebin.com/");
  await driver
    .findElement(By.id("postform-text"))
    .sendKeys("Hello from WebDriver");

  await driver.findElement(By.id("postform-name")).sendKeys("helloweb");

  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver.findElement(By.xpath('//li[text()="10 Minutes"]')).click();

  await driver.findElement(By.css("button")).click();

  //await driver.quit();
}
exampleFF();
