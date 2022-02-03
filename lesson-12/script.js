// ООП

// Инкапсуляция
// Инкапсуляция — это объединение данных и методов, которые воздействуют на эти данные, так что доступ к этим данным ограничен извне.

// Замыкание
// https://docs.google.com/presentation/d/14-qTj_BZMXlxopccCO78lH9XrdUe_4Ef_ILJcjpZCak/edit#slide=id.p

function getCounter () {
  let counter = 0

  function incrementCounter () {
    counter++
    console.log(counter)
  }

  return incrementCounter
}

// const counter = getCounter()
// counter()
// counter()
// counter()

// const counter2 = getCounter()
// counter2()
// counter2()
// counter2()

// Геттер/сеттер свойства аксессоры
const user = {
  name: 'Alex',
  _age: 30,
  get age() {
    return this._age
  },
  set age(value) {
    if (value < 0 || value > 100) {
      console.error(value + ' не подходит')
      return
    }
    this._age = value
  }
}

// user._age = 30 // нельзя

console.log(user.age)
user.age = -10
console.log(user.age)

// Наследование
// Прототипное наследование
// __proto__
const bird = {
  fly: true,
  beak: 'middle',

  goToFly() {
    if (this.fly) {
      console.log('Полетела!')
    } else {
      console.log('Не умеет летать!')
    }
  }
}

// const chicken = {
//   fly: false,
//   beak: 'middle',

//   goToFly() {
//     console.log('Не умеет летать!')
//   }
// }

// const chicken = {
//   __proto__: bird,
//   fly: false,
// }

const chicken = Object.create(bird) // более современный подход
chicken.fly = false

console.log(chicken)
chicken.goToFly()

const car = {
  wheels: 4,
  fuel: 'бензин',

  start() {
    console.log('Машина поехала')
  }
}

const truck = {
  __proto__: car,
  wheels: 8,
  trailer: [],

  addCargo(item) {
    this.trailer.push(item)
  }
}

console.log(truck)

// Прототипное наследование на уровне конструктора
function Bird () {
  this.fly = true
  this.beak = 'middle'
  this.goToFly = function() {
    if (this.fly) {
      console.log('Полетела!')
    } else {
      console.log('Не умеет летать!')
    }
  }
}

function Chicken () {
  this.fly = false
}

Chicken.prototype = new Bird()
Chicken.prototype.foo = function () {console.log('Hello')}
const chicken1 = new Chicken()

console.log(chicken1)

// Классы (часть 2)
class ClassName {
  prop1 = 'value'
  constructor (argument) {
    this.prop2 = argument
    // ..
  }
  method() {}
  method2() {}
}

class User {
  isAuth = false
  constructor (email, password) {
    this.email = email
    this.password = password
  }

  auth (email, password) {
    if (this.email != email) {
      console.error('Введите правильный email')
    }

    if (this.password != password) {
      console.error('Пароль неверный')
    }

    if (this.email == email && this.password == password) {
      console.log('Вход выполнен!')
      this.isAuth = true
    }
  }

  exit () {
    console.log('Выход выполнен!')
    this.isAuth = false
  }

  edit () {
    console.log('Редактирует свой профиль')
  }
}

const user3 = new User('test@test.com', '123132')
user3.auth('test@test.com', '123132')
console.log(user3)

class Admin extends User {
  #role = 'admin'
  static property = 'value'
  isAdmin = true
  constructor (email, password, level) {
    super(email, password)
    this.level = level
  }

  #changeRole (value) {
    this.#role = value
  }

  showRole () {
    console.log(this.#role)
  }

  edit () {
    // console.log('Редактирует свой профиль')
    super.edit()
    console.log('Редактирует все комментарии')
  }
}

const admin = new Admin('admin@test.com', '123123123', 3)
// admin.#role = 'superAdmin' // error
console.log(admin)
admin.showRole()

console.log(Admin.property)
console.log(admin.property) // undefined

// Классы просто синтаксический сахар?
// конструкторы vs классы

// Полиморфизм
// Это возможность вызывать одни и те же методы в контексте разных объектов.
