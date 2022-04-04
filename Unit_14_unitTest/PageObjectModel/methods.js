const {Builder, By, until} = require("selenium-webdriver");
const assert = require("assert");

let Methods = function(){
    this.driver = new Builder().forBrowser("firefox").build()
    let driver = this.driver

    this.visit = function(theUrl) {
        return driver.get(theUrl);
    }

    this.quit = function() {
        return driver.quit();
    }

    this.clickByCSS = function(el){
        return driver.findElement(By.css(el)).click();
    }

    this.clickById = function(id){
        return driver.findElement(By.id(id)).click();
    }

    this.clickByXpath = function(xpath){ 
        return driver.findElement(By.xpath(xpath)).click();
    }
    
    this.sendTextById = function(id, text) {
        return driver.findElement(By.id(id)).sendKeys(text);
    }

    this.validateTabTitle = function(css, title) {
        let text = driver.findElement(By.css(css)).getAttribute('innerHTML')
        .then(function(text){assert.match(text, title)}) 
    }
    
    this.validateBashSyntax = function(xpath, text){
        let bashSyntax = driver.findElement(By.xpath(xpath)).getText()
        .then(function(bashSyntax){assert.match(bashSyntax, title)})
    }

    this.validatePast = function(css, text){
        let code = driver.findElement(By.css(css)).getText()
        .then(function(code){assert.strictEqual(code, text)})
        
    }
}

module.exports = Methods