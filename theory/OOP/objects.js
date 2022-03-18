const anyaObject = {
    name: 'Ann',
    lastname: 'Kuznetsova',
    birthYear: 2000,
    job: 'web developer',
    familyMembers: ['Lena', 'Dima', 'Anya'],
    hasDriverLicense: false,

    calcAge: function(){
        this.age = 2022 - this.birthYear  // метод объекта
    },

    getSummary: function(){
        this.calcAge()
        this.summary = `${this.name} is a ${this.age}-years old ${this.job} and ` + 
                        `she has ${this.hasDriverLicense ? 'a' : 'no'} driver license`
    }
}

const userInput = prompt('What do you want to know about Anya? Choose between name, lastname, birthYear, job')

if(anyaObject[userInput]){
    console.log(anyaObject[userInput]) // исп квадратные скобки вместо точки
} else {
    console.log('This property does not exist!')
}

//challenges
`${anyaObject.name} has ${anyaObject.familyMembers.length} and the first one is ${anyaObject.familyMembers[0]}`

//challenges
anyaObject.getSummary()
console.log(anyaObject.summary)





//=================================================
//клонирование объектов (поверхностное)

const numbers = {
    a: 20,
    b: 4,
    c: {
        x: 4,
        y: 3
    }
}

//1 способ - перебор for in
const clone = {}

for (let key in numbers){
    clone[key] = numbers[key]
}

clone.a = 555
clone.c.x = 474487 //будет изменяться и объект numbers, тк с: {} - это вложенная структура


//2 способ - Object.Assign - соединяет 2 объекта 
const clone1 = Object.assign({}, numbers)

//3 способ - spread
const clone2 = {...numbers}

//4 - глубокое копирование - JSON - важно!!!!!!!

const clone = JSON.parse(JSON.stringify(numbers))

//==============================
//ООП

const soldier = {
    health: 500,
    armor: 400,
    sayHi: function(){
        console.log("hi")
    }
}

const john = {
    health: 100
}

Object.setPrototypeOf(john, soldier) //установка soldier в качестве прототипа для john

const jack = Object.create(soldier) //создание на основе прототипа

//геттеры и сеттеры

const persone = {
    name: 'Alex',
    age: 25, 

    get userAge() {
        return this.age //геттер
    },

    set userAge(num){
        this.age = num  //сеттер
    }
}

console.log(persone.userAge) // не ставим круглые скобки, тк это свойство 

// инкапсуляция
// объект приватно хранит состояние, только с помощью методов объекта можно его изменить
// в js нет свойств private и protected, их можно только имитировать

// пример с функцией-конструктором 
function User (name, age){
    this.name = name
    let userAge = age

    this.say = function (){
        console.log(`${this.name} ${userAge}`)
    }

    this.getAge = function(){
        return userAge
    }

    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const ivan = new User('Ivan', 27)

console.log(ivan.getAge())
ivan.setAge(65)
console.log(ivan.getAge())

ivan.say()

// пример с классом

class User1{
    constructor(name, age){
      this.name = name
      this._age = age
    }
     
    say (){
        console.log(`${this.name} ${this._age}`)
    }

    get age (){
        return this._age
    }

    set age (age){
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const ivan1 = new User1('Ivan', 27)
console.log(ivan1.age)
ivan1.age = 99
console.log(ivan1.age)