// To use JavaScript expressions as attribute values
function Car() {
    const x = "myclass";
    return (
        <h1 className={x}>Hello World!</h1>
        // Can add css style for myclass index.html file 
    );
}

// IMP : Note that the attribute value is not wrapped in quotes, this is important when using expressions (JavaScript variables) as attribute values. 
// If you use quotes, JSX will treat it as a string literals and not a JavaScript expression.

// To use camelCase for event attributes:
function Car1() {
    const myfunc = () => { //  event attribute
        alert("Hello World!");
    };
    return (
        // Event attributes in JSX are written in camelCase.
        <button onClick={myfunc}>CLick Me!</button>
    )
}

// Boolean Attributes
// Boolean true in JSX, this will make the button disabled.
<button onClick={myfunc} disabled></button>

// Also true in JSX, this will also make the button disabled
// False in JSX, this will NOT make the button disabled
// <button onClick={myfunc} disabled={true}></button>  disabled={true} or  disabled={false}

// Using style attribute
function Car() {
    const mystyle = {
        // *These are important difference between HTML and JSX. *
        // The styles are stored in an object
        // Style properties are written in camelCase, e.g. fontSize, instead of font-size
        color: "red",
        fontSize: "20px", // using camelCased CSS property names for style attibute
        backgroundColor: "lightyellow",
    };
    return (
        <>
        <h1 style={mystyle}>My Car</h1>
        </>
    );
}