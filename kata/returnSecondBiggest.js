//Create a function that takes an array of numbers and returns the second largest number.
//Examples
//secondLargest([10, 40, 30, 20, 50]) ➞ 40
 
//secondLargest([25, 143, 89, 13, 105]) ➞ 105
 
//secondLargest([54, 23, 11, 17, 10]) ➞ 23
 
//secondLargest([1, 1]) ➞ 0
 
//secondLargest([1]) ➞ 1
 
//secondLargest([]) ➞ 0
 
//Notes
//If only one number exists, return that number

//When array only has two numbers that are equal, return 0

//Return 0 for an empty array



console.log(secondLargest([10, 40, 30, 20, 50]))// ➞ 40 
console.log(secondLargest([25, 143, 89, 13, 143, 105]))// ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10]))// ➞ 23
console.log(secondLargest([5, 5]))// ➞ 0
console.log(secondLargest([1]))// ➞ 1
console.log(secondLargest([]))// ➞ 0
//arr = arr.sort(function(a, b){return a - b;});
//const secondToLast = arr.at(-2);
//console.log(arr);
//console.log(secondToLast)

function secondLargest(input){
    if(input.length == 0) return 0;
    if(input.length == 1) return input[0];
    if(input.length == 2 && input[0]==input[1]) return 0;
    input.sort((a, b) => b - a);
    return input[1];
}
var length = function(input){
   // var size = 0;
    //function getLength(input){
       // for (const item of input) {
          //  if(Array.isArray(item))
          //      getLength(item)
          //  else
         //       size++;
       // }
   // }
    getLength(input);
    //return size;
}