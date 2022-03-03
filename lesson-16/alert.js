class Alert {
  constructor () {
    this.alertElement = document.querySelector('#alert')

    window.addEventListener('form.submitted', this.handleFormSubmitted.bind(this))
  }

  handleFormSubmitted (event) {
    console.log(event.detail.message)
    this.showAlert(event.detail.message)
  }

  showAlert(message) {
    this.alertElement.innerHTML = message

    this.alertElement.classList.remove('d-none')

    setTimeout(() => {
      this.alertElement.classList.add('d-none')
    }, 5000)
  }
}

export { Alert }
