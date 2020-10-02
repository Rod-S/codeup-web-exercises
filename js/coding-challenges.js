//Narcissistic Numbers
function narcissism() {
    var narcArray = [];
    debugger
    for (let n=0; narcArray.length < 25; ++n) {
        var nDigitArray = n.toString().split("");
        var singleDigitRaisedArray = [];
        var m = nDigitArray.length;
        var combinedDigits;
        nDigitArray.forEach((nDigit) => {
            singleDigitRaisedArray.push(Math.pow(Number(nDigit), m));
            });
        //console.log(singleDigitRaisedArray);
        if (singleDigitRaisedArray.length > 1) {
           combinedDigits = singleDigitRaisedArray.reduce((a, b) => a + b, 0)
        } else {
           combinedDigits = singleDigitRaisedArray[0];
        }
        //console.log(combinedDigits);
        if (combinedDigits == n) {
            narcArray.push(n);
            document.querySelector(".narcNumber").innerHTML = narcArray;
        }
    }
    console.log(narcArray);
}
narcissism();