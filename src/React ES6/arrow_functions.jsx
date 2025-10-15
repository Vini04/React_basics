// Before: Using ES6 arrow function syntax
hello = function() {
    console.log("Hello World");
}

// After: Using ES6 arrow function syntax
hello = () => {
    console.log("Hello World"); // return "Hello World!"
}
// OR
hello = () => console.log("Hello World"); // only if the function has only one statement
// OR
hello = (val) => "Hello" + val; // if the function has only one parameter, you can omit the parentheses
// OR
hello = val => "Hello" + val; // if the function has only one parameter, you can omit the parentheses


// Regular Function
// With a regular function, this represents the object that called the function
class Header {
    constructor() {
        this.color = "Red";
    }
}
// Regular Function
 changeColor = function() {
    document.getElementById("demo").innerHTML += this; // line meaning : append the value of 'this' to the innerHTML of the element with id 'demo'
 }

 // calling object
 const myHeader = new Header();

 // Window object calls the function
 window.addEventListener("load", myHeader.changeColor); // when the window loads, call the changeColor function

 // A button object calls the function
 document.getElementById("myBtn").addEventListener("click", myHeader.changeColor); // when the button with id 'myBtn' is clicked, call the changeColor function


 // Arrow Function
 // With an arrow function, this represents the Header object no matter who called the function:
class Header {
    constructor() {
        this.color = "Red";
    }
}
 // Arrow Function
 changeColor = () => {
    document.getElementById("demo").innerHTML += this.color; // line meaning : append the value of 'this.color' to the innerHTML of the element with id 'demo'
 }

 // Calling Object
 const myHeader1 = new Header();

  // Window object calls the function
 window.addEventListener("load", myHeader1.changeColor); // when the window loads, call the changeColor function

 // A button object calls the function
 document.getElementById("myBtn").addEventListener("click", myHeader1.changeColor); // when the button with id 'myBtn' is clicked, call the changeColor function