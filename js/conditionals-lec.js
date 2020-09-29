"use strict";

console.log("hello from conditionals lec.js!");
//
// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// var isAdmin;
// if (isAdmin) {
//     //show an admin navbar
//
// }
//
//
//
// //TODO Together: Send a 20% off coupon if its users birthday
// var userBirthday;
// if (userBirthday) {
//     //sendCoupon(20);
// }
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy;
// if (isRainy) {
//     alert("It's raining");
// }
//
// /*TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item.
// Assume there are no hidden fees or taxes. */
// var itemCost = 100;
// var currentBalance = 50;
//
// function purchase(itemCost, currentBalance) {
//     if (currentBalance >= itemCost) {
//         alert("You have enough money to buy this item.");
//     } else {
//         alert("Sorry. You don't have enough money to buy this item.");
//     }
// }
// purchase(itemCost, currentBalance);
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 0;
//
// function gameOver(currentLives) {
//     if (currentLives === 0) {
//         alert("Sorry, game over");
//     }
// }
// gameOver(numberOfLives);
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "snowing";
// function weatherAlert(currentWeather) {
//     if (currentWeather == "snowing") {
//         alert("It's snowing!");
//     }
// }
// weatherAlert(weather);
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 11;
//
// function numberInputOverTen(currentNumber) {
//     if (currentNumber > 10) {
//         alert(true);
//     }
// }
// numberInputOverTen(numberInput);
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//
//
//
//
//
// // =============== IF / ELSE SYNTAX ================
//
// // if(condition){
// //     // code here runs if condition evaluates to true
// // } else {
// //     // code here runs if condition evaluates to false
// // }
//
//
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
//
// var isAdmin = false;
//
// if (isAdmin) {
//     //show the admin navbar
//     console.log("is admin");
// } else {
//     //show regular navbar
//     console.log("regular user");
// }
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"
//
// var isRainy = false;
//
// if (isRainy) {
//     alert("it's raining!");
// } else {
//     alert("Have a nice day!");
// }
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 0;
// if (numberOfLives == 0) {
//     alert("Sorry, game over");
// } else {
//     alert("Next Level!");
// }
//
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "raining";
// if (weather == "snowing") {
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details!");
// }
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 9;
// if (numberInput > 10) {
//     alert(true);
// } else {
//     alert("the number is less than 10");
// }
//
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// function checkIfGameIsOver(playerLives) {
//     if (playerLives === 0) {
//         return "Sorry, game over"
//     } else {
//         return "Next Level!"
//     }
// }
// checkIfGameIsOver(numberOfLives);
//
// //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// function checkWeather(weatherCondition) {
//     if (weatherCondition == "snowing") {
//         alert("It's snowing!");
//     } else {
//         alert("Check back later for more details!");
//     }
// }
// checkWeather(weather);
//
// // SHOULD WE DELETE STUFF EXAMPLE
//
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
// } else {
//     alert("Operation Canceled!");
// }
//
//
// //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
//
// // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// var userAge = confirm("Are you at least 13 years of age?");
// if (userAge >= 13) {
//     alert("You may proceed");
// } else if (userAge < 13) {
//     alert("Sorry, you are not able to proceed");
// } else {
//     alert("Looks like there was an issue verifying your age!");
// }
//
//
//
// // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
//
// if (weather == "snowing") {
//     alert("It's snowing");
// } else if (weather == "raining") {
//     alert("It's raining");
// } else {
//     alert("Have a nice day");
// }
//
//
// //TODO Together: refactor the above statement as a function
// function checkWeatherIfElseIf(weather) {
//     if (weather == "snowing") {
//         alert("It's snowing");
//     } else if (weather == "raining") {
//         alert("It's raining");
//     } else {
//         alert("Have a nice day");
//     }
// }
// checkWeatherIfElseIf("raining");
//
// // Together: PIZZA PREFERENCE EXAMPLE
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
//
//
//
//
// //TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
// var trafficLight = "red";
//
// function trafficLightReaction(color) {
//     if (color == "red") {
//         return "STOP!"
//     } else if (color == "yellow") {
//         return "SPEED UP OR STOP, MAKE UP YOUR MIND!"
//     } else {
//         return "GOGOGO!"
//     }
// }
// trafficLightReaction(trafficLight);
//
//
//
//

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// var userAge = 16;
// var hasPermit = true;
// if (userAge < 15) {
//     //14 or younger
//     alert("You are not eligible for a learner's permit");
// } else {
//     //15 or older & you are eligible
//     //nested statement
//     if (userAge === 15) {
//         alert("You are eligible for a permit.")
//     } else if (userAge >=16 && hasPermit) {
//         alert("You are eligible for a license.")
//     } else if (userAge >= 16 && !hasPermit) {
//         alert("You are eligible for a permit")
//     } else {
//         alert("You need to contact the licensing office.")
//     }
// }





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

var message;
var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}
console.log(message);


var success = true;
var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
console.log(message)


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!
var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
console.log(weatherMessage + " from tern")


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var weather = "rainy";

switch(weather) {
    case "rainy":
        alert("It's rainy");
        break;
    case "sunny":
        alert("It's sunny");
        break;
    case "snow":
        alert("It's snowing");
        break;
    default:
        alert("have a nice day!");
        break;
}

//TODO: Rewrite the intersection function from earlier as a switch statement.

var trafficLight = "red";

switch(trafficLight) {
    case "red":
        alert("STOP!");
        break;
    case "yellow":
        alert("SPEED UP OR STOP, MAKE UP YOUR MIND!");
        break;
    default:
        alert("GOGOGO!");
        break;
}

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

var isChecked = false;
var shoppingDone = confirm("Has the shopping been done?")
if (shoppingDone && isChecked) {
    console.log("Child has earned $10 this week.")
} else {
    console.log("Child has earned $5 this week.")
}


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

var weatherType = "";

switch(weatherType) {
    case "Sunny":
        alert("It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.");
        break;
    case "Rainy":
        alert("Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.");
        break;
    case "Snowing":
        alert("The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.");
    case "Overcast":
        alert("It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.");
    default:
        alert("You need to select a weather type!");
}


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

var clickedWhite = true;

var backgroundColor = clickedWhite ? "white" : "black"
console.log(backgroundColor);