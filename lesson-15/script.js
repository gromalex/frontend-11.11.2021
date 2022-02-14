// ДЗ
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

class Users {
  leftSideElement = document.querySelector('#leftSide')
  rightSideElement = document.querySelector('#rightSide')
  baseUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor () {
    this.init()
  }

  init () {
    this.renderUsers()

    this.leftSideElement.addEventListener('click', this.handleClickUsersItem.bind(this))
  }

  handleClickUsersItem (event) {
    const { target } = event
    const linkElement = target.closest('a')

    if (linkElement) {
      event.preventDefault()
      const { href: url } = linkElement

      this.renderUser(url)
    }
  }

  getTemplateUsersItem ({id, name, email}) { // = item
    const url = `${this.baseUrl}/${id}`

    return `
      <a href="${url}" class="card mb-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${email}</p>
        </div>
      </a>
    `
  }

  getTemplateUser (data) {
    return `
      <div class="card mb-3" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${data.name}</h2>
          <p class="card-text">${data.email}</p>
          <p>${data.phone}</p>
        </div>
      </div>
    `
  }

  renderUsers () {
    fetchData(this.baseUrl, 'GET', (response) => {
      const data = JSON.parse(response)

      const usersTemplates = data.map((item) => this.getTemplateUsersItem(item))
      const usersHTML = usersTemplates.join('')
      this.leftSideElement.innerHTML = usersHTML
    })
  }

  renderUser (url) {
    fetchData(url, 'GET', (response) => {
      const data = JSON.parse(response)

      const userHTML = this.getTemplateUser(data)
      this.rightSideElement.innerHTML = userHTML
    })
  }
}

// new Users()



// TODO: Рассказать еще раз про деструктуризация
let arr = [1, 2, 3]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

let [a, b, c, d = 0] = arr // [1, 2, 3]

let user = {
  name: 'Alex',
  phone: '132234544'
}

// let userName = user.name
// let phone = user.phone

let { name: userName, phone } = user

// Асинхронность в JS
const message = 'Hello js'

console.log(message)

// Повторить колбэки
function releaseAlbum (listener) {
  setTimeout(() => {
    const album = 'Album'
    listener(album)
  }, 3000)
}

function playAlex (album) {
  console.log('Play' + ' ' + album)
}

function playVasiliy(album) {
  console.log('Play' + ' ' + album)
}

// releaseAlbum(playAlex)
// releaseAlbum(playVasiliy)

// Ад колбэков

const urls = [
  'https://dev.by/storage/images/43/22/79/97/derived/8b227361c8aff3f918df71611dd3563b.jpg',
  'https://dev.by/storage/images/24/43/12/02/derived/707cc7c5b58a3bb60a05ce420a06d044.jpg',
  'https://dev.by/storage/images/11/29/45/06/derived/ccbdfe8e18fc39a5a392199ff073543e.jpg'
]

function loadImage (url, callback) {
  const imageElement = document.createElement('img')
  imageElement.src = url

  imageElement.onload = (event) => {
    console.log(event)
    callback(event.type)
  }

  document.body.append(imageElement)
}

// loadImage(urls[0], (status) => {
//   if (status = 'load') {
//     loadImage(urls[1], (status) => {
//       if (status = 'load') {
//         loadImage(urls[2], (status) => {
//           if (status = 'load') {
//             console.log('All images loaded')
//           }
//         })
//       }
//     })
//   }
// })

// Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const album = 'Album'
//     reject('Альбом просрочен')
//   }, 3000)

//   setTimeout(() => {
//     const album = 'Album'
//     resolve(album)
//   }, 4000)
// })

// promise
//   .then(playAlex)
//   .catch((error) => {
//     console.error(error)
//   })


function loadImagePromise (url) {
  const promise = new Promise((resolve, reject) => {
    const imageElement = document.createElement('img')
    imageElement.src = url

    imageElement.onload = (event) => {
      console.log(event)
      resolve(event.type)
    }

    imageElement.onerror = (event) => {
      console.log(event)
      reject(event.type)
    }

    document.body.append(imageElement)
  })

  return promise
}

loadImagePromise(urls[0])
  .then((status) => {
    if (status = 'load') {
      return loadImagePromise(urls[1])
    }
  })
  .then((status) => {
    if (status = 'load') {
      return loadImagePromise(urls[2])
    }
  })
  .catch(error => {
    console.error(error)
  })


// function fetchData (url, method, callback) {
//   const xhr = new XMLHttpRequest()

//   xhr.open(method, url)

//   xhr.onload = () => {
//     if (xhr.status == '200') {
//       callback(xhr.response)
//     }
//   }

//   xhr.onerror = () => {
//     console.error(xhr.status + ' ' + xhr.statusText)
//   }

//   xhr.send()
// }

function fetchDataPromise (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.onload = () => {
      if (xhr.status == '200') {
        resolve(xhr.response)
      } else {
        reject(xhr.status + ' ' + xhr.statusText)
      }
    }

    xhr.onerror = () => {
      reject(xhr.status + ' ' + xhr.statusText)
    }

    xhr.send()
  })
}

fetchDataPromise('https://jsonplaceholder.typicode.com/comment')
  .then((response) => {
    const data = JSON.parse(response)
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })


// ДЗ
const key = '1354067d4c5e5ba7d6625f68d153937b'
const urlWetherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`
const urlWetherByDays = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`

// fetchDataPromise(urlWetherCurrent)
//   .then((response) => {
//     const data = JSON.parse(response)

//     const city = data.name
//     const windDeg = data.wind.deg
//     const windSpeed = data.wind.speed
//     const date = new Date(data.dt * 1000)
//     const temp = data.main.temp - 273.15
//     const countryCode = data.sys.country
//     const description = data.weather[0].description
//     const iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

//     console.log(data)
//   })

fetchDataPromise(urlWetherByDays)
  .then((response) => {
    const data = JSON.parse(response)

    data.list.forEach((item, index) => {
      if (index % 8 == 0) {
        console.log(item)
      }
    })
  })
