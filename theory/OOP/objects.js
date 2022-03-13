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
