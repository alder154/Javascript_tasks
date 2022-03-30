const Calc = require("../../app/calc2");
const { expect } = require("chai");

describe.skip("calculate numbers, negative scenarios", function () {
  let calc = new Calc();
  
  it("should return error", function () {
    expect(function () {
      Calc.multiply("a", 4);
    }).to.throw("n1 or n2 is not a valid number");
  });
});
