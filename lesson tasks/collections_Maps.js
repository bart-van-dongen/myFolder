let prescription = new Map ([
    ['tomato, 500'],
    ['onion', 100]
]);

for (const beer of prescription) {
    console.log(beer);
}

console.log('---------- set ------------');

const cadidates = [
    {name: 'Anna', grade:95},
    {name: 'Uwe', grade: 96},
    {name: 'Ulrik', grade: 196},
    {name: 'Unkle', grade: 100},
    {name: 'Ole', grade: 80},
    {name: 'Karol', grade: 99},
    {name: 'britt', grade: 97},

];

let set = new Set();

set.add(cadidates[0]);
set.add(cadidates[1]);
set.add(cadidates[2]);
set.add(cadidates[3]);
set.add(cadidates[4]);
set.add(cadidates[2]);
set.add(cadidates[5]);
set.add(cadidates[6]);

console.log(set.size);

for( let user of set){
    console.log(user.name);
}

set.forEach(value, valueAgain, set => {
    console.log(valueAgain);
}
   
    )