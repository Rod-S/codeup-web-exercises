// 'use strict';
//
// console.log("Hello Vivian");
// console.log("Hello Sophie");
// console.log("Hello Samuel");
// console.log("Hello Brance");
// console.log("Hello Rod");
//
// function sayHello(name) {
//     console.log("Hello " + name);
//     //we will talk about returning later!
// }
//
// sayHello("Vivian");
// sayHello("Sophie");

// function caseMatch(input) {
//     if (input === input.toUpperCase() || input === input.toLowerCase()) {
//         console.log(true)
//         return true
//     } else {
//         console.log(false)
//         return false
//     }
// }
//
// caseMatch("hello world")
// caseMatch("HELLO WORLD")
// caseMatch("heElLo WoRlD")

//10/06 Debugging w/ Justin Reich


//10/09

function stringToArray(input) {
    console.log(input.split(" "));
    return input.split(" ")
}
stringToArray("This Old Man.");