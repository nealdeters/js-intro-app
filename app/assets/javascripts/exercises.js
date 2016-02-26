// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// for(i = 10; i > 0; i--){
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Hint: Use a for loop!

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// for(i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// // Exercise #3:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0

// for(i = 0; i < numbers.length; i++){
//    var sum = sum + numbers[i];
// }

// var avg = sum/numbers.length;
// console.log(avg);

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// // Exercise #4:

// RUBY STYLE
// class FizzBuzz
//   def go
//     (1..100).to_a.each do |number|
//       puts output(number)
//     end
//   end

//   def output(number)
//     if number % 15 == 0 
//       "FIZZBUZZ"
//     elsif number % 5 == 0
//       "BUZZ"
//     elsif number % 3 == 0
//       "FIZZ"
//     else
//       number
//     end
//   end
// end

// JAVASCRIPT STYLE

// var array = []

// for(var i = 0; i < 100; i++){
//   array.push(i);
// }

// // console.log(array);

// var fizzBuzz = function(){
//   for(var i = 1; i < array.length; i++){ 

//       if (i % 15 === 0){
//         console.log("FIZZBUZZ");
//       } else if (i % 5 === 0){
//         console.log("BUZZ");
//       } else if (i % 3 === 0){
//         console.log("FIZZ");
//       } else {
//         console.log(i)
//       }
//   }
// }

// fizzBuzz();

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

// var rdm = (Math.floor(Math.random() * 100) + 1);
// console.log(rdm);

// var guess = prompt("Guess a number");
// var guessCount = 10;

// var count = 0
// while(count < guessCount){
//   if (parseInt(guess) === rdm){
//     console.log("You guessed it!");
//   } else {
//     console.log("Try again");
//     guess = prompt("Guess a number");
//   }
//   count++;
// }

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.
// var twoParams = function(num1, num2){
//   return num1 + num2;
// }

// console.log(twoParams(1,3));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
// var array = [1,2,3,4,5]

// var returnAvg = function(array){
//   var sum = 0;
  
//   for(var i = 0; i < array.length; i++){
//     sum += array[i];
//   }

//   return sum;
// }

// console.log(returnAvg([1,2,3,4,5]));

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.
// function Book( title, author, isbn, pages, pub_year ) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.pages = pages;
//   this.pub_year = pub_year;

//   this.toString = function () {
//     return this.title + " was written by " + this.author + " and is " + this.pages +  " pages long. It was published in " + this.pub_year;
//   }
// }

// var myBook = new Book( "My book", "Neal Deters", 123456789, 100, "2016" );
// console.log(myBook);
// console.log(myBook.toString());


// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information

// function Book( title, author, isbn, pages, pub_year ) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.pages = pages;
//   this.pub_year = pub_year;

//   this.toString = function () {
//     return this.title + " was written by " + this.author + " and is " + this.pages +  " pages long. It was published in " + this.pub_year;
//   }
// }

// var myBook = new Book( "My book", "Neal Deters", 123456789, 100, "2016" );
// console.log(myBook);
// console.log(myBook.toString()); 

// // Extra exercises can be found here: 

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 

// var max = function(num1, num2){
//   if (num1 > num2){
//     console.log("Num1 is greater than Num2.");
//   } else if (num2 > num1) {
//     console.log("Num2 is greater than Num1.");
//   } else if (num2 === num1) {
//     console.log("They are equal.");
//   }
// }

// max(4,4);

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// var maxOfThree = function(num1, num2, num3){
//   if (num1 > num2 && num1 > num3){
//     console.log("Num1 is greater than Num2 and Num3.");
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("Num2 is greater than Num1 and Num3.");
//   } else if (num3 > num1 && num3 > num2) {
//     console.log("Num3 is greater than Num1 and Num2.");
//   }
// }

// maxOfThree(4,2,3);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// var vowelTest = function(char){
//   if (char === "a"){
//     console.log("It's a vowel");
//   } else if (char === "e"){
//     console.log("It's a vowel");
//   } else if (char === "i"){
//     console.log("It's a vowel");
//   } else if (char === "o"){
//     console.log("It's a vowel");
//   } else if (char === "u"){
//     console.log("It's a vowel");
//   } else {
//     console.log("It's not a vowel");
//   }
// }

// vowelTest("a");
// vowelTest("e");
// vowelTest("i");
// vowelTest("o");
// vowelTest("u");
// vowelTest("t");
// vowelTest("m");

// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

// var translate = function(){

// }

// translate("this is fun");

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

