// ДЗ
// 1.
// const number = prompt('Введите число')

// if (number > 0) {
//   alert(1)
// } else if (number < 0) {
//   alert(-1)
// } else {
//   alert (0)
// }

// 2.
// const number1 = prompt('Введите число')
// // 10 -> 0, 1, 4, 9 ....

// for (let i = 0; i < number1; i++) {
//   console.log(i * i) // i ** 2
// }

// 4.
// const numberFactorial = 5
// let resultFactorial = 1 // 120
// for (let i = 1; i <= numberFactorial; i++) {
//   resultFactorial = resultFactorial * i
// }
// console.log(resultFactorial)

// 5.
// let i = prompt('Введите число больше 100')
// for (
//   ;
//   i < 100 && i != null;
//   i = prompt('Введите число больше 100')
// ) {}
// alert('Вы ввели число: ' + i)

// Конструкция switch...case
// const tag = 'a'
// if (tag == 'div') {
//   console.log('Блочный')
// } else if (tag == 'span') {
//   console.log('Строчный')
// } else if (tag == 'a') {
//   console.log('Строчный')
// }

// ==

// switch (tag) {
//   case 'div': // tag === 'div'
//     console.log('Блочный')
//     break
//   case 'span': // tag === 'span'
//   case 'a': // tag === 'a'
//     console.log('Строчный')
//     break
// }

// const age = +prompt('Введите возраст')

// switch (true) {
//   case age < 9:
//     console.log('Малолетка')
//     break
//   case age >=9 && age <=14:
//     console.log('Подросток')
//     break
//   default:
//     console.warn('Возраст не найден')
// }

// '5' === 5 -> false

// Массивы []
// длинна, способ перебора, работа с элементами массива
const fruits = ['Яблоко', 'Груша', 'Банан']
console.log(fruits[1]) // -> 'Груша'
console.log(fruits.length) // длина массива
fruits[1] = 'Арбуз'
fruits[3] = 'Кокос'

// for (let i = 0; i < fruits.length; i++) {
//   console.log('Фрукт: ' + fruits[i])
// }

// Цикл for...of
// for (let item of fruits) {
//   console.log(item)
// }

// 1. let item = fruits[0]
// 2. let item = fruits[1]
// 3. let item = fruits[2]

// TODO: Посчитать сумму элементов в массиве
// const numbers = [123, 46, 57, 676, 43, -10]
// let sum = 0
// for (let item of numbers) {
//   if (item < 0) {
//     item = item * -1
//   }

//   sum = sum + item
// }

// console.log(sum)

// TODO: Добавить новый элемент массива последним
// fruits[fruits.length] = 'Дыня'
// fruits[fruits.length] = 'Маракуя'

// // TODO: Найти максимальное число в массиве:
// let nums = [-23, -546, -565, -32, -43, -12]

// let max = -Infinity
// for (let item of nums) {
//   if (item > max) {
//     max = item
//   }
// }

// Объекты -----------------------------------------------------------------
// const user = ['Alex', 'test@mail.com', '+2343464786']
// Способы создания объектов
const obj = {} // литерал
// const obj1 = new Object()

const user = {
  name: 'Alex',
  email: 'test@mail.com',
  phone: '+2343464786',
  address: {
    city: 'Minsk',
    street: 'Rokossovskogo'
  }
}

// Обращение к свойствам
console.log(user.name) // 'Alex'

// Добавление и перезапись свойств
user.email = 'alex@mail.com' // перезапись
user.age = 30 // добавление
console.log(user)

// Удаление свойств из объекта
delete user.phone

// Название свойств строкой
const styles = {
  'font-size': '15px',
  fontSize: '17px'
}

console.log(styles['font-size'])

// TODO: Практика
// 1. Создать объект user, со свойствами name, age, phone, email, password
// 2. Измените значение password на новое
// 3. Добавьте свойство city
// 4. Удалите phone



// TODO: Создать объект из одной любой строки таблицы https://exceltable.com/funkcii-excel/images/funkcii-excel126-1.png (вместо «День», используем «id»)
// TODO: Создать массив объектов из 5 любых строк таблицы https://exceltable.com/funkcii-excel/images/funkcii-excel126-1.png (вместо «День», используем «id»)

const arr = [
  {
    id: 23445,
    name: 'Пылесос',
    brand: 'Bosch',
    counter: 3,
    const: 1200,
    sumCost: 3600
  },
  {
    id: 23445,
    name: 'Пылесос',
    brand: 'Bosch',
    counter: 3,
    const: 1200,
    sumCost: 3600
  },
  {
    id: 23445,
    name: 'Пылесос',
    brand: 'Bosch',
    counter: 3,
    const: 1200,
    sumCost: 3600
  }
]

// Цикл for...in
// for (let key in user) {
//   console.log(key + ': ' + user[key])
// }

for (let item of arr) {
  for (let key in item) {
    console.log(key + ': ' + item[key])
  }
}

for (let key in arr[1]) {
  console.log(key + ': ' + arr[1][key])
}


// TODO:
// Есть объект:
const obj5 = {
  prop1: 'string',
  'prop 2': [1, 5, 6],
  prop3: {
    array: [55, 56, 56, { prop: 'string', key: [100] }]
  }
}
// Найти и вывести в консоль число 100.
obj5.prop3.array[3].key[0]

// 2. Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
const oldArr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = []
for (let item of oldArr) {
  if (item > 0) {
    newArr[newArr.length] = item
  }
}
