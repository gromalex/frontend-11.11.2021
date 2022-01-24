// ДЗ
// 1.
const clockElement = document.querySelector('#clock')

function transformTime (time) {
  return time < 10 ? `0${time}` : time
}

function buildTemplateTime () {
  const date = new Date()
  let hours = date.getHours()
  hours = transformTime(hours)
  let minutes = date.getMinutes()
  minutes = transformTime(minutes)
  let seconds = date.getSeconds()
  seconds = transformTime(seconds)

  return `${hours}:${minutes}:${seconds}`
}

function renderTime () {
  const template = buildTemplateTime()

  clockElement.textContent = template
}

let timer = setInterval(renderTime, 1000)
