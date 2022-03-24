// Типы
class User {
  name: string = ''
  email: string = ''

  constructor (userName: string, email: string) {
    this.name = userName
    this.email = email
  }
}

const newUser = new User('Alex', 'test@test.com')
console.log(newUser)

// Модификаторы
// public, private, protected, readonly
class Animal {
  private id: string | number
  readonly name: string
  constructor (name: string) {
    this.id = Date.now()
    this.name = name
  }

  setName () {
    // this.name = 'TryRename' // error
  }

  public showInfo () {
    console.log(this.name)
  }
}

const dog = new Animal('dog')
// dog.name = 'TryRename' // error
dog.showInfo()
// dog.id // error

class Cat extends Animal {
  tryShowId () {
    // console.log(this.id) error
  }
}

const cat = new Cat('cat')

// Статические свойства
class Bird extends Animal {
  static fly () {
    console.log('Летит')
  }
}

Bird.fly()
