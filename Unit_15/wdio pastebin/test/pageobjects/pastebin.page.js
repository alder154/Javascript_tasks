module.exports = class pastebinPage {
  open(link) {
    return browser.url(link);
  }
};
