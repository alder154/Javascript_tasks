const pastebinPage = require("./pastebin.page");

class pastebinResultPage extends pastebinPage {
  get bashSyntax() {
    return $('//a[text()="Bash"]');
  }

  get pasteText() {
    return $(".textarea");
  }
}

module.exports = new pastebinResultPage();
