// Сортировка по цене: Напишите стрелочную функцию getSortedByPrice(products), которая принимает массив объектов-товаров. Каждый объект имеет свойства name и price. Функция должна вернуть новый массив, отсортированный по цене по возрастанию, используя метод toSorted().
const getSortedByPrice = products =>
  products.toSorted((a, b) => a.price - b.price);

const products1 = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Coffee Maker', price: 85, category: 'Appliances' },
  { name: 'Smartphone', price: 950, category: 'Electronics' },
  { name: 'Desk Chair', price: 250, category: 'Furniture' },
  { name: 'Blender', price: 60, category: 'Appliances' },
  { name: 'Mouse', price: 25, category: 'Electronics' },
  { name: 'Bookcase', price: 180, category: 'Furniture' },
];
console.log(getSortedByPrice(products1));

// Поиск самого старого пользователя: Напишите стрелочную функцию getOldestUser(users), которая принимает массив объектов-пользователей. Каждый объект имеет свойства name и age. Функция должна найти и вернуть объект самого старого пользователя, используя метод find().
// const getOldestUser = users => users.toSorted((a, b) => b.age - a.age)[0];
const getOldestUser = users => {
  const maxAge = users.reduce(
    (max, user) => (user.age > max ? user.age : max),
    0
  );
  return users.find(users => users.age === maxAge);
};

const users5 = [
  { name: 'Alex', age: 25 },
  { name: 'Maria', age: 32 },
  { name: 'Sam', age: 48 },
  { name: 'Chloe', age: 29 },
  { name: 'Peter', age: 64 },
];
console.log(getOldestUser(users5));

// Фильтрация по имени: Напишите стрелочную функцию filterByName(friends, name), которая принимает массив объектов-друзей и имя. Функция должна вернуть новый массив, содержащий только тех друзей, у которых свойство name совпадает с переданным именем, используя метод filter().
const filterByName = (friends, findName) =>
  friends.filter(friend => friend.name === findName);
const users4 = [
  { name: 'Alex', age: 25 },
  { name: 'Maria', age: 32 },
  { name: 'Sam', age: 48 },
  { name: 'Chloe', age: 29 },
  { name: 'Peter', age: 64 },
  { name: 'Maria', age: 24 },
  { name: 'Alex', age: 45 },
];
console.log(filterByName(users4, 'Alex'));

// Сумма чисел в массиве: Напишите стрелочную функцию getSum(numbers), которая принимает массив чисел и возвращает сумму всех чисел, используя метод reduce().

const arrNumb = [10, 20, 40, 50];
const getSum = numbers => numbers.reduce((total, number) => (total += number));
console.log(getSum(arrNumb));

// Преобразование в верхний регистр: Напишите стрелочную функцию getUppercaseNames(names), которая принимает массив строк и возвращает новый массив, где все строки преобразованы в верхний регистр, используя метод map().
const names = ['Алекс', 'Мария', 'Сэм', 'Хлоя', 'Питер', 'Анна'];
const getUppercaseNames = names => names.map(item => item.toUpperCase());
console.log(getUppercaseNames(names));

// Проверка наличия отрицательных чисел: Напишите стрелочную функцию hasNegativeNumbers(numbers), которая принимает массив чисел и возвращает true, если в нём есть хотя бы одно отрицательное число. Используйте метод some().
const arrNumber = [10, 20, 40, 50, -25];
const hasNegativeNumbers = numbers => numbers.some(number => number < 0);
console.log(hasNegativeNumbers(arrNumber));

// Подсчёт общего количества друзей: У вас есть массив пользователей, у каждого из которых есть массив friends. Напишите стрелочную функцию getTotalFriendsCount(users), которая вернёт общее количество друзей у всех пользователей. Используйте методы flatMap() или reduce().
// const getTotalFriendsCount = users =>
//     users.flatMap(user => user.friends).length;
const getTotalFriendsCount = users =>
  users.reduce((sumFriends, user) => sumFriends + user.friends.length, 0);
const users = [
  {
    name: 'Алекс',
    friends: ['Мария', 'Сэм', 'Питер'],
  },
  {
    name: 'Анна',
    friends: ['Мария', 'Павел'],
  },
  {
    name: 'Сэм',
    friends: ['Алекс', 'Павел', 'Анна', 'Хлоя'],
  },
  {
    name: 'Мария',
    friends: ['Алекс', 'Анна'],
  },
];
console.log(getTotalFriendsCount(users));

