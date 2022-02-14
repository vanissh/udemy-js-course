// EXPRESSIONS - производит значение

2 + 2
37
true && false

//STATEMENTS - последовательность действий, не производят значения

const number = 10

if(number > 0){
    const text = 'The number is positive'
}

//f.e. в шаблонные литералы можно вставить только выражение (expression), но не последовательность действий

// console.log(`${number - 2}`) // expression
// console.log(`${if(number > 0){
//     const text = 'The number is positive'
// }}`) // statement -  выдаст ошибку