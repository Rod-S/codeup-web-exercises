console.log("Hello")


let inputArray;
function stringToArray(input) {
    return inputArray = input.split(" ");
}
stringToArray("Trick or Treat")

//MATH METHODS

// Math.random()
let randomNum = Math.random() * 3;
console.log(randomNum);

// Math.round();
let index = Math.round(randomNum);
console.log("Normal rounding: " + index);

//choose random string from halloween array
let randomWord = inputArray[index]
console.log(randomWord)

//Math.floor()
index = Math.floor(randomNum);
console.log("Rounding down with floor: " + index);
randomWord = inputArray[index];
console.log(randomWord);

//display each string in the array
inputArray.forEach(function(element, index) {
   console.log(`[${index}] ${inputArray[index]}`)
});

//Math.ceil()
index = Math.ceil(randomNum);
randomWord = inputArray[index];
console.log("Rounding up with ceil: " + index);
console.log(randomWord);

// create a new situation where we'll be adding a constant to our random number

// say we wanted a random number between 74 and 186
//only returns 74 UP TO 185
let numBetween = Math.floor(Math.random() * (186 - 74) + 74);
console.log (numBetween);
// to truly get 74 AND 186 as results, increase max-min by 1
//returns 74 AND 186
numBetween = Math.floor(Math.random() * (186 - 74 + 1) + 74);

console.log(numBetween)
// 0.7 * 84 = 51.8
// 51.8 + 112 = 163.8

//Math.pow()
//raising a number to the power of another number
// i.e 4 ^ 2 = 16
// ie. 8 ^ 3 = 512
let exponentResult = Math.pow(4,2);
console.log("4 squared (or 4^2) = " + exponentResult);
console.log("8 cubed (or 8^3) = " + Math.pow(8,3));

//What is another way we could find 8^x power(hint: using a loop)
let base = 8;
let exponent = 3;
let result = base;
for (let i=1; i<exponent; i++) {
    //8, 8*8,
    result = result * base
}
console.log(result);


//Math.sqrt()

console.log("The square root of 16 = " + Math.sqrt(16))
console.log("The square root of 64 = " + Math.sqrt(64))

//Math.PI

// pi is used ot calculate circumference and area of a circle - can also be used to
// get the diameter / radius of a circle, when you only have the circumference or area of said circle
// Circumference = 2 * π * r = π * D(diameter)°
// alt(/option) + p  = π
// alt + shift + 8 = °
//let's find the circumference of a circle with a diameter of 5

let circumference =  Math.PI * 5;
console.log("Circumference of a circle with diameter of 5 = " + circumference.toFixed(3));

// Area of a circle = π*r^2
let area = Math.PI * Math.pow(2.5, 2); // π * 2.5^2
//let's also find that circle's area
console.log("Area of a circle with a diameter of 5 = " + area.toFixed(3))

// Math.E

console.log("Euler's constant is equal to: " + Math.E)

// if we want to write scientific notation
// 4.58 x e^9
console.log("The actual number represented by 4.58 x e^9 = " + (4.58 * Math.pow(Math.E, 9)));
// 4.58 x 10^9












