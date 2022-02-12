// Type conversion 

// conversion to string 

//String()
let x = String(1111) //1111

x = String(2 + 2) //4
x = String(true) //true
x = String(new Date()) 
x = String(['one', 'two', 'three'])

//toString()
x = ['one', 'two', 'three'].toString()

// conversion to number

//Number()
let y = '5.666'
y = Number('5.666') //  аналогично '+'
y = Number(false) // true 1, false 0
y = Number(null) // 0
y = Number('text') // NaN
y = Number([1]) // 1
y = Number([1, 2]) // NaN

//parseInt()
y = parseInt('566.666') // 566 - распознает только целое число
y = parseFloat('566.666') // 566.666 - для дробных чисел

//Неявное приведение типов

const m = '5'
const n = '3'
let l = m + n //'53'
    l = m - n //2
    l = m * n //15