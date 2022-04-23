module.exports = class PastebinPage {
  open(link) {
    return browser.url(link);
  }
};
