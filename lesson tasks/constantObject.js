'use strict'

class Dog{
    #_name;
    #_bread;
    constructor(name ='', bread ='Airedale Terrier'){
        this.#_name = name;
        this.#_bread = bread;
    }

    get name(){
        return this.#_name;
    }
    set name(name){
        this.#_name = name;
    }

    get bread(){
        return this.#_bread;
    }
    set bread(bread){
        this.#_bread = bread;
    }
}

class SmallDog extends Dog
{
    #_name;
    #_bread;
    constructor(name ='', bread ='Yorkshire Terrier'){
    super(name, bread);
    this.#_name = name;
    this.#_bread = bread;
}}

let york = new SmallDog('A', ' Yorkshire terrier');

console.log(york.toString());
york.name = 'Yorky';
console.log(york.name);

const dog = new Dog('B');
// dog = new Dog('C');
dog.name = 'New NAME!!!'
console.log(dog.name);

Object.freeze(dog);
// Object.seal(dog);
// Object.preventExtensions(dog);
dog.name = 'The newest NAME!!!'
console.log(dog.name);


class A{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

const aa = new A('a', 'o');
Object.freeze(aa);
aa.a = 'new value of a property';

console.log(aa.a);



for (const key in aa) {
    if (Object.hasOwnProperty.call(aa, key)) {
        const element = aa[key];
        console.log(element);
    }
}