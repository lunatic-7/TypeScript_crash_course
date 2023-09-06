console.log("Hello TypeScript") 

// Implicit Types
let helloWorld = "Hello World!";

// This is valid in JavaScript but not in TypeScript we can only assign same data types
// helloWorld = 2; // Error: Type '2' is not assignable to type 'string'.  

// Explicit Types
// Here, we are explicitly defining the data type of the variable
let firstName: string = "John";
let age: number = 25;

// Same here, this is valid in JavaScript but not in TypeScript
// firstName = 2; // Error: Type '2' is not assignable to type 'string'. 

// Built-in Types
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Tuple
type stringAndNumber = [string, number]; // Defining our own datatype
let x: stringAndNumber = ["Hello", 10]; // Valid
// let y: stringAndNumber = ["Hello", "World"]; // Error: Type 'string' is not assignable to type 'number'.

// Enums
enum Continents {
    Asia,
    NorthAmerica,
    Africa,
    Europe,
    SouthAmerica,
    Australia,
    Antarctica
}

var region = Continents.Africa; // 2

// Interface
// An interface is a syntactical contract that an entity should conform to.
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "John",
    id: 0,
}  // Valid

// const user2: User = {
//     name: "John",
//     id: 0,
//     age: 25 // Error: Object literal may only specify known properties, and 'age' does not exist in type 'User'.
// } // Invalid

// Composing types -> Union
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const windowstates: WindowStates = "open"; // Valid

// const windowstates2: WindowStates = "I don't know, this is not a window"; // Error: Type "I don't know, this is not a window" is not assignable to type 'WindowStates'.

const getLength = (param: string | string[]) => { // This means that this parameter can be either a string or an array of strings
    return param.length;
}

getLength("test"); // 4
getLength(["test2", "test"]) // 2

// But this works fine in JavaScript and gives undefined in return
// getLength(3); // Error: Argument of type '3' is not assignable to parameter of type 'string | string[]'.


