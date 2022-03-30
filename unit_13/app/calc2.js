class Calc {
  validateNumbers(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("n1 or n2 is not a valid number");
    }
  }

  add(n1, n2) {
    this.validateNumbers(n1, n2);
    return n1 + n2;
  }

  multiply(n1, n2) {
    this.validateNumbers(n1, n2);
    return n1 * n2;
  }

  pwr(n1, n2) {
    return n1 ** n2;
  }
}

module.exports = Calc;