// Фильтрация и преобразование: Используя цепочку методов, напишите функцию getTitles(books), которая принимает массив объектов-книг (свойства rating и title). Функция должна вернуть массив названий книг, у которых рейтинг выше 4.5. Используйте filter() и map().
const getTitles = books =>
  books.filter(book => book.rating > 4.5).map(book => book.title);

const books = [
  { title: 'The Lord of the Rings', rating: 4.8 },
  { title: 'Pride and Prejudice', rating: 4.2 },
  { title: 'To Kill a Mockingbird', rating: 4.7 },
  { title: '1984', rating: 3.9 },
  { title: 'The Hobbit', rating: 4.5 },
  { title: 'Moby Dick', rating: 3.5 },
];
console.log(getTitles(books));

// Проверка на совершеннолетие: Напишите стрелочную функцию areAllAdults(users), которая принимает массив объектов-пользователей (свойство age). Функция должна вернуть true, если все пользователи старше 18 лет, используя метод every().
const areAllAdults = users => users.every(user => user.age >= 18);
const userss = [
  { name: 'Алекс', age: 25 },
  { name: 'Мария', age: 32 },
  { name: 'Сэм', age: 48 },
  { name: 'Хлоя', age: 29 },
  { name: 'Питер', age: 64 },
];
console.log(areAllAdults(userss));

// Поиск и фильтрация: Напишите функцию findAndFilter(data, query), которая принимает массив объектов и строку для поиска. Функция должна использовать цепочку методов filter() и find(). Сначала она должна отфильтровать объекты по какому-либо критерию, а затем найти первый объект из отфильтрованного массива. Верните найденный объект.
const findAndFilter = (data, query) =>
  data.filter(item => item.type === 'fruit').find(item => item.name === query);

const items = [
  { name: 'Apple', type: 'fruit', quantity: 10 },
  { name: 'Banana', type: 'fruit', quantity: 5 },
  { name: 'Carrot', type: 'vegetable', quantity: 8 },
  { name: 'Potato', type: 'vegetable', quantity: 15 },
  { name: 'Lemon', type: 'fruit', quantity: 3 },
];
console.log(findAndFilter(items, 'Lemon'));

// Задачи на map и filter
// Напишите стрелочную функцию getAdults(users), которая принимает массив пользователей и возвращает новый массив, содержащий только тех, кто старше или равен 18 годам.
const getAdults = users => users.filter(user => user.age > 18);
const users1 = [
  { name: 'Алекс', age: 25 },
  { name: 'Мария', age: 16 },
  { name: 'Сэм', age: 48 },
  { name: 'Хлоя', age: 17 },
  { name: 'Питер', age: 64 },
];
console.log(getAdults(users1));

// Создайте стрелочную функцию getDiscountedPrices(prices), которая принимает массив цен и возвращает новый массив, где каждая цена уменьшена на 20%.
const getDiscountedPrices = products =>
  products.map(product => product.price * 0.8);

const products = [
  { id: 1, name: 'Свежий хлеб', price: 25 },
  { id: 2, name: 'Молоко', price: 18 },
  { id: 3, name: 'Яйца (12 шт.)', price: 32 },
  { id: 4, name: 'Сыр', price: 55 },
  { id: 5, name: 'Яблоки (1 кг)', price: 40 },
];
console.log(getDiscountedPrices(products));

// Напишите функцию getPositiveNumbers(numbers), которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
const num = [24, 45, 56, -56, 98, -23, -47];
const getPositiveNumbers = numbers => numbers.filter(number => number > 0);
console.log(getPositiveNumbers(num));

// Создайте стрелочную функцию getInitials(names), которая принимает массив полных имен ('Иван Петров') и возвращает новый массив, содержащий инициалы ('И. П.').
const firstName = ['Иван Петров', 'Мария Иванова', 'Екатерина Сидорова'];
const getInitials = names => {
  return names.map(
    fullName =>
      fullName
        .split(' ')
        .map(part => `${part[0]}`)
        .join('.') + '.'
  );
};

console.log(getInitials(firstName));

