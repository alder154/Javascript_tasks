const { Builder } = require("selenium-webdriver");

function getFirefoxInstance() {
  return new Builder().forBrowser('firefox').build();
}

function getChromeInstance() {
    return new Builder().forBrowser("chrome").build();
}

module.exports = { getFirefoxInstance , getChromeInstance }; //const { getChromeInstance } = require ('../utils/getDriver')