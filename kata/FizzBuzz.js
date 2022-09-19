// You are required to make a function called printFizzBuzz() which takes in a single integer value as a parameter. The method will return either: “Fizz”, “Buzz”, “FizzBuzz”, or the number (as a string).
// The logic is as follows:
// •	If the number is divisible by 3, return Fizz.
// •	If the number is divisible by 5, return Buzz.
// •	If the number is divisible by both 3 and 5, return FizzBuzz.
// •	Else, return the number as a string.
// Loop through the numbers 1-100 and print the converted fizzbuzz values to the Browser console.
// i.e. 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, … 


       
       function fizzBuzz(){
        for (var i=1; i<101; i++) {         
            if (i % 15 == 0) {
            console.log("FizzBuzz" + ", ");
            }
            else if ((i % 3) == 0) {
            console.log("Fizz" + ", ");
            }
            else if (i % 5 == 0) {
            console.log("Buzz" + ", ");
            }
            else {
            console.log(i + ", ");
        }
    }
}
        console.log (fizzBuzz)