const HmpConfig = require("../resources/hmpConfig.js");
class MyCloudConfig extends HmpConfig{
  constructor() {
  //constructor(cost, VMClass, instType, region, SSD, term) {
    this.cost = cost;
    this.VMClass = VMClass;
    this.instType = instType;
    this.region = region;
    this.SSD = SSD;
    this.term = term;
  }
}

// console.log(hurtMePl)
//const arry = getSetup();
// console.log(a);

//let hmp = new MyCloudConfig(arry);
console.log(MyCloudConfig);

// let nmf = new CloudConfig(hurtmeplenty())

// let hurtmeplenty = () => {

// }
