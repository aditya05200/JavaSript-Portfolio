let score = null
//console.log(typeof score)

let valueInNumber = Number(score)

//console.log(valueInNumber);


// "33" => 33
// "33qbc" => NaN
// true => 1; false => 0

let isLoggedIn =  "Aditya"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
//"Aditya" => true

let checkNumber = 33

let numToString = String(checkNumber)
//console.log(numToString);
//console.log(typeof numToString)

// ------------ Operation ---------------- //

let num = 3
let negNum = -num
let posNum = -negNum
//console.log(negNum);
//console.log(posNum);

let str1 = "Aditya"
let str2 = " Mishra"

//console.log(str1 + str2);
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
//console.log(2+2+"2") //42
// When adding a number and a string, JavaScript will treat the number as a string.
//console.log("2"+2+2) // 222

let x = 3
const y=++x

let c = 3
const z = x++

console.log("x: "+x)
console.log("y=++x --> "+y);

console.log("c: "+c)
console.log("z=x++ -->"+z);





