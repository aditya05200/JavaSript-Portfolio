// // let a=10
// // const b=20  // gloa
// // var c = 30
// if(true){
//     let a=10
//     const b=20  // Block Scope
//     var c = 30
// }
// //console.log(a); // output : a is not defined
// //console.log(b); // output : b is not defined
// console.log(c); // but in the case of c it gives output :30 , that's why developers are not using Var in there projects

function one(){
    const username = "aditya"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

// Example 2

function add(num){
    return num+1
}
add(5)
// expresion form of functions
const addtwo = function(num){ 
    return num+2
}

addtwo(4)