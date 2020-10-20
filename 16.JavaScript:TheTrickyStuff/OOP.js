////////////////// OBJECTIVES //////////////////
// Define what OOP (Object Oriented Programming) is?
// => A programming model based around the idea of the objects. 
// => These objects are constructed from what we called as "classes", which we can think of like a blueprint. 
// => We call these objects created from classes as "Instances"
// => We strive to make our classes abstract and modular 
// => JavaScript doesn't have built in classes, so we use functions and objects.  
// Creating an Object: 
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
var firstHouse = House(2, 2, 1000); // does it work? No
firstHouse; // Undefined
// => Why this is not working? 
// => We are not returning anything from the function, so our house function returns undefined
// => We are not explicitly binding the keyword "this" or placing it inside a declared object 
// => This means, the value of the keyword "this" is a global object, which we do not wanted. 

// Solution to the above problem is to introduce the "new" keyword. 
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
var firstHouse = new House(2, 2, 1000); // does it work? Yes
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000 

// Revisit the 'new' keyword and understand the four things it does 
// => It first creates an empty object
// => It then sets the keyword "this" to be that empty object
// => It add the lines `return this` to the end of the function, which follows it  
// => It adds a property onto the empty object called "__proto__" which links the prototype property on the constructor function to the empty object

// => Practice Exercise: 
// -> Create a constructor function for a Dog - each dog should have a name and an age. 
// -> As a bonus,  add a function for each dog called 'bark', which console.log's the name of the dog added to the string "just barked!!". 
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function () {
        console.log(this.name + " just barked!");
        console.log(this.name + " is just " + this.age + " year old.");
    }
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);
rusty.bark(); // Rusty just barked
fido.bark(); // Fido just barked 


// Use constructor functions to reduce duplication of the code
// Use call and apply to refactor constructor functions

// Multiple Constructors: 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // We can also set properties on the keyword this
    // that are preset values
    this.numWheels = 4;
}

// function Motorcycle(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.numWheels = 4;
// }

// Too much duplication in above code. To avoid that, We can call Car function in Motorcycle function and then invoke it by using call/apply methods like below. 
function Motorcycle(make, model, year) { // using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle(make, model, year) {
    // using apply
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle(make, model, year) {
    // even better using apply with the arguments 
    Car.apply(this, arguments);
    this.numWheels = 2;
}

// Prototypes: 
// This is the Constructor function 
function Person(name) {
    this.name = name;
}

// This is an object created from the Person constructor
var shashi = new Person("Shashi");
var shisha = new Person("Shisha");

// Since we used the new keyword, we have established a link between the object and the prototype
// property and we can access that using __proto__ 

shashi.__proto__ === Person.prototype; // true
shisha.__proto__ === Person.prototype; // true

// The Person.prototype object also has a property called constructor which points back to the function. 
Person.prototype.constructor === Person; // true 

// Prototype Chain: 
// This is the Constructor function 
function Person(name) {
    this.name = name;
}

// This is an object created from the Person constructor
var shashi = new Person("Shashi");
var shisha = new Person("Shisha");

Person.prototype.isInstructor = true;
shashi.isInstructor; //true
shisha.isInstructor; //true

// Example: 
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        return "Hi " + this.name;
    }
}

shashi = new Person("Shashi");
shashi.sayHi(); // "Hi Shashi"

// Refactoring Above Example:
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    return "Hi " + this.name;
}

shashi = new Person("Shashi");
shashi.sayHi(); // "Hi Shashi"

// Exercise: 
// 1. Create a constructor function for a vehicle: every object created from this constructor should have a make, model, and year property. Each object should also have a property called isRunning which should be set to false. 
function Vehicle(make, model, year)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

// 2. Every object created from the vehicle constructor should have a function called turnOn, which changes the isRunning property to true. 
Vehicle.prototype.turnOn = function ()
{
    this.isRunning = true;
}

// 3. Every object created from the vehicle constructor should have a function called turnOff, which changes the isRunning property to false.
Vehicle.prototype.turnOff = function () {
    this.isRunning = false;
}

// 4. Every object created from the vehicle constructor should have a method called honk, which returns the string "beep" only if the isRunning property is true. 
Vehicle.prototype.honk = function () {
    if (this.isRunning === true)
    {
        return "beep!";
   }
}