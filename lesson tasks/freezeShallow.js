'use strict'
var car = { brand:"Volvo", 
            year: 2020, 
            VIN:"JD23029WX9475947", 
            color:"silver", 
            accessories: { airCondition : "yes",
                           ABS: "yes"}
        };
Object.freeze(car);
car.color = "white"; // won't do it or will throw a TypeError
delete(car.wyposazenie);  // will throw a TypeError or return  false
car.accessories.ABS = "no";  // WILL DO IT !!!!!!!  Object.freeze(car)
  
console.log(car.accessories.ABS) // prints: "no" !!!!!

