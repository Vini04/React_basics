// Expressions
// Execute the expression 218 * 1.36
function Car() {
    return (
        <>
            <h1>My Car</h1>
            <p>Its horsepower is {218 * 1.36}</p>
        </>
    );
}

// Variables
function Car1() {
    const hp = "218 * 1.36"
    reutrn (
        <>
            <h1>My Car</h1>
            <p>Its has {hp} horsepower</p>
        </>
    )
}

// Function Calls
function kwtohp(kw) {
    return kw * 1.36; // function call
}
// another function
function Car2() {
    return (
        <>
            <h1>My Car</h1>
            <p> It has {kwtohp(218)} horsepower.</p>
        </>
    )
}

// Object properties
function Car3() {
    const myObj = {
        name : "Fiat",
        model : "Punto",
        color : "White"
    };
    return (
        <>
            <h1>My car is a {myObj.color} {myObj.name} {myObj.model}</h1>
        </>
    );
}
