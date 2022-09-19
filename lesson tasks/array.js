let arr = [1,2,3];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}

// console.log(arr["2"]);
arr['a'] = 4;
console.log(arr['a']);

console.log(arr.length);
arr.length = 0;
console.log('arr.length:'+arr.length);
console.log(arr['a']);
console.log(arr.a);

console.log(typeof arr);
console.log(Array.isArray(arr));


let obj = {};
let x = 1;
obj[x] = 1;
console.log(obj[1]);
console.log(obj);
console.log(typeof obj);
console.log(Array.isArray(obj));


