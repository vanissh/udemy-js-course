class Person {

    constructor(name, lastname, weight, height){
        this.name = name
        this.lastname = lastname
        this.weight = weight
        this.height = height
    }

    calcBMI(){
        this.BMI = this.weight/ this.height ** 2
    }
}

const jackObject = new Person('Jack', 'White', 79, 1.7)
const mikeObject = new Person('Mike', 'Black', 91, 1.93)

jackObject.calcBMI()
mikeObject.calcBMI()

function logBIM(jack, mike){
    const higherBMI = jack.BMI > mike.BMI ? jack : mike
    const lowerBMI = jack.BMI < mike.BMI ? jack : mike

    console.log(`${higherBMI.name + ' ' + higherBMI.lastname} (${higherBMI.BMI.toPrecision(3)}) is higher than ` +
                `${lowerBMI.name + ' ' + lowerBMI.lastname} (${lowerBMI.BMI.toPrecision(3)})!`)
}

logBIM(jackObject, mikeObject)