console.log("Hello TypeScript");
// Implicit Types
var helloWorld = "Hello World!";
// This is valid in JavaScript but not in TypeScript we can only assign same data types
// helloWorld = 2; // Error: Type '2' is not assignable to type 'string'.  
// Explicit Types
// Here, we are explicitly defining the data type of the variable
var firstName = "John";
var age = 25;
var x = ["Hello", 10]; // Valid
// let y: stringAndNumber = ["Hello", "World"]; // Error: Type 'string' is not assignable to type 'number'.
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["Asia"] = 0] = "Asia";
    Continents[Continents["NorthAmerica"] = 1] = "NorthAmerica";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Europe"] = 3] = "Europe";
    Continents[Continents["SouthAmerica"] = 4] = "SouthAmerica";
    Continents[Continents["Australia"] = 5] = "Australia";
    Continents[Continents["Antarctica"] = 6] = "Antarctica";
})(Continents || (Continents = {}));
// usage
var region = Continents.Africa; // 2
