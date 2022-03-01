//1, 2:

let str1 = 'ahb acb aeb aeeb adcb axeb';
let str2 = '2+3 223 2223';
console.log(str1.match(/a.b/g));
console.log(str2.match(/2\+3/));

//3:
let now = new Date()
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
console.log(`${day}\n${month}\n${year}`)