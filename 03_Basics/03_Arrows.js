// const user = {
//     username : "aditya",
//     price : 190,
//     welcomeMesage : function(){
//         console.log(`${this.username}, welcome to my webpage`);
//         console.log(this);
        
//     }
// }

// user.welcomeMesage()
// user.username = "Ojas"
// user.welcomeMesage()


// function newFunc(){
//     let username = "aditya"
//     console.log(this.username); // this will print "Undefined"
// }

//newFunc()

const newFunc = () => {
    let username = "aditya"
    console.log(this.username);
}

//newFunc()

// const add = (num1,num2) => {
//     return num1  +num2
// }
// console.log(add(2,3))

const add = (num1,num2) =>  (num1  +num2) // implicit return method
// Note we put anything in {} then we have use return or for () we don't require
console.log(add(2,3))