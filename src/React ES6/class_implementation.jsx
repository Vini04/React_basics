import React from "react";
// Creating a class : type of function
class Car { // standard naming convention for classes
    constructor(name) { // constructor is a special method for creating and initializing an object created with a class
        this.brand = name; // 'this' refers to the current instance of the class
        // 'brand' is a property of the class
    }
}


// Create an object called "mycar" based on the Car class
class Car {
    constructor(name) { // name is object property
        this.brand = name; 
    }
}
const mycar = new Car("Ford"); // Create an object
console.log(mycar.brand); // Print the value of the brand property in the console


// Creating our own method in class
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() { // method
        return 'I have a ' + this.brand
    } 
}
// Object Creation
const mycar1 = new Car("Ford");
console.log(mycar1.present());


// Class Inheritance : extends keyword
// Create a class named "Model" which will inherit the methods from the "Car" class
class Car {
    constructor(name) {
        this.brand = name;
    }
    // Creating own method
    present() { // method of parent class
        return 'I have a' + this.brand;
    }
}

class Model extends Car { // Model is child class, Car is parent class
    constructor(name, mod) {
        super(name); // super() method is used to call the constructor of the parent class
        this.model = mod; // model is property of Model class
    }
    show() { // another name for method of Model class
        return this.present() + ', it is a ' + this.model; // calling present() method of Car class
    } 
}
// Object Creation
const mycar2 = new Model("Ford", "Mustang");
console.log(mycar2.show());
