// function sayMyName(){
//     console.log("Aditya");   
// }
// sayMyName();

// function addTwoNUmbers(num1,num2){
//     console.log(num1+num2);
// }
// function addTwoNUmbers(num1,num2){
//     // let result=num1+num2
//     // return result

//     return num1+num2
//     // After this nothing will print or return 
//     console.log("Aditya");
    
// }
// const result = addTwoNUmbers(2,null)

// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
    
//         return
//     }
//     return `${username} just logged in`
//     // If at the time of declaration the value is empty then it gives "Undefined"
// }
// const output=loginUserMessage("aditya05200")

// console.log(output);

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(
//  calculateCartPrice(2,7,8,9))

const user = {
    username:"Aditya",
    price:199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
//handleObject(user)

handleObject({
    username:'Sam',
    age:399
})

const newArr = [200,400,100,600]
function returnSecondValue(getArr){
    return getArr[2]
}
console.log(returnSecondValue(newArr))
 
