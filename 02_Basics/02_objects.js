// singleton
Object.create(null)
//Object literal

// Symbols are unique and immutable data types that can be used as identifiers for object properties. They are often used to create private or hidden properties in objects.
const mySymbol = Symbol('key1');
const user = {
    name: 'Aditya',
    age: 25,
    location: 'Noida',
    email: 'aditya@example.com',
    [mySymbol]: "mykey1"
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(typeof user[mySymbol]); 
//console.log(user)
// user.email = "newemail.com";
// console.log(user.email);
// Object.freeze(user)
//user.email = "setEmail@com"

user.greeting = function(){
    console.log(`Hello,${this.name}`);
    
}
console.log(user.greeting());



