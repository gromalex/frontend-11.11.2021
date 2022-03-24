// Интерфейсы
interface AddressInterface {
  country: string,
  city: string,
  street?: string,
}

// Вложенные интерфейсы
interface UserInterface {
  readonly id: string | number,
  name: string,
  age?: number | string,
  email: string,
  isAdmin: boolean,
  address: AddressInterface
}

const user5: UserInterface = {
  id: '74g78v46gv',
  name: 'Alex',
  email: 'test@example.com',
  isAdmin: false,
  address: {
    country: 'RB',
    city: 'Minsk'
  }
}

console.log(user5)

// user5.id = 2354235645 // error

// Наследование интерфейсов
interface Car {
  readonly model: string,
  years?: number
}

interface SportCar extends Car {
  spoiler: boolean,
  maxSpeed: number
}

const sportCar: SportCar = {
  model: 'BMV',
  years: 1995,
  spoiler: true,
  maxSpeed: 240
}

console.log(sportCar)

// Реализация в классах
class UserConstructor implements UserInterface {
  isAdmin: boolean = false
  readonly id: number | string = Date.now()
  name: string = ''
  email: string = ''
  address: AddressInterface
  constructor (name: string, email: string, country: string, city: string) {
    this.name = name
    this.email = email
    this.address = { country, city }
  }
}

const user6 = new UserConstructor('Alex', 'test@mnail.com', 'RB', 'Minsk')
console.log(user6)

const titleElement: HTMLElement = document.createElement('div')
