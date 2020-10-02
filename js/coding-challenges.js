//Narcissistic Numbers
function narcissism() {
    var narcArray = [];
    for (let n=1; narcArray.length < 25; n++) {
        var nDigitArray = n.toString().split();
        var singleDigitRaised = [];
        var combinedDigits;
        var m = nDigitArray.length;
        nDigitArray.forEach(nDigit => {
                singleDigitRaised.push(Math.pow(nDigit, m));
            });
        console.log(singleDigitRaised);
        if (singleDigitRaised.length > 1) {
            combinedDigits = singleDigitRaised.reduce((a, b) => a + b, 0)
        } else {
            combinedDigits = singleDigitRaised[0];
        }
    console.log("combinedDigits "+combinedDigits);
        if (Number(combinedDigits) == Number(n)) {
        narcArray.push(n);
    }}
    console.log(narcArray);
}
narcissism();