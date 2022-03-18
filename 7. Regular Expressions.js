/*Дана строка 'ahb acb aeb aeeb adcb axeb'. 
Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: 
буква 'a', любой символ, буква 'b'*/

let str1 = "ahb acb aeb aeeb adcb axeb";
console.log(str1.match(/a.b/g));

/*ана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, 
не захватив остальные*/

let str2 = "2+3 223 2223";
console.log(str2.match(/2\+3/));

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль:
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
console.log(`${day}\n${month}\n${year}`);
