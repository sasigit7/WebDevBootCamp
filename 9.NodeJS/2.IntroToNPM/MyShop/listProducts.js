var faker = require("faker");

// Some Examples: 
var fakerName = faker.name.findName();
console.log(fakerName);

var randomEmail = faker.internet.email();
console.log(randomEmail);

var randomCard = faker.helpers.createCard();
console.log(randomCard);

// Print out 10 random fake product names and prices
console.log("===================");
console.log("WELCOME TO MY SHOP");
console.log("===================");
for (var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}