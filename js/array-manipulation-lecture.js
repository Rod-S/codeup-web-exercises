/* TODO
// Manipulating arrays
//
// Methods to add/remove elements
// .push()
// .pop()
// .shift()
// .unshift()
//
// methods to search an array
// .indexOf()
// .lastIndexOf()
//
// Method to return a copied segment of an array
// .slice()
//
// method to reverse the order of an array
// .reverse()
//
// method to sort the array
// .sort()
//
// methods to convert a string to an array and vice versa
//
// for loops are better when we need to do a certain number of iterations a certain number we know in advance (ie) length
//
// for loop is better tool than do while loop or  while loop
*/

var pies = ["apple", "cherry", "key lime", "huckleberry", "rhubarb"];

//TODO given the above array how tdo we log  each itemsBought

for (var i =0; i< pies.length; i+=1) {
    // console.log(pies[i]);
}

// forEach
pies.forEach(function(pie) {
    // console.log(pie);
})

// TODO: throughout the lecture this morning,
//  note which of the above methods mutate (change an array and which ones do not

// add element to beginning

//The method unshift actually returns the length of the resulting new array
//mutates array, store value in new array
pies.unshift('blueberry')
console.log(pies);

//add element to end
//The method push actually returns the length of the resulting new array
pies.push('chocolate');

//remove element from the front of an array
//mutates array and returns the removed element value
pies.shift();
console.log(pies);

//remove element from the end of an array
//mutates array and returns the removed element value
pies.pop();
//pies.unshift(pies.pop());
//var poppedElement = pies.pop()
//pies.unshift(poppedElement);
console.log(pies);

pies = ["apple", "cherry", "key lime", "huckleberry", "rhubarb"];


//find the index of the first matching result in array

//returns -1 if no matching result

console.log(pies.indexOf('chocolate'));
console.log(pies.indexOf("apple"));
console.log(pies.indexOf("rhubarb"));


//if nothing passed in, will return a copy of the array
pies.slice()

//if single argument passed in
pies.slice(1);
//removes first index
//DOES NOT MUTATE the original array

pies.slice(0)
//returns everything

//x is starting index (inclusive), to end index (exclusive)
//returns those sliced out index values
//pies.slice(x,y)


// TODO GROUP: find various combinations of output

//TODO EXERCISE: create a function tha takes in an array of pies baked and return the 3 most recently baked pies (at the end)
var pies = ["apple","cherry","key lime","huckleberry","rhubarb","key lime"];
console.log(pies);

// function mostRecentPies(arr, numberOfPies) {
//     return arr.slice(arr.length - numberOfPies, arr.length);
// }

function mostRecentPies(arr, numberOfPies) {
    return arr.slice(arr.length - numberOfPies);
}

console.log(mostRecentPies(pies, 3));

//reversing
//MUTATES original ARRAY
//returns the reversed array
pies.reverse();
console.log(pies);

//sort
//MUTATES ORIGINAL ARRAY
//returns the sorted array
var pies = ["apple","cherry","key lime","huckleberry","rhubarb","key lime"];

pies.sort();
console.log(pies);

//sort in chronological order
numbers = [1,2,11,4,-1];

//pass in callback that compares numbers numerically (compareNumbers());
function compareNumbers(a, b) {
    return a-b;
}

console.log(numbers.sort(compareNumbers));

//split/join

//splitting string into an array
//DOES NOT MUTATE ORIGINAL ARRAY

//.split("") empty separator will create a new element per character
//.split("-") with non existing character will split and create new array as if there is no separator
var names = "Bob Sally Mary";

var namesArr = names.split(" ");
console.log(namesArr);

//joining array into string
var namesArr = ["Bob", "Sally", "Mary"];
//DOES NOT MUTATE ORIGINAL ARRAY

//creates string with spaces as the separator
var namesString = namesArr.join(" ");


// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers


    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';



    function cleanPhoneNumbers(phoneNumbers){
       var output = [];
        //split input on newline character into an array of numbers
        var phoneNumsArr = phoneNumbers.split('\n');
        //create an output array of numbers with the dash removed
        phoneNumsArr.forEach(function(phoneNum) {
            var phoneNumArr = phoneNum.split('-').join("");
            output.push(phoneNumArr);
        });
        //return output
        console.log(output);
        return output
    };

    // the above code should output the following...
    //
    //     2105552020
    //     2305552020
    //     5125553030
var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);


// for (var i = 0; i< cleanNumsArr.length; i +=1) {
//     console.log(cleanNumsArr[i]);
// }