const numbers = [1,2,3,4]
const doubled = numbers.map((number) => number * 2); //double each number in the array
console.log(doubled); // [2,4,6,8]

// Another Example
const fruitList = ['apple', 'banana', 'grapes', 'mango']; // array of fruits

function MyList() {
  return (
    <ul>
      {fruitList.map(fruit => 
        <li key={fruit}>{fruit}</li> 
        // key is a special string attribute you need to include when creating lists of elements
        // fruit is unique key prop
      )}
    </ul>
  );
}

// map with objects()
const users = [ // array of objects
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Jane', lastName: 'Doe'},
    {id: 3, firstName: 'Mary', lastName: 'Smith'},
    {id: 4, firstName: 'James', lastName: 'Johnson'}
];

function UserList() {
    return (
        <ul>
            {users.map(user => // user is object
                <li key={id} >
                    {user.firstName} and {user.lastName}
                </li>
                // user.id is unique key prop, so we use it as key{user.id}
            )}
        </ul>
    );
}

// map parameters()
const fruits = ['apple', 'banana', 'grapes', 'mango'];

function fruitItems() {
    return (
        <ul>
            {fruits.map((fruits, index, array) => { // index and array are optional parameters
            return ( 
            <li key={fruits}>
                Number : {fruits}, Index : {index}, Array : {array}
            </li>
            // fruits is unique key prop
            // index is the position of the element in the array
            // array is the entire array
            );
        })};
        </ul>
    );
}