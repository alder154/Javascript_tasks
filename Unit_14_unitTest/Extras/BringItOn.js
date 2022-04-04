const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

async function exampleFF() {
  let driver = await new Builder().forBrowser("firefox").build();
  let text = `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
  await driver.get("https://pastebin.com");
  //await driver.get("https://pastebin.com/J6nX1w06");
  await driver.findElement(By.id("postform-text")).sendKeys(text);

  await driver.findElement(By.id("select2-postform-format-container")).click();
  await driver.findElement(By.xpath("//li[text()='Bash']")).click();

  await driver
    .findElement(By.id("select2-postform-expiration-container"))
    .click();
  await driver.findElement(By.xpath('//li[text()="10 Minutes"]')).click();

  await driver
    .findElement(By.id("postform-name"))
    .sendKeys("how to gain dominance among developers");

  await driver.findElement(By.css("button")).click();

  driver.manage().setTimeouts({ implicit: 20000, pageLoad: 10000 });
  driver.sleep(1000);
  driver.manage().timeouts().implicitlyWait(1000);

  //Заголовок страницы браузера соответствует Paste Name / Title
  let title = await driver
    .findElement(By.css("head title"))
    .getAttribute("innerHTML");
  assert.match(title, /how to gain dominance among developers/);

  // Синтаксис подвечен для bash

  let bashSyntax = await driver
    .findElement(By.xpath('//a[text()="Bash"]'))
    .getText();
  assert.strictEqual(bashSyntax, "Bash");

  // Проверить что код соответствует введенному в пункте 2

  let code = await driver.findElement(By.css(".textarea")).getText();
  assert.strictEqual(code, text);
  await driver.quit();
}
exampleFF();
