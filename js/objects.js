(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
      firstName : "Rod",
      lastName : "Sanati"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function() {
    return this.firstName + " " + this.lastName;
}
console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var hebOffer = 200;
    function needToPay(shopper) {
        if (shopper.amount > hebOffer) {
            console.log(`Congratulations ${shopper.name}, you have earned a 12% coupon for use at HEB!`)
        } else {
            console.log(`Sorry, ${shopper.name}. It looks like you need to spend $${hebOffer - shopper.amount} to receive your HEB Offer!`);
        }
    }

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) => {
       needToPay(shopper);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
// var books = [
//         {
//             title: "Fellowship of the Ring",
//             author: {
//                 firstName: "JRR",
//                 lastName: "Tolkein"
//             }
//         },
//         {
//              title: "The Total Money Makeover",
//              author: {
//                  firstName: "Dave",
//                  lastName: "Ramsay"
//              }
//         },
//         {
//             title: "The Pragmatic Programmer",
//             author: {
//                 firstName: "Dave",
//                 lastName: "Hunt"
//             }
//         },
//         {
//             title: "The 7 Habits of Highly Effective People",
//             author: {
//                 firstName: "Stephen",
//                 lastName: "Covey"
//             }
//         },
//         {
//             title: "Roadside Picnic",
//             author: {
//                 firstName: "Arkady",
//                 lastName: "Strugatsky"
//             }
//         }
//     ];

// console.log(books[0].title)
// console.log(books[0].author.firstName)
// console.log(books[0].author.lastName)


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function logOutBooks(booksList) {
        for (var i=0; i< booksList.length; i++){
            console.log(`index of book #${i+1}: ${i}`);
            console.log(`Book #${i+1} title: ${booksList[i].title}`);
            console.log(`Book #${i+1} author: ${booksList[i].author.firstName} ${booksList[i].author.lastName}`)
        }
    };

    //logOutBooks(books);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        var author_first = author.split(" ")[0];
        var author_last = author.split(" ")[1];
     return {
         title: title,
         author:
             {
                 firstName: author_first,
                 lastName: author_last
            }
        }
    }

    var myNewBook = createBook("My New Book!", "Rod Sanati");
    console.log(myNewBook);
    logOutBooks(myNewBook);

    var books = [];
    books.push(createBook("Fellowship of the Ring", "JRR Tolkein"));
    books.push(createBook("The Total Money Makeover", "Dave Ramsey"));
    books.push(createBook("The Pragmatic Programmer", "Dave Hunt"));
    books.push(createBook("The 7 Habits of Highly Effective People", "Stephen Covey"));
    books.push(createBook("Roadside Picnic", "Arkady Strugatsky"));

    console.log(books);
    logOutBooks(books);

    function showBookInfo(book) {

    }

})();