import { Alert } from './alert.js'

class Form {
  constructor () {
    this.formElement = document.querySelector('#form')

    this.init()
  }

  init () {
    this.formElement.addEventListener('submit', this.handleSubmitForm.bind(this))
  }

  handleSubmitForm (event) {
    event.preventDefault()

    // Логика...

    // Показать alert
    // const alert = new Alert()
    // alert.showAlert('Форма успешно отправлена!')

    const customEvent = new CustomEvent('form.submitted', {
      detail: { message: 'Форма успешно отправлена!' }
    })
    window.dispatchEvent(customEvent)
  }
}

export { Form }
