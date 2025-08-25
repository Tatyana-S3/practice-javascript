// 1. Задачи на цикл for и массивы

// Сумма элементов: Напишите функцию sumNumbers(numbers), которая принимает массив чисел и возвращает их сумму.
// Пример:
// sumNumbers([2, 5, 8, 10]) должна вернуть 25.
const numbers = [2, 5, 8, 10];
function sumNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}
console.log(sumNumbers(numbers));

// Поиск самого маленького числа: Напишите функцию findMin(numbers), которая находит и возвращает самое маленькое число из массива.
// Пример:
// findMin([15, 7, 20, 3, 11]) должна вернуть 3.

const numbers1 = [15, 7, 20, 3, 11];
function findMin(numbers1) {
  let min;
  for (let i = 0; i < numbers1.length; i++) {
    if (i === 0) {
      min = numbers1[i];
    } else if (min > numbers1[i]) {
      min = numbers1[i];
    }
  }
  return min;
}
console.log(findMin(numbers1));

// Подсчет четных чисел: Напишите функцию countEven(numbers), которая подсчитывает, сколько четных чисел находится в массиве, и возвращает это количество.
// Пример:
// countEven([1, 2, 3, 4, 5, 6]) должна вернуть 3.

const numbers2 = [1, 2, 3, 4, 5, 6];

function countEven(numbers2) {
  let evenCount = 0;
  for (let i = 0; i < numbers2.length; i++) {
    if (i % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}
console.log(countEven(numbers2));

// Создание нового массива: Напишите функцию createDouble(numbers), которая принимает массив чисел и возвращает новый массив, в котором каждое число удвоено.
// Пример:
// createDouble([2, 3, 4]) должна вернуть [4, 6, 8].

const numberss = [2, 3, 4];

function createDouble(numberss) {
  const double = numberss.map(function (numb) {
    return numb * 2;
  });
  return double;
}
console.log(createDouble(numberss));

// Обратный порядок: Напишите функцию reverseArray(items), которая принимает массив и возвращает новый массив с элементами в обратном порядке.
// Пример:
// reverseArray(['a', 'b', 'c']) должна вернуть ['c', 'b', 'a'].

const items = ['a', 'b', 'c'];

function reverseArray(items) {
  const reverAr = items.toReversed();
  return reverAr;
}
console.log(reverseArray(items));

// Объединение массивов: Напишите функцию combineArrays(firstArr, secondArr), которая объединяет два массива и возвращает один новый массив.
// Пример:
// combineArrays([1, 2], [3, 4]) должна вернуть [1, 2, 3, 4].

function combineArrays(firstArr, secondArr) {
  const allArr = firstArr.concat(secondArr);
  return allArr;
}
console.log(combineArrays([1, 2], [3, 4]));

// 2. Задачи на цикл for и строки

// Подсчет символа: Напишите функцию countChar(text, char), которая принимает строку и символ, а затем подсчитывает, сколько раз этот символ встречается в строке. Учтите, что регистр не важен (например, 'a' и 'A' считаются одинаково).
// Пример:
// countChar("Hello World", "o") должна вернуть 2.
function countChar(text, char) {
  const lowerText = text.toLowerCase();
  const lowerChar = char.toLowerCase();
  let totalChar = 0;
  for (let i = 0; i < text.length; i++) {
    if (lowerText[i] === lowerChar) {
      totalChar++;
    }
  }
  return totalChar;
}
console.log(countChar('Hello World', 'o'));

// Палиндром: Напишите функцию isPalindrome(word), которая проверяет, является ли слово палиндромом (читается одинаково с обеих сторон). Функция должна возвращать true или false.
// Пример:
// isPalindrome("level") должна вернуть true.
function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  let reverseWord = '';
  for (let i = lowercaseWord.length - 1; i >= 0; i--) {
    reverseWord += lowercaseWord[i];
  }
  return lowercaseWord === reverseWord;
}
console.log(isPalindrome('level'));

// Перевернуть строку: Напишите функцию reverseString(text), которая принимает строку и возвращает её в обратном порядке.
// Пример:
// reverseString("hello") должна вернуть "olleh".

function reverseString(text) {
  const lowercaseText = text.toLowerCase();
  let reverseText = '';
  for (let i = lowercaseText.length - 1; i >= 0; i--) {
    reverseText += lowercaseText[i];
  }
  return reverseText;
}
console.log(reverseString('hello'));

// Капитализация: Напишите функцию capitalizeFirstLetter(text), которая принимает строку и возвращает новую строку, где первая буква каждого слова заглавная.
// Пример:
// capitalizeFirstLetter("hello world") должна вернуть "Hello World".

function capitalizeFirstLetter(text) {
  const words = text.split(' ');
  const capitalizeWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      const filterLetter = word.charAt(0).toUpperCase();
      const restWord = word.slice(1);
      capitalizeWords.push(filterLetter + restWord);
    } else {
      capitalizeWords.push('');
    }
  }
  return capitalizeWords.join(' ');
}
console.log(capitalizeFirstLetter('hello world'));

