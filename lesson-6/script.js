// ДЗ
// 1.
const titleElement = document.querySelector('h1')
const textElement = document.querySelector('p')

function clear (element) {
  element.innerHTML = ''
}

clear(titleElement) // element = titleElement
clear(textElement)

// 2.
const listWrapperElement = document.querySelector('#listWrapper')

function listGenerator(parentSelector) {
  const listElement = document.createElement('ul')

  while (true) {
    const listItemElementContent = prompt('Введите текст')

    if (listItemElementContent == '' || listItemElementContent == null) break

    const listItemElement = document.createElement('li')
    listItemElement.textContent = listItemElementContent
    listElement.append(listItemElement)
  }

  parentSelector.append(listElement)
}

// listGenerator(listWrapperElement)

// 3.
let linksArr = [
	'https://geekytheory.com/assets/images/icons/technologies/javascript.png',
  'https://cdn-media-1.freecodecamp.org/images/1*kt9otqHk14BZIMNruiG0BA.png',
  'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png',
  'https://habrastorage.org/webt/jp/qj/fk/jpqjfkjewyfpm1cbr5yxaubxt-w.png',
  'https://miro.medium.com/max/700/1*m0UdF7LWONe3lXtfbfiS5g.png'
];

const imagesContainerElement = document.createElement('div')
imagesContainerElement.style.display = 'flex'
imagesContainerElement.style.alignItems = 'center'

document.body.append(imagesContainerElement)

linksArr.forEach((item) => {
  const imageElement = document.createElement('img')
  // imageElement.setAttribute('src', item)
  imageElement.src = item
  imageElement.setAttribute('style', 'width: 120px; flex-shrink: 0;')
  imagesContainerElement.append(imageElement)
})

// TODO: Вопрос с параметрами функции
const arr = [1, 2, 3, 5, 6]
const arr2 = [7, 8, 2, 5, 9]

function calcSum (nums) {
  let sum = 0

  nums.forEach((item) => sum = sum + item)

  return sum
}

// console.log(calcSum(arr))
// console.log(calcSum(arr2))

// Колбэк функция
function showSuccessMessage (message) {
  // создается toast
  console.log(message)
}

function showErrorMessage (message) {
  // создается toast
  console.error(message)
}

function checkAge (success, error) {
  const isOk = confirm('Вам есть 18 лет?')

  if (isOk) {
    success('Доступ разрешен')
  } else {
    error('В доступе отказано')
  }
}

// checkAge(showSuccessMessage, showErrorMessage)

// checkAge(
//   (message) => {
//     console.warn(message)
//   },
//   (message) => {
//     console.error(message)
//   }
// )

// Браузерные события -----------------------------------------------------------------------------------
// click - происходит когда кликаем на элемент
// mousemove - происходит при движении мыши
// mouseover - происходит когда курсор мыши наводится на элемент
// mouseout - происходит когда курсор мыши покидает элемент
// keydown / keyup - происходит когда пользователь нажал / отпустил клавишу
// DOMContentLoaded - когда HTML загружен и обработан, DOM документа полностью построен и доступен

// Обработчик это — функция, которая сработает, как только событие произошло.

// Способы назначения обработчика
// 1. Через атрибут HTML

// 2. Через свойство элемента
const button2Element = document.querySelector('#button2')

button2Element.onclick = function () {
  console.log('Hello from button 2')
}

button2Element.onclick = function () {
  console.log('Hello from button 2')
}

button2Element.onclick = null // удалить обработчик

console.dir(button2Element)

// 3. методы элемента addEventListener и removeEventListener
const button3Element = document.querySelector('#button3')

// button3Element.addEventListener('click', function () {
//   console.log(button3Element.textContent)
//   // console.log('Hello from button 3')
// })

let counter = 0
function handleClickButton () {
  if (counter <= 5) {
    console.log('Hello from button 4')
    counter++
  } else {
    button3Element.removeEventListener('click', handleClickButton)
  }
}

// button3Element.addEventListener('click', handleClickButton)

// Объект события (event/e)
button3Element.addEventListener('click', function (event) {
  console.log(event.target)
  console.log(event.currentTarget) // == this
  console.log(event.currentTarget.textContent)
  console.log(event.currentTarget.dataset)

  console.log(event.currentTarget.dataset.action)
  console.log(event.currentTarget.dataset.time)
})

const linkElement = document.querySelector('a')

linkElement.addEventListener('click', function (event) {
  event.preventDefault()

  console.log(event.currentTarget.textContent)
})

// TODO: Реализовать функционал по аналогии collapse bootstrap
const collapseButtonElement = document.querySelector('#collapseButton')
const collapseElement = document.querySelector('.collapse')

function handleClickCollapseButton (event) {
  // collapseElement.classList.toggle('shown')
  const isShown = collapseElement.classList.contains('shown')

  if (isShown) {
    collapseElement.classList.remove('shown')
  } else {
    collapseElement.classList.add('shown')
  }
}

collapseButtonElement.addEventListener('click', handleClickCollapseButton)
