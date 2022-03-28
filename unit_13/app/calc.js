/**
 *
 *a simple class containing methods of adding and multiplying
 * @class Calc
 */
class Calc {
  /**
     * Creates an instance of Calc.
     * @memberof Calc
     */
  constructor() {
  }
  /**
     * ALSO WORKS:
     *
     * @param {*} n1 first component
     * @param {*} n2 second component
     * @return {*} sum of n1 and n2
     * @memberof Calc
     */
  add(n1, n2) {
    let type_n1 = typeof(n1);
    let type_n2 = typeof(n2);
    if (type_n1 !== 'number' || type_n2 !== 'number') {
      throw new Error('n1 or n2 is not a valid number');
    } else {
      return n1 + n2;
    }
  }

  // /**
  //    * ALSO WORKS:
  //    *
  //    * @param {*} n1 first component
  //    * @param {*} n2 second component
  //    * @return {*} sum of n1 and n2
  //    * @memberof Calc
  //    */
  // add(n1, n2) {
  //   try {
  //     return n1 + n2;
  //   } catch (err) {
  //     console.log('n1 or n2 is not a valid number');
  //   }
  // }
  /**
     *
     *
     * @param {*} n1 first multiplier
     * @param {*} n2 second multiplier
     * @return {*} product of n1 and n2
     * @memberof Calc
     */
  multiply(n1, n2) {
    let type_n1 = typeof(n1);
    let type_n2 = typeof(n2);
    if (type_n1 !== 'number' || type_n2 !== 'number') {
      throw new Error('n1 or n2 is not a valid number');
    } else {
      return n1 * n2;
    }
  }
  /**
   *
   *
   * @param {*} n1 base number
   * @param {*} n2 power number
   * @return {*}
   * @memberof Calc
   */
  pwr(n1, n2) {
    return n1**n2;
  }
}
module.exports = Calc;
