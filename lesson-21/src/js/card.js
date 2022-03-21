import { DnD } from './dnd'

class Card {
  data = this.createData()
  activeStick = null
  isEdit = false
  color = 'rgb(235, 217, 178)'

  constructor () {
    this.buttonElement = document.querySelector('#button')
    this.inputColorElement = document.querySelector('#inputColor')
    this.containerElement = document.querySelector('#container')

    this.init()
  }

  init () {
    this.buttonElement.addEventListener('click', this.handleClickButton.bind(this))
    this.inputColorElement.addEventListener('change', this.handleChangeColor.bind(this))
    window.addEventListener('dnd.start', this.handleDnDStart.bind(this))
    window.addEventListener('dnd.end', this.handleDnDEnd.bind(this))
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this))
    document.addEventListener('click', this.handleClickRemoveButton.bind(this))
    document.addEventListener('dblclick', this.handleDbClickCard.bind(this))
    document.addEventListener('submit', this.handleSubmitFormEdit.bind(this))

    this.render()
  }

  handleClickButton () {
    const card = {
      id: Date.now(),
      content: 'Hello',
      color: this.color,
      position: {
        top: 'auto',
        left: 'auto'
      }
    }

    this.data.push(card)
    this.render()
  }

  handleDnDStart ({ detail }) {
    this.activeStick = detail.element
  }

  handleDnDEnd ({ detail }) {
    const { position } = detail

    if (this.activeStick) {
      const { id } = this.activeStick.dataset

      this.data.forEach(card => {
        if (card.id == id) {
          card.position = position
        }
      })

      const newData = this.data.filter(card => id == card.id)
      console.log(newData)

      this.activeStick = null
    }
  }

  handleBeforeUnload () {
    localStorage.setItem('data', JSON.stringify(this.data))
  }

  handleClickRemoveButton (event) {
    const { target } = event

    if (target && target.dataset.role == 'remove') {
      const { id } = target.dataset

      this.data.forEach((item, index) => {
        if (item.id == id) {
          this.data.splice(index, 1)
        }
      })

      this.render()
    }
  }

  handleDbClickCard (event) {
    const { target } = event
    const cardElement = target.closest('.card')

    if (!this.isEdit && cardElement) {
      // const { id } = cardElement.dataset
      this.isEdit = true

      cardElement.classList.add('card_edit')
    }
  }

  handleSubmitFormEdit (event) {
    event.preventDefault()

    const { target } = event

    if (target && target.dataset.role == 'edit') {
      const { id } = target.dataset
      const textareaElement = target.querySelector('textarea')
      const { value } = textareaElement

      this.data.forEach(item => {
        if (item.id == id) {
          item.content = value
        }
      })

      this.isEdit = false
      this.render()
    }
  }

  handleChangeColor () {
    const inputElements = [...this.inputColorElement.querySelectorAll('input')]
    const checkedInputElement = inputElements.find(item => item.checked)

    this.color = checkedInputElement.value
  }

  createData () {
    const dataFromStorage = localStorage.getItem('data')

    if (dataFromStorage) {
      return JSON.parse(dataFromStorage)
    }

    return []
  }

  buildCardElement (data) {
    const cardWrapperElement = document.createElement('div')
    cardWrapperElement.classList.add('card')
    cardWrapperElement.setAttribute('data-id', data.id)
    cardWrapperElement.style.top = data.position.top + 'px'
    cardWrapperElement.style.left = data.position.left + 'px'
    cardWrapperElement.style.backgroundColor = data.color

    const templateInnerCard = `
      <a href="#${data.id}" role="button" title="Remove card" data-role="remove" class="card__remove" data-id="${data.id}">×</a>
      <div class="card__content">${data.content}</div>
      <form class="card__form" data-id="${data.id}" data-role="edit">
        <textarea rows="5">${data.content}</textarea>
        <button>Save</button>
      </form>
    `
    cardWrapperElement.innerHTML = templateInnerCard
    new DnD(cardWrapperElement)

    return cardWrapperElement // html element!!!
  }

  render () {
    this.containerElement.innerHTML = ''

    this.data.forEach((data) => {
      const cardElement = this.buildCardElement(data)

      this.containerElement.append(cardElement)
    })
  }
}

export { Card }
