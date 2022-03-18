//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let names = ["Olga", "Roman", "Yana", "Oleg"];
let result = names.map(function (item, index, array) {
  return "hello " + item;
});
console.log(result);

/*Дан массив состоящий из названий фильмов, выполните перебор массива 
с выводом в консоль названия каждого фильма*/

let movies = ["matrix", "die hard", "snatch", "shrek 3"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let manufactures = ["audi", "bmw", "fiat", "lada"];
let str = manufactures.join(",");
console.log(str);
manufactures = str.split(",");
console.log(manufactures);

// Преобразовать числовой массив в Boolean
let numbersToBoolean = [1, 0, 7, 8, 0, 0, 5, 6];
let boolArray = numbersToBoolean.map(function (item, index, array) {
  return Boolean(item);
});
console.log(boolArray);

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let numbersToFilter = [1, 6, 7, 8, 3, 4, 5, 6];
let filtered = numbersToFilter.filter((n) => n > 3);
console.log(filtered);

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let decreaseNumbers = [1, 6, 7, 8, 3, 4, 5, 6];
decreaseNumbers.sort(function (a, b) {
  return b - a;
});
console.log(decreaseNumbers);

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function callArray(indexArray, n) {
  for (let i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === n) {
      return i;
    }
  }
}
console.log(callArray([8, 7, 6, 6, 5, 4, 3, 1], 6));

//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

function lessThan10(a) {
  while (a >= 10) {
    console.log(a);
    a--;
  }
}

//Реализовать цикл, который выводит в консоль простые числа

function isPrimeNumber(x) {
  if (x === 2) return x;
  for (n = 2; n < x; n++) {
    if (x % n === 0) {
      return false;
    }
  }
  return x;
}

function primeNumberList(nmbr) {
  for (let k = 2; k <= nmbr; k++) {
    if (isPrimeNumber(k)) {
      console.log(k);
    }
  }
}

//Реализовать цикл, который выводит в консоль нечетные числа

function oddNumbers(num) {
  for (let j = 1; j <= num; j += 2) {
    console.log(j);
  }
}
