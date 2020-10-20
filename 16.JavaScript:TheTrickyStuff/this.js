// https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c

// ======= >>>>> What is "this" in JavaScript?
// => The keyword "this" is a reserved keyword in JavaScript and its value is determined at the execution
// => Usually determined by how function is called (what we call 'execution context')
// => It is either set using  
// -> 1. Global context 
// -> 2. Implicit/Object binding 
// -> 3. Explicit binding 
// -> 4. New keyword

// ======= >>>>> Global Context 
// (When the keyword "this" is not inside of a declared object)
// When set in the global context in a function, it is either 
// --> the global object(window if in the browser)
// --> or undefined (if we are using the strict mode)
// ------->
console.log(this); // Window object

// ------->
function whatIsThis() {
    return this;
}
whatIsThis(); // Window object

// ------->
"use strict"

function variablesInThis() {
    // Since the value of "this" is window, all we are doing here is creating a global variable 
    this.person = "Shashi";
}
console.log(person); // Shashi

// ------->  
variablesInThis(); // TypeError, can't set person on undefined. 

// ======= >>>>> Implicit/Object Context 
// (When the keyword "this" is inside of a declared object)
// ------->
// Strict mode does not make any difference here 
var person = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineContext: function () {
        return this === person;
    }
}
person.sayHi(); // Hi Shashi
person.determineContext(); // true

// ------->
// Nested Objects (What happens when we have nested objects)
var person = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineContext: function () {
        return this === person;
    },
    dog: {
        sayHello: function () {
            return "Hello " + this.firstName;
        },
        determineContext: function () {
            return this === person;
        }
    }
}
person.sayHi(); // Hi Shashi
person.determineContext(); // true

// but what is the value of the keyword "this" right now? 
person.dog.sayHello(); // Hello undefined
person.dog.determineContext(); // false

// ======= >>>>> Explicit Binding (Choose what we want the context of "this" to be using call, apply or bind)
// To explicitly set the value of the keyword "this", we use call, apply or bind.
// ------->
// NAME OF METHOD       ||      PARAMETERS      ||    INVOKE IMMEDIATELY ? 
// Call                 ||  thisArg,a,b,c,d,..  ||          Yes
// Apply                || thisArg,[a,b,c,d,...]||          Yes
// Bind                 ||  thisArg,a,b,c,d,..  ||          No

// -------> Fixing up with the call
var person = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    determineContext: function () {
        return this === person;
    },
    robot: {
        sayHello: function () {
            return "Hello " + this.firstName;
        },
        determineContext: function () {
            return this === person;
        }
    }
}
person.sayHi(); // Hi Shashi
person.determineContext(); // true

person.robot.sayHello.call(person); // Hello Shashi
person.robot.determineContext.call(person); // true

// Using call worked, Notice that we do not have to invoke sayHi or determineContext functions. 

// -------> Using call in the wild (A common use case)
var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}

var shisha = {
    firstName: "Shisha",
    // Look at all this duplication
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}

shashi.sayHi(); // Hi Shashi
shisha.sayHi(); // Hi Shisha (but we had to copy and paste the function from above...)


// How can we refactor the duplication using call?

//How can we borrow the "sayHi" function from shashi and set the value of "this" to shisha ? 

// -------> Solution 
var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    }
}

var shisha = {
    firstName: "Shisha"
}

shashi.sayHi(); // Hi Shashi
shashi.sayHi.call(shisha); // Hi Shisha
// Much better

// -------> What about Apply? (It's almost identical to call - except the parameters)
var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    addNumbers: function (a, b, c, d) {
        return this.firstName + " just calculated " + (a + b + c + d);
    }
}

var shisha = {
    firstName: "Shisha"
}

shashi.sayHi(); // Hi Shashi
shashi.sayHi.apply(shisha); // Hi Shisha
// Well this seems the same ....but what happens when we start adding arguments? 

shashi.addNumbers(1, 2, 3, 4); // Shashi just calculated 10
shashi.addNumbers.call(shisha, 1, 2, 3, 4); // Shisha just calculated 10
shashi.addNumbers.apply(shisha, [1, 2, 3, 4]); // Shisha just calculated 10

// -------> What about Bind? (The parameters work like call but bind returns a function with the context of "this" bound already)
var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        return "Hi " + this.firstName;
    },
    addNumbers: function (a, b, c, d) {
        return this.firstName + " just calculated " + (a + b + c + d);
    }
}

var shisha = {
    firstName: "Shisha"
}

var shishaCalc = shashi.addNumbers.bind(shisha, 1, 2, 3, 4);
shishaCalc(); // Shisha just calculated 10

// With bind - we do not need to know all the arguments up front.   
var shishaCalc2 = shashi.addNumbers.bind(shisha, 1, 2);
shishaCalc2(3, 4); // Shisha just calculated 10

// -------> Bind in the wild (Very commonly we loose the context of "this", 
// but in functions that we do not want to execute right away)

var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }, 1000);
    }
}
shashi.sayHi(); // Hi undefined (1000 milliseconds later)

// Use bind to set the correct context of "this"
var shashi = {
    firstName: "Shashi",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }.bind(this), 1000)
    }
}
shashi.sayHi(); // Hi Shashi (1000 milliseconds later)

// ======= >>>>> New 
// (We can set the context of the keyword "this" using the "new" keyword)
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var shashi = new Person("Shashi", "Shisha");

shashi.firstName; // Shashi
shashi.lastName; // Shisha