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