// Old way of assigning array items to variables
const vehicles =  ['mustang', 'f-150', 'expedition']

// Old Way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[3];

// Access each element seperately
document.getElementById("demo").innerHTML = truck; // car // suv

// New way of assigning array items to variables
const vehicles1 = ['mustang', 'f-150', 'expedition'] 

const [car1, truck1, suv1] = vehicles

// Access each element seperately
document.getElementById("demo").innerHTML = truck; // car // suv