// Задачи на основы цикла for

// Вывод чисел: Напишите функцию printNumbers(start, end), которая выводит в консоль все числа от start до end (включительно).
let printNumber = 0;
function printNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
printNumbers(1, 10);

// Обратный отсчет: Напишите функцию countdown(n), которая выводит в консоль числа от n до 1, а затем слово "Старт!".
let count = 0;
function countdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
  console.log('Старт!');
}
countdown(3);
// Сумма чисел до n: Напишите функцию sumUpTo(n), которая считает и возвращает сумму всех целых чисел от 1 до n.
let sum = 0;
function sumUpTo(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUpTo(5));

// Произведение чисел: Напишите функцию productUpTo(n), которая считает и возвращает произведение всех целых чисел от 1 до n.
let product = 1;
function productUpTo(n) {
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
console.log(productUpTo(3));

// Задачи на циклы с массивами

// Фильтрация по значению: Напишите функцию filterGreaterThan(arr, value), которая принимает массив чисел и число, и возвращает новый массив, содержащий только те числа, которые больше value.
let filterGreater = [];
function filterGreaterThan(arr, value) {
  for (let i = 0; i <= arr.length; i++) {
    const numb = arr[i];
    if (numb > value) {
      filterGreater.push(numb);
    }
  }
  return filterGreater;
}
console.log(filterGreaterThan([1, 3, 7, 9], 5));

// Удвоение элементов: Напишите функцию doubleElement(arr), которая возвращает новый массив, где каждый элемент исходного массива умножен на 2.
const doubleArr5 = [];
function doubleElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const doubleElement = element * 2;
    doubleArr5.push(doubleElement);
  }
  return doubleArr5;
}

console.log(doubleElement([1, 3, 7, 9]));
// Найти индекс: Напишите функцию findIndex(arr, value), которая находит индекс первого вхождения value в массиве arr. Если значение не найдено, верните -1.
function findIndex(arr, value) {
  return arr.indexOf(value);
}
console.log(findIndex([1, 3, 7, 9], 8));

// Копирование массива: Напишите функцию copyArray(arr), которая создает и возвращает точную копию исходного массива.
function copyArray(arr) {
  return arr.slice();
}
console.log(copyArray([1, 3, 7, 9]));
// Проверка на наличие: Напишите функцию hasElement(arr, value), которая возвращает true, если value присутствует в массиве, и false в противном случае.

function hasElement(arr, value) {
  return arr.includes(value);
}
console.log(hasElement([1, 3, 7, 9], 8));
// Среднее арифметическое: Напишите функцию getAverage(arr), которая вычисляет и возвращает среднее арифметическое всех чисел в массиве.
let getNumbers = 0;
function getAverage(arr4) {
  for (let i = 0; i < arr4.length; i++) {
    const numbr = arr4[i];
    getNumbers += numbr;
  }
  return getNumbers / arr4.length;
}
console.log(getAverage([1, 3, 7, 9]));

// Задачи на циклы со строками

// Подсчет слов: Напишите функцию countWords(text), которая подсчитывает количество слов в строке (слова разделены пробелами).

// Первая заглавная: Напишите функцию capitalizeString(text), которая возвращает новую строку, где первая буква каждого слова заглавная.

// Поиск самого длинного слова: Напишите функцию findLongestWord(text), которая возвращает самое длинное слово из строки.

// Проверка на пустоту: Напишите функцию isEmptyString(text), которая возвращает true, если строка пустая, и false в противном случае.

// Количество пробелов: Напишите функцию countSpaces(text), которая подсчитывает, сколько пробелов в строке.

// Комбинированные задачи

// Сравнение массивов: Напишите функцию areArraysEqual(arr1, arr2), которая возвращает true, если два массива содержат одинаковые элементы в одинаковом порядке, и false в противном случае.

// Четные и нечетные: Напишите функцию splitEvenOdd(arr), которая принимает массив чисел и возвращает новый массив, содержащий два подмассива: один с четными числами, другой с нечетными.

// Поиск наибольшего и наименьшего: Напишите функцию findMinMax(arr), которая возвращает массив из двух чисел: наименьшего и наибольшего из исходного массива.

// Замена символа: Напишите функцию replaceChar(text, oldChar, newChar), которая заменяет все вхождения oldChar на newChar в строке.

// Фильтрация по типу: Напишите функцию filterByType(arr, type), которая принимает массив и тип данных (например, 'string' или 'number'), и возвращает новый массив, содержащий только элементы указанного типа
