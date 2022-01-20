// ДЗ
// 2.
const formElement = document.querySelector('form')
const inputElement = formElement.querySelector('input')

const listElement = document.createElement('ul')
document.body.append(listElement)

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const { value } = inputElement
  const listItemElement = document.createElement('li')
  listItemElement.textContent = value
  listElement.append(listItemElement)

  formElement.reset()
})

// 3.
const formCalculatorElement = document.querySelector("#formCalculator")
const operand1Element = document.querySelector("#operand1")
const operatorElement = document.querySelector("#operator")
const operand2Element = document.querySelector("#operand2")
const outputElement = document.querySelector("#output")

function handleSubmitForm (event) {
  event.preventDefault()

  const { value: operator } = operatorElement
  const operand1Value = +operand1Element.value
  const operand2Value = +operand2Element.value
  let result = 0

  switch (operator) {
    case '+':
      result = operand1Value + operand2Value
      break
    case '-':
      result = operand1Value - operand2Value
      break
    case '/':
      result = operand1Value / operand2Value
      break
    case '*':
      result = operand1Value * operand2Value
      break
  }

  outputElement.textContent = result
}

formCalculatorElement.addEventListener('submit', handleSubmitForm)

// Продвинутый js

// Опциональная цепочка, оператор ?.
const user = {}

console.log(user?.address?.city)

// const titleElement = document.querySelector('#title')
// const contentTitleElement = document.querySelector('#title') && document.querySelector('#title').textContent
const contentTitleElement = document.querySelector('#title')?.textContent

console.log(contentTitleElement)

// Оператор ...
// Расширение
const arr = [1, 2, 3, 4, 5]
const newArr = [-2, -1, 0, ...arr]
console.log([...arr, ...newArr])

console.log(Math.max(...arr))

const listItemElements = [...document.querySelectorAll('li')]

listItemElements.map((item) => { console.log(item) })

// Остаточный
function calcSum (a, b, ...nums) {
  console.log(arguments)
  console.log(nums)
  console.log(a + b)
}
calcSum(4, 6, 9, 12, 456, 767)

const foo = (...opts) => {
  console.log(opts)
}
foo(12, 5, 7, 234, 68)

// Функции конструкторы, ключевое слово new
// 1. Название функции с заглавной буквы
// 2. Функция вызывается с new

function User (firstName, lastName) {
  // let this = {}
  this.firstName = firstName
  this.lastName = lastName

  this.showInfo = function () {
    console.log(this.firstName + ' ' + this.lastName)
  }

  // return this
}

const user1 = new User('Alex', 'Gulo')
console.log(user1)

function Car (brand, year) {
  this.brand = brand
  this.year = year
  this.isMoved = false

  this.showInfo = function () {
    console.log(this.brand + ' ' + this.year)
  }

  this.start = function () {
    this.isMoved = true
    console.log('Машина поехала')
  }

  this.stop = function () {
    this.isMoved = false
    console.log('Машина остановилась')
  }
}

const car = new Car('BMW', 2020)

car.start()
console.log(car)

// Дата и время
const currentDate = new Date()
console.log(currentDate.getTime()) // ms from 01.01.1970
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getDate())
console.log(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())

const date = new Date('2014-02-01')
console.log(date)

// Планирование: setTimeout и setInterval
// setTimeout(() => {
//   console.log('Hello')
// }, 2000)

// setTimeout(() => {
//   console.log('Hello 2')
// }, 3000)

// setTimeout(() => {
//   console.log('Hello 3')
// }, 0)

console.log('После setTimeout')

let counter = 0
// const timer = setInterval(() => {
//   if (counter >= 10) {
//     clearInterval(timer)
//   }

//   console.log(counter)
//   counter++
// }, 1000)


// Object.keys, values, entries
// console.log(Object.keys(car))
// console.log(Object.values(car))
// console.log(Object.entries(car))

// for (let [name, value] of formData) {}

// Рекурсия
// function calcFactorial (number) {
//   let result = 1

//   for (let i = 1; i <= number; i++) {
//     result = result * i
//   }

//   return result
// }

// console.log(calcFactorial(3))

function calcFactorial (number) {
  if (number <= 1) return 1

  return number * calcFactorial(number - 1)
}

console.log(calcFactorial(5))
