function geterateMail() {
  let testMail = `test${(new Date().getTime() / 10) ^ 2}`;
  return testMail;
}
module.exports = { geterateMail };
