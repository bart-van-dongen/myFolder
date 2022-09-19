//function bestFriend (text="", firstletter="" secondletter=""){
  //  if (text=="" || firstletter=="" || secondletter=="") return false;
//  let countF= text.match(new Reg)
//}

function bestFriend (string, preChar, postChar) {
    return(((string.match(new RegExp(preChar+postChar, "g")) || []).length)
    == ((string.match(new RegExp(preChar, "g")) || []).length)) ? true : false;

}

console.log(bestFriend("he headed to the store", "h", "e"));
console.log(bestFriend("i found an ouncend with my hound", "o", "u"))
console.log(bestFriend("we found your dynamite", "d", "y"));