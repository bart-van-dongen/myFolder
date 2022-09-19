"use strict"
Object.prototype.deepFreeze = function (object) {
  // collecting propertie's names of the object
  const propNames = Object.getOwnPropertyNames(object);
  
  // freezing properties BEFORE freezing LEVEL"0"

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

let a = [0];
Object.freeze(a); // Tablica nie może być modyfikowana

//a[0] = 1; // tzn. nie będzie komunikatu błędu ale operacja nie zostanie wykonana

// console.log(a);
// // // W trybie strict mode zostanie rzucony błąd  TypeError
// function fail() {
//   "use strict"
//   a[0] = 1;
// }

// fail(); //błąd

// wykonanie metody push
//a.push(2); // rzuci TypeError

let tabObj = [];
tabObj.push({a:1, b:2});
tabObj.push({a:3, b:4});

Object.freeze(tabObj);

console.log(tabObj[1].a);
tabObj[1].a = 111;
console.log(tabObj[1].a);

Object.deepFreeze(tabObj);
console.log(tabObj[1].a);
tabObj[1].a = 777;
console.log(tabObj[1].a);


