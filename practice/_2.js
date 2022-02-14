const height = prompt('Enter your height in meters'),
    weight = prompt('Enter your weight in kg')

const isOwerweight = weight/height ** 2 >= 25 //если больше - true

alert(`Are you owerweight? ${isOwerweight}` )