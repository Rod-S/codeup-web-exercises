// 'use strict';
//
// console.log("Hello Vivian");
// console.log("Hello Sophie");
// console.log("Hello Samuel");
// console.log("Hello Brance");
// console.log("Hello Rod");
//
// function sayHello(name) {
//     console.log("Hello " + name);
//     //we will talk about returning later!
// }
//
// sayHello("Vivian");
// sayHello("Sophie");

// function caseMatch(input) {
//     if (input === input.toUpperCase() || input === input.toLowerCase()) {
//         console.log(true)
//         return true
//     } else {
//         console.log(false)
//         return false
//     }
// }
//
// caseMatch("hello world")
// caseMatch("HELLO WORLD")
// caseMatch("heElLo WoRlD")

//10/06 Debugging w/ Justin Reich


//10/09

// function stringToArray(input) {
//     console.log(input.split(" "));
//     return input.split(" ")
// }
// stringToArray("This Old Man.");

//10/13 HTML warmup

// # HTML Elements Pre Lesson
// ### Overview
// 1. In your own words, define an HTML element.

// An HTML element is a defined container for your web page's content. There are different types for different content

// 2. What is a void element?

//A void element is an HTML element with no content, but allows for attributes

//     3. What do all elements begin and end with

//All elements begin and end with an opening and/or closing tags (or just closing tag symbol) with except of void elements

//     4. What is the syntax of an HTML element

//The syntax of an HTML element is a starting and ending tag with angle brackets, with content placed between. Attributes can be added within the starting tag
// <tagName attribute1="attribute", attribute2="attribute">Content</tagName>

// 5. What do we call an element that contains other elements? What are the nested elements called?

//child elements or child nodes

//     ### Block-Level vs. Inline Elements
// 1. What is a block level element? What is an example of a block level element?

// A block level element is an element that takes up its own defined area on an HTML page. It does not continue on the same horizontal plane as other elements.
//block takes up entire space of parent element or container
//usually contains other elements

//     2. What is an inline element? What is an example of an inline element?

// Inline elements share the same horizontal plane as a sibling element
//usually contains only data or other inline elements

//     ### Attributes
// 1. What is an attribute?

//an attribute is a defining characteristic or additional information that can be added to HTML tags

//     ### Common HTML Elements

// Experiment with the following elements. What are some things you notice about these?

// *  Headings

//Headings are large, bold sized elements for text; ie) HEADINGS

// *  Paragraphs

//paragraphs are much smaller font text tags for larger chunks of text

// *  Line Breaks

//Line breaks allow you to split text onto separate lines

// *  Horizontal Rule

//horizontal rules allow you to create a distinct line across the webpage to divide text or other content

// *  Strong

//Strong is tag to create bold text

// *  Emphasis

//Emphasis is a tag to create italicized text

// *  Nesting Elements

//You can nest elements to be a part of a larger parent element, such as in lists or to create blocks of content in div tags

// *  Lists (Ordered & Unordered)

//Lists are ways to organize text or content
//ordered lists are numbered, while unordered lists are separated with bullets or other symbols

// *  Anchor Tag

//anchor tags are clickable hyperlinks that allow you to navigate to another part of a website or another website entirely

// *  Images

//images are created with HTML img tags and allow images to display on a webpage along with a description

// *  Tables
//Tables allow you to organize and display tabular data on your webpage


//NESTING ELEMENTS GROUP EXERCISE

/*

////////////
-Definition:
////////////

-A nested (child) element is an HTML element that exists within another HTML (parent) element.
-Elements can be nested multiple levels deep.
-In other words: An HTML element within an HTML element.

//////////
example 1:
//////////

<body>                                                              //(parent of h1)
     <h1>HEADER</h1>                                                //(child of <body>)
         <p>This is a <strong>paragraph</strong> element</p>        //(child of <h1>)
</body>

//////////
example 2:
//////////

<ol class="firstList">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ol>

//////////

*block/inline depends on the specific elements nested:
    -the <h1> and <p> elements above are block level elements
    -the <strong> element above is an inline element

*various attributes can be added to elements depending on their type

//////////
*/
//black widow: Rod S, Jordy M, Ethan T, Aaron G


// WARMUP 10/15

// # HTML Forms Pre Lesson
// 1. What HTTP methods can we use in forms?
//
// GET AND POST METHODS
//
//     2. What happens if we do not specify a method?
// DEFAULT GET

//     3. What is a `GET` method?
//GET METHOD RETRIEVES INFORMATION FROM THE SERVER ONLY // DATA APPENDED TO URL QUERY

//     4. What is a `POST` method?
//POST METHOD IS USED TO CHANGE DATA ON THE SERVER

//     5. What is the `action` attribute used for?
//Action attribute is used to tell the form where to send data to

//     6. What is a `query string`?
//query strings are KV pairs representing your data for the server.

//     7. How are query strings structured?
// Starts with a ? after the url, key1 equals value1 separated by & for multiple queries

//     8. How do we submit a form?
//with a button or  input element of type "submit

//     9. What are some common form input elements?
// text inputs, text areas, radio buttons, checkboxes, selects, hidden elements

//     10. How can we use name and value attributes?
//an input name attribute can be associated with a query key, and value attribute can be associated with a query key for form submission

//     11. How do you disable an input?
//adding a disabled attribute

//     12. How do you hide an input?
//adding a hidden attribute

//     13. What are `labels` used for?
//labels are used to match input IDs. Useful for focusing on input elements and other selectors

//    Bonus
//     * Describe the following:
// *   Text Inputs
//text inputs are elements with a text box for the user to type into

// *   Text Areas
//text areas are similar to text inputs but allow the user to expand the text field.

// *   Checkbox and Radio Buttons
//checkboxes are box shaped and allow for multiple simultaneous boxes to be checked
//radio buttons are circular and should only allow a single selected option among a list

// *   Selects
//selects are dropdown boxes that allow the user to choose a specific value

// function capitalizeName(str) {
//     var strArr = str.split(' ');
//     var first = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);;
//     console.log(first);
//     var last = strArr[1].charAt(0).toUpperCase() + strArr[1].slice(1);
//     console.log(last);
//     if (strArr[0].charAt(0) == first && strArr[1].charAt(0) == last) {
//
//     } else {
//         return first + " " + last;
//     }
// }
//
// console.log(capitalizeName("ron Weasley"));
//
//
//


// function remove9s(arr) {
//     var array = arr;
//     array = array.filter((e) => {
//         e !=9
//     })
//     return array
// }
//
// console.log(remove9s([7,8,9,10]))

function capitalizeName(str) {
    var strArr = str.split(' ');
    var first = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);
    console.log(first);
    var last = strArr[1].charAt(0).toUpperCase() + strArr[1].slice(1);
    console.log(last);
    if (strArr[0].charAt(0) == first && strArr[1].charAt(0) == last) {

    } else {
        return first + " " + last;
    }
}
console.log(capitalizeName("ron Weasley"));