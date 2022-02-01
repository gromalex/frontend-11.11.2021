// ООП
// Инкапсуляция
// Полиморфизм
// Наследование

// Конструкторы
// function User (name, email) {
//   // this = {}

//   this.name = name
//   this.email = email
//   this.showInfo = function () {
//     console.log(this.name + ' ' + this.email)
//   }

//   // return {}
// }

// const user = new User('Alex', 'test@mail.test')
// console.log(user)
// user.showInfo()

// Классы
class User {
  isAdmin = false

  constructor (name, email) {
    this.name = name
    this.email = email
  }

  showInfo () {
    console.log(this.name + ' ' + this.email)

    if (this.isAdmin) console.log(this.name + ' admin')
  }

  // ...
}

const user = new User('Alex', 'test@mail.test')
const user2 = new User('Vasiliy', 'test1@mail.test')

console.log(user)
user2.isAdmin = true

user.showInfo()
user2.showInfo()

// Практика
class Rectangle {
  constructor (width = 100, height = 100, color = 'white') {
    this.width = width
    this.height = height
    this.color = color

    this.init()
  }

  init () {
    this.render()
    // ...
    // ...
  }

  template () {
    return `
      <div style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}">
        <h2>S = ${this.width * this.height}</h2>
      </div>
    `
  }

  render () {
    const template = this.template()
    document.body.innerHTML = document.body.innerHTML + template
  }
}

const rectangle = new Rectangle(200, 160, 'blue')
console.log(rectangle)


new Rectangle(300, 200, 'red')
new Rectangle(120, 240, 'grey')
new Rectangle()
