const data = []
const formCreateElement = document.querySelector('#formCreate')
const listElement = document.querySelector('#list')

// ------------------------------------------------------------------------

formCreateElement.addEventListener('submit', handleSubmitFormCreate)
listElement.addEventListener('change', handleChangeTodo)
listElement.addEventListener('click', handleRemoveTodo)

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

  data.push(todo)
  formCreateElement.reset()

  render()
}

function todoTemplate ({id, title, isChecked}) {
  const idAttr = 'todo' + id
  const checkedAttr = isChecked ? 'checked' : ''

  return `
    <div class="island__item">
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

        <button
          class="btn btn-sm btn-danger ms-auto"
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

function render () {
  let result = ''

  data.forEach((todo) => {
    const template = todoTemplate(todo)

    result = result + template
  })

  listElement.innerHTML = result
}


