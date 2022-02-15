const dept1 = {
    firstQuarter: {
        January: 35476,
        February: 29842,
        March: 38501
    },
    secondQuarter: {
        April: 50301,
        May: 21984,
        June: 33899
    }
}
const dept2 = {
    firstQuarter: {
        January: 70533,
        February: 50121,
        March: 33899
    },
    secondQuarter: {
        April: 72381,
        May: 41562,
        June: 29465
    }
}

//P = (A-B)/B * 100%

const getAverage = (x, y, z) => (x + y + z) / 3

const dept1FirstQ = dept1.firstQuarter,
    dept1SecondQ = dept1.secondQuarter,
    dept2FirstQ = dept2.firstQuarter,
    dept2SecondQ = dept2.secondQuarter

const dept1AverSales1 = getAverage(dept1FirstQ.January, dept1FirstQ.February, dept1FirstQ.March)
const dept2AverSales1 = getAverage(dept2FirstQ.January, dept2FirstQ.February, dept2FirstQ.March)

const dept1AverSales2 = getAverage(dept1SecondQ.April, dept1SecondQ.May, dept1SecondQ.June)
const dept2AverSales2 = getAverage(dept2SecondQ.April, dept2SecondQ.May, dept2SecondQ.June)

const printBonus = (dept1AverSales, dept2AverSales) => {

    if(dept1AverSales > dept2AverSales && dept1AverSales >= 1.3 * dept2AverSales){
        percent = (dept1AverSales - dept2AverSales)/dept2AverSales * 100
        console.log(`Dept 1 will get a bonus of ${percent}%`)
    } else if(dept1AverSales < dept2AverSales && dept2AverSales >= 1.3 * dept1AverSales){
        percent = (dept2AverSales - dept1AverSales)/dept1AverSales * 100
        console.log(`Dept 2 will get a bonus of ${percent}%`)
    } else {
        console.log(`No bonus in this quarter`)
    }
}

printBonus(dept1AverSales1, dept2AverSales1)
printBonus(dept1AverSales2, dept2AverSales2)
