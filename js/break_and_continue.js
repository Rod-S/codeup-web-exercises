//TODO Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user
// if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var userNumber;
while (true) {
    userNumber = prompt("Enter an odd number between 1-50");
    if (userNumber % 2 !==0 && userNumber >= 1 && userNumber < 50) {
        break;
    }
}
console.log(`Number to skip is: ${userNumber}`)
console.log('\n')
for (i=1; i<=50; i+=2) {
    if (i == userNumber) {
        console.log(`Yikes! Skipping number: ${userNumber}`)
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log(`Here is an odd number: ${i}`)
}
