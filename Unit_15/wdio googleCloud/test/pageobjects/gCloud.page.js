module.exports = class gCloudPage {
  async open(link) {
    await browser.maximizeWindow();
    //await browser.fullscreenWindow(); //which one is preferable?
    return await browser.url(link);
  }
};
