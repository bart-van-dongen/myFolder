
var set= new set();

function happyNumber (n, counter = 0) {
  result = false
  if (counter <99){
  let array = n.toString().split('').map( n => n*n)

  let sum = array.reduce((accumulator, currentItem) => accumulator + currentItem, 0)

  if (sum === 1) {
    return result = true;
  }else {
        counter++
        happyNumber(sum, counter)
    }
}
  return happyNumber(counter);
}

console.log (happyNumber("67"))