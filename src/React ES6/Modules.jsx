// Named imports
import { name2, age2 } from "./Modules.jsx";

// Default imports
import message from "./Modules.jsx";


// Named Exports
export const name = "Vineet"
export const age = "24"
// OR
const name1 = "Vineet"
const age1 = "24"
export {name1, age1}


// Default Exports
const message = () => {
    const name2 = "Vineet";
    const age2 = "24";
    return name2 +  ' is ' + age2 + ' years old. ';
};

export default message;