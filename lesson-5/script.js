// ДЗ

// Задача 2
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 30, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'Y.', country: 'Belarus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

// Написать функцию, которая обрабатывает массив объектов, имеет 2 аргумента:
// 1) list - массив 2) value - строка или число.
// Функция должна возвращать количество совпадений из каждого объекта. Если совпадений нет, то сообщение 'Совпадений не найдено'
// Например getNumberMatches(list1, 'JavaScript') // вернёт 3

function getNumberMatches(list = [], value) {
  let counter = 0

  list.forEach((item) => {
    for (let key in item) {
      if (item[key] == value) counter++
    }
  })

  if (counter) {
    return counter
  }

  console.error('Совпадений не найдено')
  return null
}

// console.log(getNumberMatches(list1, 'JavaScript'))

// 3. Перебрать методом forEach массив users и вывести каждый объект в консоль
// 3.1. Получить новый массив из юзеров, у каждого юзера должно появится новое свойство age (нужен метод map)
// 3.2. Получить новый массив из массива п.3.1 при помощи метода filter, в нем должны быть юзеры старше 25

const users = [
  { name: 'Ivan', year: 1994 },
  { name: 'Olga', year: 1998 },
  { name: 'Vlad', year: 1988 },
  { name: 'Vadim', year: 2002 },
  { name: 'Ira', year: 1991 },
  { name: 'Svetlana', year: 2004 },
]

// users.forEach((item) => console.log(item))

const newUsers = users.map((item) => {
  const currentYear = 2022

  item.age = currentYear - item.year

  return item
})

const filteredUsers = newUsers.filter((user) => user.age > 25)

// console.log(filteredUsers)

// 4*. Написать функцию getSalaryReport(salaries), которая принимает объект, как аргумент, вида:
let salariesCompany = {
  Ivan: 1200,
  Irina: 800,
  Alex: 1050,
  Anton: 1460,
  Marta: 1140
}
// и возвращает новый объект report, который имеет 3 свойства:
// report = {
//   averageSalary: __, // средняя зарплата
//   hasMaxSalary: ____ // имя человека с наибольшей зп
//   hasMinSalary: ____ // имя человека с наименьшей зп
// }

function getSalaryReport (salaries = {}) {
  const report = {}
  let sum = 0
  let length = 0
  let hasMaxSalary = ''
  let maxSalary = -Infinity
  let hasMinSalary = ''
  let minSalary = Infinity

  for (let key in salaries) {
    // Средняя зарплата
    length++
    sum = sum + salaries[key]

    // Имя человека с наибольшей зп
    if (salaries[key] > maxSalary) {
      maxSalary = salaries[key]
      hasMaxSalary = key
    }

    // Имя человека с наибольшей зп
    if (salaries[key] < minSalary) {
      minSalary = salaries[key]
      hasMinSalary = key
    }
  }

  report.averageSalary = sum / length
  report.hasMaxSalary = hasMaxSalary
  report.hasMinSalary = hasMinSalary

  return report
}

// console.log(getSalaryReport(salariesCompany))

let a = 1

if (true) {
  let b = 2
  // a, b - доступна

  if (true) {
    let c = 3

    if (true) {
      let d = 4
    }
  }
}

// DOM
console.dir(document)

// Навигация
// querySelector, querySelectorAll
const titleElement = document.querySelector('h1')
console.log(titleElement.children[0]) // span
const textElement = document.querySelector('.text')
console.log(titleElement)

const listItemElements = document.querySelectorAll('.list-item')
console.log(Array.isArray(listItemElements)) // => false
console.log(listItemElements)

for (let element of listItemElements) {
  console.log(element)
}

// nextElementSibling, previousElementSibling, children, parentElement
const listElement = document.querySelector('.list') // ul
console.log(listElement.children) // [li, li, li ,li, li]
// console.log(listElement.firstElementChild)
// console.log(listElement.lastElementChild)
console.log(listElement.nextElementSibling)
console.log(listElement.previousElementSibling)

const inputElement = document.querySelector('#userName')
console.log(inputElement.parentElement)

console.dir(inputElement)

// Содержимое элементов
// textContent
// console.log(titleElement.textContent)
// titleElement.textContent = 'Hello from JS <span>></span>'

// innerHTML
console.log(titleElement.innerHTML)
titleElement.innerHTML = 'Hello from JS <span>></span>'

// document.body.innerHTML = ''

// Работа с атрибутами
const buttonSubmitElement = document.querySelector('#button')
console.log(buttonSubmitElement.getAttribute('type')) // получить значение атрибута
buttonSubmitElement.setAttribute('form', 'form') // создание и редактирование

if (buttonSubmitElement.hasAttribute('class')) {
  buttonSubmitElement.removeAttribute('class')
}

const buttonOpenMenuElement = document.querySelector('#buttonOpenMenu')
console.log(buttonOpenMenuElement.getAttribute('data-role'))
console.log(buttonOpenMenuElement.dataset.role)

// Стили
listElement.firstElementChild.style.fontSize = '19px'
listElement.firstElementChild.style.color = 'red'

listElement.firstElementChild.setAttribute('style', 'font-size: 21px; color: blue;')

listElement.firstElementChild.style.cssText = 'font-size: 25px; color: #999;'

// Работа с классами
console.log(listElement.lastElementChild.classList)
listElement.lastElementChild.classList.add('list-item_primary')
// listElement.lastElementChild.classList.remove('list-item')
listElement.lastElementChild.classList.replace('list-item', 'replaced-class')
console.log(listElement.lastElementChild.classList.contains('list-item_primary')) // => true

// Создание элементов
const sectionElement = document.createElement('section')
const titleCloneElement = titleElement.cloneNode(true) // копия заголовка
sectionElement.innerHTML = '<h2>Title</h2><p>Text</p>'
console.log(sectionElement)
console.log(titleCloneElement)

// Добавление элементов
// append, prepend, after, before, replaceWith
document.body.append(sectionElement)
document.body.prepend(sectionElement)
titleElement.after(titleCloneElement)
titleElement.before(titleCloneElement)

// Удаление элементов
// element.remove()
titleElement.remove()

// TODO:
// 1. Для каждого элемента массива создать ссылку (a)
// 2. Уставить атрибуту href значение из массива
// 3. В контент ссылки добавить Link n, где n — индекс ссылки из массива
// 4. Добавить в body

const links = [
  'https://learn.javascript.ru/',
  'http://online.myfreedom.by/pl/teach/control/lesson/view?id=219299273&editMode=0',
  'https://learn.javascript.ru/structure',
  '#test'
]

// const links = [
//   { url: 'https://learn.javascript.ru/', content: 'Link to learnjs', external: true },
//   'http://online.myfreedom.by/pl/teach/control/lesson/view?id=219299273&editMode=0',
//   'https://learn.javascript.ru/structure'
// ]

links.forEach((item, index) => {
  // создаем ссылку
  const linkElement = document.createElement('a')
  // добавляем аттрибут href
  linkElement.setAttribute('href', item)
  // добавляем контент
  linkElement.textContent = 'Link ' + (index + 1)
  // добавляем ссылку в body
  document.body.append(linkElement)
  console.log(linkElement)
})
