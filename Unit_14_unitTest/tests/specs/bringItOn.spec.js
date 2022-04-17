let Methods = require ('../../PageObjectModel/methods')

describe('bringItOn', function() {
    this.timeout(10000)
    let methods = new Methods();
    let text = `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`
    let textTitle = 'how to gain dominance among developers'

    it('open site', async function(){
        await methods.visit('https://pastebin.com/')
        //await methods.visit("https://pastebin.com/J6nX1w06");
    })

    it('send paste text', async function(){
        await methods.sendTextById('postform-text',text)
    })

    it('send title', async function(){
        await methods.sendTextById('postform-name',textTitle)
    })

    it('select expiration time', async function(){
        await methods.clickById('select2-postform-expiration-container')
        await methods.clickByXpath('//li[text()="10 Minutes"]')
    })

    it('hilightBash', async function(){
        await methods.clickById('select2-postform-format-container')
        await methods.clickByXpath('//li[text()="Bash"]')
    })

    it('save paste', async function(){
        await methods.clickByCSS('button')
    })

    it('validate tab title', async function(){
        await methods.validateTabTitle("head title", /textTitle/)
    })

    it('validate Bash syntax by xpath', async function(){
        await methods.validateBashSyntax('//a[text()="Bash"]','Bash')
    })

    it('validate past by CSS', async function(){
        await methods.validatePast('.textarea', text)
    })

    it('close browser', async function(){
        await methods.quit()
    })
})