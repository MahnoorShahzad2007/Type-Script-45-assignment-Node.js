let userNames = ["Ahmed","Farhan","Hamid","Admin","Perwaiz"];

userNames = []

if(userNames.length === 0){
console.log("The Array is Empty! we need to find some users.")
}
else{
    for(let i=0; i<userNames.length; ++i){

        if(userNames[i] === "Admin"){
          console.log(`Hello Admin, Would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${userNames} thsnk you logging in again.`)
        }
        }
}
