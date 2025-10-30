// Destructing Arrays
// Old way of assigning array items to variables
const vehicles =  ['mustang', 'f-150', 'expedition']

// Old Way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// Access each element seperately
document.getElementById("demo").innerHTML = truck; // car // suv


// New way of assigning array items to variables
const vehicles1 = ['mustang', 'f-150', 'expedition'] 

const [car1, truck1, suv1] = vehicles // order matters

// Access each element seperately
document.getElementById("demo").innerHTML = truck; // car // suv

// When function returns an array
function dateInfo(dat) {
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getFullYear();

    return [d,m,y];
}

const [date,month,year] = dateInfo(new Date());


// Destructuring Objects
const person = {
    firstName : "Vineet",
    lastName : "Mandke",
    age : 50
}

// Destructing
let {firstName1, lastName, age} = person; // order doesnt matters
// Access each element seperately
document.getElementById("demo").innerHTML = firstName; // lastName // age
// For potentially missing properties we can set default values
// let {firstName, lastName, age, country = "Norway"} = person;

// To destructure deeply nested objects
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  car: {
    brand: 'Ford',
    model: 'Mustang',
  }
};

// Destructuring
let {firstName, car: { brand, model }} = person1;

let message = `My name is ${firstName}, and I drive a ${brand} ${model}.`;

// Difference between using and not using destructuring
//Using destructuring:
function Greeting({ name, age }) { // recieving props
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
createRoot(document.getElementById('root')).render(
  <Greeting name="Vineet" age={24} />
);

//NOT using destructuring:
function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

// Destructuring to extract values from useState
import { createRoot, useState } from 'react-dom/client'

function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);