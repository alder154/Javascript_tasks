const Calc = require('../../app/calc');
const {expect} = require('chai');

describe('calculate numbers, positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calc();
  });
  this.afterEach(function() {
    validator = null;
  });
  it('should return sum of two numbers', function() {
    expect(validator.add(5, 3)).to.be.equal(8);
  });
  it('should return product of two numbers', function() {
    expect(validator.multiply(2, 3)).to.equal(6);
  });
  it('calculate the power (n2) of a number (n1', function() {
    expect(validator.pwr(2, 3)).equal(8);
  });
});

describe('calculate numbers, negative scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calc();
  });
  this.afterEach(function() {
    validator = null;
  });
  it('should return error', function() {
    // eslint-disable-next-line max-len
    expect(function() {
      validator.multiply('a', 4);
    }).to.throw('n1 or n2 is not a valid number');
  });
});
