// Протокол запроса для Веб ---------------------------------------------------
// http - протокол передачи гипертекста (HTTP) является базовым сетевым protocol, который позволяет передавать гипермедиа документы в Web
// http://google.com - используя данную запись в url строке браузера, мы говорим: запросить документ используя протокол http.
// https - защищённая версия протокола http
// https://kunegin.com/ref3/wap/images/ris2.jpg

// Rest API
//   - API - программный интерфейс для общения программ
//   - REST - это интерфейс общения через HTTP протокол

// CRUD: C - create, R - read, U - update, D - delete;

// AJAX (Async JavaScript and XML) XMLHttpRequest — это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы -------------------------------------------------------------

const xhr = new XMLHttpRequest()
console.log(xhr)

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')

console.log(xhr.status)
console.log(xhr.response)

xhr.onload = function () {
  // console.log(xhr.status)
  // console.log(xhr.response)
}

xhr.send()

// Методы запроса
// POST - create / update
// GET - read
// PUT/PATCH - update
// DELETE - delete

// Статусы запросов
// 1хх - информационный
// 2хх - успешное выполнение
// 3хх - перенаправление
// 4хх - ошибка на клиенте
// 5хх - ошибка на сервере

// JSON (JavaScript Object Notation) ----------------------------------------------
// Метод JSON.parse(response) - из json в объект javascript
// Метод JSON.stringify(data) - из объекта javascript в json

const userJson = `
  {
    "name": "Alex",
    "age": 24,
    "isAmin": false
  }
`

const user = JSON.parse(userJson)
// console.log(userJson)
// console.log(user)

const admin = {
  name: 'Admin',
  age: 45,
  isAdmin: true,
  showName() {
    console.log(this.name)
  }
}

console.log(JSON.stringify(admin))

function fetchData (url, method, callback) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = () => {
    if (xhr.status == '200') {
      callback(xhr.response)
    }
  }

  xhr.onerror = () => {
    console.error(xhr.status + ' ' + xhr.statusText)
  }

  xhr.send()
}

function templateCard ({ title, body }) { // = item
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${body}</p>
      </div>
    </div>
  `
}

fetchData('https://jsonplaceholder.typicode.com/posts', 'GET', (response) => {
  console.log(response)
  const data = JSON.parse(response)
  console.log(data)

  data.forEach((item) => {
    const template = templateCard(item)
    document.body.innerHTML += template
  })
})
