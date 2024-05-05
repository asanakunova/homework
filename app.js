//!  HomeWork 02.05.24
//? Задание 11
// Напишите функцию checkTask(arr), принимающую в
// аргументы массив с числами.
// Используя метод reduce(), найдите сумму всех
// элементов до первого нуля.
// Результат выведите в консоль.
// Например, для массива:
// [1, 2, 3, 0, 4, 5, 6]
// суммируем первые 3 элемента, так как дальше
// стоит элемент с числом 0.
// Вывод будет:
// 6

// function checkTask(arr) {
//   let res = 0;
//   arr.reduce((acc, el) => {
//     if (el === 0) {
//       res = acc;
//     } else {
//       return acc + el;
//     }
//   });
//   return res;
// }
// console.log(checkTask([1, 2, 3, 0, 4, 5, 6]));

//? Задание 12
// Напишите функцию checkTask(arr), принимающую в
// аргументы массив состоящий из других массивов.
// Используя метод reduce(), найдите сумму всех элементов.
// Результат выведите в консоль.
// Например, для массива:
// [1,2, [4,5,6], [7,8]]
// Вывод будет:
// 33

// function checkTask(arr) {
//   let res = arr.flat().reduce((acc, el) => acc + el, 0);
//   return res;
// }
// console.log(checkTask([1, 2, [4, 5, 6], [7, 8]]));

//? задание 13
// Напишите функцию checkTask(arr), которая принимает в аргументы
// массив и возвращает элемент массива с максимальным значением.
// К примеру, для массива:
// [4, 15, -4, 27, 12, 8];
// Возвращенным значением будет:
// 27
// Нельзя использовать sort()!

// const checkTask = (arr) => {
//   return arr.reduce((acc, el) => (acc > el ? acc : el));
// };
// console.log(checkTask([4, 15, -4, 27, 12, 8]));

//? 1 - задание
// Найти первый элемент в массиве, который больше 10.
// output: 40

// let arr = [1, 2, 5, 3, 6, 8, 40, 9, 70];
// let res = arr.find((el) => el > 10);
// console.log(res);

//? 2 - задание
// Проверить, все ли элементы массива являются положительными числами.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: false

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let positive = arr.every((el) => el > 0);
// console.log(positive);

//? 3 - задание
// Проверить, есть ли в массиве хотя бы один элемент, равный 0.
// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// output: true

// let arr = [5, 6, 3, 2, 7, 4, 0, 23, 16, 73, 28];
// let zero = arr.some((el) => el === 0);
// console.log(zero);

//? 4 - задание
// Найти первое четное число в массиве.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: 44

// let arr = [3, 5, 7, 1, 33, 77, 44];
// let firstNum = arr.find((el) => el % 2 === 0);
// console.log(firstNum);

//? 5 - задание
// Проверить, все ли строки в массиве содержат более 5 символов.
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: false

// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdylaziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.every((el) => el.length > 5);
// console.log(res);

//? 6 - задание
// Проверить, есть ли в массиве хотя бы одно отрицательное число.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let negative = arr.some((el) => el <= 0);
// console.log(negative);

//? 7 - задание
// Найти первую строку в массиве, которая начинается с буквы "M".
// let person = ["Yntymak", "Malika", "Azima", "Abdylaziz", "Aitunuk","Aidana", "Elvira"];
// output: Malika

// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdylaziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.find((el) => el[0] === "M");
// console.log(res);

//? 8 - задание
// Проверить, все ли элементы массива являются четными числами.
// let arr = [3, 5, 7, 1, 33, 77, 44];
// output: false

// let arr = [3, 5, 7, 1, 33, 77, 44];
// let res = arr.every((el) => el % 2 === 0);
// console.log(res);

//? 9 - задание
// Проверить, есть ли в массиве хотя бы одна строка, содержащая только цифры.
// let person = ["Yntymak", "Malika", "Azima", "Abdy1aziz", "Aitunuk","Aidana", "Elvira"];
// output: false

// let person = [
//   "Yntymak",
//   "Malika",
//   "Azima",
//   "Abdy1aziz",
//   "Aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.some((el) => !isNaN(el));
// console.log(res);

//? 10 - задание
// Найти первый элемент массива, который делится на 3 без остатка.
// let arr = [5, 7, 1, 8, 9, 77, 44];
// output: 9

// let arr = [5, 7, 1, 8, 9, 77, 44];
// let res = arr.find((el) => el % 3 === 0);
// console.log(res);

//? 11 - задание
// Проверить, все ли элементы массива больше 0.
// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// output: true

// let arr = [1, 2, 4, 11, 6, 23, -0, 88, 67, 3];
// let res = arr.every((el) => el >= 0);
// console.log(res);

//? 12 - задание
// Проверить, есть ли в массиве хотя бы одна строка, начинающаяся с заглавной буквы.
// let person = ["yntymak", "malika", "Azima", "abdy1aziz", "aitunuk","Aidana", "Elvira"];
// output: true

// let person = [
//   "yntymak",
//   "malika",
//   "Azima",
//   "abdy1aziz",
//   "aitunuk",
//   "Aidana",
//   "Elvira",
// ];
// let res = person.some((el) => el[0] === el[0].toUpperCase());
// console.log(res);
