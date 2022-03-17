import './scss/app.scss'

// Методы строк match, replace

const text = 'Сюжета 3 #237bcb #232323  рассказывает... о человеке, ...#1c224b9. который сюжеты 34 непонятным .. образом оказывается#22323 ..... в городе, где помимо ... него самого больше нет ни одного #1ct24b9 человека. На протяжении всего ...эпизода главный герой Майк Феррис пытается найти.... людей 56 и разобраться 345634567 в #1c24b9 том, что тут произошло. сюжету...#1c24b9'

// const matches = text.match('не')
// const newText = text.replace('майк', 'Джек')
// console.log(newText)

// Регулярные выражения
// const regexp = new RegExp('чт', 'gim')

// Флаги:
// i - не учитывает регистр
// g - поиск всех совпадений
// m - многострочный поиск

// Символьные классы
// \w - буква из латинского алфавита, цифры и _
// \W - любой символ кроме буквы латинского алфавита
// \d - цифра 0-9
// \D - не цифра
// \s - пробел, таб, новые строки
// \S - все, кроме \s
// \n - перенос строки
// . - любой, символ точка \.
// \b - конец, начало слова

// Начало ^ и конец $ строки

// Наборы []
// [...] - любой символ, который находится в [] (условно между ними оператор "или")
// [^...] - любой символ, кроме тех, которые находятся в []
// [а-яА-Я] - любой символ из кириллицы
// [0-9] == \d
// [^0-9] == \D
// [.+,] - любой из символов

// Квантификаторы
// {n} - добавляется к символу (/5{3}/gim == /555/gim)
// [01]{1} - только один, 0 или 1
// \s{0,1} - символ должен быть хотя бы 1
// [а-яА-Я]{1,6} - символы в количестве от 1 до 6

// {0,1} == ?
// {1,} == +
// {0,} == *

// Скобочные группы (...)
// Позволяет поместить часть совпадений в отдельный элемент массива
// Позволяет применять квантификатор ко всей группе

const go = 'gogogogo go go go go'
const regexpGo = /(go\s)/gim
console.log(go.match(regexpGo))

// TODO:
// 1. Написать регулярное выражение для поиска многоточия ...s
// 2. Заменить все многоточия ... на !!!
// console.log(text.match(/\.{3}/gim))
// console.log(text.replace(/\.{3}/gim, '!!!'))

console.log(text.replace(/([^\s.])(\.{3})([^.])/gim, '$1!!!$3'))

// TODO: Написать регулярное выражение для css цветов (#237bcb, #232323, #1c24b9).

console.log(text.match(/#[0-9a-f]{6}/gim))

// +375 (33) 665-98-09
// 8 029 355-98-08
const text2 = 'Lorem +375336659809 ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur +375335678912 commodi sunt odit repellendus exercitationem!'

console.log(text2.replace(/(\+375)(\d{2})(\d{3})(\d{2})(\d{2})/gim, '$1 ($2) $3-$4-$5'))

// * Жадные и ленивые квантификаторы
const text1 = '**Lorem** "html ipsum" dolor sit amet consectetur "adipisicing" elit. Aut ab css labore in deserunt perferendis ipsum dolorum js omnis nisi, voluptatibus "nostrum" quos repellendus javascript provident "totam" dicta a! **Explicabo** beatae alias deserunt!'

console.log(text1.match(/".+?"/gim))

// * Альтернация (или) |
const text3 = 'Lorem html ipsum dolor sit amet consectetur adipisicing elit. Aut ab css labore in deserunt perferendis ipsum dolorum js omnis nisi, voluptatibus nostrum quos repellendus javascript provident totam dicta a! Explicabo beatae alias css deserunt!'

console.log(text3.match(/html|css|js|javascript/gim))

const text4 = 'The **carousel** is a slideshow for cycling **through** a series of content, built with CSS 3D ~~transforms~~ and a bit of JavaScript. It works with a **series** of images, text, or custom markup. It also includes support for ~~previous/next~~ controls and indicators.'

console.log(
  text4
    .replace(/\*\*(.+?)\*\*/gim, '<strong>$1</strong>')
    .replace(/~~(.+?)~~/gim, '<strike>$1</strike>')
)

document.body.innerHTML += text4
  .replace(/\*\*(.+?)\*\*/gim, '<strong>$1</strong>')
  .replace(/~~(.+?)~~/gim, '<strike>$1</strike>')
