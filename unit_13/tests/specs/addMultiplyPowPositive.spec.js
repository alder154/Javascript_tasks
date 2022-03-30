const Calc = require('../../app/calc2');
const {expect} = require('chai');

describe('calculate numbers, positive scenarios', function() {
  let calc = new Calc;

  it('should return sum of two numbers', function() {
    expect(calc.add(5, 3)).to.be.equal(8);
  });
  it('should return product of two numbers', function() {
    expect(calc.multiply(2, 3)).to.equal(6);
  });
  it.skip('calculate the power (n2) of a number (n1', function() {
    expect(calc.pwr(2, 3)).equal(8);
  });
});
