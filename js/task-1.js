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
