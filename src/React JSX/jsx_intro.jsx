import { createElement } from "react";

// with JSX
const myElement = <h1>I love JSX</h1>;
createRoot(document.getElementById('root')).render(
  myElement
);

// withoud JSX
const myElemen1 = React.createElement('h1', {}, 'I do not use JSX!');
createRoot(document.getElementById('root')).render(
  myElement
);

// another eg
const myElement2 = <h2>  React is {5 + 5} times better with JSX</h2>;

// To write HTML on multiple lines, put the HTML inside parentheses()
// List with 3 items
const myElement3 = (
    <ul>
        <li>Apples</li>
        <li>Mangoes</li>
        <li>Cherries</li>
    </ul>
);

// Wrap two paragraphs inside one DIV element:
const myElement4 = (
    <div>
        <p>I amd paragraph</p>
        <p>I am paragraph too.</p>
    </div>
)

// Fragments <></>
const myElement5 = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

// Close empty elements with />
const myElement6 = <input type="text" />;

// Use attribute className instead of class in JSX
const myElement7 = <h1 className="my Class"> Hello World</h1>;

// JSX in Components
// eg 1
function Car() {
    return (
        <>
            <h2> My Car</h2>
            <p> Its a Ford Mustang.</p>
        </>
    );
}
createRoot(document.getElementById('root')).render(
  <Car />
);

// eg 2
function Car2() {
    const brand = "Ford";
    const model = "GT";
    return (
        <>
            <h2> My Car</h2>
            <p>Its a {brand} {model}.</p>
        </>
    );
}
createRoot(document.getElementById('root')).render(
  <Car2 />
);