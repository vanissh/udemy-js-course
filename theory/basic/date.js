let now = new Date() // Mon Mar 07 2022 10:54:53 GMT+0300 (GMT+03:00)

now = new Date('2022-03-07') //Mon Mar 07 2022 03:00:00 GMT+0300 - время в формате 00:00:00 + GMT

now = new Date(2022, 03, 07, 20) // Thu Apr 07 2022 20:00:00 - месяцы считаются с 0 до 11

//можно передавать милисекунды - отсчитываются с 01.01.1970 => 

now = new Date(0) // Thu Jan 01 1970 04:00:00 GMT+0400

now.getFullYear() // 1970
now.getMonth() // 0
now.getDate() // 1
now.getDay() // 1 - номер дня недели с воскресенья

let start = new Date()

for(let i = 0; i < 10000000; i++){
    let some = i ** 3
}

let end = new Date()

console.log(end - start) // время работы цикла
console.log(now)