// ДЗ
// 1.
let arrNumbers = [5, 4, 3, -3, -10, -1, 8, -20, 0]

function findPositiveNumbers (arr = []) {
  let newArr = []

  for (let item of arr) {
    if (item > 0) {
      newArr.push(item)
    }
  }

  return newArr
}

let findPositiveNumbersResult = findPositiveNumbers(arrNumbers)
console.log(findPositiveNumbersResult)
console.log(findPositiveNumbers(arrNumbers))

// 2.
let arrNumbers2 = [5, 4, 3, 8, 0]

function filterFor(arr = [], a = -Infinity) {
  let newArr = []

  for (let item of arr) {
    if (item >= a) {
      newArr.push(item)
    }
  }

  return newArr
}

console.log(filterFor(arrNumbers2, 5))

// Методы объектов, this в методах объекта ---------------------------------------------------------
function calcAreaFromParams (rectangle) {
  return rectangle.height * rectangle.width
}

function calcArea () {
  return this.height * this.width
}

const rectangle1 = {
  height: 80,
  width: 120,
  // calcArea: function () {
  //   return this.height * this.width // this == rectangle1
  // },
  calcArea: calcArea
}

rectangle1.calcArea()

const rectangle2 = {
  height: 240,
  width: 360,
  // calcArea: function () {
  //   return this.height * this.width // this == rectangle2
  // },
  calcArea: calcArea
}

rectangle2.calcArea()

calcArea(rectangle1)
calcArea(rectangle2)

function showFullName() {
  console.log(this.firstName + ' ' + this.lastName)
}

const user1 = {
  firstName: 'Ivan',
  lastName: 'Sidorov',
  showFullName: showFullName
}

const user2 = {
  firstName: 'Peter',
  lastName: 'Ivanov',
  showFullName: showFullName
}

// Методы массивов ---------------------------------------------------------------------------------
// forEach, map, filter, push, shift, unshift, pop, includes, reverse, slice, splice
const fruits = ['Яблоко', 'Груша', 'Банан']

// delete fruits[1]

// console.log(fruits.splice(1, 2))

// const newFruits = fruits.slice(0, 2)

console.log(fruits)
// console.log(newFruits)

fruits.push('Ананас') // добавить последним
// fruits.shift() // удалить последний
fruits.unshift('Слива') // добавить первым
// fruits.pop() // удалить первый
console.log(fruits.includes('Груша')) // проверка на наличие

console.log(fruits)

function forFruits (item) {
  console.log(item)
}

console.log(fruits.forEach(forFruits)) // undefined

// ['Яблоко', 'Груша', 'Банан'] -> ['Фрукт: Яблоко', 'Фрукт: Груша', 'Фрукт: Банан']

//     []
let newFruits = fruits.map(function (item, index) {
  return 'Фрукт: ' + item // newFruits.push('Фрукт: ' + item)
})

console.log(newFruits)


const arr2 = [5, 4, 3, -3, -10, -1, 8, -20, 0]
const filteredArr2 = arr2.filter(function (item) {
  // if (item > 0) return true
  return item > 0
})

console.log(filteredArr2)


// function myForEach (arr, callback) { // callback = function () {}
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr)
//   }
// }

// myForEach(fruits, function (item, index, arr) {
//   console.log(item)
//   console.log(index)
// })

// Область видимости переменных --------------------------------------------------------------------
// var - глобальная и внутри тела функции
var variableVar = 0

if (true) {
  var variableVar1 = 1
}

function test () {
  var variableVar2 = 2
}

console.log(variableVar1)
// console.log(variableVar2) // error

// let, const - глобальная и блочная область видимости
let global = 1
console.log(global)
if (true) {
  let localLevel1 = 'Test'
  console.log(localLevel1)

  if (true) {
    let localLevel2 = 'Test1'
    console.log(localLevel1)
    console.log(localLevel2)
    console.log(global)
  }
}

// console.log(fromIf)

// Хостинг переменных
console.log(b) // undefined
var b = 'b'

// Function Declaration (Объявление Функции) function() {...}
function shoeMessage (message) {
  console.log(message)
}

// Анонимная самовызывающаяся функция
(function () {
  var element = 'item' // переменная изолирована
  console.log('Анонимная самовызывающаяся функция')
})()

;(function () {
  console.log('Анонимная самовызывающаяся функция')
  var element = 'item' // переменная изолирована
})()

// Function Expression (Функциональное Выражение)
// showMessageExpression() error
const showMessageExpression = function (message) {
  console.log(message) // arguments[0]
  console.log(arguments) // ['Hello', 1, 2, 3]
  // arguments.forEach((item) => console.log(item)) // error
}

showMessageExpression('Hello', 1, 2, 3)

// Стрелочные функции
const calcSum = (a, b) => {
  // this - статичный
  // console.log(arguments) // error
}

calcSum(5, 6)

// const calcSum = (a, b) => a + b // return a + b

arr2.filter((item) => item > 0)

// TODO:
// Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

// Пример:
const example = [
  { string: 'Пять', number: 5 },
  { string: 'Восемь', number: 8 },
  { string: 'Одиннадцать', number: 11 },
]

for (let item of example) {
  if (item.number > 10) {
    console.log(item.string)
  }
}

example.forEach((item) => {
  if (item.number > 10) {
    console.log(item.string)
  }
})

// TODO:
// [2, 3, 4, 5] => [4, 9, 16, 25] => [4, 16]
const numbers = [2, 3, 4, 5]
let step1 = numbers.map((item) => item ** 2)
let step2 = step1.filter((item) => item % 2 == 0)
console.log(step2)
