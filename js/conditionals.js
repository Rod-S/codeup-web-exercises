"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var message;
function analyzeColor(colorName) {
    if (colorName == "blue") {
        return message = "blue is the color of the sky";
    } else if (colorName == "red") {
        return message = "Strawberries are red";
    } else if (colorName == "cyan") {
        return message = "I don't know anything about cyan";
    } else {
        return "I don't have any information about that color!"
    }
}
console.log(analyzeColor("blue"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch(randomColor) {
    case "blue":
        message = "[SWITCH] blue is the color of the sky"
        console.log(message);
        break;
    case "red":
        message = "[SWITCH] Strawberries are red"
        console.log(message);
        break;
    case "cyan":
        message = "[SWITCH] I don't know anything about cyan"
        console.log(message);
        break;
    default:
        message = "[SWITCH] I don't have any information about that color!"
        console.log(message);
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userChosenColor = prompt("What is your favorite color?");
// alert(analyzeColor(userChosenColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var discountedAmount;

function calculateTotal(luckyNumber, totalAmount) {
    switch(luckyNumber) {
        case 0:
            discountedAmount = totalAmount;
            return discountedAmount;
            break;
        case 1:
            discountedAmount = totalAmount - (totalAmount * .10);
            return discountedAmount;
            break;
        case 2:
            discountedAmount = totalAmount - (totalAmount * .25);
            return discountedAmount;
            break;
        case 3:
            discountedAmount = totalAmount - (totalAmount * .35);
            return discountedAmount;
            break;
        case 4:
            discountedAmount = totalAmount - (totalAmount * .50);
            return discountedAmount;
            break;
        case 5:
            discountedAmount = 0;
            return discountedAmount;
            break;
        default:
            discountedAmount = totalAmount;
            return "That's not a lucky number!";
            break;
    }
}
calculateTotal(4, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = Number(prompt("How much is your bill?"));

alert(`your lucky number is: ${luckyNumber}! Your price before discount was: ${totalBill}! Your price after discount is: ${calculateTotal(luckyNumber, totalBill)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userNumberChoice = confirm("Would you like to enter a number");
var userNumberEntered = userNumberChoice ? getUserNumber() : false;
var userNumberEnteredAbsolute = (userNumberEntered < 0) ? (userNumberEntered * -1) : userNumberEntered;
var isUserNumberEven = userNumberEnteredAbsolute % 2 === 0;
var userNumberPlus100 = 100 + userNumberEntered;

function getUserNumber() {
    return Number(prompt("Please enter a number"));
}

//Did the user enter a number and is it even?
if ((userNumberEntered && isUserNumberEven) || (userNumberEntered === 0)) {
    console.log("even");
    console.log("Your number + 100 is: " + userNumberPlus100);
    //is number positive?
    if (userNumberEntered > 0) {
        console.log("Your number is positive");
    //is number negative?
    } else if (userNumberEntered < 0) {
        console.log("Your number is negative");
    //is number zero?
    } else {
        console.log("Your number is neither positive nor negative");
    }
//Did the user enter a number and is it odd?
} else if (userNumberEntered && !isUserNumberEven) {
    console.log("odd");
    console.log("Your number + 100 is: " + (100 + userNumberEntered));
    //is number positive?
    if (userNumberEntered > 0) {
        console.log("Your number is positive");
    //is number negative?
    } else if (userNumberEntered < 0) {
        console.log("Your number is negative");
    //is number zero?
    } else {
        console.log("Your number is neither positive nor negative");
    }
//Did the user not enter a number?
} else {
    console.log("You didn't enter a number.")
}
