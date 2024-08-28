//creating guests list
let guest = ['Amir','Saad','Haider','Amna'];

//making variable for those who cannot join
let guestDontCome = guest[0];

//prinr message for guests who cannot join
console.log(guestDontCome,"Cannot join Sorry!");

//add or remove value in the array
guest.splice(0 , 1 ,"Hassan");

//print message for bigger table
console.log("GOOD NEWS! We have found a Bigger table for dinner.");

//adding value at the start of an array 
guest.unshift("Ali");

//adding value at the end of the array
guest.push("Saima");

//adding value in the middle of the array
let middleIndex : number = Math.floor(guest.length/2);

guest.splice(middleIndex, 0 , "Kashaf");

for (let i=0; i<guest.length; i++){
    console.log(`Asalam o Alaikum! ${guest[i]} Would you like tomhave dinner with me tonight?`);
}
console.log("Updated List of Guests");

console.log("Unfortunately, the new dinner table will not arrive on time.");

while(guest.length > 2){
    let removedguest = guest.pop()
    console.log(`Sorry! ${removedguest} I cannot invite you to Dinner`);
}
console.log("Invitation for last two");

for (let i= 0; i<guest.length;i++ ){
    console.log(`Luckily!${guest[i]} You two are still invited`);
}
  guest.pop();
 guest.pop();


 console.log("Empty List:",guest);

