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
narcissism();

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
    document.querySelector(".sumUpNumber").innerHTML = userNumberDigits.reduce((a, b) => Number(a) + Number(b), 0);
}
sumUp(12345);