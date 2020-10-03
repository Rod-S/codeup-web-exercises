//TODO Create a while loop that uses console.log() to create the output shown below

// var num = 2;
// while (num <= 65536) {
//     console.log(num)
//     num+=num;
// }

//TODO An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

// function randomizeNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// var conesToSell = randomizeNumber(50,100);
// console.log(`Time to sell some ice cream! ${conesToSell} cones to sell!`);
// do {
//     var conesBought = randomizeNumber(1,5);
//     if (conesBought > conesToSell) {
//         console.log(`I cant sell you ${conesBought} cones, I only have ${conesToSell}...`)
//         continue;
//     } else if (conesBought === conesToSell) {
//         console.log(`${conesBought} Cones sold...`);
//         console.log('yay I sold them all!')
//         break;
//     }
//     console.log(`${conesBought} Cones sold...`);
//     conesToSell -= conesBought;
//     console.log(`${conesToSell} cones left to sell.`)
// }
// while (conesToSell > 0);