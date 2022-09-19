//Create a function that accepts a string as an argument. 
// The function must move all capital letters to the front of a word, lowercase letters thereafter and lastly, numbers to the back. It should return a string with the reordered word.
// Examples

// reorder("hA2p4Py") ➞ "APhpy24"

// reorder ("m11oveMENT") ➞ "MENTmove11"

// reorder ("s9hOrt4CAKE") ➞ "OCAKEshrt94"

// Notes
// Keep the original relative order of the upper and lower case letters the same as well as numbers


let value = "s9hOr#t4!C#A@KE";
let upper = "";
let lower = "";
let number = "";
let token = "";

for (let char of value) {
  if (char >= "A" && char <= "Z") {
    upper += char;
  } else if (char >= "a" && char <= "z") {
    lower += char;
  }  
  else if (char >= 0 && char <= 9){
    number += char;  
  }
  else if (char == "!" || char == "@" || char == "#"){
    token += char;
}
}

console.log(upper + lower + number + token);