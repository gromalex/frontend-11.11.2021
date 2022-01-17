// ДЗ
// 1.
// const buttonElement = document.querySelector('#button')
// const counterElement = document.querySelector('#counter')

// let counter = 0
// let isMoreThanLimit = false

// buttonElement.addEventListener('click', (event) => {
//   // let counter = 0 // неправильно
//   let limit = 10

//   counter++
//   counterElement.textContent = counter

//   if (counter >= limit && !isMoreThanLimit) {
//     isMoreThanLimit = true
//     buttonElement.classList.add('btn-danger')
//     console.log('Add class')
//   }
// })

// 2.
// const popupElement = document.querySelector('#popup')
// const buttonOpenModalElement = document.querySelector('#buttonOpenModal')
// const buttonCloseModalElement = document.querySelector('#buttonCloseModal')

// buttonOpenModalElement.addEventListener('click', () => {
//   popupElement.classList.add('show')
// })

// buttonCloseModalElement.addEventListener('click', () => {
//   popupElement.classList.remove('show')
// })

// События
// Всплытие и погружение
const level1Element = document.querySelector('#level1')
const level2Element = document.querySelector('#level2')
const level3Element = document.querySelector('#level3')

level1Element.addEventListener('click', () => {
  alert('Level 1')
}, true)

level2Element.addEventListener('click', () => {
  alert('Level 2')
}, {capture: true})

level3Element.addEventListener('click', () => {
  alert('Level 3')
}, {capture: true})

level1Element.addEventListener('click', () => {
  alert('Level 1')
})

level2Element.addEventListener('click', () => {
  alert('Level 2')
})

level3Element.addEventListener('click', () => {
  alert('Level 3')
})

// Делегирование
const listElement = document.querySelector('ul')
const listItemElements = document.querySelectorAll('li')

// for (let listItemElement of listItemElements) {
//   listItemElement.addEventListener('click', () => {
//     console.log('List item clicked')
//   })
// }

// Через делегирование
listElement.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    console.log('List item clicked')
  }
})

const newListItemElement = document.createElement('li')

newListItemElement.textContent = 'New List item'

// newListItemElement.addEventListener('click', () => {
//   console.log('List item clicked')
// })

listElement.append(newListItemElement)

// События формы
const formElement = document.querySelector('#form')
const buttonSubmit = document.querySelector('#buttonSubmit') // submit на кнопке не слушаем!!!
const selectCategoryElement = document.querySelector('#category')

// 1.
const inputTitleElement = document.querySelector('#title')
const textareaContentElement = document.querySelector('#content')
const inputAuthorElement = document.querySelector('#author')

// formElement.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const post = {}

//   post.title = inputTitleElement.value
//   post.content = textareaContentElement.value
//   post.author = inputAuthorElement.value

//   console.log(post)
//   formElement.reset()
// })

// 2.
formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const post = {}

  const formData = new FormData(formElement)

  formData.append('language', 'RU')

  for (let [name, value] of formData) { // [name, value] = ['title', 'Hello']
    post[name] = value
  }

  console.log(post)
  formElement.reset()
})

// inputTitleElement.addEventListener('input', () => {
//   console.log(inputTitleElement.value)
// })

textareaContentElement.addEventListener('change', () => {
  console.log('Change input')
})

selectCategoryElement.addEventListener('change', () => {
  console.log('Change select')
})

// Редко используется
inputAuthorElement.addEventListener('blur', () => {
  console.log('Blur')
})


// Деструктуризация
// Массива
const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const [a, b, c, d = 0] = arr // [1, 2, 3]

console.log(a, b, c, d)

// Объект
const car = {
  brand: 'BMW',
  age: 2010,
  mark: '6'
}

const { age, mark: carMark, speed = 0 } = car

console.log(carMark)
