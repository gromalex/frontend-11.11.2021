// ДЗ
// 1.
const nums = [34, 65, 0, 46, -3, 5.6]
let sum = 0
let sumEven = 0
for (let i = 0; i < nums.length; i++) {
  const currentItem = nums[i]

  console.log(currentItem)
  sum = sum + currentItem

  if (currentItem % 2 == 0) {
    sumEven = sumEven + currentItem
  }
}

for (let item of nums) {
  console.log(item)
  sum = sum + item

  if (item % 2 == 0) {
    sumEven = sumEven + item
  }
}

// 2.
let sum2 = 0
const lengthArr = nums.length

for (let item of nums) {
  sum2 = sum2 + item
}
const result = sum2 / lengthArr

console.log(result)

// 3.
let arr = [5, 4, 3, 8, 0]
let limit = 5
let newArr = []
for (let item of arr) {
  // if (item >= limit) {
  //   newArr.push(item)
  // }

  if (item <= limit) break

  newArr.push(item)
}

// 4.
const example = [
  { string: 'Пять', number: 5 },
  { string: 'Восемь', number: 8 },
  { string: 'Одиннадцать', number: 11 }
]

for (let item of example) {
  if (item.number > 10) {
    console.log(item.string)
  }
}

// 5.
const fruits = ['Яблоко', 'Груша', 'Банан']
const newFruits = []

for (let item of fruits) {
  const fruit = {}

  fruit.word = item
  fruit.length = item.length

  console.log(fruit)
  newFruits.push(fruit)
}

console.log(newFruits)

// Функции
// Создание функции
function showHello () {
  console.log('Hello!!!')
}

// Вызов функции
showHello()

// Внешние и локальные переменные
let a = 10
let b = 13

function calcSum () {
  let a = 10
  let b = 13

  function calc () {
    let a = 10
    let b = 10
    console.log(a + b)
  }

  calc()
}

// calcSum()

// Параметры функции
function calcSumFromParams (a, b) {
  console.log(a + b)
}

calcSumFromParams(5, 8) // a = 5, b = 8
calcSumFromParams(12, -5) // a = 12, b = -5

function showHelloUser (firstName = 'Anonym', lastName = '') {
  console.log('Hello ' + firstName + ' ' + lastName)
}

showHelloUser('Aleksandr')

// Параметры по умолчанию
function pow (x = 1, n = 1) {
  let result = 1

  for (let i = 1; i <= n; i++) {
    result = result * x
  }

  console.log(result)
  return result
}

// pow(3, 3) // => 27
// 3 * 3 * 3
// pow(2, 4) // => 16
// 2 * 2 * 2 * 2

// Возврат значения из функции return
const resultPow = pow(4, 2) // 16
console.log(resultPow)

console.log(pow(5, 3))


function calcSum2 (a = 0, b = 0, c = 0) {
  // let sum = a + b + c

  return a + b + c
}

let result3 = calcSum2(1, 8, 12)
console.log(result3)


function calcSumFromArray (arr = []) {
  let sum = 0

  for (let item of arr) {
    if (item > 0) {
      sum = sum + item
    }
  }

  return sum
}

console.log(calcSumFromArray([23, 13, 0, -9, 55])) // arr = [23, 13, 0, -9, 55]

//
// TODO: Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// функция truncate (string, limit), возвращает новую строку в котрой количество символов не больше чем limit, и отбрасывает лишние символы, заменяя их на ...
// Пример: truncate('Hello', 3) => 'Hel...'
console.log(truncate('Hello', 3))

function truncate (string, limit) {
  let newString = ''

  if (string.length <= limit) {
    newString = string
  } else {
    for (let i = 0; i < limit; i++) {
      newString = newString + string[i]
    }

    newString = newString + '...'
  }

  if (newString !== '') {
    return newString
  }

  console.log('Вы получили пустую строку')
}

console.log(truncate('Hello', 10))
