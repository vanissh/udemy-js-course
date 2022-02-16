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