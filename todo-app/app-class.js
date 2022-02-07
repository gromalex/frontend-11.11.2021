class ToDo {
  storage = localStorage.getItem('data')
  parsedStorage = this.storage ? JSON.parse(this.storage) : []
  data = this.parsedStorage

  formCreateElement = document.querySelector('#formCreate')
  listElement = document.querySelector('#list')
  inputSearchTitleElement = document.querySelector('#searchTitle')
  selectSortElement = document.querySelector('#sort')

  isEdit = false

  constructor () {
    this.init()
  }

  init () {
    this.formCreateElement.addEventListener('submit', this.handleSubmitFormCreate.bind(this))
    this.inputSearchTitleElement.addEventListener('input', this.handleInputSearchTitle.bind(this))
    this.selectSortElement.addEventListener('change', this.handleChangeSort.bind(this))
    this.listElement.addEventListener('change', this.handleChangeTodo.bind(this))
    this.listElement.addEventListener('click', this.handleRemoveTodo.bind(this))
    this.listElement.addEventListener('click', this.handleEditTodo.bind(this))
    this.listElement.addEventListener('submit', this.handleSubmitFormEdit.bind(this))
    window.addEventListener('beforeunload', () => {
      const string = JSON.stringify(this.data)
      localStorage.setItem('data', string)
    })
    document.addEventListener('DOMContentLoaded', () => {
      console.log(this.data)
      const string = JSON.stringify(this.data)
      console.log(string)
      this.render(this.data)
    })
  }

  handleSubmitFormCreate (event) {
    event.preventDefault()

    const date = new Date()
    const todo = {
      id: date.getTime(),
      createdAt: date,
      isChecked: false
    }

    const formData = new FormData(this.formCreateElement)

    for (let [name, value] of formData) { // let [name, value] = ['title', 'Value']
      console.log(name, value)
      todo[name] = value
    }

    this.data.push(todo)
    this.formCreateElement.reset()

    this.render(this.data)
  }

  handleSubmitFormEdit (event) {
    event.preventDefault()

    const { target } = event

    const inputElement = target.querySelector('input[name="title"]')
    const { value } = inputElement
    const { id } = target.dataset

    this.data.forEach((item) => {
      if (item.id == id) {
        item.title = value
      }
    })

    console.log(this.data)

    const parentElement = target.closest('.island__item')
    parentElement.classList.remove('island__item_edit')

    this.isEdit = false
    this.render(this.data)
  }

  handleInputSearchTitle (event) {
    const { target } = event
    const queryString = target.value

    const matches = this.data.filter(item => {
      if (item.title.includes(queryString)) {
        return true
      }
    })

    this.render(matches)
  }

  handleChangeSort (event) {
    const { target } = event
    const { value } = target

    let sortedData = []

    if (value) {
      sortedData = this.data.sort((a, b) => b[value] - a[value])
    } else {
      sortedData = this.data
    }

    this.render(sortedData)
  }

  todoTemplate ({id, title, isChecked, createdAt, priority, estimate}) {
    const idAttr = 'todo' + id
    const checkedAttr = isChecked ? 'checked' : ''
    const dateCreatedAt = this.buildDate(createdAt)
    const stars = this.buildPriority(priority)

    return `
      <div class="island__item ${isChecked ? 'island__item_checked' : ''}">
        <div class="form-check d-flex align-items-center">
          <input
            class="form-check-input"
            type="checkbox"
            ${checkedAttr}
            id="${idAttr}"
            data-id="${id}">

          <label class="form-check-label ms-3" for="${idAttr}">
            ${title}
          </label>

          <form class="form-edit ms-3" data-id="${id}">
            <input type="text" class="form-control" name="title" placeholder="Заголовок" value="${title}">
            <button
              class="btn btn-sm btn-primary ms-3"
              type="submit">
            Save
          </button>
          </form>

          <span class="badge bg-dark ms-auto">${stars}</span>

          <span class="ms-3">${estimate + 'ч.'}</span>

          <time class="ms-3">${dateCreatedAt}</time>

          <button
            class="btn btn-sm btn-warning ms-3"
            type="button"
            data-role="edit"
            data-id="${id}">
            Редактировать
          </button>

          <button
            class="btn btn-sm btn-danger ms-3"
            type="button"
            data-role="remove"
            data-id="${id}">
            <span class="pointer-events-none">🗑</span>
          </button>
        </div>
      </div>
    `
  }

  handleChangeTodo (event) {
    const { target } = event
    const { id } = target.dataset

    if (target.type != 'checkbox') return

    this.data.forEach((item) => {
      if (item.id == id) {
        item.isChecked = target.checked
      }
    })

    const parentElement = target.closest('.island__item')
    parentElement.classList.toggle('island__item_checked')
  }

  handleRemoveTodo (event) {
    const { target } = event

    if (target.dataset.role != 'remove') return

    const { id } = target.dataset

    this.data.forEach((item, index) => {
      if (item.id == id) {
        this.data.splice(index, 1)
      }
    })

    this.render(this.data)
  }

  handleEditTodo (event) {
    const { target } = event

    if (target.dataset.role != 'edit') return

    if (this.isEdit) {
      alert('Задача уже редактируется')
      return
    }

    const parentElement = target.closest('.island__item')
    parentElement.classList.add('island__item_edit')
    this.isEdit = true
  }

  transformTime (time) {
    return time < 10 ? `0${time}` : time
  }

  buildDate (date) {
    const objectDate = new Date(date)
    const day = this.transformTime(objectDate.getDate())
    const month = this.transformTime(objectDate.getMonth() + 1)
    const year = this.transformTime(objectDate.getFullYear())

    return `${day}.${month}.${year}`
  }

  buildPriority (count) {
    let stars = ''

    for (let i = 0; i < count; i++) {
      stars = stars + '⭐'
    }

    return stars
  }

  render (todoList) {
    let result = ''

    todoList.forEach((todo) => {
      const template = this.todoTemplate(todo)

      result = result + template
    })

    this.listElement.innerHTML = result
  }
}

const todo = new ToDo()
