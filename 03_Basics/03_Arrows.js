const user = {
    username : "aditya",
    price : 190,
    welcomeMesage : function(){
        console.log(`${this.username}, welcome to my webpage`);
    }
}

user.welcomeMesage()
user.username = "Ojas"
user.welcomeMesage()