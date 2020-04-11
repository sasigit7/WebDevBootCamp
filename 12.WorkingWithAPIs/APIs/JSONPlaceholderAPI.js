// Alternate to Use APIs without using keys:
// Fake Online REST API for Testing and Prototyping: https://jsonplaceholder.typicode.com/
// Degugging Tool: https://www.npmjs.com/package/locus
// https://www.npmjs.com/package/pryjs

// var request = require("request");
//   request("https://jsonplaceholder.typicode.com/users/1", function(error, response, body) {
//    eval(require("locus"));
//    if(!error && response.statusCode == 200) {
//        var parsedData = JSON.parse(body);
//        console.log(parsedData["name"]); Leanne Graham
//        console.log(parsedData.name); // Leanne Graham
//       console.log(parsedData.name + " lives in " + parsedData.address.city + " city.");
//    }
//   });

// Above code Using ES6 features, template literals, arrow functions and promise. 
//const request = require("request");
// npm i -S request-promise
const rp = require("request-promise");
//request("https://jsonplaceholder.typicode.com/users/1", (error, response, body) => {
rp("https://jsonplaceholder.typicode.com/users/1")
    .then((body) => {
        // console.log(body);
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city} city.`);
    })
    .catch((err) => {
        console.log("Error", err);
    });