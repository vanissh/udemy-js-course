const bills = [11, 20, 47],
    tips = [],
    totalBills = []

const calculateTips = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15

bills.forEach(bill => {
    let tip = calculateTips(bill)
    tips.push(tip)
    totalBills.push(bill + tip)
})

console.log(tips, totalBills)