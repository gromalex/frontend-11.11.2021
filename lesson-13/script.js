// ДЗ.
// 1.
class Shape {
  constructor (color, width, height) {
    this.color = color
    this.width = width
    this.height = height ? height : width
  }

  calcArea () {
    return this.width * this.height
  }

  template () {
    return `
      <div style="background-color: ${this.color}; width: ${this.width}px; height: ${this.height}px">
        S = ${this.calcArea()}px2
      </div>
    `
  }

  render () {
    const template = this.template()
    document.body.innerHTML += template
  }
}

class Rectangle extends Shape {}

// class Square extends Shape {
//   constructor (color, size) {
//     super(color, size, size)
//   }
// }

class Square extends Shape {}

const square = new Square('red', 200)
square.render()

class Circle extends Shape {
  template () {
    return `
      <div style="background-color: ${this.color}; width: ${this.width}px; height: ${this.height}px; border-radius: 50%;">
        S = ${this.calcArea()}px2
      </div>
    `
  }
}

const circle = new Circle('blue', 300)
circle.render()


// Git -----------------------------------------------------------------------
//
// 1. Установка GitBash (https://git-scm.com/downloads)
//  - Соглашаемся с лицензией
//  - Оставляем дефолтные компоненты
//  - Выбрать редактор
//  - https://drive.google.com/drive/folders/1Y7QhIo29MD-2AzblDWjODifek53naa2G?usp=sharing

// Основные команды bash https://kmb.cybber.ru/bash/main.html
//  $ cd - сокращенное change directory. Позволяет перемещаться по файловой системе
//  $ ls - сокращение от list. Отображает все файлы и директории
//  $ mkdir - сокращение от make directory. Создает директории с именем directory
//  $ touch <file_name> - создать файл

// Регистрация на https://github.com/

// Основные команды git
// $ git clone <url> - создать локальный репозиторий
// $ git status - проверить состояние файлов

// $ git add . - проиндексировать текущее состояния/новые изменения, . - это все файлы с изменениями в репозитории
// $ git commit -m "Name commit" - коммит изменений

// $ git checkout name_file - отменить изменения в файле name_file
// $ git checkout . - отменить изменения во всех файлах

// .gitignore

// Установка node.js -----------------------------------------------------------
// Скачать https://nodejs.org/ru/ и установить
