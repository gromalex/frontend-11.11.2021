// Cookie
// Создание
document.cookie = 'user=Alex; path=/; max-age=30'
document.cookie = 'token=f734g728f8732g4823g48o724'
console.log(document.cookie)

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? matches[1] : undefined;
}

console.log(getCookie('token'))

document.cookie = 'user=Alex; path=/; max-age=-1'

// localStorage, sessionStorage
console.log(localStorage)

// Создание, редактирование
localStorage.setItem('user', 'Alex')
localStorage.setItem('user', 'Vasya')

const string = JSON.stringify({ id: 23423424, title: 'Hello'})
localStorage.setItem('data', string)

// Чтение
console.log(localStorage.getItem('user'))

const object = JSON.parse(localStorage.getItem('data'))
console.log(object)

// Удаление
localStorage.removeItem('user')

