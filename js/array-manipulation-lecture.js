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

var pies = ["apple", "blueberry", "rhubarb", "cherry", "huckleberry"];

//TODO given the above array how tdo we log  each itemsBought

for (var i =0; i< pies.length; i+=1) {
    console.log(pies[i]);
}

// forEach
pies.forEach(function(pie) {
    console.log(pie);
})

// TODO: throughout the lecture this morning,
//  note which of the above methods mutate (change an array and which ones do not

