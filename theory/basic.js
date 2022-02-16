//NUMBERS

let result

result = Math.PI //3.14
result = Math.round(3.5) //4
result = Math.ceil(3.4) //4
result = Math.floor(3.7) //3
result = Math.sqrt(9) //3
result = Math.abs(-8) //8
result = Math.pow(3, 2) //9
result = Math.min(3, 2, -57, 99, 82, 13) //-57
result = Math.max(3, 2, -57, 99, 82, 13) //99

result = Math.round(Math.random() * 100) // целое число от 0 до 100


//STRINGS

const firstName = 'Jack'
const lastName = 'Brown'
const colors = 'red, orange, blue, green'
const space = ' '
 //Escaping 
 result = "I like \"Star wars\" movie" // \ - экранирование

 //methods
result = firstName.concat(space, lastName) // 'Jack Brown'

result = 'Hello'.indexOf('e') // 1
result = 'Hello'.indexOf('lo') // 3 - индекс первого символа последовательности
result = 'Hello'.lastIndexOf('l') // 3 - ищет символ с конца строки
result = 'Hello'.lastIndexOf('z') // -1 - если символ отсутствует

result = firstName.charAt(1) // a
result = firstName.charAt(firstName.length - 1) // k - получаем последний символ строки

result = firstName.substring(0, 3) // Jac - подстрока начинается с 0 индекса и заканчивается на 2

result = firstName.slice(0, 3) // Jac - подстрока начинается с 0 индекса и заканчивается на 2
result = firstName.slice(-3) // ack - можно извлечь последние символы в строке

result = colors.replace('green', 'yellow') // 'red, orange, blue, yellow'

result = colors.includes('green') // true


//COMPARISON OPERATORS

// == - с приведением типов
// === - без приведения типов

result = true == 1 //true
result = true == 23 //false

result = true == '1' //false
result = true == '23' //false /// аналогично для false

result = null == undefined // true
result = null === undefined // false

result = NaN == NaN // false!!!
result = NaN === NaN // false!!!

//////precedence

// оператор = имеет один из самых низких приоритетов(3 по таблице), обратная ассоциативность right-to-left
let x, y // undefined
x = y = 3 // x = 3, y = 3, т.к. значение присваивается справа налево

