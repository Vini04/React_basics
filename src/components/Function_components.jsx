import { createRoot } from "react-dom/client";

//Create a Function component called Car
function Car() {
    return (
        <h2>Hi, I am a Car!</h2>
    );
}
// Here, react application has a component called Car, which returns an <h2> element.

// To use this component in your application, refer to it like this: <Car />
createRoot(document.getElementById('root')).render(
  <Car />
)


// Props
// Use an attribute to pass a color to the Car component, and use it in the render function:
function Car1(props) {
    return (
        <h2>My car is of {props.color}!</h2>
    );
}
createRoot(document.getElementById('root1')).render(
    <Car1 color="red" />
);


// We can refer to components inside other components
// Use the Car component inside the Garage component, passing arguments to make sense
function Car2(props) {
    return (
        <h2>I am a {props.brand}!</h2>
    );
}
function Garage() {
    return(
        <>
            <h1>Who leaves in my Garage?</h1>
            {/* Component inside another component */}
            <Car2 brand="Ford" />
            {/* We can render a component multiple times */}
            <Car2 brand="BMW" />
        </>
    );
}
createRoot(document.getElementById('root2')).render(
  <Garage />
);