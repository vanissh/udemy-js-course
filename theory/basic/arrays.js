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
