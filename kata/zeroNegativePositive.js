// Write a function that returns true if both numbers are:
// •	Smaller than 0, OR ...
// •	Greater than 0, OR ...
// •	Exactly 0
// Otherwise, return false.
// Examples
// both(6, 2) ➞ true

// both(0, 0) ➞ true

// both(-1, 2) ➞ false

// both(0, 2) ➞ false
// Notes
// Inputs will always be two numbers.


// version 2
// Inputs will NOT always be two numbers.
// both("0", 2) --> false
function zeroNegativePositive(a, b)
{
    if (a < 0 && b < 0 || a > 0 && b > 0 || a == 0 && b == 0)
    {
        return true;
    }
    
    else return false;
   
}

console.log(zeroNegativePositive(6, 2));
console.log(zeroNegativePositive(0, 0));
console.log(zeroNegativePositive(-1, 2));
console.log(zeroNegativePositive(0, 2));
