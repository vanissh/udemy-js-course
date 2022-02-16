const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57],
    tips = [],
    totals = []

const calculateTips = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15

bills.forEach(bill => {
    let tip = calculateTips(bill)
    tips.push(tip)
    totals.push(bill + tip)
})

console.log(tips, totals)
/****************************/

const calculateAverage = (arr) => {
    // let sum = 0
    // arr.forEach(item => sum+= item)

    const sum = arr.reduce((a, b) => a + b)
    return sum / arr.length
}

console.log(calculateAverage(totals))
