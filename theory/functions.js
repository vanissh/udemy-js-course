//FUNCTION DECLARATION 

//можно вызывать функцию до ее определения
const myAge1 = getAge1(2000, 2022)
console.log(myAge1) //22

function getAge1(birthYear, yearNow){
    return yearNow - birthYear
}

//FUNCTION EXPRESSION

//нельзя вызывать до определения

const getAge2 = function(birthYear, yearNow){
    return yearNow - birthYear
}
const myAge2 = getAge2(2000, 2022)
console.log(myAge2) //22

//ARROW FUNCTION - func expression

const getAge3 = (birthYear, yearNow) => yearNow - birthYear

const myAge3 = getAge3(2000, 2022)
console.log(myAge3) //22
