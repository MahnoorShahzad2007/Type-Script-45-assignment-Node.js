let userNames = ["Ahmed","Aima","Fatima","Admin"];

for(let i=0; i<userNames.length; ++i){

if(userNames[i] === "Admin"){
  console.log(`Hello Admin, Would you like to see a status report?`);
}
else{
    console.log(`Hello ${userNames} thsnk you logging in again.`)
}
}