// Напишите функцию filterByLength(words, minLength), которая принимает массив строк и минимальную длину. Функция должна вернуть новый массив, содержащий только те строки, длина которых больше или равна minLength.
const arrWodrs = ['Hello', 'Apple', 'Navigation', 'Street', 'Windows'];
const filterByLength = (words, minLength) =>
  words.filter(word => word.length >= minLength);
console.log(filterByLength(arrWodrs, 6));

// Задачи на reduce
// Напишите стрелочную функцию calculateAverage(grades), которая принимает массив оценок и возвращает их среднее арифметическое.
const count = [15, 20, 30, 15];
const calculateAverage = grades =>
  grades.reduce((total, grade) => (total += grade), 0) / grades.length;
console.log(calculateAverage(count));

// Создайте функцию countItems(items), которая принимает массив строк и возвращает объект, где ключи — это строки, а значения — количество их повторений в массиве.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countItems = items => {
  return items.reduce((count, item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
    return count;
  }, {});
};
console.log(countItems(fruits));
// Напишите стрелочную функцию concatenateWords(words), которая принимает массив строк и возвращает одну строку, объединяя все элементы через пробел.
const concatenateWords = words =>
  words.reduce((totalWords, word) => totalWords + ' ' + word, '').trim();
// const concatenateWords = words => words.join(' ');
const words = [
  'программирование',
  'массив',
  'функция',
  'джаваскрипт',
  'цепочка',
];
console.log(concatenateWords(words));

// Напишите функцию getTotalBalance(accounts), которая принимает массив объектов-счетов (свойство balance) и возвращает общую сумму балансов.
const getTotalBalance = accounts =>
  accounts.reduce((counts, account) => counts + account.balance, 0);
const cards = [
  {
    accountNumber: '123456789',
    accountHolderName: 'Иван Петров',
    balance: 15000.5,
    currency: 'UA',
    accountType: 'Сберегательный',
  },
  {
    accountNumber: '987654321',
    accountHolderName: 'Мария Сидорова',
    balance: 500.75,
    currency: 'USD',
    accountType: 'Текущий',
  },
  {
    accountNumber: '555544443',
    accountHolderName: 'Алексей Иванов',
    balance: 75000.0,
    currency: 'EUR',
    accountType: 'Инвестиционный',
  },
];
console.log(getTotalBalance(cards));

// Создайте функцию findLongestWord(words), которая принимает массив строк и возвращает самое длинное слово.
const findLongestWord = words =>
  words.reduce((longest, currentWord) => {
    if (currentWord.length > longest.length) {
      return currentWord;
    } else {
      return longest;
    }
  }, '');

const wordss = [
  'программирование',
  'массив',
  'функция',
  'джаваскрипт',
  'цепочка',
];
console.log(findLongestWord(wordss));

// Задачи на every и some
// Напишите стрелочную функцию isLoggedIn(users), которая принимает массив пользователей (свойство isLoggedIn) и возвращает true, если все пользователи авторизованы.
const isLoggedIn = users => users.every(user => user.isLoggedIn);
const users2 = [
  { name: 'Алекс', isLoggedIn: true },
  { name: 'Мария', isLoggedIn: true },
  { name: 'Сэм', isLoggedIn: false },
  { name: 'Хлоя', isLoggedIn: true },
  { name: 'Питер', isLoggedIn: false },
];
console.log(isLoggedIn(users2));

// Создайте функцию hasUnpaidInvoices(invoices), которая принимает массив счетов (свойство isPaid). Функция должна вернуть true, если хотя бы один счет не оплачен.
const hasUnpaidInvoices = invoices => invoices.some(invoice => !invoice.isPaid);

const invoices = [
  { id: 101, amount: 250, isPaid: true },
  { id: 102, amount: 150, isPaid: false },
  { id: 103, amount: 300, isPaid: true },
  { id: 104, amount: 50, isPaid: true },
  { id: 105, amount: 75, isPaid: true },
];
console.log(hasUnpaidInvoices(invoices));

// Напишите функцию isAllPositive(numbers), которая принимает массив чисел и возвращает true, если все числа в нём положительные.
const isAllPositive = numbers => numbers.every(number => number > 0);
const numbers = [10, 20, 40, 50];
console.log(isAllPositive(numbers));

