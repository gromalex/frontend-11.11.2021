// Размеры

// offsetWidth/Height - внешняя ширина и высота (ширина контента + padding + border)
// clientWidth/Height - размер области внутри рамок (ширина контента + padding)
// scrollWidth/Height - полный размер с учётом прокрученной области (без border)
// scrollLeft/scrollTop - ширина/высота прокрученной области
// clientTop/clientLeft - размер рамки

const blockElement = document.querySelector('.block')

console.log('offsetWidth/offsetHeight:', blockElement.offsetWidth, blockElement.offsetHeight)
console.log('style.width:', blockElement.style.width)
console.log('clientWidth/clientHeight:', blockElement.clientWidth, blockElement.clientHeight)
console.log('scrollWidth/scrollHeight:', blockElement.scrollWidth, blockElement.scrollHeight)

setTimeout(() => {
  console.log('scrollTop:', blockElement.scrollTop)
}, 2000)

console.log('clientTop/clientLeft:', blockElement.clientTop, blockElement.clientLeft)

console.log('Размеры окна:', document.documentElement.clientWidth, document.documentElement.clientHeight)
console.log('Размеры документа:', document.documentElement.scrollWidth, document.documentElement.scrollHeight)

// Практика:
// document.addEventListener('click', (event) => {
//   const { target } = event

//   const area = target.offsetWidth * target.offsetHeight + ' px'

//   alert(area)
// })

// Координаты

// pageXOffset/pageYOffset - смещение окна относительно документа по оси x/y (window)
// event.pageX/pageY - относительно документа
// event.clientX/clientY - относительно окна
// element.getBoundingClientRect - метод возвращает данные о координатах элемента и его размере

document.addEventListener('click', (event) => {
  console.log('Координаты относительно окна: ', event.clientX, event.clientY)
  console.log('Координаты относительно документа: ', event.pageX, event.pageY)
})

const rect = blockElement.getBoundingClientRect()
console.log(rect)

// Прокрутка: scrollIntoView, scrollTo
