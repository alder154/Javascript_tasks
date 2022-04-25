const { getSetup } = require("../resources/hurtMePlConfig.js");
class CloudConfig {
  constructor(cost, VMClass, instType, region, SSD, term) {
    this.cost = cost;
    this.VMClass = VMClass;
    this.instType = instType;
    this.region = region;
    this.SSD = SSD;
    this.term = term;
  }
}

// console.log(hurtMePl)
const arry = getSetup();
// console.log(a);

let hmp = new CloudConfig(arry);
console.log(hmp);

// let nmf = new CloudConfig(hurtmeplenty())

// let hurtmeplenty = () => {

// }
