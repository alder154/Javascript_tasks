let Methods = require ('../../PageObjectModel/methods')

describe.skip('iCanWin', function() {
  this.timeout(10000)
  let methods = new Methods();

  it('open site', function() {
    methods.visit('https://pastebin.com/')
  });
  
  it('send paste text', async function(){
    await methods.sendTextById('postform-text','Hello from WebDriver')
  })

  it('send title', async function(){
    await methods.sendTextById('postform-name','helloweb')
  })

  it('select expiration time', async function(){
    await methods.clickById('select2-postform-expiration-container')
    await methods.clickByXpath('//li[text()="10 Minutes"]')
  })

  it('save paste', async function(){
    await methods.clickByCSS('button')
  })

  it('quit site', async function(){
    await methods.quit()
  })
});