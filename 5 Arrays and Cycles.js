/*Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello*/

let arr = ["Olga", "Roman", "Yana", "Oleg",];
let result = arr.map(function(item, index, array) {
    return ('hello ' + item);
});
console.log(result);


/*Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма*/

let arr = ['matrix', 'die hard', 'snatch', 'shrek 3'];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
};


//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arr = ["audi", "bmw", "fiat", "lada"];
let str = arr.join(',');
console.log(str);
arr = str.split(',');
console.log(arr);


// Преобразовать числовой массив в Boolean
let arr = [1,0,7,8,0,0,5,6];
let result = arr.map(function(item, index, array){
    return Boolean(item);
});
console.log(result);

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let arr = [1,6,7,8,3,4,5,6];
let result = []
for (let i=0; i<arr.length; i++){
    if (arr[i]>3){
        result.push(arr[i]);
    };
};
console.log(result);


//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arr = [1,6,7,8,3,4,5,6];
arr.sort(function(a,b){
    return b - a;
});
console.log(arr)


//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function callArray(arr, n){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]==n){
            return i;
            break;
        };
    };
};
console.log(callArray([8, 7, 6, 6, 5, 4, 3, 1], 6))



//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

let a = prompt('Enter a');
while (a < 10) {
    console.log(a);
    a = prompt("Enter next value");
  };


//Реализовать цикл, который выводит в консоль простые числа

console.log(1);
let n = 3;
nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  };
  console.log(i);
  i = Number(prompt("press enter for the next prime", i)); 
  if (i == 1) break;
  n=n+i;
};


//Реализовать цикл, который выводит в консоль нечетные числа

let a = 1;
while (a){
    console.log(a);
    a = Number(prompt('press enter for next number', a+=2));
}