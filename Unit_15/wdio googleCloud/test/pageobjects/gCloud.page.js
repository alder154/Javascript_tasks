module.exports = class GCloudPage {
  async open(link) {
    await browser.maximizeWindow();
    return await browser.url(link);
  }
};
