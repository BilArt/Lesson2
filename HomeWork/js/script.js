// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value1 = 1;
// console.log(value1 > 0);

// let value2 = 0;
// console.log(value2 > 0);

// let value3 = -3;
// console.log(value3 > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let word1 = "test";
// console.log(String(word1) === "test");

// let word2 = "qwerty";
// console.log(String(word2) === "qwerty");

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let value1 = 1;
// (value1 > 10) ? console.log(value1 - 5) : console.log(value1 + 5);

// let value2 = 10;
// (value2 > 10) ? console.log(value2 - 5) : console.log(value2 + 5);

// let value3 = 13;
// (value3 > 10) ? console.log(value3 - 5) : console.log(value3 + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let value = prompt("Введіть номер місяця");
// value = Number(value);

// switch (value) {
//   case 1:
//     alert("Січень");
//     break;

//   case 2:
//     alert("Лютий");
//     break;

//   case 3:
//     alert("Березень");
//     break;

//   case 4:
//     alert("Квітень");
//     break;

//   case 5:
//     alert("Травень");
//     break;

//   case 6:
//     alert("Червень");
//     break;

//   case 7:
//     alert("Липень");
//     break;

//   case 8:
//     alert("Серпень");
//     break;

//   case 9:
//     alert("Вересень");
//     break;

//   case 10:
//     alert("Жовтень");
//     break;

//   case 11:
//     alert("Листопад");
//     break;

//   case 12:
//     alert("Грудень");
//     break;

//   default:
//     alert("Такого номеру місяця немає");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let value = prompt("Введіть тризначне число");
// let sum = 0;

// if (value.length === 3) {
//   for (let i = 0; i < value.length; i++) {
//     sum = sum + Number(value[i]);
//   }
//   console.log(sum);
// } else {
//   alert("Введіть тризначне число!");
// }
