// methods

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const numbers = [23, 54, 4, 31, 11]

rainbowColors[rainbowColors.length] = 'dark blue' // аналог метода push

Array.isArray(rainbowColors) // true - проверка, является ли переменная массивом

numbers.indexOf(4) // 2

//push - добавляет элемент в конец, 
//pop - удаляет
//unshift - добавляет элемент в начало, 
//shift - удаляет 

numbers.splice(1, 1) // сращивает массив - указываем начальный индекс и количество элементов(удаляет)
numbers.reverse() // инвертирует
numbers.slice(1, 4) // вырезает кусок массива - исходный индекс и индекс, до которого надо вырезать элементы

numbers.concat(rainbowColors) // соединяет массивы


//=============================
//копирование массивов


const oldArray = [1, 444, 77]

const newArray = oldArray.slice() //копирование ES5

//_________________________
//копирование ES6
//оператор разворота - spread

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blog]

internet[0] = 'hjhjhjhj'

//___________________________
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const arr = [4, 7778735, 598549]

log(...arr)

// методы перебора массивов 

//filter

const names = ['Ivan', 'Anna', 'Ksenia', 'Vladilen']

let names1 = names.filter(name => name.length >= 5)
console.log(names1); // ['Ksenia', 'Vladilen'] - т.о метод filter не изменяет текущий массив, но возвращает новый


// map

names1 = names.map(name => name + 'yyy') // не изменяет текущий массив, создает новый 
console.log(names1)

// every

names1 = names.every(name => name.length > 5) // вернет true или false
console.log(names1)

// some вернет true при хотя бы одном совпадении

// reduce 
//получить сумму чисел 

const arr = [5, 7, 8, 4, 3, 6]

const result = arr.reduce((sum, current) => sum + current, 3)

//собрать строку из массива

const arr1 = ['apple', 'pear', 'plum']
const res = arr1.reduce((sum, current) => sum + ', ' + current) //apple, pear, plum

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}
const names2 = []

for(let key in obj){
    if(obj[key] === 'persone'){
        names2.push(key)
    }
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0])

console.log(newArr)
