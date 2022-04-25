function getSetup () {
  cost = "4,026.13";
  VMClass = "regular";
  instType = "n1-standard-8";
  region = "Frankfurt";
  SSD = "2x375";
  term = "1 Year";
  //return cost ;
  return [ cost, VMClass, instType, region, SSD ];
};

module.exports = { getSetup };
