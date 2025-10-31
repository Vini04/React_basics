// To write if statement outsiode jsx
// eg : Write "Banana" if x is less than 10, otherwise "Apple"
function Fruit() {
    const x = 5;
    let y = "Apple";
    if (x < 10) {
        y = "Banana";
    }

    // JSX statement
    return (
        <h1>{y}</h1>
    );
}

// Or
// To use ternary operator
// eg : Write "Banana" if x is less than 10, otherwise "Apple"
function Fruit1() {
    const x = 5;
    // JSX statement
    return(
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
    );
}

// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}