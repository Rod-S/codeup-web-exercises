"use strict";

console.log("Hello from external JavaScript");

//1. Alert - welcome to my website
alert("Welcome to my Website!");

//2. User prompt for favorite color
var favoriteColor = prompt("What's your favorite color?");

alert("Great, " + favoriteColor +  " is my favorite color too!");

/*3.1
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

var rentalRate = Number(prompt("How much is the daily rental rate?"));
var littleMermaid = Number(prompt("How many days would you like to rent The Little Mermaid for?"));
var brotherBear = Number(prompt("How many days would you like to rent Brother Bear for?"));
var hercules = Number(prompt("How many days would you like to rent Hercules for?"));

var totalMovieCost = rentalRate * (littleMermaid + brotherBear + hercules);
alert("Total Movie Cost for 'The Little Mermaid', 'Brother Bear' and 'Hercules': $" + totalMovieCost.toFixed(2));

//3.2
// Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = Number(prompt("What is your hourly rate paid at Google?"));
var googleHours = Number(prompt("How many hours did you work this week at Google?"));
var amazonRate = Number(prompt("What is your hourly rate paid at Amazon?"));
var amazonHours = Number(prompt("How many hours did you work this week at Amazon?"));
var facebookRate = Number(prompt("What is your hourly rate paid at Facebook?"));
var facebookHours = Number(prompt("How many hours did you work this week at Facebook?"));
var weeklyPayTotal = (googleRate * googleHours) + (facebookRate * facebookHours) + (amazonRate * amazonHours);
alert("Total payment received this week from Google, Amazon and Facebook: $" + weeklyPayTotal);

//*3.3 A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var enrollmentStatus;
var classIsNotFull = confirm("Is the class you are currently trying to enroll in full?");
var noScheduleConflict = confirm("Does the class you are currently trying to enroll in conflict with your current schedule?");
(!classIsNotFull && !noScheduleConflict) ? enrollmentStatus = "Congratulations, you're enrolled!" : enrollmentStatus = "Sorry, you couldn't be enrolled";
alert(enrollmentStatus);

// A product offer can be applied only if a person buys more than 2 items, and the offer
// has not expired. Premium members do not need to buy a specific amount of products.

var productOfferValid = confirm("Is the product offer valid?");
var itemsBought = Number(prompt("How many items have you bought?"));
var premiumMember = confirm("Are you a premium member?");
var productOfferApplied = (itemsBought > 2 && productOfferValid) || (premiumMember && productOfferValid);
productOfferApplied ? alert("This product offer can be applied!") : alert("Sorry, This product offer cannot be applied.")