// Создайте стрелочную функцию isAnyAdult(users), которая принимает массив пользователей (свойство age) и возвращает true, если хотя бы один пользователь старше или равен 18 годам.
const isAnyAdult = users => users.some(user => user.age >= 18);
const users3 = [
  { name: 'Алекс', age: 25 },
  { name: 'Мария', age: 16 },
  { name: 'Сэм', age: 48 },
  { name: 'Хлоя', age: 17 },
  { name: 'Питер', age: 64 },
];
console.log(isAnyAdult(users3));

// Напишите функцию isAllShortWords(words, maxLength), которая принимает массив строк и максимальную длину. Функция должна вернуть true, если все слова короче maxLength.
const isAllShortWords = (words, maxLength) =>
  words.every(word => word.length < maxLength);
const wordss1 = [
  'программирование',
  'массив',
  'функция',
  'джаваскрипт',
  'цепочка',
];
console.log(isAllShortWords(wordss1, 20));

// Задачи на цепочку методов
// Используя цепочку методов, напишите функцию getTitles(books), которая принимает массив объектов-книг (свойства rating и title). Функция должна вернуть новый массив названий книг, у которых рейтинг выше 4.5.
const getTitless = books =>
  books.filter(book => book.rating > 4.5).map(book => book.title);

const bookss = [
  { title: 'The Lord of the Rings', rating: 4.8 },
  { title: 'Pride and Prejudice', rating: 4.2 },
  { title: 'To Kill a Mockingbird', rating: 4.7 },
  { title: '1984', rating: 3.9 },
  { title: 'The Hobbit', rating: 4.5 },
  { title: 'Moby Dick', rating: 3.5 },
];
console.log(getTitless(bookss));

// Напишите функцию getSortedFriends(users), которая принимает массив пользователей (у каждого есть массив friends). Функция должна вернуть плоский массив всех друзей, отсортированный по алфавиту.
const getSortedFriends = users =>
  users.flatMap(user => user.friends).toSorted((a, b) => a.localeCompare(b));
const usersss = [
  {
    name: 'Алекс',
    friends: ['Мария', 'Сэм', 'Питер'],
  },
  {
    name: 'Анна',
    friends: ['Мария', 'Павел'],
  },
  {
    name: 'Сэм',
    friends: ['Алекс', 'Павел', 'Анна', 'Хлоя'],
  },
  {
    name: 'Мария',
    friends: ['Алекс', 'Анна'],
  },
];
console.log(getSortedFriends(usersss));

// Используя цепочку методов, напишите функцию getHighEarners(employees), которая принимает массив сотрудников (свойства salary и department). Функция должна отфильтровать сотрудников с зарплатой выше 50000, затем преобразовать массив так, чтобы он содержал только их имена.
const getHighEarners = employees =>
  employees
    .filter(employee => employee.salary > 50000)
    .map(employee => employee.name);

const employees = [
  { id: 1, name: 'Анна', salary: 65000, department: 'IT' },
  { id: 2, name: 'Виктор', salary: 45000, department: 'Sales' },
  { id: 3, name: 'Елена', salary: 75000, department: 'IT' },
  { id: 4, name: 'Иван', salary: 50000, department: 'Sales' },
  { id: 5, name: 'Ольга', salary: 90000, department: 'Management' },
];
console.log(getHighEarners(employees));

// Напишите функцию getShortWordsByLength(words, maxLength), которая сначала отфильтровывает все слова, длина которых меньше или равна maxLength, а затем возвращает массив, отсортированный по длине слов по возрастанию.

const getShortWordsByLength = (words, maxLength) =>
  words
    .filter(word => word.length <= maxLength)
    .toSorted((a, b) => a.length - b.length);
console.log(getShortWordsByLength(wordss1, 12));

// Создайте функцию getUniqueTags(items), которая принимает массив объектов (свойство tags, массив строк). Функция должна вернуть новый массив, содержащий все уникальные теги из всех объектов.
// const getUniqueTags = items => [...new Set(items.flatMap(item => item.tags))];

// const itemss = [
//   { id: 1, name: 'Сумка', tags: ['мода', 'аксессуары', 'кожа'] },
//   { id: 2, name: 'Наушники', tags: ['электроника', 'аудио'] },
//   { id: 3, name: 'Кроссовки', tags: ['спорт', 'обувь', 'мода'] },
//   { id: 4, name: 'Фотоаппарат', tags: ['электроника', 'фото', 'путешествия'] },
//   { id: 5, name: 'Палатка', tags: ['туризм', 'путешествия'] },
// ];
// console.log(getUniqueTags(itemss));
