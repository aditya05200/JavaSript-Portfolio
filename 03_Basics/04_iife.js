// IIFE: Immediately Invoked Function Expressions
// Normal Method
function dataBase(){
    console.log('DB CONNECTED');
}
//dataBase()

//By using IIFE

(function dataBase(){
    console.log('DB CONNECTED');
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Hitesh")