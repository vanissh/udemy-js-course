const height = prompt('Enter your height in meters'),
    weight = prompt('Enter your weight in kg')

const BIM = weight/height ** 2

 if(BIM < 25){
     alert('Your BIM is normal')
 } else {
     alert(`Your BIM is more than normal by ${BIM - 25}`)
 }