const tinderUser = new Object()

tinderUser.id = "23432ad"
tinderUser.name = "Ronny"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email:"newUser@gmail.com",
    fullname:{
        userfullname : {
            firstname: "Aditya",
            lastname:"Mishra"
        }
    }
}

//console.log(regularUser.fullname)

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
// Either previous one or next one
const obj3 = {...obj1, ...obj2}

//console.log(obj3)

const multiUsers = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {},
    {},
    {}
]
//console.log(multiUsers[0].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.isPrototypeOf(multiUsers));

