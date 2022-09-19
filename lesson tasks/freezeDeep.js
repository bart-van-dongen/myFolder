function deepFreeze(object) {
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
  
  // const car = {
  //   accessories: {
  //     abs: null
  //   }
  // };
  
  const car = { marka:"Volvo", 
  year: 2020, 
  VIN:"JD23029WX9475947", 
  color:"silver", 
  accessories: { aircond : "yes",
                 ABS: "yes"}
  };

  deepFreeze(car);
  
 
car.accessories.aircond = "no";
console.log(car.accessories.aircond);
Object.deepFreeze(car);

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


const carNew = { marka:"Volvo", 
rok: 2020, 
VIN:"JD23029WX9475947", 
kolor:"srebrny", 
wyposazenie: { klimatyzacja : "tak",
               ABS: "tak"}
};

Object.deepFreeze(carNew);
carNew.wyposazenie.klimatyzacja = "nie";
console.log(carNew.wyposazenie.klimatyzacja);