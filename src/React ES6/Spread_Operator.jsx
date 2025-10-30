// Example
// Arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];


const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
// Output
// 1
// 2
// 3, 4, 5, 6

// Objects
const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}