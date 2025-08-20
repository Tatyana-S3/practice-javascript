// 1. Змінні та типи даних

// Створіть дві змінні: userAge з числом і userName з вашим ім'ям. Об'єднайте їх у рядок, що виводить "Привіт, [Ім'я користувача]! Вам [вік] років.". Виведіть результат у консоль.

const userName = 'Tatyana';
const userAge = 38;

console.log(`Привет ${userName}! Вам ${userAge} лет.`);

// Напишіть функцію, яка приймає два числа та повертає їх суму.

function addSum(a, b) {
  const sum = a + b;
  return sum;
}
console.log(addSum(15, 20));

// 2. Масиви та цикли

// У вас є масив чисел [10, 5, 8, 12, 3]. Напишіть цикл for...of, щоб знайти найбільше число в цьому масиві.
const numArray = [10, 5, 8, 12, 3];
let maxNum = numArray[0];
for (const num of numArray) {
  if (num > maxNum) {
    maxNum = num;
  }
}
console.log(maxNum);

// Створіть масив fruits з трьох ваших улюблених фруктів. За допомогою циклу for, виведіть кожен фрукт у консоль.

const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 3. Рядки та методи рядків

// Напишіть функцію countVowels(text), яка приймає рядок і повертає кількість голосних букв (a, e, i, o, u) у ньому. Ігноруйте регістр.

function countVowels(text) {
  const vowels = 'a, e, i, o, u';
  let count = 0;

  const lowerText = text.toLowerCase();

  for (const char of lowerText) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('AEIOU'));

// Створіть функцію, яка приймає рядок, розбиває його на слова та повертає масив цих слів.

function normString(message) {
  const string = message.split(' ');

  return string;
}
console.log(normString('JavaScript is fun'));

// 4. Розгалуження та логічні оператори

// Напишіть функцію checkAge(age), яка перевіряє вік. Якщо вік менше 18, повертає false, якщо 18 і більше — true.

// function checkAge(age) {
//   return age >= 18;
// }
function checkAge(age) {
  const check = age < 18 ? false : true;
  return check;
}
console.log(checkAge(16));

// Створіть функцію, що приймає число. Якщо число парне, поверніть рядок "Парне", якщо непарне — "Непарне".
function evenNumbers(number) {
  if (number % 2 === 0) {
    return 'Парне';
  } else {
    return 'Непарне';
  }
}
console.log(evenNumbers(17));

// 5. Функції та методи масиву

// Напишіть функцію getPositiveNumbers(arr), яка приймає масив чисел. Використовуйте метод filter, щоб повернути новий масив, що містить тільки додатні числа.

function getPositiveNumbers(arr) {
  return arr.filter(function (number) {
    return number > 0;
  });
}
console.log(getPositiveNumbers([-2, 5, 0, -10, 8, 3, -1]));
// У вас є масив ['Apple', 'Banana', 'Orange']. Використовуючи метод join(), перетворіть його на рядок "Apple, Banana, Orange". Виведіть результат у консоль.
const fruit = ['Apple', 'Banana', 'Orange'];
const fruString = fruit.join(', ');
console.log(fruString);

// Створіть функцію doubleArray(arr), яка приймає масив чисел і повертає новий масив, де кожне число помножене на 2. Використовуйте метод map.

const arr = [2, 4, 6, 8, 10];

function doubleArray(arr) {
  const doubleNumbers = arr.map(function (number) {
    return number * 2;
  });
  return doubleNumbers;
}
console.log(doubleArray(arr));

// 6. Комбіновані завдання

// Напишіть функцію filterByLength(words, minLength), яка приймає масив рядків і мінімальну довжину. Поверніть новий масив, що містить тільки ті слова, довжина яких дорівнює або більша за minLength.

const words = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'C++'];
const minLength = 4;

function filterByLength(words, minLength) {
  const filterWords = [];
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (currentWord.length >= minLength) {
      filterWords.push(currentWord);
    }
  }
  return filterWords;
}
console.log(filterByLength(words, minLength));

// Створіть функцію findUser(users, name). Вона приймає масив об'єктів-користувачів (наприклад, [{name: 'Mango'}, {name: 'Poly'}]) та ім'я для пошуку. Поверніть true, якщо користувач із таким ім'ям існує в масиві, інакше false. Використовуйте метод some.
const users = [{ name: 'Mango' }, { name: 'Poly' }, { name: 'Ajax' }];

function findUser(users, name) {
  const userExists = users.some(function (user) {
    return user.name === name;
  });
  return userExists;
}
console.log(findUser(users, 'Poly'));

// Задачи на основы JavaScript

// Приветствие с именем: Напишите функцию greet(name), которая принимает имя и возвращает строку "Привет, [имя]!".

const name = 'Tatyana';

function greet(name) {
  return `Привет, ${name}!`;
}
console.log(greet(name));

// Сравнение чисел: Напишите функцию isGreater(a, b), которая возвращает true, если число a больше числа b, и false в противном случае.

function isGreater(a, b) {
  const number = a > b ? true : false;
  return number;
}
console.log(isGreater(21, 15));
console.log(isGreater(14, 19));

// Чётное или нечётное: Напишите функцию isEven(number), которая проверяет, является ли число чётным, и возвращает true или false.

function isEven(number) {
  const evenNumber = number % 2 === 0 ? true : false;
  return evenNumber;
}
console.log(isEven(15));
console.log(isEven(12));

// Сложение трёх чисел: Напишите функцию sumThree(a, b, c), которая принимает три числа и возвращает их сумму.

function sumThree(a, b, c) {
  const sum = a + b + c;
  return sum;
}
console.log(sumThree(3, 6, 9));

// Задачи на массивы и циклы

// Поиск самого большого числа: Напишите функцию findMax(arr), которая принимает массив чисел и возвращает самое большое число. Используйте цикл for.

const arr3 = [5, 16, 94, 23, 17, 58];
function findMax(arr3) {
  if (arr.length === 0) {
    return null;
  }
  let maxNums = arr[0];
  for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > maxNums) {
      maxNums = arr3[i];
    }
  }
  return maxNums;
}
console.log(findMax(arr3));

// Обратный порядок: Напишите функцию reverseArray(arr), которая принимает массив и возвращает новый массив с элементами в обратном порядке.
const array = [1, 2, 3, 4, 5];
function reverseArray(array) {
  const revArray = array.toReversed();
  return revArray;
}
console.log(reverseArray(array));

// Сумма элементов: Напишите функцию sumArray(arr), которая принимает массив чисел и возвращает сумму всех его элементов.
const arr1 = [1, 2, 3, 4, 5];

function sumArray(arr1) {
  let sumArr1 = 0;
  for (const arg of arr1) {
    sumArr1 += arg;
  }
  return sumArr1;
}
console.log(sumArray(arr1));

// Подсчёт элементов: Напишите функцию countElements(arr, element), которая считает, сколько раз element встречается в массиве arr.

const arr2 = [1, 2, 3, 5, 4, 5, 5];

function countElements(arr2, element) {
  let sumElement = 0;
  for (let i = 0; i < arr2.length; i++) {
    const currElement = arr2[i];
    if (currElement === element) {
      sumElement++;
    }
  }
  return sumElement;
}
console.log(countElements(arr2, 5));
