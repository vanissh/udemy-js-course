let money = 100, cost = 50

money >= cost ? (console.log('you can buy it'),
                console.log('yyyyy')) :
                (console.log('you can not buy it')) //выполнение нескольких операций в скобках

const canYouBuyIt = money >= cost ? (money -= cost, true) : false

console.log(canYouBuyIt, money) //true 50
/* т.о. в скобках можно выполнять несколько операций, но 
последние операции в каждой части должны возвращать одинаковый тип, т к это значение 
будет результатом тернарного оператора */

//можно использовать в шаблонных литералах

console.log(`You can${money >= cost ? '' : ' not'} buy it`)