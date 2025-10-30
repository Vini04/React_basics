// Before
const name1 = "John";
const age = 30;
const message = "Hello, " + name1 + "!\n" + 
"You are " + age + " years old.";

// With Template Strings
const name2 = "John";
const age2= 30;
const message2 = `Hello, ${name2}!
You are ${age2} years old.`;

// Multi-Line Strings
const html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`
// The indentation in multi-line strings becomes part of the string
// eg :
const x = `
  John:
    Hello, how are you?
  Jane:
    I'm fine, thanks!
`;

// Express Interpolation

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

let price = 10;
let quantity = 5;

let total = `Total: ${price * quantity}`;

// Map function inside string
const items = ["apple", "banana", "orange"];
const list = `You have ${items.length} items:
${items.map(item => `- ${item}`).join('\n')}`;

//  Ternery operator inside template strings
const isAdmin = true;
const message1c    = `Status: ${isAdmin ? 'Admin' : 'User'}`;

// Tagged Templates 
function highlight(strings, fname) { // The function name is highlight, you can name it whatever you want
  let x = fname.toUpperCase();
  // The first argument holds the text between the expressions, as an array.
  // strings[0] holds "Hello " and strings[1] holds " how are you?
  return strings[0] + x + strings[1];
}
// The second argument holds the expressions. In this example fname holds "John"
let name = "Vineet";

let text1 = highlight `How ${name}, how are you?`;

// Tagged Template with multiple expressions
function highlight(strings, fname1, fname2) {
  let x = fname1.toUpperCase();
  let y = fname2.toUpperCase();
  return strings[0] + x + strings[1] + y + strings[2];
}

let name3 = "Vineet";
let name4 = "Sahil";

let text2 = highlight`Hello ${name3} and ${name4}, how are you?`;

// Tagged Template with multiple expressions that are held in an array using the rest parameter
function highlight(strings, ...fname) {
  let x = fname[0].toUpperCase();
  let y = fname[1].toUpperCase();
  return strings[0] + x + strings[1] + y + strings[2];
}

let name5 = "John";
let name6 = "Jane";

let text3 = highlight`Hello ${name5} and ${name6}, how are you?`;