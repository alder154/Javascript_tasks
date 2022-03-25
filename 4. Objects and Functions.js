/*Создать объект car, добавить к нему свойство color со значением 'черный'
Изменить свойство color объекта car на 'зеленый'
В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя*/
let car = {
  color: "black",
};
car.color = "green";

car.hp = 350;
car.power = function () {
  console.log("this car is " + this.hp + " horsepower");
};

/* В терминале оплаты сохранено ваше имя, напишите функцию для определения 
имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)*/

function showMessage(userName) {
  if (userName === "Aleksandr") {
    console.log("Hello, " + userName + "!");
  } else {
    console.log("sorry, no such name");
  }
}

showMessage();

/*На склад принимают груши и яблоки, напишите функцию, которая возвращает результат 
сложения количества принятых груш и яблок*/

function fruitsAmount(apples, pears) {
  console.log("Total amount is " + (apples + pears) + " fruits!");
}

fruitsAmount();

//Напишите функцию вычисления типа аргумента и вывод типа в консоль

function yourArgumentType(argument) {
  console.log("Type of your argument is " + typeof argument);
}

yourArgumentType(10n);

//Напишите функцию, которая определяет является ли число простым или нет

function isPrime(x) {
  let flag = true;
  if (x < 2) {
    console.log(x + " is not a prime number");
  } else {
    for (let n = 2; n <= x ** 0.5; n++) {
      if (x % n === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(x + " is a prime number");
    } else {
      console.log(x + " is not a prime number");
    }
  }
}
