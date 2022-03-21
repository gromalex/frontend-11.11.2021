import './scss/app.scss'

// Form validation

// Нативная браузерная валидация форм
// Методы checkValidity, setCustomValidity
const formElement = document.querySelector('#form')
// const inputPhoneElement = document.querySelector('#phone')
const buttonElement = document.querySelector('#button')

// Реализация кастомных ошибок
// inputPhoneElement.setCustomValidity('')

// inputPhoneElement.addEventListener('input', () => {
//   inputPhoneElement.checkValidity()
//   inputPhoneElement.setCustomValidity('')
// })

// inputPhoneElement.addEventListener('invalid', () => {
//   if (inputPhoneElement.value === '') {
//     inputPhoneElement.setCustomValidity('Заполните поле')
//   } else {
//     inputPhoneElement.setCustomValidity('Введите номер телефона в формате +375(**)***-**-**')
//   }
// })

formElement.addEventListener('submit', (event) => {
  console.log('submit')
  if (!formElement.checkValidity()) {
    event.preventDefault()
    formElement.classList.add('enable-validation')
  }
})
