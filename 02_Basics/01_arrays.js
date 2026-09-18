// arrays
const arr = [0,1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr.toString());
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.push(6);
// console.log(arr);

// arr.push(7, 8, 9);
// console.log(arr);

// arr.pop();
// console.log(arr);

// console.log(arr.includes(3));
// console.log(arr.indexOf(0));

// const newArr = arr.join()
// console.log(arr);
// console.log(typeof  newArr);
// console.log(newArr);

// slice, spice
// console.log("A ",arr);

// const myn1 = arr.slice(1,3);
// console.log(myn1);

// console.log("B", arr);

// const myn2 = arr.splice(1,3);
// console.log(myn2);
// console.log("C", arr);

/**
at
: 
ƒ at()
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with() */

const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes.concat(dc_heroes));
// const all_new_heroes = [...marvel_heroes, ...dc_heroes];// spread operator
// console.log(all_new_heroes);

//  const nested_arr = [[1,2,3], [4,5,6], [7,8,9]];
// //  console.log(nested_arr[1][2]);

// flat_arr = nested_arr.flat(Infinity);
// console.log(flat_arr);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));

let sc1 = 23
let sc2 = 45
let sc3 = 67
let sc4 = 89
console.log(Array.of(sc1, sc2, sc3, sc4));