// Объявление типов
const a = 10
// a = '10' // error
console.log(a)

const firstName: string = 'Alex'
const age: number = 30
const isAdmin: boolean = false
const user: object = {
  name: firstName
}

const arr: number[] = [1, 2, 3, 4]
const arr1: Array<string | number> = ['Hello', 'World', 10]

// Any — любой тип
let id: any = 24353563564736
id = '23523463564'

console.log(id)

// Tuple — фиксированное количество элементов в массиве
const user1: [string, number] = ['Alex', 375336638567]

// Type - собственные типы
type ID = string | number

// const userId: ID = '3fg4h657j687'
const userId: ID = 34563457685967
