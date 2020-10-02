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