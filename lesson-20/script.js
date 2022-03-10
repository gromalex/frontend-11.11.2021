function getPromiseResolve (delay, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

function getPromiseReject (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error('Error promise')
      reject(error)
    }, delay)
  })
}

function showSpinner () {
  console.log('Появился спиннер')
}

function hideSpinner () {
  console.log('Спрятался спиннер')
}

// Promise.all
const promise1 = getPromiseResolve(3000, 'promise 1')
const promise2 = getPromiseResolve(1000, 'promise 2')
const promise3 = getPromiseResolve(2000, 'promise 3')

showSpinner()
Promise
  .all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(() => {
    hideSpinner()
  })

// Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
  .then(result => {
    console.log(result)
  })

// Promise.any
Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })

// Promise.race
Promise.race([promise1, promise2, promise3])
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })

const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/albums',
]

const promises = urls.map((url) => fetch(url))
console.log(promises)

// Promise
//   .all(promises)
//   .then(responses => {
//     const dataPromise = responses.map(response => response.json())
//     Promise.all(dataPromise).then(data => console.log(data))
//   })

// Promise
//   .any(promises)
//   .then(response => response.json())
//   .then(data => console.log(data))

// async...await
// function getData() {
//   return fetch('https://jsonplaceholder.typicode.com/albums')
// }

// getData().then(response => response.json()).then(data => console.log(data))

async function getDataAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await response.json()

  console.log(data)
}

// async () => {

// }

(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await response.json()

  console.log(data)
})()
