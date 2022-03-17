const storage = localStorage.getItem('data')
const parsedStorage = storage ? JSON.parse(storage) : []
const data = parsedStorage
console.log(data)

// if (storage) {
//   parsedStorage = JSON.parse(storage)
// } else {
//   parsedStorage = []
// }

const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

// ------------------------------------------------------------------------

formCreateElement.addEventListener('submit', handleSubmitFormCreate)
listElement.addEventListener('change', handleChangeTodo)
listElement.addEventListener('click', handleRemoveTodo)
listElement.addEventListener('click', handleEditTodo)
listElement.addEventListener('submit', handleSubmitFormEdit)
window.addEventListener('beforeunload', () => {
  const string = JSON.stringify(data)

  console.log(string)

  localStorage.setItem('data', string)
})
document.addEventListener('DOMContentLoaded', () => {
  console.log(data)
  const string = JSON.stringify(data)
  console.log(string)
  render()
})

// ------------------------------------------------------------------------

function handleSubmitFormCreate (event) {
  event.preventDefault()

  const date = new Date()
  const todo = {
    id: date.getTime(),
    createdAt: date,
    isChecked: false
  }

  const formData = new FormData(formCreateElement)

  for (let [name, value] of formData) { // let [name, value] = ['title', 'Value']
    console.log(name, value)
    todo[name] = value
  }

  console.log(todo)
  console.log(todo.createdAt.getFullYear())
  data.push(todo)
  formCreateElement.reset()

  console.dir(data[0].createdAt)

  render()
}

function handleSubmitFormEdit (event) {
  event.preventDefault()

  const { target } = event

  const inputElement = target.querySelector('input[name="title"]')
  const { value } = inputElement
  const { id } = target.dataset

  data.forEach((item) => {
    if (item.id == id) {
      item.title = value
    }
  })

  console.log(data)

  const parentElement = target.closest('.island__item')
  parentElement.classList.remove('island__item_edit')

  render()
}

function todoTemplate ({id, title, isChecked, createdAt, priority, estimate}) {
  const idAttr = 'todo' + id
  const checkedAttr = isChecked ? 'checked' : ''
  const dateCreatedAt = buildDate(createdAt)
  const stars = buildPriority(priority)

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
          🗑
        </button>
      </div>
    </div>
  `
}

function handleChangeTodo (event) {
  const { target } = event
  const { id } = target.dataset

  data.forEach((item) => {
    if (item.id == id) {
      item.isChecked = target.checked
    }
  })

  const parentElement = target.closest('.island__item')
  parentElement.classList.toggle('island__item_checked')
}

function handleRemoveTodo (event) {
  const { target } = event

  if (target.dataset.role != 'remove') return

  const { id } = target.dataset

  data.forEach((item, index) => {
    if (item.id == id) {
      data.splice(index, 1)
    }
  })

  render()
}

function handleEditTodo (event) {
  const { target } = event

  if (target.dataset.role != 'edit') return

  const parentElement = target.closest('.island__item')
  parentElement.classList.add('island__item_edit')
}

function transformTime (time) {
  return time < 10 ? `0${time}` : time
}

function buildDate (date) {
  const objectDate = new Date(date)
  const day = transformTime(objectDate.getDate())
  const month = transformTime(objectDate.getMonth() + 1)
  const year = transformTime(objectDate.getFullYear())

  return `${day}.${month}.${year}`
}

function buildPriority (count) {
  let stars = ''

  for (let i = 0; i < count; i++) {
    stars = stars + '⭐'
  }

  return stars
}

function render () {
  let result = ''

  data.forEach((todo) => {
    const template = todoTemplate(todo)

    result = result + template
  })

  listElement.innerHTML = result
}


