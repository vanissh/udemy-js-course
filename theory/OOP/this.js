'use strict'

function showThis(a, b){
    console.log(this) //undefined

    function sum(){
        console.log(this) //undefined
        return this.a + this.b //error
    }

    console.log(sum)
}

const obj = {
    a: 5,
    b: 6,
    sum: function () {
        //const _this = this
        console.log(this)
        console.log(this.a + this.b)

        function shout(){
            console.log(this) //undefined
        }
        shout()
    }
}

function User(name, id){
    this.name = name,
    this.id = id,
    this.human = true,
    this.hello = function(){
        console.log(this)  //  новый экземпляр объекта на основе функции конструктора, т.е. 
    }
}

let ivan = new User('Ivan', 23) 
ivan.hello()

//obj.sum()

//showThis(4, 5)

//1) Обычная функция: this = window, но если use strict - undefined
//2) Контекст у методов объекта - сам объект
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) у стрелочных функций нет контекста вызова, она берет его у родителя

//ручное присвоение this - bind, call, apply

function sayName (surname) {
    console.log(this)
    console.log(this.name + surname)
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith') // передаем контекст объекта функции, передаем аргументы через запятую
sayName.apply(user, ['Smith']) // передаем аргументы в массиве

//bind - создает новую функцию 

function count (num) {
    return this * num
}

const double = count.bind(2) // 2 - это this, 3 - это num
// console.log(double(3));

const user1 = {
    name : 'john',
    sayName: function(){
        console.log(this) // объект user1 
        const say = () => console.log(this)  // объект user1 

        say()
    }
}

//user1.sayName()