const PastebinPage = require("./pastebin.page");

class PastebinResultPage extends PastebinPage {
  get bashSyntax() {
    return $('//a[text()="Bash"]');
  }

  get pasteText() {
    return $(".textarea");
  }
}

module.exports = new PastebinResultPage();
