var car = { marka:"Volvo", 
            rok: 2020, 
            VIN:"JD23029WX9475947", 
            kolor:"srebrny", 
            wyposazenie:"klimatyzacja"
        };
Object.seal(car);
car.kolor = "biały"; // przyjmie nową wartość
delete(car.wyposazenie);  // wyrzuci wyjątek TypeError lub zwróci false
car.VIN = "przebite numery";  // przyjmie nową wartość
// car jest wciąż {marka:"Volvo", rok: 2020, 
// ale zmieniony jest VIN:"przebite numery", 
//kolor:"biały", wyposazenie:"klimatyzacja"};


Object.prototype.deepSeal = function (object) {
    // collecting propertie's names of the object
    const propNames = Object.getOwnPropertyNames(object);
    
    // sealing properties BEFORE freezing LEVEL"0"
  
    for (const name of propNames) {
      const value = object[name];
  
      if (value && typeof value === "object") {
        deepSeal(value);
      }
    }
  
    return Object.seal(object);
  }