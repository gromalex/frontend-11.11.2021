// Типы аргументов
function calcSum (a: number = 0, b: number = 0) {
  console.log(a + b)
}

calcSum(3, 4)
calcSum()

// Тип возвращаемого значения
function getFullName (firstName: string = '', lastName: string = ''): string {
  return firstName + ' ' + lastName
}

getFullName('Ivan', 'Sidorov')
getFullName()

// Опциональные аргументы
function concatString (text1: string, text2?: string): void {
  console.log(text1 + text2)
}

concatString('test', 'test2')

// Практика
function findPositiveNumbers (arr: number[]): number[] {
  const positiveNumbers = arr.filter((item: number): boolean => item >= 0)
  return positiveNumbers
}

const result: number[] = findPositiveNumbers([5, 4, 3, -3, -10, -1, 8, -20, 0])
console.log(result)

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// например запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

const filterFor = (arr: number[], a: number): number[] => {
  return arr.filter((item) => item >= a)
}

console.log(filterFor([5, 4, 3, -3, -10, -1, 8, -20, 0], 2))
