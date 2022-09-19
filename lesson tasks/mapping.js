//let map = new Map();

//map.set('1', 'str1');   // a string key
//map.set(1, 'num1');     // a numeric key
//map.set(true, 'bool1'); // a boolean key
//map.set(undefined, 'udf');
//map.set(undefined, 'inny');

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
//console.log( map.get(1)   ); // 'num1'
//console.log( map.get('1') ); // 'str1'
//console.log(map.get(undefined));
//console.log( map.size ); // 4


//set.add('1')
//set.add(1)
//set.add(true)
//set.add(undefined)
//set.add(undefined)


//new Map() - creates the Map.
//map.set(key, value) - stres key/value pair.
//map.get(key) - returns the value found by the key, undefined otherway.
//map.has(key) - returns true, if the key exists, false otherway.
//map.delete(key) - removes the key.
//map.clear() - cleares the wentire Map object.
//map.size - returns the current size of the map object.

//let uwe = {name: 'uwe', age:25}

//let pers  = new map();
//pers.add(uwe, uwe.get(age));

//let persons = new Map([
//    ['Uwe', 100],
//    ['katie', 200],
//    ['Jon', 300]
//])

//console.log(persons.size);

//for(let name of persons.keys()){
//    console.log(name);
//}

//for(let name of persons.values()){
//    console.log(name);
//}

//for(let entry of persons){
//    console.log(entry);
//}

//persons.forEach(value, key, map) => {console.log('${key}: ${value}')}

//set.forEach((value, valueAgain, set) => )

function unique (arr) {
    var a = [];
    for (var i=0, l=array.length; i<l; i++)
       if (a.indexOf(array[i])=== -1 && arr[i] !== '')
          a.push(arr[i]);
    return a;
  }
  let array= ["Uwe", "jon", "Jon", "Uwe", "Uwe", "Katie", "0", "Jon"];
  console.log (unique(array));
  