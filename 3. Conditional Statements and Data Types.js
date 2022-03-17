//string+boolean, string+number, number+boolean)
console.log("1" + true);
console.log("abc" + false);

console.log("1" + 2);
console.log("abc" + 2);

console.log(2 + false);
console.log(2 + true);

//string * boolean, string * number, number * boolean
console.log("2" * true);
console.log("2" * false);
console.log("abc" * false); //NaN
console.log("abc" * true); //NaN

console.log(2 * false);
console.log(2 * true);

console.log("2" * 2);
console.log("abc" * 2); //NaN

//string/boolean, string/number, number/Boolean
console.log("2" / true);
console.log("2" / false); //infinity
console.log("abc" / true); //NaN
console.log("abc" / false); //Nan

console.log("2" / 2);
console.log("abc" / 2); //Nan

console.log(2 / true);
console.log(2 / false); //infinity
