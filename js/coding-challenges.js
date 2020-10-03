//Narcissistic Numbers
function narcissism() {
    var narcArray = [];
    for (let n=0; narcArray.length < 25; ++n) {
        var nDigitArray = n.toString().split("");
        var singleDigitRaisedArray = [];
        var m = nDigitArray.length;
        var combinedDigits;
        nDigitArray.forEach((nDigit) => {
            singleDigitRaisedArray.push(Math.pow(Number(nDigit), m));
            });
        if (singleDigitRaisedArray.length > 1) {
           combinedDigits = singleDigitRaisedArray.reduce((a, b) => a + b, 0)
        } else {
           combinedDigits = singleDigitRaisedArray[0];
        }
        if (combinedDigits == n) {
            narcArray.push(n);
            document.querySelector(".narcNumber").innerHTML = narcArray;
        }
    }
}
// narcissism();

//String Reversal
//
// Write a function that takes in a string variable and returns that string reversed.
function reverse(string) {
    var reverseChars = [];
    var chars = string.split("");
    for (var i=string.length-1; i>=0 ;i--) {
        reverseChars.push(chars[i]);
    }
    document.querySelector(".stringReversal").innerHTML = "string to reverse = " + string + "\n" + " = " + reverseChars.join("");
}
reverse("lamb");



// Sum Up Those Digits
//
// Create a function that will:
//
//     Accept any number as input.
//     Validate that input and convert it to an integer as necessary.
//     Return the sum of the individual digits of that integer.
//     For example:
//Input:  12345
// Output: 15

function sumUp(num) {
    var userNumber = (typeof num !== "number") ? Number(num) : num;
    var userNumberDigits = userNumber.toString().split("");
    document.querySelector(".sumUpNumber").innerHTML = "numbers to sum up = " + num + "\n" + " = " +userNumberDigits.reduce((a, b) => Number(a) + Number(b), 0);
}
sumUp(12345);